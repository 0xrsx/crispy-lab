import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BranchProduct } from './branch-product.entity';
import { BranchProductOption } from './branch-product-option.entity';

@Entity()
export class BranchProductOptionGroup extends BaseEntity {
  @ManyToOne(() => BranchProduct, (e) => e.optionGroups)
  branchProduct: BranchProduct;

  @Column({ nullable: true })
  displayOrder: number;

  @Column()
  name: string;

  @Column('bit')
  required: boolean;

  @Column()
  minSelection: number;

  @Column()
  maxSelection: number;

  @Column('bit')
  isAvailable: boolean;

  @Column('bit')
  isActive: boolean;

  @OneToMany(() => BranchProductOption, (e) => e.optionGroups)
  options: BranchProductOption[];
}
