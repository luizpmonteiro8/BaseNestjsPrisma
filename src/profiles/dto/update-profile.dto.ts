import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { UpdateProfilePermissionsDto } from 'src/profilePermissions/dto/update-profile-permissions.dto';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateProfilePermissionsDto)
  profilePermissions: UpdateProfilePermissionsDto[];
}
