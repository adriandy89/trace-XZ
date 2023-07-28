import { Test, TestingModule } from '@nestjs/testing';
import { MicroMeasurementController } from './micro-measurement.controller';
import { MicroMeasurementService } from './micro-measurement.service';

describe('MicroMeasurementController', () => {
  let microMeasurementController: MicroMeasurementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroMeasurementController],
      providers: [MicroMeasurementService],
    }).compile();

    microMeasurementController = app.get<MicroMeasurementController>(MicroMeasurementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microMeasurementController.getHello()).toBe('Hello World!');
    });
  });
});
