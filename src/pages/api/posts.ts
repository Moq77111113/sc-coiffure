import type { APIRoute } from "astro";
import { updateData } from "~/services/data/update";
import { postsSchema } from "~/types/instagram/post";
export const prerender = false;

const dataFake = [
  {
    id: "17953531231468907",
    caption: "Los touristos \ud83c\udf34\u2600\u2764\ufe0f",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.29350-15/218917780_886197728638019_8437049214127582439_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=gwm4GfLRXvgAX9Q_E1f&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDMtW3a2qG7ScP_w_VYercg2qPDar8uwqbYlaqwOqkg1g&oe=65395F95",
    permalink: "https://www.instagram.com/p/CRe0PfBMR8V/",
  },
  {
    id: "18150593071195560",
    caption:
      "\"Et tu conna\u00eetras pourquoi mon nom est l'\u00e9ternel quand sur toi, s'abbatra la vengeance du tout puissant ! \"",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.29350-15/190993490_497055025077231_1083973305103798935_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=hXh4Mfh5IBAAX_s2uoY&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBnY8fAyTQMQU38WfX9MfRXMmcwBjSsYCI_fCHKRq9gwg&oe=65392D7E",
    permalink: "https://www.instagram.com/p/CPRAuKOhn38/",
  },
  {
    id: "17861569856337660",
    caption:
      "J'esp\u00e8re que l'ann\u00e9e sera \u00e0 l'image de ce premier week-end \ud83c\udfc2\ud83e\ude82\ud83e\udd85",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.29350-15/134773341_2760521197506086_3095065991515447355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=PF-zoixIIdgAX-wPcqy&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBxLnsRGzMyh4VvPSZsc2z27hFWJUL8cZj22u_swwYopw&oe=653809E7",
    permalink: "https://www.instagram.com/p/CJl4tUthNwX/",
  },
  {
    id: "17886806047826029",
    caption:
      "Une binch, la planche aux pattes et c'est le paradis \ud83d\ude0e\n\n#skyparagliders #supair #nendaz #paragliding",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.29350-15/129730792_708075726579748_2736879015576139273_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=F01VedTRWBgAX_VNggg&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDJaTtIewiNGYF7EqR-jR4aZzn3AujXKPMq7Lx_-a0Mow&oe=65388473",
    permalink: "https://www.instagram.com/p/CIdsPXNBT_e/",
  },
  {
    id: "17880507757710447",
    caption:
      "Yo! #skyparagliders #aya #paragliding #valais #wallis #valdanniviers #swiss #skyporn",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.29350-15/116423772_722740555239891_2569657259350117611_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=VMSohfgEE_4AX-Xlt5F&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDX9WbV3Kh83_Ssf0M5361v6tehsHsDXPsOcsJwSVTj2g&oe=65395683",
    permalink: "https://www.instagram.com/p/CDWH3_hpSZq/",
  },
  {
    id: "18116023984057557",
    caption: "Classico classique",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.2885-15/73420469_121867935610377_631406061592708154_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=uH9uHhUToPQAX8pYHTS&_nc_oc=AQmw6YVXqZ9OQk71npPLx-OV3B8vUjB1yv4t7CSIwC7HqecS7S03dIyWJJRROPI1ycgNJbHiYF23SO4GeFPxGh-T&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBG5yIzVJYTNYtZydOzmlrplnVZ4WVU13PxsBjQJHpGGg&oe=65396114",
    permalink: "https://www.instagram.com/p/B5GYQ8gAclR/",
  },
  {
    id: "17951686894183664",
    caption:
      "Hi :) #Iceland #goldencircle #goldenwaterfall #waterfall #Imabasictourist #hotsprings #holidays #travel #goprohero6",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.2885-15/41874455_261322258050696_579085106170298368_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=uZ9Rv1CC5bwAX9r4Abo&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCdMoZPLEhxvuOHtsp32gu1KSXYkJW0CGL6P7eDfSuJmw&oe=6539B58A",
    permalink: "https://www.instagram.com/p/Bn9AYhnA1EP/",
  },
  {
    id: "17947458580107950",
    caption:
      "\ud83d\ude0d\ud83d\ude0d\ud83d\ude0d #honda #hornet #moto #bike #cb600fa #motorcycle #wallis",
    username: "_m_o_q_",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.2885-15/36997289_252968468818554_4721778691787456512_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=GYtUymQGXu8AX_mKU_m&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCPGup2_LXkvWEPnkYCzcAH4t3NJZXh64AZFfZTfxrDSQ&oe=653944AF",
    permalink: "https://www.instagram.com/p/BlgKtorH471/",
  },
];

//TODO auth middleware
export const POST = (async ({ request }) => {
  try {
    await updateData("posts", postsSchema.parse(dataFake));
    return new Response(null, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}) satisfies APIRoute;
