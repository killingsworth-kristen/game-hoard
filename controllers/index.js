const router = require('express').Router();
const userRoutes = require('./user');

// require models const { list models } = require(`../models`)


router.get(`/`, async (req,res)=> {
    try{
    // const dbUserData = await User.findAll({
    //     include : [
    //       {
    //         model: Game,
    //         attributes: [`name`,`numPlayers`,`genre`]
    //       },
    //     ],
    // });

    // const UserData = await dbUserData.map((user) => 
    //     user.get({ plain: true })
    // );
    
    // res.render('homepage', {UserData});
    res.json(`Working!`)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.use('/user', userRoutes);

module.exports = router;