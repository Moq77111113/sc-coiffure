export type ResultWithRecoverableError<T> = [T, null] | [null, Error]
