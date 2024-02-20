/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
// import * as path from 'path';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'postgres',
            host: this.configService.get('DB_HOST'),
            port: +this.configService.get('DB_PORT'),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_DATABASE'),
            logging: 'all',
            logger: 'file',
            synchronize: true,
            autoLoadEntities: true,
            // entities: [path.join(__dirname, '../../**/*.model{.ts,.js}')],
            // migrations: [path.join(__dirname, '../../**/migrations/*{.ts,.js}')],
        };
    }
}
