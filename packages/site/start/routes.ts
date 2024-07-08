/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

const Home = () => import('#pages/home_controller');
const Instagram = () => import('#instagram/controllers/callback_controller');

router.get('/', [Home, 'index']);
router.get('/sbx', [Home, 'sbx']);

router.get('/ig', [Instagram, 'generateRedirect']);
router.get('/ig/redirect', [Instagram, 'handleRedirect']);
