import GlobalEvents from "../globals/GlobalEvents";

function StartAppHandler() {
    vueApp.$emit(GlobalEvents.GET_LOCAL_MEDIA_STREAM);
    vueApp.$emit(GlobalEvents.CONNECT_SOCKET);
}

export default StartAppHandler;