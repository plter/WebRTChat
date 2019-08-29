import GlobalKeys from "../globals/GlobalKeys";
import MessageCommands from "../vo/MessageCommands";

function SendAnswerICECandidateHandler(candidate, targetSocketId) {
    /**
     * @type {SocketProxy}
     */
    let socketProxy = appContext.data(GlobalKeys.KEY_SOCKET_PROXY);
    socketProxy.sendMessage(targetSocketId, MessageCommands.SEND_ANSWER_ICE_CANDIDATE, candidate);
}

export default SendAnswerICECandidateHandler;