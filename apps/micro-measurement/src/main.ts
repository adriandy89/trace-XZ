import { NestFactory } from '@nestjs/core';
import { MicroMeasurementModule } from './micro-measurement.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroMeasurementModule);
  await app.listen(3000);
}
bootstrap();
