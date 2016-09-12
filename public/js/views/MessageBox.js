/**
 * Created by plter on 9/12/16.
 */

window.plter = window.plter || {};

(function () {

    class MessageBox {

        static show(text, title = "提示") {
            MessageBox._jq.dialog("option", "title", title);
            MessageBox._jq.html(text);
            MessageBox._jq.dialog("open");
        }

        static hide() {
            MessageBox._jq.dialog("close");
        }
    }

    MessageBox._jq = $("#message-box");


    plter.MessageBox = MessageBox;
})();