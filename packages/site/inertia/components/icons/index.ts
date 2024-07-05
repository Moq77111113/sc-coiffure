import { Brands } from './brands';
import { Phone, ArrowRight, Mail, Map } from 'lucide-vue-next';
import StarIcon from './StarIcon.vue';
const Icons = {
  ...Brands,
  Phone,
  ArrowRight,
  Star: StarIcon,
  Map,
  Mail,
};

export { Icons, Brands as BrandIcons };
