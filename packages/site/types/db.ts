import type { ColumnType } from 'kysely';
import { TypeID } from 'typeid-js';

export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;

export interface Tokens {
  created_at: string;
  expires_at: string | null;
  id: Generated<TypeID<'tkn'> | null>;
  name: string;
  token: string;
  updated_at: string;
}

export interface DB {
  tokens: Tokens;
}
