const uuid = require('uuid/v1')

module.exports = {
    createUser: (req, res) => {
        const {username} = req.body
        req.session.user = {
            username
        }
        res.status(200).send(req.session.user)
    },
    checkUser: (req, res, next) => {
        if (req.session.user.username) {
            next()
        } else {
            res.status(401).send('Please login')
        }
    },
    createRoom: (req, res) => {
        const roomID = uuid()
        res.status(200).send(roomID)
    },
    joinRoom: (req, res) => {
        res.status(200).send('Hello World')
    }
}