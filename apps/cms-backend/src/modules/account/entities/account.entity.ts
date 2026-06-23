import { BaseEntity } from '../../../shared/entities/base.entity';

import { Entity, OneToMany } from 'typeorm';
import { AccountMerchant } from './account-merchant.entity';

@Entity()
export class Account extends BaseEntity {
  @OneToMany(() => AccountMerchant, (e) => e.account)
  merchants: AccountMerchant[];
}
