import { Global, Module } from '@nestjs/common';

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
  ],
  exports: ['APP_DATABASE'],
})
export class DatabaseModule {}
