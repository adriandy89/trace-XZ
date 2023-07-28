import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroMeasurementService {
  getHello(): string {
    return 'Hello World!';
  }
}
