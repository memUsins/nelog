"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const thridparty_1 = require("./thridparty");
const entry_1 = require("./entry");
// Logger implements ILogger
class Logger {
    adapters;
    constructor(adapters = []) {
        this.adapters = adapters;
    }
    // Log core method to logging
    log(log) {
        for (const adapter of this.adapters) {
            const copy = (0, thridparty_1.newLogCopy)(log);
            adapter.log(copy);
        }
    }
    // WithField returns Entry with field
    withField(key, value) {
        const e = new entry_1.Entry(this);
        e.withField(key, value);
        return e;
    }
    // WithFields returns Entry with fields
    withFields(fields) {
        const e = new entry_1.Entry(this);
        e.withFields(fields);
        return e;
    }
    // WithName returns Entry with name
    withName(name) {
        const e = new entry_1.Entry(this);
        e.withName(name);
        return e;
    }
    // WithError returns Entry with error
    withError(err) {
        const e = new entry_1.Entry(this);
        e.withError(err);
        return e;
    }
    // Print default log
    print(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.UnselectedLevel, ...args));
    }
    // Info default log
    info(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.InfoLevel, ...args));
    }
    // Infon log with name
    infon(name, ...args) {
        this.log((0, thridparty_1.newDefaultLogn)(thridparty_1.Level.InfoLevel, name, ...args));
    }
    // Debug default log
    debug(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.DebugLevel, ...args));
    }
    // Debugn log with name
    debugn(name, ...args) {
        this.log((0, thridparty_1.newDefaultLogn)(thridparty_1.Level.DebugLevel, name, ...args));
    }
    // Warn default log
    warn(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.WarnLevel, ...args));
    }
    // Warnn log with name
    warnn(name, ...args) {
        this.log((0, thridparty_1.newDefaultLogn)(thridparty_1.Level.WarnLevel, name, ...args));
    }
    // Error default log
    error(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.ErrorLevel, ...args));
    }
    // Errorn log with name
    errorn(name, ...args) {
        this.log((0, thridparty_1.newDefaultLogn)(thridparty_1.Level.ErrorLevel, name, ...args));
    }
    // Fatal default log
    fatal(...args) {
        this.log((0, thridparty_1.newDefaultLog)(thridparty_1.Level.FatalLevel, ...args));
    }
    // Fataln log with name
    fataln(name, ...args) {
        this.log((0, thridparty_1.newDefaultLogn)(thridparty_1.Level.FatalLevel, name, ...args));
    }
}
exports.Logger = Logger;
