import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BranchProductTag } from './branch-product-tag.entity';
import { Branch } from '../../branch/entities/branch.entity';
import { Product } from '../../product/entities/product.entity';
import { BranchProductOptionGroup } from './branch-product-option-group.entity';
import { BranchCategoryBranchProduct } from './branch-category-branch-product.entity';
import { OrderItem } from '../../order/entities/order-item.entity';

@Entity()
export class BranchProduct extends BaseEntity {
  @OneToMany(() => BranchProductTag, (e) => e.branchProduct)
  tags: [];

  @ManyToOne(() => Branch, (e) => e.branchProducts)
  branch: Branch;

  @ManyToOne(() => Product, (e) => e.branchProducts)
  product: Product;

  @Column()
  price: number;

  @Column('bit')
  isAvailable: boolean;

  @Column('bit')
  isActive: boolean;

  @OneToMany(() => BranchProductOptionGroup, (e) => e.branchProduct)
  optionGroups: BranchProductOptionGroup[];

  @OneToMany(() => BranchCategoryBranchProduct, (e) => e.branchProduct)
  branchCategory: BranchCategoryBranchProduct[];

  @OneToMany(() => OrderItem, (e) => e.branchProduct)
  orderItems: OrderItem[];
}
