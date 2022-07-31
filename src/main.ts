import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error', 'debug', 'log'],
  });
  await app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on :${process.env.SERVER_PORT} port...`);
  });
}
bootstrap();
