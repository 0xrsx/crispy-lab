import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { BranchCategory } from './entities/branch-category.entity';
import { RestaurantTable } from './entities/restaurant-table.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Branch, BranchCategory, RestaurantTable]),
  ],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}
