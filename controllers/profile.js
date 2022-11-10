// const { Module } = require('module');

const router = require('express').Router();
const {User,Games} = require('../model')

router.get(`/:id`, async (req, res) => {
   
    // // console.log(userData) 
    
    // const user = ["a","b"];
    // res.render('profile', {user});
    
    try{
        // do: need to assign a variable that finds all Users - Users.findAll(...) - Willnote: need to .map() through each User here and set to plain: true
        // allUsers.map((eachUser)=>{
        //     eachUser.get({plain: true})
        // })
        // do next: I want to render('allUsers', {users});
        // get userid from req.session
        //find(where:)
    //      const userData = await User.findAll().catch((err) => {
    //     res.json(err);
    // });
    //     const users = userData.map((user) => user.get({plain: true}));
    //     const user = users[0]
        res.render('profile');
        // res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(`${err}`);
    }
});

router.get(`/:id/genre/`, async (req, res) => {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get(`/numPlayer/:id`, async (req, res) => {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post(`/`, async (req, res) => {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put(`/:id`, async (req, res) => {
    if(!req.session.logged_in){
        return res.status(401).json({msg:"login first joetato!"})
      }
      try {
        console.log(req.body)
        const picUrl = await User.update({
          where: {
            id: req.params.id,
            profile_pic: req.body
          },
        });
    
        if (!picUrl) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
    
        res.status(200).json(picUrl);
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.delete(`/:id`, async (req, res)=> {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports=router;