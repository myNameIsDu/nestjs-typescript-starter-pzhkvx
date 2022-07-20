import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  async getHello() {
    return 'hello';
  }

  @Get('/admin/page')
  async page() {
    return '/admin/page';
  }

  @Get('/admin/component')
  async component() {
    return '/admin/component';
  }
}
