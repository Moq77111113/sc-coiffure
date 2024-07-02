import type { Day } from '~/types/date';

export const toFrenchDay = (day: Day) => {
  switch (day) {
    case 'sunday':
      return 'Dimanche';
    case 'monday':
      return 'Lundi';
    case 'tuesday':
      return 'Mardi';
    case 'wednesday':
      return 'Mercredi';
    case 'thursday':
      return 'Jeudi';
    case 'friday':
      return 'Vendredi';
    case 'saturday':
      return 'Samedi';
    default:
      throw new Error(`Unknown day: ${day}`);
  }
};

const formatter = (
  options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
) => Intl.DateTimeFormat('fr-FR', options);

export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) =>
  formatter(options).format(date);
