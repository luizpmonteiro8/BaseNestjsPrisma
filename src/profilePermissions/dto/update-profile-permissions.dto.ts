import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProfilePermissionsDto {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  readonly id: number;

  @IsNotEmpty({ message: 'O nome do menu não pode ser vazio.' })
  @IsString({ message: 'O nome do menu não pode ser vazio.' })
  menuName: string;

  @IsNotEmpty({ message: 'O link do menu não pode ser vazio.' })
  @IsString({ message: 'O link do menu não pode ser vazio.' })
  menuLink: string;

  @IsBoolean()
  readValue: boolean;

  @IsBoolean()
  writeValue: boolean;

  @IsBoolean()
  deleteValue: boolean;

  @IsNumber({}, { message: 'O perfil não pode ser vazio.' })
  readonly profileId: number;
}
