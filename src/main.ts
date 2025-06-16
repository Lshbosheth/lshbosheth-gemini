import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: '*',
  });
  generateDocument(app);
  const port = +process.env.PORT || 3000;
  await app.listen(port, () => {
    console.group(`项目运行在 http://localhost:${port}/api/swagger`);
    console.groupEnd();
  });
}
bootstrap();
