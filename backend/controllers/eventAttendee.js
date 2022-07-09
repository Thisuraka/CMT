const EventAttendee = require('../models/eventAttendee');

module.exports.index = async (req,res)=>{
    const eventAttendees = await EventAttendee.find({EID:req.params.id});
    res
      .status(202)
      .send({
          message:"Successfully Updated the Attendance!",
          eventAttendees
        });
}

module.exports.store = async (req,res)=>{
    const eventAttendees = new EventAttendee(req.body.eventAttendees);
    eventAttendees.UID = req.user._id;
    await eventAttendees.save();
    res
      .status(202)
      .send({
          message:"Successfully Stored the Attendance!",
          eventAttendees
        });
}
