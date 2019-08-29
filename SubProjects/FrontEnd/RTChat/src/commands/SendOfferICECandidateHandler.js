import GlobalKeys from "../globals/GlobalKeys";
import MessageCommands from "../vo/MessageCommands";

function SendOfferICECandidateHandler(candidate, targetSocketId) {
    /**
     * @type {SocketProxy}
     */
    let socketProxy = appContext.data(GlobalKeys.KEY_SOCKET_PROXY);
    socketProxy.sendMessage(targetSocketId, MessageCommands.SEND_OFFER_ICE_CANDIDATE, candidate);
}

export default SendOfferICECandidateHandler;