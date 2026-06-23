import { BaseEntity } from '../../../shared/entities/base.entity';

import { Entity, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Entity()
export class CategoryProduct extends BaseEntity {
  @ManyToOne(() => Category, (e) => e.categoryProducts)
  category: Category;

  @ManyToOne(() => Product, (e) => e.categoryProducts)
  product: Product;
}
