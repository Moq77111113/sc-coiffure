import type { Category } from '~/types/price';

const introPrices = [
  'Principales prestations',
  [
    {
      name: 'Shampooing brushing',
      amounts: [1900, 2100, 3100],
    },

    {
      name: 'Shampooing coupe brushing',
      amounts: [3200, 3400, 3900],
    },
    {
      name: 'Shampooing coupe couleur avec ammoniaque',
      amounts: [4800, 5800, 6800],
    },
    {
      name: 'Shampooing coupe couleur sans ammoniaque',
      amounts: [5800, 6500, 7500],
    },
    { name: 'Shampooing coupe balayage soin', amounts: [5900, 6900, 7900] },
  ],
] satisfies Category;

export const categories = {
  introPrices,
} as const;
