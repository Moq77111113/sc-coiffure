import { Brands } from './brands'
import { Phone, ArrowRight } from 'lucide-vue-next'
import StarIcon from './StarIcon.vue'
const Icons = {
  ...Brands,
  Phone,
  ArrowRight,
  Star: StarIcon,
}

export { Icons, Brands as BrandIcons }
