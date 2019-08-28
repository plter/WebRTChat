import GlobalKeys from "../globals/GlobalKeys";
import GlobalEvents from "../globals/GlobalEvents";

async function GetLocalMediaStreamHandler() {
    let localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    vueApp.setGlobalValue(GlobalKeys.KEY_LOCAL_STREAM, localStream);
    vueApp.$emit(GlobalEvents.GOT_LOCAL_MEDIA_STREAM, localStream);
}

export default GetLocalMediaStreamHandler;