/**
 * Created by plter on 9/13/16.
 */

(function () {

    const CommandHandler = plter.CommandHandler;
    const Dialog = plter.Dialog;

    class ChatView extends Dialog {


        constructor() {
            super();

            this.jq.dialog("option", {title: "聊天界面", width: 880, height: 500});
            this.jq.html(`
<div style="text-align: center">
    <video style="background-color: black" autoplay="autoplay" class="local-camera" width="400" height="300"></video>
    <video style="background-color: black" autoplay="autoplay" class="remote-camera" width="400" height="300"></video>
    <div>
        <form class="target-id-form">
            <span>目标ID:</span>
            <input type="text" required="required" name="targetid">
            <input type="submit" class="button" value="呼叫">
        </form>
    </div>
</div>
`);
            this._localCameraVideo = this.jq.find(".local-camera");
            this._remoteCameraVideo = this.jq.find(".remote-camera");
            this._targetIdForm = this.jq.find(".target-id-form");

            this.renderButtons();
            this.addListeners();
        }

        renderButtons() {
            this.jq.find(".button").button();
        }

        addListeners() {
            this._targetIdForm.on("submit", event=> {
                event.preventDefault();

                console.log(event);

                //TODO create offer 
            });
        }

        showLocalCamera() {
            navigator.mediaDevices.getUserMedia({audio: true, video: {width: 400, height: 300}}).then(stream=> {
                this._currentMediaStream = stream;
                this._localCameraVideo.prop("src", URL.createObjectURL(this._currentMediaStream));
            }).catch(error=> {
                alert("你拒绝了使用摄像头");
            });
        }

        closeLocalCamera() {
            //TODO close local camera
        }

        execute(e) {
            switch (e.type) {
                case plter.Commands.SHOW_CHAT_VIEW:
                    this.open();
                    this.showLocalCamera();
                    break;
            }
        }
    }


    plter.ChatView = ChatView;
})();