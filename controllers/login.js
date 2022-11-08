const router = require('express').Router();

router.get(`/`, async (req,res)=>{
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post(`/`, async (req,res)=> {
    try {
        res.json(`working!`)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports=router;