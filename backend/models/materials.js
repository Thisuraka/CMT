const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url:String,
    filename:String
});

imageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload','/upload/w_300');
});

const documentSchema = new Schema({
    url:String,
    filename:String
});

// imageSchema.virtual('thumbnail').get(function () {
//     return this.url.replace('/upload','/upload/w_300');
// });

const materialSchema = new Schema ({
    uid : {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    name :{
        type:String,
        required:true
    },
    tags :String,
    description : String, 
    images:[imageSchema],
    type :{
        type:String,
        required:true
    },
    eventId : {
        type:Schema.Types.ObjectId,
        ref:'Event'
    },
    document : [documentSchema],
    editorId : {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    reviewerId : {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    editedVersion : [documentSchema],
    reviewdVersion : [documentSchema],
    isPaid: {
        type:String,
        default:'0'
    },
    isDeleteReq : {
        type:String,
        default:'0'
    },
    status:{
        type:String,
        default:"Pending"
    },
    message:String,
    isActive:{
        type:String,
        default:'1'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Material',materialSchema);