import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeminiService } from './gemini.service'; // Import GeminiService

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GeminiService], // Add GeminiService to providers
})
export class AppModule {}
