const uuid = require("uuid/v1");

module.exports = {
  createUser: (req, res) => {
    const { username } = req.body;
    req.session.user = {
      username
    };
    res.status(200).send(req.session.user);
  },
  checkUser: (req, res, next) => {
    if (req.session.user.username) {
      next();
    } else {
      res.status(401).send("Please login");
    }
  },
  createGame: async (req, res) => {
    const gameID = uuid();
    const { session } = req;
    const db = req.app.get("db");
    if (session) {
      const gameInfo = await db.create_gameroom({
        admins_id: session.admins.id,
        game_title: game_title,
        game_intro: game_intro,
        gameroom_id: gameID
      });
      res.status(200).send(gameInfo);
    }
  },
  joinGame: async (req, res) => {
    const { gameID, username } = req.body;
    const db = req.app.get("db");
    // console.log(gameID)
    const getGame = await db.get_game({ gameroom_id: gameID })
    if (getGame[0]) {
      // console.log(getGame)
      db.insert_game_user({gameID, username})
        .then(() => {
          res.status(200).send(getGame[0]);
        })
    } else {
      res.status(404).send("Game not found");
    }
  },
  getGameDetails: (req, res) => {
    const db = req.app.get('db')
    const getGame = db.get_game_details({ game_title: game_title, game_intro: game_intro})
    .then(() => {
      res.status(200).send(getGame)
    })
  }
  
};
