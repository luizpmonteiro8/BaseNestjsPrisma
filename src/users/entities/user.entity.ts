import { User } from '@prisma/client';

export class UserEntity implements User {
  id: bigint;
  name: string;
  mail: string;
  login: string;
  password: string;
  profileId: bigint;
}
