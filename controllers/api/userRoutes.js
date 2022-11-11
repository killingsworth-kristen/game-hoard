const router = require('express').Router();
const {User, Games} = require('../../model')


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

// add profile pic
router.put("/profile",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    User.update({
        profile_pic: req.body.profile_pic},{
        where: {
            id: req.session.user_id
        },
    }).then(data=>{
        if(!data) {
            res.status(404).json({msg: `This user does not exist!`})
          }
        console.log(data)
        res.render("profile", data);
    })
})

// add game
router.post("/profile",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    console.log(req.body)
    Games.create({
        name: req.body.name,
        description: req.body.description,
        genre: req.body.genre,
        number_players: req.body.number_players,
        user_id: req.session.user_id
    })
})

module.exports=router;