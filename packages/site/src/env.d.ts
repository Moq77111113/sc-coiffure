/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
  readonly SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
