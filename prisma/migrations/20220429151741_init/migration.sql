-- DropForeignKey
ALTER TABLE "profile_permissions" DROP CONSTRAINT "profile_permissions_profile_id_fkey";

-- AddForeignKey
ALTER TABLE "profile_permissions" ADD CONSTRAINT "profile_permissions_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
