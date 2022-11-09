// const { Module } = require('module');

const router = require('express').Router();
const {User,Games} = require('../model')

router.get(`/`, async (req, res) => {
    try{
        // do: need to assign a variable that finds all Users - Users.findAll(...) - Willnote: need to .map() through each User here and set to plain: true
        allUsers.map((eachUser)=>{
            eachUser.get({plain: true})
        })
        // do next: I want to render('allUsers', {users});
        res.json(`working!`)
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