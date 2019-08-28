import GlobalKeys from "../globals/GlobalKeys";
import SocketProxy from "../net/SocketProxy";

function ConnectSocketHandler() {
    let socket = io();
    vueApp.setGlobalValue(GlobalKeys.KEY_CURRENT_LOCAL_SOCKET_ID, socket.id);
    vueApp.setGlobalValue(GlobalKeys.KEY_SOCKET, socket);
    vueApp.setGlobalValue(GlobalKeys.KEY_SOCKET_PROXY, new SocketProxy(socket));
}

export default ConnectSocketHandler;