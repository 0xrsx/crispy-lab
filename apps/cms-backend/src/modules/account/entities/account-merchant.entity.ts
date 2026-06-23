import { Entity, ManyToOne } from 'typeorm';
import { Account } from './account.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';
import { Merchant } from '../../merchant/entities/merchant.entity';

@Entity()
export class AccountMerchant extends BaseEntity {
  @ManyToOne(() => Account, (e) => e.merchants)
  account: Account;

  @ManyToOne(() => Merchant, (e) => e.accounts)
  merchant: Merchant;
}
