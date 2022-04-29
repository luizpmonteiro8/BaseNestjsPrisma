import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { ProfileEntity } from '../entities/profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto): Promise<ProfileEntity> {
    return this.prisma.profile.create({
      data: createProfileDto,
    });
  }

  async findAll(): Promise<ProfileEntity[]> {
    return await this.prisma.profile.findMany();
  }

  async findOne(id: number): Promise<ProfileEntity> {
    return this.prisma.profile.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<ProfileEntity> {
    return this.prisma.profile.update({
      where: {
        id,
      },
      data: updateProfileDto,
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
