export default class AsyncObject {
    async initObject() {
    };
}

AsyncObject.create = async function (AsyncObjectClass, ...args) {
    let obj = new AsyncObjectClass(...args);
    await obj.initObject();
    return obj;
};