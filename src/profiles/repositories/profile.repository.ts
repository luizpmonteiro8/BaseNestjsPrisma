import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { ProfileEntity } from '../entities/profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(page: number, size: number, sort: string, order: string, search: string) {
    const results = await this.prisma.profile.findMany({
      skip: page * size,
      take: size,
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
      include: { profilePermissions: true },
    });
    const totalItems = results.length;
    return { results, totalItems };
  }

  async findAll(): Promise<ProfileEntity[]> {
    return await this.prisma.profile.findMany();
  }

  async findOne(id: number): Promise<ProfileEntity> {
    return this.prisma.profile.findUnique({
      where: {
        id,
      },
      include: { profilePermissions: true },
    });
  }

  async create(createProfileDto: CreateProfileDto): Promise<ProfileEntity> {
    return this.prisma.profile.create({
      data: {
        name: createProfileDto.name,
        profilePermissions: {
          create: createProfileDto.profilePermissions,
        },
      },
    });
  }

  async update(id: number, updateProfileName: string): Promise<ProfileEntity> {
    return this.prisma.profile.update({
      where: {
        id,
      },
      data: {
        name: updateProfileName,
      },
    });
  }

  async remove(id: number): Promise<ProfileEntity> {
    return this.prisma.profile.delete({
      where: {
        id,
      },
    });
  }
}
