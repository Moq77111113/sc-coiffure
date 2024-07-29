import type { Category } from '~/types/price';

const introPrices = [
  'Principales prestations',
  [
    {
      name: 'Shampooing brushing',
      amounts: [1600, 2100, 2800],
    },

    {
      name: 'Shampooing coupe brushing',
      amounts: [2900, 3100, 3600],
    },
    {
      name: 'Shampooing coupe couleur avec amnoniaque',
      amounts: [4500, 5500, 6500],
    },
    {
      name: 'Shampooing coupe couleur sans amnoniaque',
      amounts: [5200, 6200, 7200],
    },
    { name: 'Shampooing coupe balayage soin', amounts: [5900, 6900, 7900] },
  ],
] satisfies Category;

export const categories = {
  introPrices,
} as const;
