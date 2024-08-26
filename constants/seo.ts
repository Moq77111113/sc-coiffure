import { location } from './location'
import { social } from './social'

export const companyName = 'SC Coiffure'
export const description =
  'SC Coiffure, votre coiffeur de confiance sur le port de La Seyne-sur-Mer. Avec ou sans rendez-vous, profitez de notre expertise pour sublimer votre style.'
export const title = 'SC Coiffure - Votre coiffeur à La Seyne-sur-Mer'

const siteName = 'SC Coiffure'
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
  'Shampooing',
  'Brushing',
  'SC-Coiffure',
  'SC Coiffure',
  'sans rdv',
  'Sans rendez-vous',
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
  'No appointment',
]

const schema = ({ canonical, image }: { canonical: URL; image: URL }) => ({
  '@context': ['http://schema.org', { '@language': 'fr-fr' }],
  '@type': 'HairSalon',
  'name': siteName,
  'description': description,
  'image': image,
  'url': canonical,
  'sameAs': [social.facebook, social.instagram],
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': location.address.city,
    'postalCode': location.address.zip,
    'streetAddress': location.address.street,
  },
  'telephone': social.phone,
  'email': social.email,

  'priceRange': '20€ - 100€',
  'paymentAccepted': 'Cash, Credit Card',
  'currenciesAccepted': 'EUR',
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '09:00:00',
      'closes': '17:00:00',
    },
  ],
  'geo': {
    '@type': 'GeoCoordinates',
    latitude: location.latitude,
    longitude: location.longitude,
  },
  'keywords': keywords.join(', '),
})

export const seo = {
  description,
  title,
  schema,
  siteName,
}
