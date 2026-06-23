import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchProduct } from './entities/branch-product.entity';
import { BranchProductTag } from './entities/branch-product-tag.entity';
import { BranchProductOption } from './entities/branch-product-option.entity';
import { BranchProductOptionGroup } from './entities/branch-product-option-group.entity';
import { BranchCategoryBranchProduct } from './entities/branch-category-branch-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BranchProduct,
      BranchProductTag,
      BranchProductOption,
      BranchProductOptionGroup,
      BranchCategoryBranchProduct,
    ]),
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
