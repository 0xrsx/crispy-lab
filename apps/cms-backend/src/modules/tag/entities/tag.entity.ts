import { BranchProductTag } from '../../menu/entities/branch-product-tag.entity';
import { Merchant } from '../../merchant/entities/merchant.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

import { Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @ManyToOne(() => Merchant, (e) => e.tags)
  merchant: Merchant;

  @OneToMany(() => BranchProductTag, (e) => e.tag)
  branchProducts: BranchProductTag[];
}
