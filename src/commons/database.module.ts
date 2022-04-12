import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>): any => {
        const { host, username, password, port, database } =
          configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
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
  ],
  exports: ['APP_DATABASE', TypeOrmModule],
})
export class DatabaseModule {}
