import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/api/v1.1')
  getHello(): string {
    return '/api/v1.1';
  }
}
