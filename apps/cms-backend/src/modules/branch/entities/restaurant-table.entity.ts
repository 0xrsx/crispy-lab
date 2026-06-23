import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Branch } from './branch.entity';

@Entity()
export class RestaurantTable extends BaseEntity {
  @ManyToOne(() => Branch, (e) => e.tables)
  branch: Branch;

  @Column('varchar')
  name: string;

  @Column('varchar', { unique: true })
  qrToken: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Order, (e) => e.table)
  orders: Order[];
}
