import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, UsersModule, HttpModule],
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
