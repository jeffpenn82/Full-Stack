import config from 'config';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logLevel = config.get('logLevel');

const rotateTransport = new DailyRotateFile({
  level: logLevel,
  filename: 'chickens-api-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

export const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.json(),
  defaultMeta: { service: config.get('applicationName') },
  transports: [
    rotateTransport,
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.json(),
  }));
}
