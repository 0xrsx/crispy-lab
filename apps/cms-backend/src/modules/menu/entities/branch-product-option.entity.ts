import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BranchProductOptionGroup } from './branch-product-option-group.entity';
import { OrderItemOption } from '../../order/entities/order-item-option.entity';

@Entity()
export class BranchProductOption extends BaseEntity {
  @ManyToOne(() => BranchProductOptionGroup, (e) => e.options)
  optionGroups: BranchProductOptionGroup;

  @Column({ nullable: true })
  displayOrder: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column('bit')
  isAvailable: boolean;

  @Column('bit')
  isActive: boolean;

  @OneToMany(() => OrderItemOption, (e) => e.branchProductOption)
  orderItemOption: OrderItemOption;
}
