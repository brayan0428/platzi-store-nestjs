import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';
import config from 'src/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, host, port, username, password, database } =
          configService.database;
        return {
          uri: `${connection}://${host}:${port}`,
          user: username,
          pass: password,
          dbName: database,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'APP_DATABASE',
      useValue: {
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
      },
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, host, port, username, password, database } =
          configService.database;
        const client = new MongoClient(
          `${connection}://${username}:${password}@${host}:${port}/?authMechanism=DEFAULT`,
        );
        await client.connect();
        const db = client.db(database);
        return db;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['APP_DATABASE', 'MONGO'],
})
export class DatabaseModule {}
