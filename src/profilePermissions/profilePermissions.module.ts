import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { ProfilePermissionsRepository } from './repositories/profilePermissions.repository';

@Module({
  controllers: [],
  providers: [PrismaService, ProfilePermissionsRepository],
})
export class ProfilePermissionsModule {}
