//Loading dependencies & initializing express
var os = require("os");
var path = require("path");
var express = require("express");
var app = express();
var http = require("http");
//For signalling in WebRTC
var socketIO = require("socket.io");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

var server = http.createServer(app);
var passwordAttempts

server.listen(8001);

var io = socketIO(server);

io.sockets.on("connection", function (socket) {
  // Convenience function to log server messages on the client.
  // Arguments is an array like object which contains all the arguments of log().
  // To push all the arguments of log() in array, we have to use apply().
  function log() {
    var array = ["Message from server:"];
    array.push.apply(array, arguments);
    socket.emit("log", array);
  }

  //Defining Socket Connections
  socket.on("message", function (message, room) {
    log("Client said: ", message);
    // for a real app, would be room-only (not broadcast)
    socket.in(room).emit("message", message, room);
  });

  socket.on("create or join", function (password) {
    log("Received request to create or join room " + room);

    if (io.sockets.adapter.rooms.get(password) == undefined) {
      var numClients = 0
    } else {
      var numClients = io.sockets.adapter.rooms.get(password).size
    }
    
    if (password == "test123") {
      if (numClients === 0) {
        socket.join(password);
        socket.emit("host", password, socket.id);
      } else if (numClients === 1) {
        socket.join(password);
        socket.emit("client", password, socket.id);
      }
    else {
      passwordAttempts += 1

      if (passwordAttempts == 3) {
        process.exit("Max password guesses hit")
      }
    }
  });

  socket.on("bye", function () {
    console.log("received bye");
  });
});