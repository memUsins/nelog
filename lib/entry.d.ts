import { IEntry, F, Log, ILogger } from './thridparty';
export declare class Entry implements IEntry {
    private logger;
    private readonly data;
    constructor(logger: ILogger);
    log(log: Log): void;
    withField(key: string, value: any): IEntry;
    withFields(fields: F): IEntry;
    withError(err: Error): IEntry;
    withName(name: string): IEntry;
    print(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
    debugJson(data: any): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    fatal(...args: any[]): void;
}
