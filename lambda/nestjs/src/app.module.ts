import { Module, MiddlewareConsumer } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { StringMaskingController } from './string-masking/string-masking.controller';
import { MaskingService } from './string-masking/masking.service';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60 * 60,
      max: 100,
    }),
  ],
  controllers: [StringMaskingController],
  providers: [MaskingService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes(StringMaskingController);
  }
}
