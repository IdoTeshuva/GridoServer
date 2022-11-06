var express = require('express');
const Item = require('../models/Item');
var router = express.Router();
const item = require ('../models/Item')

router.get ('/', (req,res,next) => {
    Item.find({})
    .then (data => res.json(data))
    .catch()
})

router.post('/', (req,res,next) => {
    console.log(req.body);
    req.body &&
    Item.create(req.body)
    .then((data) => res.json(data))
    .catch(err => res.json({error: err.message}))
    
})

router.delete('/:id', (req,res,next) => {
    Item.findOneAndDelete({_id: req.params.id})
    .then(data=> res.json(data))
    .catch(next)
})

router.patch('/:id', (req,res) => {
    const ItemId = req.params.id
    // const Price = req.body.firstPrice
    // const Bid = req.body.bid
    const UpdatedBid = req.body
    User.findByIdAndUpdate(ItemId, UpdatedBid,  (err, data) => {
        if(err){
            res.status(400).json({
                'error' : true,
                'message': `Couldn't update bid`
            })
        }
       else{
            res.json({
                data
            })
        }

    }) }
    

)
module.exports = router;
