import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Typed alias for Object.keys
 */
export const keys = <T extends Record<string, unknown>, K extends keyof T>(obj: T): Readonly<K[]> =>
  Object.keys(obj) as K[]

/**
 *
 * Typed alias for Object.entries
 */
export const entries = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
): Readonly<[K, T[K]][]> => Object.entries(obj) as [K, T[K]][]
