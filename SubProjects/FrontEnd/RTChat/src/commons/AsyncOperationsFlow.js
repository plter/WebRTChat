export default class AsyncOperationsFlow {
    constructor() {
        this._operations = [];
        this._running = false;
    }

    addAsyncFunction(func) {
        this._operations.push(func);
        this._runFlow();
    }

    _runFlow() {
        if (!this._running) {
            let self = this;
            (async function () {
                self._running = true;
                while (self._operations.length) {
                    await self._operations.shift()();
                }
                self._running = false;
            })();
        }
    }
}