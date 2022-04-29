import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  mail: string;

  @IsNotEmpty({ message: 'O login não pode ser vazio.' })
  @IsString({ message: 'O login não pode ser vazio.' })
  login: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazio.' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  @IsString({ message: 'A senha não pode ser vazio.' })
  password: string;

  @IsNotEmpty({ message: 'O perfil não pode ser vazio.' })
  @IsNumber({}, { message: 'O perfil não pode ser vazio.' })
  profileId: number;
}
