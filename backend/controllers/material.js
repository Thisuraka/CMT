const Material = require("../models/materials");
const { cloudinary } = require("../cloudinary");

module.exports.index = async (req, res) => {
  const materials = await Material.find({ isActive: "1" })
    .populate("uid")
    .populate("eventId");
  res.status(202).send({
    message: "Successfully Loaded the materials!",
    materials,
  });
};

module.exports.store = async (req,res)=>{
    const materials = new Material(req.body);
    materials.images = req.files.image.map(f=>({url:f.path,filename:f.filename}));
    materials.document = req.files.document.map(f=>({url:f.path,filename:f.filename}));
    await materials.save();
    
    res
      .status(202)
      .send({
          message:"Successfully Added the materials!",
          materials
        });
}
module.exports.show = async (req,res)=>{
    const materials = await Material.findById(req.params.id).populate('uid');
    if(!materials){
        res
      .status(402)
      .send({
          message:"No Materials Found!",
          materials
        });
    }
    // console.log(materials);
    res
      .status(202)
      .send({
          message:"Successfully Loaded the materials!",
          materials
        });
}

module.exports.update = async (req,res)=>{
    const {id} = req.params
    const materials = await Material.findByIdAndUpdate(id, {...req.body});
    materials.isApproved = 0 ;
    await materials.save();
    res
      .status(202)
      .send({
          message:"Successfully Updated the materials!",
          materials
        });
}

module.exports.review = async (req, res) => {
  const { id } = req.params;
  const materials = await Material.findByIdAndUpdate(id, {
    ...req.body.materials,
  });
  const editedDoc = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  materials.editorId = req.user._id;
  materials.reviewdVersion.push(...editedDoc);
  await materials.save();
  res.status(202).send({
    message: "Successfully Reviewd the materials!",
    materials,
  });
};

module.exports.approve = async (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const materials1 = await Material.findById(id);
  const materials = await Material.findByIdAndUpdate(id, { ...req.body });
  
  // console.log(materials1);
  await materials.save();
  const notify_message ={
    'UID':materials1.uid,
    'Status':materials1.status,
    'Description':materials1.message,
    'Message':'Material Approval'
  }
  const notification = new Notification(notify_message);
  await notification.save();

  res.status(202).send({
    message: "Successfully Aproved the materials!",
    materials,
  });
};

module.exports.deleteRequest = async (req, res) => {
  const { id } = req.params;
  const materials = await Material.findById(id);
  materials.isDeleteReq = 1;
  res.status(202).send({
    message: "Successfully Requested to Delete the materials!",
    materials,
  });
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const materials = await Material.findById(id);
  materials.isActive = "0";
  await materials.save();
  res.status(202).send({
    message: "Successfully Deleted the materials!",
    materials,
  });
};
