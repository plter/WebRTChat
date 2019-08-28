import GlobalKeys from "../globals/GlobalKeys";
import Constants from "../globals/Constants";
import GlobalEvents from "../globals/GlobalEvents";

async function StartChatSessionHandler(targetSocketId) {
    vueApp.setGlobalValue(GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID, targetSocketId);

    let offerPc = new RTCPeerConnection(Constants.RTC_CONFIGURATION);
    vueApp.setGlobalValue(GlobalKeys.KEY_CURRENT_OFFER_RTC_CONNECTION, offerPc);
    offerPc.onicecandidate = e => {
        console.log(e);
    };

    offerPc.onnegotiationneeded = async e => {
        console.log(e);

        let offer = await offerPc.createOffer();
        await offerPc.setLocalDescription(new RTCSessionDescription(offer));
        vueApp.$emit(GlobalEvents.SEND_OFFER_SESSION_DESCRIPTION, offer, targetSocketId);
    };

    let stream = vueApp.getGlobalValue(GlobalKeys.KEY_LOCAL_STREAM);
    for (let t of stream.getTracks()) {
        offerPc.addTrack(t);
    }
}

export default StartChatSessionHandler;