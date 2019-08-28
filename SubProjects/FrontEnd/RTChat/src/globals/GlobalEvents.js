const GlobalEvents = {
    LIST_CLIENTS: "listClients",
    REQUEST_TO_START_CHAT_SESSION: "requestToStartChatSession",
    REJECT_CHAT_REQUEST: "rejectChatRequest",
    SESSION_DESCRIPTION: "sessionDescription",
    LOCAL_SESSION_DESCRIPTION: "localOfferSessionDescription",
    REMOTE_SESSION_DESCRIPTION: "remoteOfferSessionDescription",
    GOT_ANSWER_SESSION_DESCRIPTION: "gotAnswerSessionDescription",
    ACCEPT_CHAT_REQUEST: "acceptChatRequest",
    LOCAL_ICE_CANDIDATE: "localICECandidate",
    REMOTE_ICE_CANDIDATE: "remoteICECandidate",
    ICE_CANDIDATE: "ICECandidate",
    START_CHAT_SESSION: "startChatSession",
    GET_LOCAL_MEDIA_STREAM: "getLocalMediaStream",
    GOT_LOCAL_MEDIA_STREAM: "GotLocalMediaStream",
    START_APP: "startApp",
    CONNECT_SOCKET: "connectSocket",
    SEND_OFFER_SESSION_DESCRIPTION: "sendOfferSessionDescription",
    SEND_ANSWER_SESSION_DESCRIPTION: "sendAnswerSessionDescription",
    RECEIVED_OFFER_SESSION_DESCRIPTION: "receivedOfferSessionDescription",
    RECEIVED_ANSWER_SESSION_DESCRIPTION: "receivedAnswerSessionDescription"
};

export default GlobalEvents;