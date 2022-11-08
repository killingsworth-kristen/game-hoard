// const { Module } = require('module');

const router = require('express').Router();

router.get(`/`, async (req, res) => {
    try{
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get(`/genre`, async (req, res) => {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get(`/numPlayer`, async (req, res) => {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.push(`/`, async (req, res) => {
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