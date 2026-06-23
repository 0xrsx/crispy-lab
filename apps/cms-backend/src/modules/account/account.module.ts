import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountMerchant } from './entities/account-merchant.entity';
import { Account } from './entities/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, AccountMerchant])],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
