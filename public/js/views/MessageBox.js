/**
 * Created by plter on 9/12/16.
 */

window.plter = window.plter || {};

(function () {

    class MessageBox {

        static show(text, title = "提示") {
            MessageBox._dialog.open();
            let dialogJq = MessageBox._dialog.jq;

            dialogJq.dialog("option", "title", title);
            dialogJq.html(text);
            dialogJq.dialog("open");
        }

        static hide() {
            MessageBox._dialog.close();
        }
    }

    MessageBox._dialog = new plter.Dialog();

    plter.MessageBox = MessageBox;
})();