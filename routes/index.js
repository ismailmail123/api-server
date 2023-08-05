const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: "home page"
    })
})

const recipientRoutes = require('./recipient');

route.use('/recipients', recipientRoutes)

module.exports = route;
