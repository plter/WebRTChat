/**
 * Created by plter on 9/12/16.
 */

window.plter = window.plter || {};

(function () {

    class InputIdView extends plter.CommandHandler {

        execute(e) {

            let Commands = plter.Commands;

            switch (e.type) {
                case Commands.RENDER_INPUT_ID_VIEW:
                    this.renderUI();
                    break;
                case Commands.SHOW_INPUT_ID_VIEW:
                    this.showUI();
                    break;
            }
        }

        renderUI() {
            this.enterIdDialog = $("#enter-id-dialog");
            this.enterIdDialog.dialog("option", "title", "请输入你的ID");
            this.enterIdForm = this.enterIdDialog.find("form");
            this.enterIdForm.on("submit", e=> {
                e.preventDefault();

                this.hideUI();
                plter.MessageBox.show("正在连接服务器...");
                plter.CommandAdapter.getInstance().trigger(plter.Commands.CONNECT_SOCKET_IO_SERVER, this.enterIdForm.prop("user").value);
            });
        }

        showUI() {
            this.enterIdDialog.dialog("open");
        }

        hideUI() {
            this.enterIdDialog.dialog("close");
        }
    }

    plter.InputIdView = InputIdView;
})();