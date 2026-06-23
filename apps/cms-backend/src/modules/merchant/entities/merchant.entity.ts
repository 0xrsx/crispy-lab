import { AccountMerchant } from '../../account/entities/account-merchant.entity';
import { Branch } from '../../branch/entities/branch.entity';
import { Product } from '../../product/entities/product.entity';
import { Tag } from '../../tag/entities/tag.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Merchant extends BaseEntity {
  @OneToMany(() => AccountMerchant, (e) => e.merchant)
  accounts: AccountMerchant[];

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  description?: string;

  @OneToMany(() => Branch, (e) => e.merchant)
  branches: Branch[];

  @OneToMany(() => Tag, (e) => e.merchant)
  tags: Tag[];

  @OneToMany(() => Product, (e) => e.merchant)
  products: Product[];
}
