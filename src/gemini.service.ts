import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
@Injectable()
export class GeminiService {
  constructor() {}

  async getGeminiModelList() {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: 'Explain how AI works in a few words',
    });
    return response.text;
  }
}
