import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome não pode ser vazio.' })
  name: string;
}
