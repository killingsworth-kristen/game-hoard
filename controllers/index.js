const router = require('express').Router();
const userRoutes = require('./user');
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

    const user = [`Hello`, `World!`]
    
    res.render('homepage', {user});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.use('/user', userRoutes);
router.use(`/login`, loginRoutes);

module.exports = router;