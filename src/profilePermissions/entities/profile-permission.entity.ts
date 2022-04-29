import { ProfilePermissions } from '@prisma/client';

export class ProfilePermissionEntity implements ProfilePermissions {
  id: number;
  menuName: string;
  menuLink: string;
  readValue: boolean;
  writeValue: boolean;
  deleteValue: boolean;
  profileId: number;
}
