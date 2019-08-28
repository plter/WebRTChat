import SocketEvents from "../globals/SocketEvents";
import GlobalEvents from "../globals/GlobalEvents";
import Message from "../vo/Message";
import MessageCommands from "../vo/MessageCommands";

export default class SocketProxy {
    constructor(socket) {
        this._socket = socket;

        socket.on(SocketEvents.SEND_MESSAGE, this.messageHandler.bind(this));
        socket.on(SocketEvents.LIST_CLIENTS, clients => vueApp.$emit(GlobalEvents.LIST_CLIENTS, clients));
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
                    vueApp.$emit(GlobalEvents.RECEIVED_OFFER_SESSION_DESCRIPTION, message.data, message.from);
                    break;
                case MessageCommands.SEND_ANSWER_SESSION_DESCRIPTION:
                    vueApp.$emit(GlobalEvents.RECEIVED_ANSWER_SESSION_DESCRIPTION, message.data);
                    break;
            }
        }
    }

    get socket() {
        return this._socket;
    }
}