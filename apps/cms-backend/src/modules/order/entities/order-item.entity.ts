import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { BranchProduct } from '../../menu/entities/branch-product.entity';
import { OrderItemOption } from './order-item-option.entity';

@Entity()
export class OrderItem extends BaseEntity {
  @ManyToOne(() => Order, (e) => e.orderItems)
  order: Order;

  @ManyToOne(() => BranchProduct, (e) => e.orderItems)
  branchProduct: BranchProduct;

  @Column()
  productName: string;

  @Column()
  productPrice: number;

  @Column()
  Quantity: number;

  @Column()
  total: number;

  @Column()
  note: string;

  @Column()
  status: string;

  @OneToMany(() => OrderItemOption, (e) => e.orderItem)
  orderItemOption: OrderItemOption[];
}
