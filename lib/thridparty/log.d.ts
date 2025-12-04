import { Level } from './level';
export type F = Record<string, any>;
export interface LogData {
    fields: F;
    error: Error | null;
    name: string;
    withName: boolean;
}
export interface Log {
    level: Level;
    data: LogData;
    message: string;
    timestamp: Date;
}
export declare const newLogCopy: (log: Log) => Log;
export declare const newDefaultLog: (level: Level, ...args: any[]) => Log;
export declare const newDefaultLogn: (level: Level, name: string, ...args: any[]) => Log;
