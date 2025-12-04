import { F, Log } from './log';

// ILogger core logger interface
export interface ILogger {
  log(log: Log): void;
  withField(key: string, value: any): IEntry;
  withFields(fields: F): IEntry;
  withError(err: Error): IEntry;
  withName(name: string): IEntry;
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

// IEntry core child logger interface
export interface IEntry {
  log(log: Log): void;
  withField(key: string, value: any): IEntry;
  withFields(fields: F): IEntry;
  withError(err: Error): IEntry;
  withName(name: string): IEntry;
  print(...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
  fatal(...args: any[]): void;
}

// IAdapter core adapter interface
export interface IAdapter {
  log(log: Log): void;
  format(log: Log): unknown;
}
