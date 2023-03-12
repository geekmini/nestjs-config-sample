import { EnvironmentVariables } from 'config/envs';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '@core/app.module';
import { NestFactory } from '@nestjs/core';

export interface IConfig {
  name: string;
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService<EnvironmentVariables>);
  const port = config.get<number>('SERVICE_PORT');

  await app.listen(port);
}

bootstrap();
