import "./css/style.css"
import VueApp from "./controllers/VueApp"


document.body.appendChild(new VueApp().$mount(document.createElement("div")).$el);
