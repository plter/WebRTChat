import GlobalKeys from "../globals/GlobalKeys";

async function GetLocalMediaStreamHandler() {
    let localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
    appContext.data(GlobalKeys.KEY_LOCAL_STREAM, localStream);
}

export default GetLocalMediaStreamHandler;