const socket = require("socket.io");
const SocketConnection = server => {
  const io = socket(server);
  io.on("connection", (socket) => {
    console.log("A user has connected");
    socket.on("change username", username => {
      socket.username = username;
    });
    socket.on("join room", roomID => {
      socket.join(roomID);
    });
    socket.on("end room", roomID => {
      socket.to(roomID).emit("end room");
    });
    socket.on("disconnect", () => {
      console.log("A user has disconnected");
    });
  });
};

module.exports = SocketConnection;
