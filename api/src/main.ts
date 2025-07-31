import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('\n\n', process.env.MONGO_CONNECTION_STRING , '\n\n')
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
