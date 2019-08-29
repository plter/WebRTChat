import GlobalKeys from "../globals/GlobalKeys";
import Constants from "../globals/Constants";
import GlobalEvents from "../globals/GlobalEvents";

async function StartChatSessionHandler(targetSocketId) {
    appContext.data(GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID, targetSocketId);

    let offerPc = new RTCPeerConnection(Constants.RTC_CONFIGURATION);
    appContext.data(GlobalKeys.KEY_CURRENT_OFFER_RTC_CONNECTION, offerPc);
    appContext.data(GlobalKeys.KEY_REMOTE_STREAM, new MediaStream());

    offerPc.ontrack = ev => {
        console.log("onTrack", ev);
        appContext.fire(GlobalEvents.GOT_REMOTE_TRACK, ev.track);
    };

    offerPc.onicecandidate = e => {
        console.log(e);
        appContext.fire(GlobalEvents.SEND_OFFER_ICE_CANDIDATE, e.candidate, targetSocketId);
    };

    offerPc.onnegotiationneeded = async e => {
        console.log(e);

        let offer = await offerPc.createOffer();
        await offerPc.setLocalDescription(new RTCSessionDescription(offer));
        appContext.fire(GlobalEvents.SEND_OFFER_SESSION_DESCRIPTION, offer, targetSocketId);
    };

    let stream = appContext.data(GlobalKeys.KEY_LOCAL_STREAM);
    for (let t of stream.getTracks()) {
        offerPc.addTrack(t);
    }
}

export default StartChatSessionHandler;