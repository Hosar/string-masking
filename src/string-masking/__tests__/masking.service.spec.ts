import { Test, TestingModule } from '@nestjs/testing';
import { MaskingService } from '../masking.service';

describe('MaskingService', () => {
  let service: MaskingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaskingService],
    }).compile();

    service = module.get<MaskingService>(MaskingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should resolve the following inputs', () => {
    const eg1 = '4556364607935616';
    const eg2 = '64607935616';
    const eg3 = '1';
    const eg4 = '';
    const eg5 = 'Skippy';
    const eg6 = 'Nananananananananananananananana Batman!';
    const expectedOutput = '############5616';
    const expectedOutput2 = '#######5616';
    const expectedOutput3 = '1';
    const expectedOutput4 = '';
    const expectedOutput5 = '##ippy';
    const expectedOutput6 = '####################################man!';

    expect(service.mask(eg1)).toEqual(expectedOutput);
    expect(service.mask(eg2)).toEqual(expectedOutput2);
    expect(service.mask(eg3)).toEqual(expectedOutput3);
    expect(service.mask(eg4)).toEqual(expectedOutput4);
    expect(service.mask(eg5)).toEqual(expectedOutput5);
    expect(service.mask(eg6)).toEqual(expectedOutput6);
  });
});
