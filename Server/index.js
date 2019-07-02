require('dotenv').config();
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authController = require('./Controllers/AuthController')
const gameCtrl = require('./Controllers/GameController')
const app = express()
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env
const SocketConnection = require('./Controllers/SocketController')

let server;

SocketConnection(server)
app.use(express.json())
app.use(express.static(`${__dirname}/../build`))
app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
)

//GET ENDPOINTS
app.get('/auth/gamecentral', authController.accessGameCentral);
app.get('/auth/admin', authController.getAdmin);
app.get('/auth/logout', authController.logout);

app.get('/user/joingame', gameCtrl.joinGame)

//POST ENDPOINTS
app.post('/user', gameCtrl.createUser)
app.post('/game/create', gameCtrl.createGame)

app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);

//PUT ENDPOINTS


//DELETE ENDPOINTS





massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    server = app.listen(SERVER_PORT, () => console.log(`Hulk Smashing on ${SERVER_PORT}`))
})


