import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Config {
  id: Generated<number | null>;
  key: string;
  value: string | null;
}

export interface Feed {
  caption: string | null;
  created_at: Generated<string>;
  expires_at: string;
  external_id: string;
  id: Generated<number | null>;
  media_date: string;
  media_type: string;
  media_url: string;
  permalink: string;
  updated_at: Generated<string>;
}

export interface Tokens {
  created_at: Generated<string>;
  expires_at: string | null;
  id: Generated<number | null>;
  name: string;
  token: string;
  updated_at: Generated<string>;
}

export interface DB {
  config: Config;
  feed: Feed;
  tokens: Tokens;
}
