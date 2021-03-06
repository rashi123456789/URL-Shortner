const mongoose=require('mongoose')
const validator=require('validator')
const shorthash=require('shorthash')

const Schema = mongoose.Schema

const shortenerSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    originalUrl:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isURL(value)
            },
            message:function(){
                return 'please enter correct url'
            }
        }
    },
    hashedUrl:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    clicks:[{
        clickDateTime:Date,
        ipAddress:String,
        browser:String,
        platform:String,
        device:String
    }]
})