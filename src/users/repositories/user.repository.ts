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
      select: {
        id: true,
        name: true,
        login: true,
        mail: true,
        profile: true,
      },
      skip: page * size,
      take: size,
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
    });
    const totalItems = results.length;
    return { results, totalItems };
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    return this.prisma.user.create({
      data: createUserDto,
      select: {
        id: true,
        name: true,
        login: true,
        mail: true,
        profile: true,
      },
    });
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
      select: {
        id: true,
        name: true,
        login: true,
        mail: true,
        profile: true,
      },
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
