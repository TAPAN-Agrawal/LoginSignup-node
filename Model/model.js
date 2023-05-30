const mongoose=require('mongoose')

const logreg = new mongoose.Schema({
    names:{
        type:String,
        required:[true,'please provide a name']
    },
    email:{
        type:String,
        required:[true,'please provide a EMAIL']
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    },
    phoneNumber:{
        type:Number
    }

})

module.exports= mongoose.model('collection_02',logreg)