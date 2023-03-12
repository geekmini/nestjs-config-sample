import { EnvironmentVariables } from 'config/envs';
import { AppService } from '@core/app.service';
import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  @Inject()
  private readonly appService: AppService;

  @Inject()
  private readonly configService: ConfigService<EnvironmentVariables>;

  @Get()
  getHello(): string {
    Logger.log(this.configService.get<string>('SERVICE_NAME'));
    return this.appService.getHello();
  }
}
