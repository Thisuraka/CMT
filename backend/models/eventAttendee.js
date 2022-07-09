const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventAttendeeSchema = new Schema ({
    UID:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    EID:{
        type:Schema.Types.ObjectId,
        ref:'Event'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('eventAttendee',eventAttendeeSchema);