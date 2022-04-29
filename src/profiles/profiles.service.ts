import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileRepository } from './repositories/profile.repository';

@Injectable()
export class ProfilesService {
  constructor(private readonly repository: ProfileRepository) {}

  create(createProfileDto: CreateProfileDto) {
    return this.repository.create(createProfileDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const profile = await this.repository.findOne(id);

    if (!profile) {
      throw new NotFoundError('Perfil não encontrado.');
    }

    return profile;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.repository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
