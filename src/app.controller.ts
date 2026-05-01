import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return {
      app: 'nestjs-test-app',
      status: 'running',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('health')
  getHealth() {
    return { status: 'ok', uptime: process.uptime() };
  }

  @Get('hello/:name')
  getHello(@Param('name') name: string) {
    return this.appService.getHello(name);
  }
}
