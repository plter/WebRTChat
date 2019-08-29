import GlobalKeys from "../globals/GlobalKeys";
import SocketProxy from "../net/SocketProxy";

function ConnectSocketHandler() {
    let socket = io();
    appContext.data(GlobalKeys.KEY_SOCKET, socket);
    appContext.data(GlobalKeys.KEY_SOCKET_PROXY, new SocketProxy(socket));
}

export default ConnectSocketHandler;