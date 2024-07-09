import type { ColumnType } from 'kysely';

export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;

export interface Feed {
  caption: string | null;
  created_at: string;
  expires_at: string;
  external_id: string;
  id: Generated<string | null>;
  media_date: string;
  media_type: string;
  media_url: string;
  permalink: string;
  updated_at: string;
}

export interface Tokens {
  created_at: string;
  expires_at: string | null;
  id: Generated<string | null>;
  name: string;
  token: string;
  updated_at: string;
}

export interface DB {
  feed: Feed;
  tokens: Tokens;
}
