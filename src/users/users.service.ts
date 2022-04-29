import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { ConflictError } from 'src/common/errors/types/ConflictError';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UserRepository) {}

  async paginate(page: number, size: number, sort: string, order: string, search: string) {
    const { results, totalItems } = await this.repository.paginate(page, size, sort, order, search);
    const totalPages = Math.ceil(totalItems / size) - 1;
    const currentPage = Number(page);

    return {
      results,
      pagination: {
        length: totalItems,
        size: size,
        lastPage: totalPages,
        page: currentPage,
        startIndex: currentPage * size,
        endIndex: currentPage * size + (size - 1),
      },
    };
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.generatePasswordEncryption(createUserDto.password);
    return this.repository.create(createUserDto);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }

  private async generatePasswordEncryption(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  private async checkPassword(password: string, userPassword: string): Promise<boolean> {
    const match = await bcrypt.compare(password, userPassword);
    if (!match) {
      throw new ConflictError('Senha incorreta.');
    }
    return match;
  }
}
