import IConfig from './IConfig';

export const config = (): IConfig => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  api: {
    apiUrl: process.env.API_URL,
    httpTimeout: 1000,
  },
  mongodb: {
    database: {
      connectionString:
        process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017',
      databaseName: process.env.NODE_ENV || 'local',
    },
  },
});
