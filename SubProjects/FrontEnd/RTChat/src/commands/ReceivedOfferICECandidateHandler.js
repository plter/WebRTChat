import GlobalKeys from "../globals/GlobalKeys";

async function ReceivedOfferICECandidateHandler(candidate, fromSocketId) {
    if (candidate) {
        /**
         * @type {RTCPeerConnection}
         */
        let answerPc = appContext.data(GlobalKeys.KEY_CURRENT_ANSWER_RTC_CONNECTION);
        await answerPc.addIceCandidate(new RTCIceCandidate(candidate));
        console.log("Add ice candidate >>>>>>>>>>>>>>>>>>>>");
        console.log(candidate);
        console.log("Add ice candidate <<<<<<<<<<<<<<<<<<<<");
    }
}

export default ReceivedOfferICECandidateHandler;