const express = require('express');
const router = express.Router();
const {User, Games, Collection} = require('../model')



//login
router.get('/login', (req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/profile")
    }
    res.render("login")
})

//profile
router.get("/profile",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user_id,{
        include: [Collection]
    }).then(userData=>{
        const userGameData = userData.toJSON();
        console.log(userGameData)
        userGameData.logged_in=req.session.logged_in
        res.render("profile", userGameData)
    })
})


module.exports = router;