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

const VueApp = Vue.component("vue-app", {
    template: VueAppTpl,

    data() {
        return {
            clients: [],
            remoteSocketID: null
        };
    },

    created() {
        window.vueApp = this;
        this._globalValues = new Map();
    },

    mounted() {
        this._asyncInit();
    },


    methods: {
        async _asyncInit() {
            this.registerGlobalEvents();
            this.$emit(GlobalEvents.START_APP);
        },

        registerGlobalEvents() {
            vueApp.$on(GlobalEvents.LIST_CLIENTS, this.listClientsHandler.bind(this));
            vueApp.$on(GlobalEvents.START_APP, StartAppHandler);
            vueApp.$on(GlobalEvents.GET_LOCAL_MEDIA_STREAM, GetLocalMediaStreamHandler);
            vueApp.$on(GlobalEvents.GOT_LOCAL_MEDIA_STREAM, stream => this.$refs.localPreview.srcObject = stream);
            vueApp.$on(GlobalEvents.CONNECT_SOCKET, ConnectSocketHandler);
            vueApp.$on(GlobalEvents.START_CHAT_SESSION, StartChatSessionHandler);
            vueApp.$on(GlobalEvents.SEND_OFFER_SESSION_DESCRIPTION, SendOfferSessionDescriptionHandler);
            vueApp.$on(GlobalEvents.SEND_ANSWER_SESSION_DESCRIPTION, SendAnswerSessionDescriptionHandler);
            vueApp.$on(GlobalEvents.RECEIVED_OFFER_SESSION_DESCRIPTION, ReceivedOfferSessionDescriptionHandler);
            vueApp.$on(GlobalEvents.RECEIVED_ANSWER_SESSION_DESCRIPTION, ReceivedAnswerSessionDescriptionHandler);
        },

        listClientsHandler(clients) {
            this.clients.length = 0;
            clients.forEach(id => this.clients.push(id));
        },

        isMyself(socketid) {
            let socket = vueApp.getGlobalValue(GlobalKeys.KEY_SOCKET);
            return socket.id == socketid;
        },

        socketidClickedHandler(e) {
            let targetId = $(e.target).data("socketid");
            if (!this.isMyself(targetId)) {
                if (confirm(`Don you want to chat with ${targetId}?`)) {
                    vueApp.$emit(GlobalEvents.START_CHAT_SESSION, targetId);
                }
            } else {
                alert("You can not chat with yourself.");
            }
        },

        getGlobalValues() {
            return this._globalValues;
        },

        getGlobalValue(key) {
            return this._globalValues.get(key);
        },

        setGlobalValue(key, value) {
            this._globalValues.set(key, value);
        }
    },

    watch: {
        remoteSocketID(val, oldVal) {
            windowJq.data(GlobalKeys.KEY_CURRENT_REMOTE_SOCKET_ID, val);
        }
    }
});

export default VueApp;