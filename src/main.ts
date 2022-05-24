import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap(port: number) {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port,
    },
  });

  await app.startAllMicroservices();
  await app.listen(port);
}

const port = +process.env?.PORT || 3000;
bootstrap(port);
