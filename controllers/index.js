const router = require('express').Router();
const frontEndRoutes = require('./frontEndRoutes');
const apiRoutes = require('./api');

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
    
    res.render('homepage');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.use( frontEndRoutes);
router.use('/api', apiRoutes);

module.exports = router;