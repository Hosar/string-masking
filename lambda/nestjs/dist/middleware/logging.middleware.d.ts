import { Cache } from 'cache-manager';
import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class LoggingMiddleware implements NestMiddleware {
    private cacheManager;
    constructor(cacheManager: Cache);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
