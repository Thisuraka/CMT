const Event = require('../models/event');
const Notification = require('../models/notification');

module.exports.index = async (req,res)=>{
    const events = await Event.find({isActive:'1'});
    res
      .status(200)
      .send({events});
}


module.exports.store = async (req,res)=>{
    const events = new Event(req.body);
    // events.presenterId = req.user._id;
    events.mainImg = req.files.map(f=>({url:f.path,filename:f.filename}));
    await events.save();
    res
      .status(202)
      .send({
          message:"Successfully made a new events!",
          events
        });
}

module.exports.show = async (req,res)=>{
    const events = await Event.findById(req.params.id).populate('presenterId');
    if(!events){
        req.flash('error',"Couldn't find that events!");
        return res.redirect(`/events`);
    }
    res
      .status(200)
      .send({
          events
        });
}

module.exports.update = async (req,res)=>{

    const {id} = req.params
    // console.log(req.body);
    const events = await Event.findByIdAndUpdate(id, {...req.body});
    const mainImg = req.files.map(f=>({url:f.path,filename:f.filename}))
    events.editorId = req.user._id;
    events.mainImg.push(...mainImg);
    await events.save();

    res
      .status(202)
      .send({
          message:"Successfully Updated the events!",
          events
        });
}

module.exports.approve = async (req,res)=>{
    const {id} = req.params
    // console.log(req.body);
    const events = await Event.findByIdAndUpdate(id, {...req.body});
    await events.save();
  
    UID= (events.presenterId) ?events.presenterId : "60dbc9df0e6bd92ee81ae0e1",
    Status=events.status,
    Description=events.message,
    Message='Event Approval'

    const notification = new Notification({UID,Status,Description,Message});
    await notification.save();
    console.log(notification);
    res
      .status(202)
      .send({
          message:"Successfully Approved the events!",
          events
        });
}

module.exports.deleteRequest = async (req,res)=>{
    const {id} = req.params    
    const events = await Event.findById(id);
    events.isDeleteReq = 1;
    res
      .status(202)
      .send({
          message:"Successfully Requested to Deleted the events!",
          events
        });
}

module.exports.delete = async (req,res)=>{
  // console.log(req);
    const {id} = req.params    
    const events = await Event.findById(id);
    events.isActive = 0;
    await events.save();
    res
      .status(202)
      .send({
          message:"Successfully Deleted the events!",
          events
        });
}