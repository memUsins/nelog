// Level core level declaration
export enum Level {
  DebugLevel = -2,
  InfoLevel = -1,
  WarnLevel = 0,
  ErrorLevel = 1,
  FatalLevel = 2,
  UnselectedLevel = 3,
}

// IsEnabled check is level enabled
export const isLevelEnabled = (current: Level, level: Level): boolean => {
  return level >= current;
};

// String returns the string representation of the level
export const levelToString = (level: Level): string => {
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
