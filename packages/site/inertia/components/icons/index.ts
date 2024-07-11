import { ArrowRight, Mail, Map as MapIcon, Phone } from 'lucide-vue-next'
import StarIcon from './StarIcon.vue'
import { Brands } from './brands'
const Icons = {
  ...Brands,
  Phone,
  ArrowRight,
  Star: StarIcon,
  Map: MapIcon,
  Mail,
}

export { Icons, Brands as BrandIcons }
