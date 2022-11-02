const mongoose = require('mongoose')
const {Schema} = mongoose
const ItemSchema = new Schema ({
    title:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true 
    },
    firstPrice: {
        type: Number,
        required: true 
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"
    },
    bid:{
        type: Number,
        default: 0
        
    },
    endAuction:{
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'all',
        required: true
    },
    bidder: {
        type: String,
        default: "No bidder found"
    }
    
},{timestamps: true})

module.exports= mongoose.model('Item', ItemSchema);