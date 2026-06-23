import { BaseEntity } from '../../../shared/entities/base.entity';

import { Entity, ManyToOne } from 'typeorm';
import { BranchProduct } from './branch-product.entity';
import { Tag } from '../../tag/entities/tag.entity';

@Entity()
export class BranchProductTag extends BaseEntity {
  @ManyToOne(() => BranchProduct, (e) => e.tags)
  branchProduct: BranchProduct;

  @ManyToOne(() => Tag, (e) => e.branchProducts)
  tag: Tag;
}
