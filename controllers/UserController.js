const User = require('../models').user


class UserController {
    static create(req, res) {
        const {name, email, password} = req.body
        User.create({
            name,
            email,
            password
        })
        .then(User => {
            res.status(201).json({ user })
        })
        .catch (err => {
            res.status(400).json({err})
        })
    }

}

module.exports = UserController