const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema ({
    UID:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    Status:String,
    Description:String,
    Message:String,
    readAt:Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Notification',NotificationSchema);
