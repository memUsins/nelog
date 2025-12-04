"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newDefaultLogn = exports.newDefaultLog = exports.newLogCopy = void 0;
// NewLogCopy returns copied Log
const newLogCopy = (log) => {
    const fields = {};
    for (const [k, v] of Object.entries(log.data.fields)) {
        fields[k] = v;
    }
    return {
        level: log.level,
        message: log.message,
        data: {
            fields,
            error: log.data.error,
            name: log.data.name,
            withName: log.data.withName,
        },
        timestamp: log.timestamp,
    };
};
exports.newLogCopy = newLogCopy;
// NewDefaultLog returns new Log
const newDefaultLog = (level, ...args) => {
    return {
        level,
        message: args.map(String).join(' '),
        data: {
            fields: {},
            error: null,
            name: '',
            withName: false,
        },
        timestamp: new Date(),
    };
};
exports.newDefaultLog = newDefaultLog;
// NewDefaultLogn returns new Log with name args
const newDefaultLogn = (level, name, ...args) => {
    return {
        level,
        message: args.map(String).join(' '),
        data: {
            fields: {},
            error: null,
            name,
            withName: false,
        },
        timestamp: new Date(),
    };
};
exports.newDefaultLogn = newDefaultLogn;
