import { Merchant } from '../../merchant/entities/merchant.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { RestaurantTable } from './restaurant-table.entity';
import { BranchProduct } from '../../menu/entities/branch-product.entity';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class Branch extends BaseEntity {
  @ManyToOne(() => Merchant, (e) => e.branches)
  merchant: Merchant;

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  description?: string;

  @Column('varchar')
  openAt: string;

  @Column('varchar')
  closeAt: string;

  @Column('bit')
  isAvailable: boolean;

  @Column('bit')
  isActive: boolean;

  @OneToMany(() => RestaurantTable, (e) => e.branch)
  tables: RestaurantTable[];

  @OneToMany(() => BranchProduct, (e) => e.branch)
  branchProducts: BranchProduct[];

  @OneToMany(() => Order, (e) => e.branch)
  orders: Order[];
}
