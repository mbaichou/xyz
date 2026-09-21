import type { Tweet } from "../types/Tweet";

type TweetPreviewProps = {
  tweet: Tweet;
};

export function TweetPreview({ tweet }: TweetPreviewProps): React.JSX.Element {
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString("France");

  return (
    <article className="tweet">
      <h3>{tweet.authorName}</h3>
      <p>@{tweet.authorHandle}</p>

      {tweet.image && ( //L'affiche que si elle existe 
        <img
          src={tweet.image.url}
          alt={tweet.image.alt}
          className="tweet-image"
        />
      )}

      <p>{tweet.content}</p>
      <p>{formattedDate}</p>
    </article>
  );
}
