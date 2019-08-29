import GlobalKeys from "../globals/GlobalKeys";

async function ReceivedAnswerICECandidateHandler(candidate, fromSocketId) {
    if (candidate) {
        /**
         * @type {RTCPeerConnection}
         */
        let offerPc = appContext.data(GlobalKeys.KEY_CURRENT_OFFER_RTC_CONNECTION);
        await offerPc.addIceCandidate(new RTCIceCandidate(candidate));

        console.log("Add ice candidate >>>>>>>>>>>>>>>>>>>>");
        console.log(candidate);
        console.log("Add ice candidate <<<<<<<<<<<<<<<<<<<<");
    }
}

export default ReceivedAnswerICECandidateHandler;