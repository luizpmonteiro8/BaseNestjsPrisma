import { DatabaseError } from '../types/DatabaseError';
import { ForeignKeyConstraintError } from '../types/ForeignKeyConstraintError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
  ForeignKeyConstraintFail = 'P2003',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    case PrismaErrors.ForeignKeyConstraintFail:
      return new ForeignKeyConstraintError();

    default:
      return new DatabaseError(e.message);
  }
};
