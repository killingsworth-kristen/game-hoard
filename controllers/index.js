const router = require('express').Router();
const profileRoutes = require('./profile');
const loginRoutes = require(`./login`)

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

    // const user = await dbUserData.map((user) => 
    //     user.get({ plain: true })
    // );
    
    res.render('homepage', {});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.use('/profile', profileRoutes);
router.use(`/login`, loginRoutes);

module.exports = router;