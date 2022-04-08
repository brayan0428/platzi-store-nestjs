import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('APP_NAME') private appName: string,
    @Inject('TASKS') private tasks: any[],
    @Inject('APP_DATABASE') private database: any,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.appName);
    console.log(this.tasks);
    console.log(this.database);
    return this.appService.getHello();
  }

  @Get('tasks')
  getTasks() {
    return this.appService.getTasks();
  }
}
