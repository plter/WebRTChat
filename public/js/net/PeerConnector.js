/**
 * Created by plter on 9/20/16.
 */

window.plter = window.plter || {};

(function () {

    const CommandHandler = plter.CommandHandler;

    class PeerConnector extends CommandHandler {

        execute(e) {
            return super.execute(e);
        }
    }

    plter.PeerConnector = PeerConnector;
})();