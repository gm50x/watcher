import { Controller, Get, Headers, Logger, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req: any): string {
    Logger.warn(req.requestId, this.constructor.name);
    return this.appService.getHello();
  }
}
