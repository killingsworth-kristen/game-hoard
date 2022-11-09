// const { Module } = require('module');

const router = require('express').Router();
const {User,Games} = require('../model')

router.get(`/`, async (req, res) => {
   
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
         const userData = await User.findAll().catch((err) => {
        res.json(err);
    });
        const users = userData.map((user) => user.get({plain: true}));
        const user = users[0]
        res.render('profile', user);
        // res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get(`/genre/:id`, async (req, res) => {
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
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
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