const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server router`);

});

// using Promises

//router.post('/register', (req, res) => {
//
//   const { name, email, phone, work, password, cpassword} = req.body;
//    
//   if(!name || !email || !phone || !work || !password || !cpassword) {
//        return res.status(422).json({error:"plz fill the field properly"});
//   }
//
//   User.findOne({ email:email})
//        .then((userExist) => {
//            if(userExist) {
//                return res.status(422).json({ error: "Email already exist"})
//            }
//
//            const user = new User({name, email, phone, work, password, cpassword})
//
//            user.save().then(() => {
//                 res.status(201).json({message:"user registered successfully"})
//            }).catch((err) => res.status(500).json({ error: "Failed to register"}))
//        }).catch(err => { console.log(err); })
// });

    // using async await

 router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;
     
    if(!name || !email || !phone || !work || !password || !cpassword) {
         return res.status(422).json({error:"plz fill the field properly"});
    }
    try {
        const userExist = await User.findOne({ email: email });
        
        if (userExist) {
            return res.status(422).json({ error: "Email already exist"})
        } else if(password != cpassword) {
            return res.status(422).json({error:"passwords are not matching"})
        }else {
            const user = new User({name, email, phone, work, password, cpassword});
            await user.save();
        } 

     
        res.status(201).json({ message: "user registered successfully"})
    
    }
     catch (err) {
        console.log(err);
    }
 });

 router.post('/signin', async(req,res) => {
     try{
         let token;
     const {email, password} = req.body;
     if (!email || !password) {
         return res.status(400).json({error:"pls fill the credentials properly"})
     }
     const userLogin = await User.findOne({email:email});

     console.log(userLogin);
     if(userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password)
         token = await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token), {
            expires:new Date(Date.now() + 25892000000),
            httpOnly: true
        };
        if(!isMatch) {
            res.status(400).json({error:"user error"})
        }else {
           res.json({message: "User signin successfully"})
        }
     }else {
         res.status(400).json({error:"Invalid credentials"})
     }

     

    
     
     }catch(err) {
         console.log(err);
     }
 });

 router.get('/logout', (req, res) => {
     console.log('Hello my logout page');
     res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('User Logout');

});

 router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);

});

module.exports = router;