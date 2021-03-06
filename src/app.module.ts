import { Module, NestMiddleware, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NextFunction, Request, Response } from 'express';
let count = 1;
class Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(count++);
    next();
  }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(Middleware).forRoutes('/admin/*');
  // }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware).exclude('/hello').forRoutes('/*');
  }
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(Middleware).exclude('/api/hello').forRoutes('/*');
  // }
}
