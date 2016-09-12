/**
 * Created by plter on 9/12/16.
 */

class Connection {


    constructor(socket) {
        this._socket = socket;
        this._user = null;

        this._socket.on("login", data=> {

            if (!Connection.hasConnection(data.user)) {
                this._user = data.user;
                Connection.addConnection(data.user, this);

                this._socket.emit("loginHandler", {success: true});
            } else {
                this._socket.emit("loginHandler", {success: false, reason: "user exists!", reasonId: 1001});
            }
        });

        this._socket.on("disconnect", ()=> {
            Connection.removeConnection(this.user);
        });
    }

    get user() {
        return this._user;
    }

    /**
     *
     * @param user
     * @param conn {Connection}
     */
    static addConnection(user, conn) {
        if (user) {
            Connection._connections.set(user, conn);
        } else {
            console.warn("attemp to add connection without user name");
        }
    }

    static removeConnection(user) {
        Connection._connections.delete(user);
    }

    static hasConnection(user) {
        return Connection._connections.has(user);
    }

    /**
     * @returns {Map}
     * @private
     */
    static get _connections() {
        if (!Connection.__conns) {
            Connection.__conns = new Map();
        }
        return Connection.__conns;
    }
}

module.exports = Connection;