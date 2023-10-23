import type { APIRoute } from "astro";
import { updateData } from "~/services/data/update";
import { reviewsSchema } from "~/types/google/review";
export const prerender = false;

const dataFake = {
  reviews: [
    {
      name: "Sophie L.",
      reviewId: "abc123",
      reviewer: {
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        displayName: "Sophie L.",
        isAnonymous: false,
      },
      starRating: "FOUR",
      comment:
        "Expérience fantastique! Ils ont su parfaitement répondre à mes attentes. Je recommande vivement.",
      createTime: "2023-10-12T08:30:00Z",
      updateTime: "2023-10-12T08:35:00Z",
      reviewReply: {
        comment:
          "Merci Sophie pour vos aimables paroles! Nous sommes ravis que vous ayez apprécié nos services.",
        updateTime: "2023-10-12T08:40:00Z",
      },
    },
    {
      name: "Antoine B.",
      reviewId: "def456",
      reviewer: {
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        displayName: "Antoine B.",
        isAnonymous: false,
      },
      starRating: "FIVE",
      comment:
        "Super salon! Personnel sympathique et compétent. Je suis ravi du résultat.",
      createTime: "2023-10-11T10:15:00Z",
      updateTime: "2023-10-11T10:20:00Z",
      reviewReply: null,
    },
    {
      name: "Caroline D.",
      reviewId: "ghi789",
      reviewer: {
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        displayName: "Caroline D.",
        isAnonymous: false,
      },
      starRating: "THREE",
      comment:
        "Pas mal, mais j'ai trouvé le prix un peu élevé pour les services proposés.",
      createTime: "2023-10-10T14:45:00Z",
      updateTime: "2023-10-10T14:50:00Z",
      reviewReply: null,
    },
    {
      name: "Marc S.",
      reviewId: "jkl012",
      reviewer: {
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        displayName: "Marc S.",
        isAnonymous: false,
      },
      starRating: "FOUR",
      comment:
        "Bon service, mais l'attente était un peu longue. Les résultats valaient la peine cependant.",
      createTime: "2023-10-09T12:00:00Z",
      updateTime: "2023-10-09T12:05:00Z",
      reviewReply: {
        comment:
          "Merci Marc! Nous prenons en compte votre commentaire sur le temps d'attente.",
        updateTime: "2023-10-09T12:10:00Z",
      },
    },
    {
      name: "Claire M.",
      reviewId: "pqr678",
      reviewer: {
        profilePhotoUrl: "https://randomuser.me/api/portraits/women/5.jpg",
        displayName: "Claire M.",
        isAnonymous: false,
      },
      starRating: "FIVE",
      comment:
        "Exceptionnel! J'adore le nouveau look. Le personnel était très professionnel.",
      createTime: "2023-10-08T16:30:00Z",
      updateTime: "2023-10-08T16:35:00Z",
      reviewReply: null,
    },
    {
      name: "Philippe G.",
      reviewId: "stu901",
      reviewer: {
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        displayName: "Philippe G.",
        isAnonymous: false,
      },
      starRating: "FOUR",
      comment:
        "Un bon endroit pour se faire coiffer. Le personnel est amical et compétent.",
      createTime: "2023-10-07T09:20:00Z",
      updateTime: "2023-10-07T09:25:00Z",
      reviewReply: {
        comment:
          "Merci Philippe! Nous sommes ravis que vous ayez apprécié votre visite. Lorem Ipsum Dolor Sit Amet. ",
        updateTime: "2023-10-07T09:30:00Z",
      },
    },
    {
      name: "Un looong text",
      reviewId: "stu901",
      reviewer: {
        profilePhotoUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        displayName: "Philippe G.",
        isAnonymous: false,
      },
      starRating: "FOUR",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam",
      createTime: "2023-10-07T09:20:00Z",
      updateTime: "2023-10-07T09:25:00Z",
      reviewReply: {
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam`,
        updateTime: "2023-10-07T09:30:00Z",
      },
    },
  ],
  averageRating: 4.5,
  totalReviewCount: 10,
  nextPageToken: "abcdef123456",
};

// TODO auth middleware
export const POST = (async ({ request }) => {
  try {
    await updateData("reviews", reviewsSchema.parse(dataFake));
    return new Response(null, { status: 200 });
  } catch (error) {
    console.log(`An error occurred: ${error}`);
    return new Response(`Invalid input`, { status: 400 });
  }
}) satisfies APIRoute;
