import { Injectable } from '@nestjs/common';
import { ProfilePermissionsRepository } from 'src/profilePermissions/repositories/profilePermissions.repository';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileRepository } from './repositories/profile.repository';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly repository: ProfileRepository,
    private readonly profilePermissionsrepository: ProfilePermissionsRepository,
  ) {}

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

  findAll() {
    return this.repository.findAll();
  }

  create(createProfileDto: CreateProfileDto) {
    return this.repository.create(createProfileDto);
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    await this.repository.update(id, updateProfileDto.name);

    const updateProfilePermissions = updateProfileDto.profilePermissions.map(async profilePermission => {
      return await this.profilePermissionsrepository.update(profilePermission);
    });

    await Promise.all(updateProfilePermissions);
    return this.repository.findOne(id);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
