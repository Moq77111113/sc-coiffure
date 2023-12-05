/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  // Data
  readonly SECRET: string;
  readonly PATH_TO_DATA: string;
  // API
  readonly API_SECRET: string;

  // Instagram
  readonly IG_CLIENT_ID: string;
  readonly IG_REDIRECT_URL: string;
  readonly IG_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
