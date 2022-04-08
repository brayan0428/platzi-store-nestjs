import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { async } from 'rxjs';

@Global()
@Module({
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
      useFactory: async () => {
        const client = new MongoClient(
          'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT',
        );
        await client.connect();
        const db = client.db('platzi-store');
        return db;
      },
    },
  ],
  exports: ['APP_DATABASE', 'MONGO'],
})
export class DatabaseModule {}
