import { AppController } from '@core/app.controller';
import { AppService } from '@core/app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleOption } from 'config';

@Module({
  imports: [ConfigModule.forRoot(ConfigModuleOption)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
