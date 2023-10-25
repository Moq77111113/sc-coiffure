import { address, latitude, longitude } from './location';
import { social } from './social';

export const description =
  'Votre coiffeur sur le port de La Seyne-sur-Mer. SC-Coiffure, experts capillaires pour tous. Ambiance conviviale, tarifs exceptionnels. Réservez maintenant!';
export const title = 'SC-Coiffure - Votre coiffeur à La Seyne-sur-Mer';

const keywords = [
  'Coiffure',
  'Salon de coiffure',
  'Coupe de cheveux',
  'Coloration',
  'Boucles',
  'Shampoing',
  'Brushing',
  'SC-Coiffure',
  'Var',
  '83',
  'La Seyne-sur-Mer',
  'Port',
  'Permanente',
  'Lissage',
  'Chignon',
  'Extensions de cheveux',
];

const schema = ({ canonical, image }: { canonical: URL; image: URL }) => ({
  '@context': 'http://schema.org',
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
  openingHours: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude, // Ajout de la latitude de votre emplacement
    longitude, // Ajout de la longitude de votre emplacement
  },
  keywords: keywords.join(', '),
});

export const seo = {
  description,
  title,
  schema,
};
