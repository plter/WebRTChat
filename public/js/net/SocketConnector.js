/**
 * Created by plter on 9/12/16.
 */

window.plter = window.plter || {};

(function () {

    class SocketConnector extends plter.CommandHandler {

        execute(e, data) {
            switch (e.type) {
                case plter.Commands.CONNECT_SOCKET_IO_SERVER:
                    this.connectSocketServer(data);
                    break;
            }
        }

        connectSocketServer(user) {
            this.socket = io(location.origin);
            this.socket.on("connect", ()=> {
                this.socket.emit("login", {user: user});
            });
            this.socket.on("loginHandler", data=> {

                console.log(data);

                if (data.success) {
                    plter.MessageBox.hide();
                    //TODO show video chat view
                } else {
                    plter.MessageBox.show("ID已存在，请换一个");
                    setTimeout(()=> {
                        plter.MessageBox.hide();
                        plter.CommandAdapter.getInstance().trigger(plter.Commands.SHOW_INPUT_ID_VIEW);
                    }, 2000);
                }
            });

        }
    }

    plter.SocketConnector = SocketConnector;

})();