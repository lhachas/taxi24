import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.API_PORT || 3000;
    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({ transform: true, whitelist: true }),
    );
    await app.listen(port);
}

bootstrap();
