# NoLog

nelog — adapter based logger util

## Installation

```shell
$ npm install nelog
```

## Adapters

| Adapter                                                 | destination         |
|---------------------------------------------------------|---------------------|
| [Console](https://github.com/memUsins/nelogconsole)     | Console adapter     |
| [File](https://github.com/memUsins/nelogfile)           | File (json) adapter |
| [Loki](https://github.com/memUsins/nelogloki)           | Loki adapter        |
| [Context Manager](https://github.com/memUsins/nelogctx) | Context manager     |

## Usage

### Additional Methods for Logging
- **withFields**, **withField**, **withError**, **withName** for detailed context:
  ```ts
  logger.withFields({ "foo": "bar" }).info("Some log info")
  logger.withField("foo", "bar").info("Some log info")
  logger.withError(new Error("my error")).info("Some log info")
  logger.withName("TestLogger").info("Some log info")
  ```
