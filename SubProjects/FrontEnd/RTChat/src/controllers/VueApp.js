import VueAppTpl from "../views/VueApp.html"
import GlobalEvents from "../globals/GlobalEvents";
import GlobalKeys from "../globals/GlobalKeys";
import StartAppHandler from "../commands/StartAppHandler";
import GetLocalMediaStreamHandler from "../commands/GetLocalMediaStreamHandler";
import ConnectSocketHandler from "../commands/ConnectSocketHandler";
import StartChatSessionHandler from "../commands/StartChatSessionHandler";
import SendOfferSessionDescriptionHandler from "../commands/SendOfferSessionDescriptionHandler";
import ReceivedOfferSessionDescriptionHandler from "../commands/ReceivedOfferSessionDescriptionHandler";
import SendAnswerSessionDescriptionHandler from "../commands/SendAnswerSessionDescriptionHandler";
import ReceivedAnswerSessionDescriptionHandler from "../commands/ReceivedAnswerSessionDescriptionHandler";
import EventAdapter from "../globals/EventAdapter";
import SendOfferICECandidateHandler from "../commands/SendOfferICECandidateHandler";
import ReceivedOfferICECandidateHandler from "../commands/ReceivedOfferICECandidateHandler";
import SendAnswerICECandidateHandler from "../commands/SendAnswerICECandidateHandler";
import ReceivedAnswerICECandidateHandler from "../commands/ReceivedAnswerICECandidateHandler";

const VueApp = Vue.component("vue-app", {
    template: VueAppTpl,

    data() {
        return {
            clients: [],
            remoteSocketID: null
        };
    },

    created() {
        window.appContext = new EventAdapter();
        appContext.data(GlobalKeys.KEY_VUE_APP, this);
    },

    mounted() {
        this._asyncInit();
    },


    methods: {
        async _asyncInit() {
            this.registerGlobalEvents();

            await appContext.fire(GlobalEvents.START_APP);
            let stream = appContext.data(GlobalKeys.KEY_LOCAL_STREAM);
            stream.getTracks().forEach(t => console.log(t));
            this.$refs.localPreview.srcObject = stream;
        },

        registerGlobalEvents() {
            appContext.on(GlobalEvents.LIST_CLIENTS, this.listClientsHandler.bind(this));
            appContext.on(GlobalEvents.START_APP, StartAppHandler);
            appContext.on(GlobalEvents.GET_LOCAL_MEDIA_STREAM, GetLocalMediaStreamHandler);
            appContext.on(GlobalEvents.CONNECT_SOCKET, ConnectSocketHandler);
            appContext.on(GlobalEvents.START_CHAT_SESSION, StartChatSessionHandler);
            appContext.on(GlobalEvents.SEND_OFFER_SESSION_DESCRIPTION, SendOfferSessionDescriptionHandler);
            appContext.on(GlobalEvents.SEND_ANSWER_SESSION_DESCRIPTION, SendAnswerSessionDescriptionHandler);
            appContext.on(GlobalEvents.RECEIVED_OFFER_SESSION_DESCRIPTION, ReceivedOfferSessionDescriptionHandler);
            appContext.on(GlobalEvents.RECEIVED_ANSWER_SESSION_DESCRIPTION, ReceivedAnswerSessionDescriptionHandler);
            appContext.on(GlobalEvents.SEND_OFFER_ICE_CANDIDATE, SendOfferICECandidateHandler);
            appContext.on(GlobalEvents.RECEIVED_OFFER_ICE_CANDIDATE, ReceivedOfferICECandidateHandler);
            appContext.on(GlobalEvents.SEND_ANSWER_ICE_CANDIDATE, SendAnswerICECandidateHandler);
            appContext.on(GlobalEvents.RECEIVED_ANSWER_ICE_CANDIDATE, ReceivedAnswerICECandidateHandler);
            appContext.on(GlobalEvents.GOT_REMOTE_TRACK, this._gotRemoteTrackHandler.bind(this));

        },

        listClientsHandler(clients) {
            this.clients.length = 0;
            clients.forEach(id => this.clients.push(id));
        },

        isMyself(socketid) {
            return appContext.data(GlobalKeys.KEY_CURRENT_LOCAL_SOCKET_ID) == socketid;
        },

        _gotRemoteTrackHandler(track) {
            if (!this._remoteStream) {
                this._remoteStream = new MediaStream();
                this.$refs.remotePreview.srcObject = this._remoteStream;
                appContext.data(GlobalKeys.KEY_REMOTE_STREAM, this._remoteStream);
            }

            this._remoteStream.addTrack(track);
        },

        socketidClickedHandler(e) {
            let targetId = $(e.target).data("socketid");
            if (!this.isMyself(targetId)) {
                if (confirm(`Don you want to chat with ${targetId}?`)) {
                    appContext.fire(GlobalEvents.START_CHAT_SESSION, targetId);
                }
            } else {
                alert("You can not chat with yourself.");
            }
        },

    },

    watch: {
        remoteSocketID(val, oldVal) {
            windowJq.data(GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID, val);
        }
    }
});

export default VueApp;