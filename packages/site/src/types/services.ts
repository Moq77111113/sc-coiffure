import type { ImageMetadata } from "astro";

interface ServiceBase {
  description: string;
  title: string;
}

type WithImage<T> = T & { image: ImageMetadata; icon: undefined };
type WithIcon<T> = T & { icon: string; image: undefined };

export type Service = WithImage<ServiceBase> | WithIcon<ServiceBase>;
