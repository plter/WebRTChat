/**
 * Created by plter on 9/12/16.
 */

window.plter = window.plter || {};

(function () {

    class CommandAdapter {


        constructor() {
            this._jq = $(this);
        }

        /**
         * @param type
         * @param ch {CommandHandler}
         */
        on(type, ch) {
            this._jq.on(type, ch.execute.bind(ch));
        }

        off(...args) {
            this._jq.off(...args);
        }

        trigger(...args) {
            this._jq.trigger(...args);
        }

        static getInstance() {
            return CommandAdapter.__ins;
        }
    }

    CommandAdapter.__ins = new CommandAdapter();

    plter.CommandAdapter = CommandAdapter;
})();