import { InferPageProps } from '@adonisjs/inertia/types';
import HomeController from '#pages/home_controller';

export type Feed = InferPageProps<HomeController, 'index'>['feed'];
