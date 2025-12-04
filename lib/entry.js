"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
const thridparty_1 = require("./thridparty");
// entry implements Entry
class Entry {
    logger;
    data;
    constructor(logger) {
        this.logger = logger;
        this.data = {
            fields: {},
            error: null,
            name: '',
            withName: false,
        };
    }
    // Log core method to logging
    log(log) {
        log.data = { ...this.data };
        this.logger.log(log);
        this.data.error = null;
        this.data.fields = {};
    }
    // WithField add field to entry data
    withField(key, value) {
        this.data.fields = { [key]: value };
        return this;
    }
    // WithFields add fields to entry data
    withFields(fields) {
        this.data.fields = { ...fields };
        return this;
    }
    // WithError add error to entry data
    withError(err) {
        this.data.error = err;
        return this;
    }
    // WithName add name to entry data
    withName(name) {
        this.data.name = name;
        return this;
    }
    // Print default log
    print(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.UnselectedLevel, ...args));
    }
    // Info default log
    info(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.InfoLevel, ...args));
    }
    // Debug default log
    debug(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.DebugLevel, ...args));
    }
    // DebugJson log formating json struct
    debugJson(data) {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.DebugLevel, jsonData));
        }
        catch (err) {
            this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.DebugLevel, 'failed to unmarshal json'));
        }
    }
    // Warn default log
    warn(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.WarnLevel, ...args));
    }
    // Error default log
    error(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.ErrorLevel, ...args));
    }
    // Fatal default log
    fatal(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.FatalLevel, ...args));
    }
}
exports.Entry = Entry;
