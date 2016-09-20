/**
 * Created by plter on 9/12/16.
 */

(function () {

    function registerCommands() {
        let ca = plter.CommandAdapter.getInstance();

        let inputIdView = new plter.InputIdView();
        ca.on(plter.Commands.SHOW_INPUT_ID_VIEW, inputIdView);

        let socketConnect = new plter.SocketConnector();
        ca.on(plter.Commands.CONNECT_SOCKET_IO_SERVER, socketConnect);

        let chatView = new plter.ChatView();
        ca.on(plter.Commands.SHOW_CHAT_VIEW, chatView);
    }

    function showInputIdDialog() {
        plter.CommandAdapter.getInstance().trigger(plter.Commands.SHOW_INPUT_ID_VIEW);
    }

    function renderJQueryUI() {
        $(".dialog").dialog({
            closeOnEscape: false,
            closeText: "hide",
            draggable: false,
            autoOpen: false
        });

        plter.CommandAdapter.getInstance().trigger(plter.Commands.RENDER_INPUT_ID_VIEW);
    }

    function main() {
        registerCommands();
        renderJQueryUI();
        showInputIdDialog();
    }

    main();
})();