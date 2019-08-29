import SocketEvents from "../globals/SocketEvents";
import GlobalEvents from "../globals/GlobalEvents";
import Message from "../vo/Message";
import MessageCommands from "../vo/MessageCommands";
import GlobalKeys from "../globals/GlobalKeys";

export default class SocketProxy {
    constructor(socket) {
        this._socket = socket;

        socket.on("connect", () => appContext.data(GlobalKeys.KEY_CURRENT_LOCAL_SOCKET_ID, socket.id));
        socket.on(SocketEvents.SEND_MESSAGE, this.messageHandler.bind(this));
        socket.on(SocketEvents.LIST_CLIENTS, clients => appContext.fire(GlobalEvents.LIST_CLIENTS, clients));
    }

    sendMessage(to, command, data) {
        console.log(`Send message[${command}] to ${to}`);
        let msg = Message.makeMessage(this.socket.id, to, command, data);
        this.socket.emit(SocketEvents.SEND_MESSAGE, msg);
    }

    messageHandler(message) {
        console.log(message);

        if (message.command) {
            switch (message.command) {
                case MessageCommands.SEND_OFFER_SESSION_DESCRIPTION:
                    appContext.fire(GlobalEvents.RECEIVED_OFFER_SESSION_DESCRIPTION, message.data, message.from);
                    break;
                case MessageCommands.SEND_ANSWER_SESSION_DESCRIPTION:
                    appContext.fire(GlobalEvents.RECEIVED_ANSWER_SESSION_DESCRIPTION, message.data);
                    break;
                case MessageCommands.SEND_OFFER_ICE_CANDIDATE:
                    appContext.fire(GlobalEvents.RECEIVED_OFFER_ICE_CANDIDATE, message.data, message.from);
                    break;
                case MessageCommands.SEND_ANSWER_ICE_CANDIDATE:
                    appContext.fire(GlobalEvents.RECEIVED_ANSWER_ICE_CANDIDATE, message.data, message.from);
                    break;
            }
        }
    }

    get socket() {
        return this._socket;
    }
}