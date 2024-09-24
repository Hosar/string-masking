import { MaskingService } from './masking.service';
export declare class StringMaskingController {
    private readonly maskifyService;
    constructor(maskifyService: MaskingService);
    maskString(input: string): Promise<string>;
}
