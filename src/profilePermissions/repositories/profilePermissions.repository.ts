import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfilePermissionsDto } from '../dto/update-profile-permissions.dto';
import { ProfilePermissionEntity } from '../entities/profile-permission.entity';

@Injectable()
export class ProfilePermissionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(profilePermission: UpdateProfilePermissionsDto): Promise<ProfilePermissionEntity> {
    return this.prisma.profilePermissions.update({
      where: {
        id: profilePermission.id,
      },
      data: profilePermission,
    });
  }

  async remove(id: number): Promise<ProfilePermissionEntity> {
    return this.prisma.profilePermissions.delete({
      where: {
        id,
      },
    });
  }
}
