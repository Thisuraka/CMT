const Material = require('../models/materials');
const Payment = require('../models/payment');
const User = require('../models/user');

module.exports.attendeeReg = async (req,res)=>{
    const payments = new Payment(req.body.payments);
    payments.uid = req.user._id;
    const users = await User.findByIdAndUpdate(req.user._id,{isPaid:'1'});

    await payments.save();
    await users.save();
    res
      .status(202)
      .send({
          message:"Successfully Updated the events!",
          payments
        });
}

module.exports.paperApproved = async (req,res)=>{
    const payments = new Payment(req.body.payments);
    payments.uid = req.user._id;
    const materials = await Material.findByIdAndUpdate(req.body.payments._id,{isPaid:'1'});
    await payments.save();
    await materials.save();
    res
      .status(202)
      .send({
          message:"Successfully Paper Approved!",
          payments
        });
}