import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GeminiService } from './gemini.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('工具模块')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly geminiService: GeminiService,
  ) {}

  @Get('getGeminiModelList')
  @ApiOperation({
    summary: 'getGeminiModelList',
  })
  getGeminiModelList(): string {
    return this.geminiService.getGeminiModelList();
  }
}
