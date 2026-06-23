import { Branch } from '../../branch/entities/branch.entity';
import { RestaurantTable } from '../../branch/entities/restaurant-table.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order extends BaseEntity {
  @ManyToOne(() => Branch, (e) => e.orders)
  branch: Branch;

  @ManyToOne(() => RestaurantTable, (e) => e.orders, { nullable: true })
  table: RestaurantTable;

  @Column()
  channel: string;

  @Column()
  orderNo: string;

  @Column()
  status: string;

  @Column()
  subtotal: number;

  @Column()
  discount: number;

  @Column()
  total: number;

  @OneToMany(() => OrderItem, (e) => e.order)
  orderItems: OrderItem[];
}
