import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe422Service } from './services/validation-pipe-422/validation-pipe-422.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe422Service());
  await app.listen(8080);
}
bootstrap();
