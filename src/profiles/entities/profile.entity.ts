import { Profile } from '@prisma/client';

export class ProfileEntity implements Profile {
  id: bigint;
  name: string;
}
