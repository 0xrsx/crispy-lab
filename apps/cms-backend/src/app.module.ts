import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './modules/order/order.module';
import { TagModule } from './modules/tag/tag.module';
import { MenuModule } from './modules/menu/menu.module';
import { ProductModule } from './modules/product/product.module';
import { BranchModule } from './modules/branch/branch.module';
import { MerchantModule } from './modules/merchant/merchant.module';
import { AccountModule } from './modules/account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: appConfig.CMS_DB_HOST,
      port: appConfig.CMS_DB_PORT,
      username: appConfig.CMS_DB_USERNAME,
      password: appConfig.CMS_DB_PASSWORD,
      database: appConfig.CMS_DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    AccountModule,
    MerchantModule,
    BranchModule,
    ProductModule,
    MenuModule,
    TagModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
