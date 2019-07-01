const uuid = require('uuid/v1')

module.exports = {
    createRoom: (req, res) => {
        const roomID = uuid()
        res.status(200).send(roomID)
    },
    joinRoom: (req, res) => {
        res.status(200).send('Hello!')
    }
}