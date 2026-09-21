export type TweetImage = {
    url: string;
    alt: string;
  };

export type Tweet = {
    id: string;
    authorName: string;
    content: string;
    createdAt: string;
    image?: TweetImage;
    authorHandle: string;
};
  