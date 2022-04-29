import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileRepository } from './repositories/profile.repository';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService, PrismaService, ProfileRepository],
})
export class ProfilesModule {}
