import { Merchant } from '../../merchant/entities/merchant.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductOptionGroup } from './product-option-group.entity';
import { BranchProduct } from '../../menu/entities/branch-product.entity';
import { CategoryProduct } from './category-product.entity';

@Entity()
export class Product extends BaseEntity {
  @ManyToOne(() => Merchant, (e) => e.products)
  merchant: Merchant;

  @Column({ nullable: true })
  displayOrder: number;

  @Column({ nullable: true })
  image: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  price: number;

  @Column('bit')
  isAvailable: boolean;

  @Column('bit')
  isActive: boolean;

  @OneToMany(() => ProductOptionGroup, (e) => e.product)
  optionGroups: ProductOptionGroup[];

  @OneToMany(() => BranchProduct, (e) => e.product)
  branchProducts: BranchProduct[];

  @OneToMany(() => CategoryProduct, (e) => e.product)
  categoryProducts: CategoryProduct[];
}
