import Constants from "../globals/Constants";
import GlobalKeys from "../globals/GlobalKeys";
import GlobalEvents from "../globals/GlobalEvents";

async function ReceivedOfferSessionDescriptionHandler(offer, callerSocketId) {
    console.log("Received offer");
    console.log(offer);
    appContext.data(GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID, callerSocketId);

    let answerPc = new RTCPeerConnection(Constants.RTC_CONFIGURATION);
    appContext.data(GlobalKeys.KEY_CURRENT_ANSWER_RTC_CONNECTION, answerPc);

    answerPc.ontrack = ev => {
        console.log("onTrack");
        appContext.fire(GlobalEvents.GOT_REMOTE_TRACK, ev.track);
    };

    answerPc.onicecandidate = ev => {
        console.log(ev);
        appContext.fire(GlobalEvents.SEND_ANSWER_ICE_CANDIDATE, ev.candidate, callerSocketId);
    };

    await answerPc.setRemoteDescription(new RTCSessionDescription(offer));

    let stream = appContext.data(GlobalKeys.KEY_LOCAL_STREAM);
    stream.getTracks().forEach(t => answerPc.addTrack(t));

    let answer = await answerPc.createAnswer();
    await answerPc.setLocalDescription(new RTCSessionDescription(answer));

    appContext.fire(GlobalEvents.SEND_ANSWER_SESSION_DESCRIPTION, answer, callerSocketId);
}

export default ReceivedOfferSessionDescriptionHandler;