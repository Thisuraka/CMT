const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema ({
    uid:{
        type:Schema.Types.ObjectId, // bro ill brb. you do that one. will check frontend 
        ref:'User'
    },
    Name:String,
    cardNumber:String,
    cardType:String,
    cvc:String,
    expiry:String,
    payFrom:{
        eventId:{
            type:Schema.Types.ObjectId,
            ref:'Event'
        },
        materialId:{
            type:Schema.Types.ObjectId,
            ref:'Material'
        },
        researchId:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Payment',paymentSchema);