import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Context, Handler } from 'aws-lambda';
import express from 'express';

import { AppModule } from './app.module';

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );

    const config = new DocumentBuilder()
    .setTitle('String Masking API')
    .setDescription('API to mask strings')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(nestApp, config);

    SwaggerModule.setup('api', nestApp, document);

    
    // If you are exposing your API using a prefix, make sure to also include the prefix here.
    nestApp.setGlobalPrefix('api');

    nestApp.enableCors();

    await nestApp.init();

    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer;
}

export const handler = async (event: any, context: Context, callback: any) => {
  console.log("Intercepting event ", JSON.stringify(event))
  const server = await bootstrap();

  return server(event, context, callback);
};
