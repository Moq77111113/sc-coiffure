import type { APIRoute } from 'astro';
import { updateData } from '~/services/data/update';
import { postsSchema } from '~/types/instagram/post';
export const prerender = false;

const dataFake = [
  {
    id: '17953531231468907',
    caption: 'Los touristos \ud83c\udf34\u2600\u2764\ufe0f',
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-2.cdninstagram.com/v/t51.29350-15/218917780_886197728638019_8437049214127582439_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=3qm3_vMvS6AAX8c4U-a&_nc_ht=scontent-cdg4-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA53zwGhHXVnnCYid2vXvK61b9-4P4zCB_NZ7JH7MawnQ&oe=653F4E55',
    permalink: 'https://www.instagram.com/p/CRe0PfBMR8V/',
  },
  {
    id: '18150593071195560',
    caption:
      '"Et tu conna\u00eetras pourquoi mon nom est l\'\u00e9ternel quand sur toi, s\'abbatra la vengeance du tout puissant ! "',
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-2.cdninstagram.com/v/t51.29350-15/190993490_497055025077231_1083973305103798935_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=Vil3zUPSm1EAX9XnkRU&_nc_ht=scontent-cdg4-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBT8Fpo0DuPmkc074Xc8kImWAWra1W9vBEzAjk9nGG7-w&oe=653F1C3E',
    permalink: 'https://www.instagram.com/p/CPRAuKOhn38/',
  },
  {
    id: '17861569856337660',
    caption:
      "J'esp\u00e8re que l'ann\u00e9e sera \u00e0 l'image de ce premier week-end \ud83c\udfc2\ud83e\ude82\ud83e\udd85",
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-1.cdninstagram.com/v/t51.29350-15/134773341_2760521197506086_3095065991515447355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=po566mwP6ssAX9FXCkF&_nc_ht=scontent-cdg4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA-pAwe82sJN0VvYRAnsUg_AJLfKa-cUjYVeUz97st6Yw&oe=653FF2E7',
    permalink: 'https://www.instagram.com/p/CJl4tUthNwX/',
  },
  {
    id: '17886806047826029',
    caption:
      "Une binch, la planche aux pattes et c'est le paradis \ud83d\ude0e\n\n#skyparagliders #supair #nendaz #paragliding",
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-2.cdninstagram.com/v/t51.29350-15/129730792_708075726579748_2736879015576139273_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=A9F68LhnakcAX_ItP0X&_nc_ht=scontent-cdg4-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAte6kDrkafWzSmwb-7CmXLtE6ueNoxU1eILveIF2sTsg&oe=65406D73',
    permalink: 'https://www.instagram.com/p/CIdsPXNBT_e/',
  },
  {
    id: '17880507757710447',
    caption:
      'Yo! #skyparagliders #aya #paragliding #valais #wallis #valdanniviers #swiss #skyporn',
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-1.cdninstagram.com/v/t51.29350-15/116423772_722740555239891_2569657259350117611_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=vEdL1YZC4aUAX-Cnzyh&_nc_ht=scontent-cdg4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCH1MU3kLCATIorSVVJ3K4xO8bj2--gbTfd7Qa6SB-exw&oe=653F4543',
    permalink: 'https://www.instagram.com/p/CDWH3_hpSZq/',
  },
  {
    id: '18116023984057557',
    caption: 'Classico classique',
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-1.cdninstagram.com/v/t51.2885-15/73420469_121867935610377_631406061592708154_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=1rwzhV8YyKgAX_oymR_&_nc_oc=AQmURxHUluZe3FQNVvV5WxESH0baPGEge0nJ9aomXt2BGDEbI7vToQhYH0-6l9cqZuVlqZaGl5QlxPHIaFVRhjgh&_nc_ht=scontent-cdg4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDKw2Un9Rzb6VC7zPJYM18ZQ701TJ_VXLWJi4TRRSr-DA&oe=653F4FD4',
    permalink: 'https://www.instagram.com/p/B5GYQ8gAclR/',
  },
  {
    id: '17951686894183664',
    caption:
      'Hi :) #Iceland #goldencircle #goldenwaterfall #waterfall #Imabasictourist #hotsprings #holidays #travel #goprohero6',
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-2.cdninstagram.com/v/t51.2885-15/41874455_261322258050696_579085106170298368_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=0hvvZsYj7CUAX9eHR9H&_nc_ht=scontent-cdg4-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCF3sf-TOV_D58i8alKzUQX28QJooxWyrUveQ_vebVy-g&oe=653FA44A',
    permalink: 'https://www.instagram.com/p/Bn9AYhnA1EP/',
  },
  {
    id: '17947458580107950',
    caption:
      '\ud83d\ude0d\ud83d\ude0d\ud83d\ude0d #honda #hornet #moto #bike #cb600fa #motorcycle #wallis',
    username: '_m_o_q_',
    media_url:
      'https://scontent-cdg4-1.cdninstagram.com/v/t51.2885-15/36997289_252968468818554_4721778691787456512_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=1TyCMRP3PgYAX9XOWLu&_nc_ht=scontent-cdg4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBQY1u-mF7UgNOm2AhXyCON9HpUSMEZ-vY1mMVHhrS83w&oe=653F336F',
    permalink: 'https://www.instagram.com/p/BlgKtorH471/',
  },
];
//TODO auth middleware
export const POST = (async ({ request }) => {
  try {
    await updateData('posts', postsSchema.parse(dataFake));
    return new Response(null, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}) satisfies APIRoute;
