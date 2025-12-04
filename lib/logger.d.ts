import { IAdapter, IEntry, F, Log, ILogger } from './thridparty';
export declare class Logger implements ILogger {
    private readonly adapters;
    constructor(adapters?: IAdapter[]);
    log(log: Log): void;
    withField(key: string, value: any): IEntry;
    withFields(fields: F): IEntry;
    withName(name: string): IEntry;
    withError(err: Error): IEntry;
    print(...args: any[]): void;
    info(...args: any[]): void;
    infon(name: string, ...args: any[]): void;
    debug(...args: any[]): void;
    debugn(name: string, ...args: any[]): void;
    warn(...args: any[]): void;
    warnn(name: string, ...args: any[]): void;
    error(...args: any[]): void;
    errorn(name: string, ...args: any[]): void;
    fatal(...args: any[]): void;
    fataln(name: string, ...args: any[]): void;
}
