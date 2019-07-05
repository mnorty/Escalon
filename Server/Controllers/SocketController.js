const socket = require("socket.io");
const SocketConnection = server => {
  const io = socket(server);

  io.on("connection", (socket) => {
    console.log("A user has connected");
    console.log(socket.id)
    socket.on("username", username => {
      socket.username = username;
    });
    socket.on("join game", gameID => {
      socket.join(gameID);
      io.to(gameID).emit("newUser", "New user has joined")
    });
    socket.on("end game", gameID => {
      socket.to(gameID).emit("end room");
    });
    socket.on("disconnect", () => {
      console.log("A user has disconnected");
    });
  });
};

module.exports = SocketConnection;
