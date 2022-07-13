import { Injectable } from '@nestjs/common';
import { chromium } from 'playwright'

@Injectable()
export class AppService {
  async getHello() {
    const browser = await chromium.launch();
    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    await browser.close()
    return 'Hello World!';
  }
}
