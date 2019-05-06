let express = require('express');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let router = express.Router();
const middleware = require('../../middleware/check-auth');

// Model User
const User = require('../../Models/User');



// @ROUTE // POST /v1/api/user/login
//@access Public
router.post('/login',(req,res,next) =>{
    User.find({email:req.body.email})
        .exec()
        .then(user => {
            if(user.length < 1){
                return res.status(401).json({
                    messege: 'Mail not Found, user Doesn\'t exist '
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err,result) =>{
                if(err){
                    return res.status(401).json({
                        messege : 'Auth Failed'
                    });
                }
                if(result){
                    let token = jwt.sign({
                        _id: user[0]._id,
                        email: user[0].email
                    },'privateKey',{ expiresIn: '30m'});
                    res.json({
                        token
                    });
                    next();
                    
                }else{
                    res.send(400).json({
                        messege: 'Auth Failed'
                    });
                }
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            });
        });
});

//@route // POST  v1/api/user
//@access Publuc

router.post('/register',(req,res) => {
    
    const userData = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address
    }); 

    bcrypt.hash(userData.password,10)
        .then((hash) =>{
            userData.password = hash;
            userData
                .save()
                .then(items => res.status(201).json({item: items}))
                .catch(err => console.log(err));
        })
        .catch(err => res.send(err));
});


// Get user By ID

router.get('/',middleware,(req,res) => {
    res.send(200).json({
        messege: 'success'
    });
});


router.put('/',middleware,(req,res) =>{
    res.send(200).json({
        messege: 'Success'
    })
});


module.exports = router;