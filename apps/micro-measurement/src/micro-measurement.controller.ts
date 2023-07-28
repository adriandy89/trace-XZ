import { Controller, Get } from '@nestjs/common';
import { MicroMeasurementService } from './micro-measurement.service';

@Controller()
export class MicroMeasurementController {
  constructor(private readonly microMeasurementService: MicroMeasurementService) {}

  @Get()
  getHello(): string {
    return this.microMeasurementService.getHello();
  }
}
