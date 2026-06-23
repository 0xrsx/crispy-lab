import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductOptionGroup } from './product-option-group.entity';

@Entity()
export class ProductOption extends BaseEntity {
  @ManyToOne(() => ProductOptionGroup, (e) => e.options)
  group: ProductOptionGroup;

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
}
