import { IAdapter, IEntry, F, Level, Log, ILogger, newDefaultLog, newDefaultLogn, newLogCopy } from './thridparty';

import { Entry } from './entry';

// Logger implements ILogger
export class Logger implements ILogger {
  private readonly adapters: IAdapter[];

  constructor(adapters: IAdapter[] = []) {
    this.adapters = adapters;
  }

  // Log core method to logging
  log(log: Log): void {
    for (const adapter of this.adapters) {
      const copy = newLogCopy(log);
      adapter.log(copy);
    }
  }

  // WithField returns Entry with field
  withField(key: string, value: any): IEntry {
    const e = new Entry(this);
    e.withField(key, value);
    return e;
  }

  // WithFields returns Entry with fields
  withFields(fields: F): IEntry {
    const e = new Entry(this);
    e.withFields(fields);
    return e;
  }

  // WithName returns Entry with name
  withName(name: string): IEntry {
    const e = new Entry(this);
    e.withName(name);
    return e;
  }

  // WithError returns Entry with error
  withError(err: Error): IEntry {
    const e = new Entry(this);
    e.withError(err);
    return e;
  }

  // Print default log
  print(...args: any[]): void {
    this.log(newDefaultLog(Level.UnselectedLevel, ...args));
  }

  // Info default log
  info(...args: any[]): void {
    this.log(newDefaultLog(Level.InfoLevel, ...args));
  }

  // Infon log with name
  infon(name: string, ...args: any[]): void {
    this.log(newDefaultLogn(Level.InfoLevel, name, ...args));
  }

  // Debug default log
  debug(...args: any[]): void {
    this.log(newDefaultLog(Level.DebugLevel, ...args));
  }

  // Debugn log with name
  debugn(name: string, ...args: any[]): void {
    this.log(newDefaultLogn(Level.DebugLevel, name, ...args));
  }

  // Warn default log
  warn(...args: any[]): void {
    this.log(newDefaultLog(Level.WarnLevel, ...args));
  }

  // Warnn log with name
  warnn(name: string, ...args: any[]): void {
    this.log(newDefaultLogn(Level.WarnLevel, name, ...args));
  }

  // Error default log
  error(...args: any[]): void {
    this.log(newDefaultLog(Level.ErrorLevel, ...args));
  }

  // Errorn log with name
  errorn(name: string, ...args: any[]): void {
    this.log(newDefaultLogn(Level.ErrorLevel, name, ...args));
  }

  // Fatal default log
  fatal(...args: any[]): void {
    this.log(newDefaultLog(Level.FatalLevel, ...args));
  }

  // Fataln log with name
  fataln(name: string, ...args: any[]): void {
    this.log(newDefaultLogn(Level.FatalLevel, name, ...args));
  }
}
