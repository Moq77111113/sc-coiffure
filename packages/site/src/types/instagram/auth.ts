import * as z from 'zod';
export const igTokenSchema = z.string();
export type IgToken = z.infer<typeof igTokenSchema>;

export const igCodeSchema = z.string().optional();
export type IgCode = z.infer<typeof igCodeSchema>;
