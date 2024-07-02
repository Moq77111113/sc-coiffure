import type { Day, Schedule } from '~/types/date';

export const dayOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] satisfies Day[];

export const schedule = {
  monday: [],
  tuesday: [['09:00', '17:00']],
  wednesday: [['09:00', '17:00']],
  thursday: [['09:00', '17:00']],
  friday: [['09:00', '17:00']],
  saturday: [['09:00', '17:00']],
  sunday: [],
} satisfies Schedule;
