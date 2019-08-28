import GlobalKeys from "../globals/GlobalKeys";
import MessageCommands from "../vo/MessageCommands";

function SendOfferSessionDescriptionHandler(offer, targetSocketId) {
    /**
     * @type {SocketProxy}
     */
    let socketProxy = vueApp.getGlobalValue(GlobalKeys.KEY_SOCKET_PROXY);
    socketProxy.sendMessage(targetSocketId, MessageCommands.SEND_OFFER_SESSION_DESCRIPTION, offer);
}

export default SendOfferSessionDescriptionHandler;