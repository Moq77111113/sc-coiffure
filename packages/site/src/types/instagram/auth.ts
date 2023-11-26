import * as z from 'zod';

export const authSchema = z.string();

export type Auth = z.infer<typeof authSchema>;
