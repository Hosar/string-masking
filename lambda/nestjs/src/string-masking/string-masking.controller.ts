import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { MaskingService } from './masking.service';

@ApiTags('string-masking')
@Controller('string-masking')
export class StringMaskingController {
  constructor(private readonly maskifyService: MaskingService) {}

  @Get()
  @ApiQuery({ name: 'input', type: String, required: true })
  async maskString(@Query('input') input: string): Promise<string> {
    const masked = this.maskifyService.mask(input);
    return masked;
  }
}
