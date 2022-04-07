import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './commons/database.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import config from './config';
import * as Joi from 'joi';
import { MongoClient } from 'mongodb';

const client = new MongoClient(
  'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT',
);
async function run() {
  await client.connect();
  const db = client.db('platzi-store');
  const taskCollection = db.collection('tasks');
  const tasks = await taskCollection.find().toArray();
  console.log(tasks);
}

run();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }),
    ProductsModule,
    UsersModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_NAME',
      useValue: 'NestJS',
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const taks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
        return taks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
