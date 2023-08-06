import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! from simple todo app with nest js and mysql with typeorm';
  }
}
