"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelToString = exports.isLevelEnabled = exports.Level = void 0;
// Level core level declaration
var Level;
(function (Level) {
    Level[Level["DebugLevel"] = -2] = "DebugLevel";
    Level[Level["InfoLevel"] = -1] = "InfoLevel";
    Level[Level["WarnLevel"] = 0] = "WarnLevel";
    Level[Level["ErrorLevel"] = 1] = "ErrorLevel";
    Level[Level["FatalLevel"] = 2] = "FatalLevel";
    Level[Level["UnselectedLevel"] = 3] = "UnselectedLevel";
})(Level || (exports.Level = Level = {}));
// IsEnabled check is level enabled
const isLevelEnabled = (current, level) => {
    return level >= current;
};
exports.isLevelEnabled = isLevelEnabled;
// String returns the string representation of the level
const levelToString = (level) => {
    switch (level) {
        case Level.DebugLevel:
            return 'debug';
        case Level.InfoLevel:
            return 'info';
        case Level.WarnLevel:
            return 'warn';
        case Level.ErrorLevel:
            return 'error';
        case Level.FatalLevel:
            return 'fatal';
        case Level.UnselectedLevel:
            return 'unselected';
        default:
            return '';
    }
};
exports.levelToString = levelToString;
