import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(@Inject('MONGO') private database: Db) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getTasks() {
    const taskCollection = this.database.collection('tasks');
    const tasks = await taskCollection.find().toArray();
    return tasks;
  }
}
