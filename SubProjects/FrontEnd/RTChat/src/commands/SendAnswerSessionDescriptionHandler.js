import GlobalKeys from "../globals/GlobalKeys";
import MessageCommands from "../vo/MessageCommands";

function SendAnswerSessionDescriptionHandler(answer, targetSocketId) {
    /**
     * @type {SocketProxy}
     */
    let socketProxy = appContext.data(GlobalKeys.KEY_SOCKET_PROXY);
    socketProxy.sendMessage(targetSocketId, MessageCommands.SEND_ANSWER_SESSION_DESCRIPTION, answer);
}

export default SendAnswerSessionDescriptionHandler;