import type { Address } from '~/types/location';

const address = {
  street: '5 Av. Garibaldi',
  city: 'La Seyne-sur-Mer',
  state: '',
  zip: '83500',
} as const satisfies Address;

const longitude = 5.882508911974143 as const;
const latitude = 43.100062070395175 as const;
const mapsHref = 'https://maps.app.goo.gl/U2Mha3L5UTkhkzhK7' as const;

export { address, longitude, latitude, mapsHref };
