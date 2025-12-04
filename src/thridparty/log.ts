import { Level } from './level';

// F alias for map
export type F = Record<string, any>;

// LogData core log props interface
export interface LogData {
  fields: F;
  error: Error | null;
  name: string;
  withName: boolean;
}

// Log core log interface
export interface Log {
  level: Level;
  data: LogData;
  message: string;
  timestamp: Date;
}

// NewLogCopy returns copied Log
export const newLogCopy = (log: Log): Log => {
  const fields: F = {};
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

// NewDefaultLog returns new Log
export const newDefaultLog = (level: Level, ...args: any[]): Log => {
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

// NewDefaultLogn returns new Log with name args
export const newDefaultLogn = (level: Level, name: string, ...args: any[]): Log => {
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
