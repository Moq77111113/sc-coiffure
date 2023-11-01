import { address, latitude, longitude } from './location';
import { social } from './social';

export const companyName = 'SC Coiffure';
export const description =
  'Votre coiffeur sur le port de La Seyne-sur-Mer. SC Coiffure, experts capillaires pour tous. Ambiance conviviale, tarifs exceptionnels. Réservez maintenant!';
export const title = 'SC Coiffure - Votre coiffeur à La Seyne-sur-Mer';

const keywords = [
  'Coiffure',
  'Coiffeur',
  'Salon de coiffure',
  'Coupe de cheveux',
  'Cheveux',
  'Petits prix',
  'Accessible',
  'Coloration',
  'Boucles',
  'Shampoing',
  'Brushing',
  'SC-Coiffure',
  'SC Coiffure',
  'Var',
  '83',
  'La Seyne-sur-Mer',
  'La Seyne',
  'Toulon',
  'Six-Fours',
  'Ollioules',
  'Port',
  'Convivial',
  'Permanente',
  'Lissage',
  'Mèches',
  'Hairdresser',
  'Haircut',
  'Hair',
  'Small prices',
  'Coloring',
  'Curls',
  'Shampoo',
];

const schema = ({ canonical, image }: { canonical: URL; image: URL }) => ({
  '@context': ['http://schema.org', { '@language': 'fr-fr' }],
  '@type': 'BeautySalon',
  name: title,
  description: description,
  image: image,
  url: canonical,
  sameAs: [social.facebook, social.instagram],
  address: {
    '@type': 'PostalAddress',
    addressLocality: address.city,
    postalCode: address.zip,
    streetAddress: address.street,
  },
  telephone: social.phone,
  email: social.email,

  priceRange: '20€ - 100€', // Ajustement de la plage de prix
  paymentAccepted: 'Cash, Credit Card',
  currenciesAccepted: 'EUR',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00:00',
      closes: '18:00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00:00',
      closes: '17:00:00',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude,
    longitude,
  },
  keywords: keywords.join(', '),
});

export const seo = {
  description,
  title,
  schema,
};
