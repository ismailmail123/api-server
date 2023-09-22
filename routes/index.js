const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: "home page"
    })
})

const recipientRoutes = require('./recipient');
const userRoutes = require ('./user');

route.use('/recipients', recipientRoutes)
route.use('/user', userRoutes)

module.exports = route;
