var express = require('express');
var router = express.Router();
const User = require ('../models/User')
const bcrypt = require('bcrypt')
/* GET home page. */
router.get('/register', function(req, res, next) {
  User.find({})
  .then(data => res.json(data))
  .catch(next)
});

router.delete('/register/:id', (req,res,next)=>{
    User.findOneAndDelete({_id: req.params.id})
        .then(data => res.json(data))
        .catch(next)
})

router.post('/register',async (req,res,next) => {
  const {username, email} = req.body
  let {password} = req.body
  const userExists = await User.findOne({email});

  if(!userExists){
    password = await bcrypt.hash(password, 10)
    console.log(password);
    const user ={username, email, password}
    User.create(user)
    .then(() => {

      res.json({
        'error': false,
        'message': "user created"
      })
    }).catch(err => {
      res.json({
        'error': true,
        'message': "user not created"
      })
    })
  }else{
    res.json({
      'error': true,
      'message': "email already exists"
    })
  }
})

router.post('/login',async (req,res,next) => {
  const {username, password} = req.body
  const user = await User.findOne({username})
  
  if(user) {
    const result = await bcrypt.compare(password, user.password)
    if (result){
      res.json({
        'error': false,
        'message': "login seccesfuly",
        username
      })
    }else{
      res.json({
        'error': true,
        'message': "username or password is wrong"
      })

    }
  }
})

router.get('/login', async (req, res,next) => {
  const admin = await User.findOneAndUpdate({email:'admin@admin.com'}, {$set:{default: true}})
  if (admin) {
    res.json({
      'error': false,
      'message': 'Admin Connected!'
    })
  } else {
    res.json({
      'error' : true,
      'message' : 'Admin not found!'
    })
  }
})
module.exports = router;
