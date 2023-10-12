import type { Prettify } from "./object";

export type Day =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export type Time = `${number}:${number}`;

type TimeRange = [Time, Time];
export type Schedule = Prettify<{
  [key in Day]: [morning?: TimeRange, afternoon?: TimeRange];
}>;
