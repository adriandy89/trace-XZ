import { Module } from '@nestjs/common';
import { MicroMeasurementController } from './micro-measurement.controller';
import { MicroMeasurementService } from './micro-measurement.service';

@Module({
  imports: [],
  controllers: [MicroMeasurementController],
  providers: [MicroMeasurementService],
})
export class MicroMeasurementModule {}
