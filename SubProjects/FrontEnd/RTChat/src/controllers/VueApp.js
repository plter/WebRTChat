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
import Events from "../globals/Events";

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
        appContext.on(Events.DATA_CHANGED, this._appContext_dataChanged.bind(this));
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
            let remoteStream = appContext.data(GlobalKeys.KEY_REMOTE_STREAM);
            if (remoteStream) {
                remoteStream.addTrack(track);
            }
        },

        socketidClickedHandler(e) {
            if (this.remoteSocketID) {
                alert("You can not start more than one session at the same time.");
                return;
            }

            let targetId = $(e.target).data("socketid");
            if (this.isMyself(targetId)) {
                alert("You can not chat with yourself.");
                return;
            }

            if (confirm(`Don you want to chat with ${targetId}?`)) {
                appContext.fire(GlobalEvents.START_CHAT_SESSION, targetId);
            }
        },

        _appContext_dataChanged(key, val, oldVal) {
            switch (key) {
                case GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID:
                    this.remoteSocketID = val;
                    break;
                case GlobalKeys.KEY_CURRENT_ANSWER_RTC_CONNECTION:
                case GlobalKeys.KEY_CURRENT_OFFER_RTC_CONNECTION:
                    if (oldVal) {
                        oldVal.close();
                    }
                    break;
                case GlobalKeys.KEY_REMOTE_STREAM:
                    this.$refs.remotePreview.srcObject = val;
                    break;
            }
        },

        btnCloseCurrentSessionClicked(e) {
            appContext.data(GlobalKeys.KEY_CURRENT_OFFER_RTC_CONNECTION, null);
            appContext.data(GlobalKeys.KEY_CURRENT_ANSWER_RTC_CONNECTION, null);
            appContext.data(GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID, null);
        }

    },
});

export default VueApp;