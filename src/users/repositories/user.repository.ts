import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(page: number, size: number, sort: string, order: string, search: string) {
    const results = await this.prisma.user.findMany({
      skip: page * size,
      take: size,
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
      select: { password: false },
    });
    const totalItems = results.length;
    return { results, totalItems };
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
