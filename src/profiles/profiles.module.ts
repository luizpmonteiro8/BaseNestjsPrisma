import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileRepository } from './repositories/profile.repository';
import { ProfilePermissionsRepository } from 'src/profilePermissions/repositories/profilePermissions.repository';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService, PrismaService, ProfileRepository, ProfilePermissionsRepository],
})
export class ProfilesModule {}
