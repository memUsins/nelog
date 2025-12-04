export declare enum Level {
    DebugLevel = -2,
    InfoLevel = -1,
    WarnLevel = 0,
    ErrorLevel = 1,
    FatalLevel = 2,
    UnselectedLevel = 3
}
export declare const isLevelEnabled: (current: Level, level: Level) => boolean;
export declare const levelToString: (level: Level) => string;
