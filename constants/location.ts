const address = {
  street: '5 Av. Garibaldi',
  city: 'La Seyne-sur-Mer',
  state: '',
  zip: '83500',
} as const

const longitude = 5.882508911974143 as const
const latitude = 43.100062070395175 as const
const mapsHref =
  'https://www.google.com/maps/place/SC+Coiffure,+5+Av.+Garibaldi,+83500+La+Seyne-sur-Mer/@43.099888,5.882821,18z/data=!4m6!3m5!1s0x12c903ae1434a779:0x8848fd1d6ccbd000!8m2!3d43.1000368!4d5.8824214!16s%2Fg%2F11vjhbtlpv' as const

export const location = { address, longitude, latitude, mapsHref }
