/**
 * Created by plter on 9/12/16.
 */

const socketIo = require("socket.io");
const SocketConnection = require("./Connection");

class SocketServer {

    constructor(app) {
        this.io = socketIo(app);

        this.io.on("connection", socket=> new SocketConnection(socket));
    }

    static create(expressApp) {
        new SocketServer(expressApp);
    }
}

module.exports = SocketServer;