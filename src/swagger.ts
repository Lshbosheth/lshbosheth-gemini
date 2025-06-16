import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as packageConfig from '../package.json';
import { INestApplication } from '@nestjs/common';

export const generateDocument = (app: INestApplication<any>) => {
  const swaggerCDN = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.7.2';
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/swagger', app, document, {
    customCssUrl: [`${swaggerCDN}/swagger-ui.css`],
    customJs: [
      `${swaggerCDN}/swagger-ui-bundle.js`,
      `${swaggerCDN}/swagger-ui-standalone-preset.js`,
    ],
    customSiteTitle: 'Lshbosheth Gemini | API',
    customfavIcon:
      'https://radzcxbxmpc5hqj1.public.blob.vercel-storage.com/ce9315b5-e569-4f24-be25-2926db620425-iFL6GIhgqpPysaBMIGCR4QP2yJ2M7S.png',
  });
};
