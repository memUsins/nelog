import { IEntry, F, Level, Log, LogData, ILogger, newDefaultLog } from './thridparty';

// entry implements Entry
export class Entry implements IEntry {
  private logger: ILogger;
  private readonly data: LogData;

  constructor(logger: ILogger) {
    this.logger = logger;
    this.data = {
      fields: {},
      error: null,
      name: '',
      withName: false,
    };
  }

  // Log core method to logging
  log(log: Log): void {
    log.data = { ...this.data };

    this.logger.log(log);

    this.data.error = null;
    this.data.fields = {};
  }

  // WithField add field to entry data
  withField(key: string, value: any): IEntry {
    this.data.fields = { [key]: value };
    return this;
  }

  // WithFields add fields to entry data
  withFields(fields: F): IEntry {
    this.data.fields = { ...fields };
    return this;
  }

  // WithError add error to entry data
  withError(err: Error): IEntry {
    this.data.error = err;
    return this;
  }

  // WithName add name to entry data
  withName(name: string): IEntry {
    this.data.name = name;
    this.data.withName = true;
    return this;
  }

  // Print default log
  print(...args: any[]): void {
    this.log(newDefaultLog(Level.UnselectedLevel, ...args));
  }

  // Info default log
  info(...args: any[]): void {
    this.log(newDefaultLog(Level.InfoLevel, ...args));
  }

  // Debug default log
  debug(...args: any[]): void {
    this.log(newDefaultLog(Level.DebugLevel, ...args));
  }

  // DebugJson log formating json struct
  debugJson(data: any): void {
    try {
      const jsonData = JSON.stringify(data, null, 2);
      this.log(newDefaultLog(Level.DebugLevel, jsonData));
    } catch (err) {
      this.log(newDefaultLog(Level.DebugLevel, 'failed to unmarshal json'));
    }
  }

  // Warn default log
  warn(...args: any[]): void {
    this.log(newDefaultLog(Level.WarnLevel, ...args));
  }

  // Error default log
  error(...args: any[]): void {
    this.log(newDefaultLog(Level.ErrorLevel, ...args));
  }

  // Fatal default log
  fatal(...args: any[]): void {
    this.log(newDefaultLog(Level.FatalLevel, ...args));
  }
}
