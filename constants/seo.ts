import type { Category } from '~/types/prices'
import { location } from './location'
import { social } from './social'

export const companyName = 'SC Coiffure'
export const description =
  'SC Coiffure, votre coiffeur de confiance sur le port de La Seyne-sur-Mer. Avec ou sans rendez-vous, profitez de notre expertise pour sublimer votre style.'
export const priceDescription =
  'écouvrez les tarifs de nos services de coiffure chez SC Coiffure, avec des options pour tous les budgets.'
export const title = 'SC Coiffure - Votre coiffeur à La Seyne-sur-Mer'
export const priceTitle = 'Tarifs - SC Coiffure'
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

const indexSchema = ({ canonical, image }: { canonical: URL; image: URL }) => ({
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
    'latitude': location.latitude,
    'longitude': location.longitude,
  },
  'keywords': keywords.join(', '),
})

type PriceList = {
  name: string
  description?: string
  amount: number
  category: string
}[]

export const priceSchema = ({
  page,

  categories,
}: {
  page: URL

  categories: Category[]
}) => {
  const priceAsList = (categories: Category[]): PriceList => {
    return categories.reduce<PriceList>((acc, { name, prices, categories: subCategories }) => {
      if (prices?.length) {
        acc = acc.concat(
          prices.map(({ amount, name: price }) => ({ name: price, amount, category: name })),
        )
      }
      if (subCategories?.length) {
        acc = acc.concat(
          priceAsList(subCategories.map((_) => ({ ..._, name: `${name} - ${_.name}` }))),
        )
      }
      return acc
    }, [])
  }

  return {
    '@context': ['http://schema.org', { '@language': 'fr-fr' }],
    '@type': 'OfferCatalog',
    'name': `Tarifs - ${siteName}`,
    'description': priceDescription,
    'url': page,
    'itemListElement': priceAsList(categories).map(({ name, category, description, amount }) => ({
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': name,
        'description': description,
        'serviceType': category,
      },
      'price': amount,
      'priceCurrency': 'EUR',
    })),
  }
}

export const seo = {
  description,
  priceDescription,
  priceTitle,
  title,
  indexSchema,
  priceSchema,
  siteName,
}
