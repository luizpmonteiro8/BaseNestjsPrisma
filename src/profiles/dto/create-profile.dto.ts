import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateProfilePermissionsDto } from 'src/profilePermissions/dto/create-profile-permissions.dto';

export class CreateProfileDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProfilePermissionsDto)
  profilePermissions: CreateProfilePermissionsDto[];
}
