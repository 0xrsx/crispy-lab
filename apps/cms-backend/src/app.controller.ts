import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiResponseProperty } from '@nestjs/swagger';
import { randomUUID, UUID } from 'crypto';
import { AppService } from './app.service';

export class Ex1 {
  @ApiProperty({
    description: 'The unique identification integer',
    example: 1
  })
  id!: string;
  @ApiProperty({
    description: 'The unique identification integer',
    example: 1
  })
  name!: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiResponse({
    type: Ex1,
  })
  getRandomName(): Ex1 {
    return {
      id: randomUUID(),
      name: 'test'
    };
  }
}
