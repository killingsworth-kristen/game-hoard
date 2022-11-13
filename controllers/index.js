const router = require('express').Router();
const frontEndRoutes = require('./frontEndRoutes');
const apiRoutes = require('./api');
const { User, Games } = require('../model');




router.get(`/`, async (req, res) => {
    try {

        const usersData = await User.findAll({
            include: [Games]
        })
        console.log(usersData)
        const users = usersData.map((user) => user.get({ plain: true }));
        res.render('homepage',  {users});
    }

    catch (err) {
        res.status(500).json(err)
    }

});

router.use(frontEndRoutes);
router.use('/api', apiRoutes);

module.exports = router;