const mongoose = require('mongoose')

const transectionSchema = new mongoose.Schema({
        amount:{
            type:Number,
            require:[true, 'Amount is required']
        },
        type:{
            type:String,
            require:[true, 'Type is required']

        },
        category:{
            type:String,
            require:[true,'Entering Category is importent']
        },
        reference:{
            type:String,
        },
        description:{
            type:String,
            require:[true, 'Description is neccessary']
        },
        date:{
            type:String,
            require:[true, 'Entering date is importent']
        }
},{timestamps:true}) 

const transectionModel = mongoose.model('transections', transectionSchema)