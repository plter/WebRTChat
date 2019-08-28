import Constants from "../globals/Constants";
import GlobalKeys from "../globals/GlobalKeys";
import GlobalEvents from "../globals/GlobalEvents";

async function ReceivedOfferSessionDescriptionHandler(offer, callerSocketId) {
    console.log("Received offer");
    console.log(offer);
    vueApp.setGlobalValue(GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID, callerSocketId);

    let answerPc = new RTCPeerConnection(Constants.RTC_CONFIGURATION);
    vueApp.setGlobalValue(GlobalKeys.KEY_CURRENT_ANSWER_RTC_CONNECTION, answerPc);
    await answerPc.setRemoteDescription(new RTCSessionDescription(offer));

    let stream = vueApp.getGlobalValue(GlobalKeys.KEY_LOCAL_STREAM);
    stream.getTracks().forEach(t => answerPc.addTrack(t));

    let answer = await answerPc.createAnswer();
    await answerPc.setLocalDescription(new RTCSessionDescription(answer));

    vueApp.$emit(GlobalEvents.SEND_ANSWER_SESSION_DESCRIPTION, answer, callerSocketId);
}

export default ReceivedOfferSessionDescriptionHandler;