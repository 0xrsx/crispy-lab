import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { ProductOption } from './product-option.entity';

@Entity()
export class ProductOptionGroup extends BaseEntity {
  @ManyToOne(() => Product, (e) => e.optionGroups)
  product: Product;

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

  @OneToMany(() => ProductOption, (e) => e.group)
  options: ProductOption[];
}
