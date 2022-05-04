import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProfilePermissionsDto {
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
}
