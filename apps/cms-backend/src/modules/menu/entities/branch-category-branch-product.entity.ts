import { BranchCategory } from '../../branch/entities/branch-category.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

import { Entity, ManyToOne } from 'typeorm';
import { BranchProduct } from './branch-product.entity';

@Entity()
export class BranchCategoryBranchProduct extends BaseEntity {
  @ManyToOne(() => BranchCategory, (e) => e.branchProduct)
  branchCategory: BranchCategory;

  @ManyToOne(() => BranchProduct, (e) => e.branchCategory)
  branchProduct: BranchProduct;
}
