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
      // date-fns
      // how to get six months ago
      // react free library icons
      date: "about 6 months ago",
      text: "This platform is all about thoughtful reflections.",
      likes: [{ name: "James Brown" }, { name: "Oliveira Jones" }],
      comments: [
        {
          profile: "James Brown",
          text: "Makes me ponder on the importance of staying true to one's moral compass.",
          image: "profile4.jpg",
        },
        {
          profile: "Oliveira Jones",
          text: "Sometimes the best option is to stick to your principles.",
          image: "profile5.jpg",
        },
      ],
    },
    {
      date: "about 1 year ago",
      text: "The world doesn't need more noise. It needs more meaning.",
      likes: [{ name: "Daniel Miller" }],
      comments: [
        {
          profile: "Daniel Miller",
          text: "Couldn't agree more.",
          image: "profile6.jpg",
        },
      ],
    },
  ],
};
