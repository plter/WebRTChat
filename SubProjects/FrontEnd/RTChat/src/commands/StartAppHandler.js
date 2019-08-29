import GlobalEvents from "../globals/GlobalEvents";

async function StartAppHandler() {
    await appContext.fire(GlobalEvents.CONNECT_SOCKET);
    await appContext.fire(GlobalEvents.GET_LOCAL_MEDIA_STREAM);
}

export default StartAppHandler;