const router = require('express').Router();
const {User} = require('../../model')


//login
router.post(`/login`, async (req,res)=>{
    try {
        const userData = await User.findOne({ where: {user_name: req.body.user_name}});
        if(!userData) {
            res.status(400).json({message:"Incorrect Username or Password, Please try again!"});
            return;
        }
        const validPassword = userData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({message:"Incorrect Username or Password, Please try again!"});
            return;
        }
        req.session.save(()=>{
            req.session.user_id= userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message: "You are now logged in!"})
        })
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

//create account
router.post('/', async (req,res)=>{
    console.log("signup")
    console.log(req.body)
    try {
        const userData = await User.create(req.body);
        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData)
        });
    } catch (err){
        res.status(400).json(err);
    }
})

//logout
router.post(`/logout`, (req,res)=> {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
});

module.exports=router;