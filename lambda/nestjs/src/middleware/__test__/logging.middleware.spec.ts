import { Test, TestingModule } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { LoggingMiddleware } from '../logging.middleware';
import { Request, Response } from 'express';

describe('LoggingMiddleware', () => {
  let middleware: LoggingMiddleware;
  let mockCacheManager: jest.Mocked<Cache>;

  beforeEach(async () => {
    mockCacheManager = {
      set: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoggingMiddleware,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    middleware = module.get<LoggingMiddleware>(LoggingMiddleware);
  });

  it('should cache request and response data', async () => {
    const mockRequest = {
      originalUrl: '/test',
      body: { input: 'test input' },
    } as Request;

    const mockResponse = {
      on: jest.fn(),
      locals: {
        maskedOutput: 'test output',
      },
    } as any as Response;

    const mockNext = jest.fn();

    await middleware.use(mockRequest, mockResponse, mockNext);

    const onFinishCallback = (mockResponse.on as jest.Mock).mock.calls[0][1];
    await onFinishCallback();

    expect(mockNext).toHaveBeenCalled();

    expect(mockCacheManager.set).toHaveBeenCalledWith(
      expect.stringMatching(/^request:\/test:\d+$/),
      {
        input: 'test input',
        output: 'test output',
      },
    );
  });
});
