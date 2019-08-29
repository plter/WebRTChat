export default class EventAdapter {
    constructor() {
        this._listeners = new Map();
        this._data = new Map();
    }

    on(type, handler) {
        /**
         * @type {Set}
         */
        let handlers = null;
        if (!this._listeners.has(type)) {
            handlers = new Set();
            this._listeners.set(type, handlers);
        } else {
            handlers = this._listeners.get(type);
        }
        handlers.add(handler);
    }

    off(type, handler = null) {
        if (this._listeners.has(type)) {
            if (handler) {
                this._listeners.get(type).delete(handler);
            } else {
                this._listeners.delete(type);
            }
        }
    }

    async fire(type, ...args) {
        if (this._listeners.has(type)) {
            for (let handler of this._listeners.get(type).values()) {
                if (await handler(...args)) {
                    return true;
                }
            }
        }
    }

    has(type) {
        return this._listeners.has(type);
    }

    get listeners() {
        return this._listeners;
    }

    dataKeys() {
        return this._data.keys();
    }

    data(...args) {
        switch (args.length) {
            case 1:
                return this._data.get(args[0]);
            case 2:
                this._data.set(args[0], args[1]);
                return this;
            default:
                return this._data;
        }
    }
}