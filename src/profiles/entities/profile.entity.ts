import { Profile } from '@prisma/client';

export class ProfileEntity implements Profile {
  id: number;
  name: string;
}
