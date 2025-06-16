import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from "@google/genai";
@Injectable()
export class GeminiService {
  constructor() {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    // const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  }

  getGeminiModelList() {
    // this.ai.listModels().then((response) => {
    //   console.log(response);
    // });
    return 'Gemini Model List';
  }
}
