import { AuthModule } from './access-control/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MeasurementModule } from './measurement/measurement.module';
import { Module } from '@nestjs/common';
import { OrganizationModule } from './access-control/organization/organization.module';
import { RoleModule } from './access-control/role/role.module';
import { UserModule } from './access-control/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OrganizationModule,
    RoleModule,
    UserModule,
    AuthModule,
    MeasurementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
