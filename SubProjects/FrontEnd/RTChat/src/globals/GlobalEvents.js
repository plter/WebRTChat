const GlobalEvents = {
    LIST_CLIENTS: "listClients",
    GOT_ANSWER_SESSION_DESCRIPTION: "gotAnswerSessionDescription",
    START_CHAT_SESSION: "startChatSession",
    GET_LOCAL_MEDIA_STREAM: "getLocalMediaStream",
    START_APP: "startApp",
    CONNECT_SOCKET: "connectSocket",
    SEND_OFFER_SESSION_DESCRIPTION: "sendOfferSessionDescription",
    SEND_ANSWER_SESSION_DESCRIPTION: "sendAnswerSessionDescription",
    SEND_OFFER_ICE_CANDIDATE: "SendOfferICECandidate",
    SEND_ANSWER_ICE_CANDIDATE: "SendAnswerICECandidate",
    RECEIVED_OFFER_SESSION_DESCRIPTION: "receivedOfferSessionDescription",
    RECEIVED_ANSWER_SESSION_DESCRIPTION: "receivedAnswerSessionDescription",
    RECEIVED_OFFER_ICE_CANDIDATE: "receivedOfferICECandidate",
    RECEIVED_ANSWER_ICE_CANDIDATE: "receivedAnswerICECandidate",
    GOT_REMOTE_TRACK: "gotRemoteTrack"
};

export default GlobalEvents;