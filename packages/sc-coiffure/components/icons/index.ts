import { ArrowRight, Mail, Map as MapIcon, Phone, X } from 'lucide-vue-next'
import StarIcon from './StarIcon.vue'
import { Brands } from './brands'
const Icons = {
  ...Brands,
  Phone,
  ArrowRight,
  Star: StarIcon,
  Map: MapIcon,
  Mail,
  Close: X
}

export { Brands as BrandIcons, Icons }

