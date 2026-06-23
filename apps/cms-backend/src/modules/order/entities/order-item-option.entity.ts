import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne } from 'typeorm';
import { OrderItem } from './order-item.entity';
import { BranchProductOption } from '../../menu/entities/branch-product-option.entity';

@Entity()
export class OrderItemOption extends BaseEntity {
  @ManyToOne(() => OrderItem, (e) => e.orderItemOption)
  orderItem: OrderItem;

  @ManyToOne(() => BranchProductOption, (e) => e.orderItemOption)
  branchProductOption: BranchProductOption;

  @Column()
  optionName: string;

  @Column()
  optionPrice: number;
}
