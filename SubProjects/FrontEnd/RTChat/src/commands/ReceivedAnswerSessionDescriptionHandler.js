import GlobalKeys from "../globals/GlobalKeys";

async function ReceivedAnswerSessionDescriptionHandler(answer) {
    console.log("Received answer");
    console.log(answer);

    /**
     * @type {RTCPeerConnection}
     */
    let offerPc = appContext.data(GlobalKeys.KEY_CURRENT_OFFER_RTC_CONNECTION);
    await offerPc.setRemoteDescription(new RTCSessionDescription(answer));
}

export default ReceivedAnswerSessionDescriptionHandler;