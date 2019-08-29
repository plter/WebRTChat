import Events from "./Events";

export default class EventAdapter {
    constructor() {
        this._listeners = new Map();
        this._data = new Map();
    }

    on(type, handler) {
        /**
         * @type {Set}
         */
        let handlers = this._listeners.get(type);
        if (!handlers) {
            handlers = new Set();
            this._listeners.set(type, handlers);
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
        let key, value;
        switch (args.length) {
            case 1:
                key = args[0];
                return this._data.get(key);
            case 2:
                key = args[0];
                value = args[1];
                let oldVal = this._data.get(key);
                if (oldVal !== value) {
                    this._data.set(key, value);
                    this.fire(Events.DATA_CHANGED, key, value, oldVal);
                }
                return this;
            default:
                return this._data;
        }
    }
}