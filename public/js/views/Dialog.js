/**
 * Created by plter on 9/19/16.
 */

window.plter = window.plter || {};

(function () {

    class Dialog {

        constructor() {
            this._htmlNode = document.createElement("div");
            this._jq = $(this._htmlNode);
            this._jq.dialog({autoOpen: false, closeOnEscape: false});
        }

        get htmlNode() {
            return this._htmlNode;
        }

        get jq() {
            return this._jq;
        }

        open() {
            if (!this.htmlNode.parentNode) {
                document.body.appendChild(this.htmlNode);
            }
            this.jq.dialog("open");
        }

        close() {
            this.jq.dialog("close");
        }
    }

    plter.Dialog = Dialog;
})();