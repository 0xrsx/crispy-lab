import { BranchCategoryBranchProduct } from '../../menu/entities/branch-category-branch-product.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class BranchCategory extends BaseEntity {
  @Column({ nullable: true })
  displayOrder: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => BranchCategoryBranchProduct, (e) => e.branchCategory)
  branchProduct: BranchCategoryBranchProduct[];
}
