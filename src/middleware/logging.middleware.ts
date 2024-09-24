import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { originalUrl, body } = req;

    res.on('finish', async () => {
      const key = `request:${originalUrl}:${Date.now()}`;
      const responseBody = res.locals.maskedOutput;

      await this.cacheManager.set(key, {
        input: body.input,
        output: responseBody,
      });
    });

    next();
  }
}
