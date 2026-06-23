import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, OneToMany } from 'typeorm';
import { CategoryProduct } from './category-product.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ nullable: true })
  displayOrder: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => CategoryProduct, (e) => e)
  categoryProducts: CategoryProduct[];
}
