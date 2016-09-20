/**
 * Created by plter on 9/12/16.
 */

window.plter = window.plter || {};

(function () {

    const Dialog = plter.Dialog;

    class InputIdView extends Dialog {


        constructor() {
            super();

            this.buildUI();
        }

        execute(e) {

            let Commands = plter.Commands;

            switch (e.type) {
                case Commands.SHOW_INPUT_ID_VIEW:
                    this.open();
                    break;
            }
        }

        buildUI() {

            this.jq.html(`
    <form>
        <p>
            <label>ID:
                <input type="text" name="user" required="required">
            </label>
        </p>

        <p>
            <input class="button" type="submit" value="连接服务器">
        </p>
    </form>`);

            this.jq.dialog("option", "title", "请输入你的ID");
            this.form = this.jq.find("form");
            this.form.on("submit", e=> {
                e.preventDefault();

                this.close();
                plter.MessageBox.show("正在连接服务器...");
                plter.CommandAdapter.getInstance().trigger(plter.Commands.CONNECT_SOCKET_IO_SERVER, this.form.prop("user").value);
            });

            //render button
            this.jq.find(".button").button();
        }
    }

    plter.InputIdView = InputIdView;
})();