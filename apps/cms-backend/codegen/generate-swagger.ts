import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';
import { AppModule } from '../src/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('CMS APIs')
        .setDescription('The CMS APIs')
        .setVersion('1.0')
        .build();

    const document = () => SwaggerModule.createDocument(app, config);
    console.log(document(), path.join(process.cwd(), 'openapi.yaml'))

    writeFileSync(path.join(process.cwd(), 'apps/cms-backend/codegen/openapi.yaml'), yaml.dump(document(), { noRefs: true }));

    await app.close();
}
bootstrap();
