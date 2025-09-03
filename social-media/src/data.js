import { subMonths, subYears } from "date-fns";

export const userAccount = {
  owner: "Lazar Vuckovic",
  place: "Smederevo, Serbia",
  picture: "avatar-image2.jpg",
  friends: [
    { name: "Emily Johnson", picture: "profile1.jpg" },
    { name: "Jason Smith", picture: "profile2.jpg" },
    { name: "Stephan Williams", picture: "profile3.jpg" },
    { name: "James Brown", picture: "profile4.jpg" },
    { name: "Oliveira Jones", picture: "profile5.jpg" },
    { name: "Daniel Miller", picture: "profile6.jpg" },
  ],
  posts: [
    {
      owner: "Lazar Vuckovic",
      picture: "avatar-image2.jpg",
      id: 1,
      date: subMonths(new Date(), 6).toISOString(),
      text: "This platform is all about thoughtful reflections.",
      likes: [{ name: "James Brown" }, { name: "Oliveira Jones" }],
      comments: [
        {
          id: 10,
          name: "James Brown",
          text: "Makes me ponder on the importance of staying true to one's moral compass.",
          image: "profile4.jpg",
          commentLikes: [{ name: "Oliveira Jones" }, { name: "Daniel Miller" }],
        },
        {
          id: 11,
          name: "Oliveira Jones",
          text: "Sometimes the best option is to stick to your principles.",
          image: "profile5.jpg",
          commentLikes: [
            { name: "James Brown" },
            { name: "Daniel Miller" },
            { name: "Jason Smith" },
          ],
        },
      ],
      fixed: true,
    },
    {
      owner: "Lazar Vuckovic",
      picture: "avatar-image2.jpg",
      id: 2,
      date: subYears(new Date(), 1).toISOString(),
      text: "The world doesn't need more noise. It needs more meaning.",
      likes: [
        { name: "Daniel Miller" },
        { name: "Jason Smith" },
        { name: "Oliveira Jones" },
        { name: "Emily Johnson" },
      ],
      comments: [
        {
          id: 12,
          name: "Daniel Miller",
          text: "Couldn't agree more.",
          image: "profile6.jpg",
          commentLikes: [],
        },
      ],
      fixed: true,
    },
  ],
};
