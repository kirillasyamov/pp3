import { NestFactory } from '@nestjs/core';
import { AppMoudle } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppMoudle);

    await app.listen(PORT, () => console.log(`SERVER started`));
  } catch (e) {
    console.log(e);
  }
};

start();
