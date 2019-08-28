const SocketEvents = require("./SocketEvents");

const SocketIO = require("socket.io");

function configWithExpress(server) {
    const io = SocketIO(server);

    io.on('connection', socket => {

        function broadcastClients() {
            io.of("/").clients((err, clients) => {
                io.emit(SocketEvents.LIST_CLIENTS, clients);
            });
        }

        socket.on(SocketEvents.SEND_MESSAGE, message => {
            if (message.from && message.to) {
                io.of("/").to(message.to).emit(SocketEvents.SEND_MESSAGE, message);
                console.log(`Send message[${message.command}] from ${message.from} to ${message.to}`);
            } else {
                console.warn("Can not send this message without from&to socket id.");
            }
        });


        socket.on("disconnect", reason => {
            broadcastClients();
        });


        broadcastClients();
    })
}

module.exports = {configWithExpress: configWithExpress};