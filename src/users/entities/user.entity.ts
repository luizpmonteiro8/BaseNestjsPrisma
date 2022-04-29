import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  mail: string;
  login: string;
  password: string;
  profileId: number;
}
