import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptors } from './comon/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalInterceptors(new TransformInterceptors())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
