export const entries = <K extends string, V>(object: Record<K, V>): [K, V][] =>
  Object.entries(object) as [K, V][];

export const keys = <K extends string, V>(object: Record<K, V>): K[] =>
  Object.keys(object) as K[];

export const chunk = <T>(array: T[], size: number): T[][] => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
