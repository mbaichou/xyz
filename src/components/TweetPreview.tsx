import { useState } from "react";
import type { Tweet } from "../types/Tweet";
import { Link } from "react-router-dom";

type TweetPreviewProps = {
  tweet: Tweet;
  linkToDetail?: boolean;
  onToggleLike: (id: string) => void;
};

export function TweetPreview({ tweet, linkToDetail = true, onToggleLike }: TweetPreviewProps): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString("fr-FR");
  const isLong = tweet.content.length > 180;
  const displayedContent = isLong && !isExpanded
    ? tweet.content.slice(0, 180) + "..."
    : tweet.content;  //operateur ternaire donc condition ? valeur_si_vrai : valeur_si_faux

  return (
    <article className="tweet">
      <h3>{tweet.authorName}</h3>
      <p>@{tweet.authorHandle}</p>

      {tweet.image && ( // l'affiche que si elle existe 
        linkToDetail ? (
          <Link to={`/tweets/${tweet.id}`}>
            <img
              src={tweet.image.url}
              alt={tweet.image.alt}
              className="tweet-image"
            />
          </Link>
        ) : (
          <img
            src={tweet.image.url}
            alt={tweet.image.alt}
            className="tweet-image"
          />
        )
      )}

      <p>{displayedContent}</p>

      {isLong && ( // si c long et si on click on declenche la suite 
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>
      )}

      {linkToDetail && (
        <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>
      )}
      <button onClick={() => onToggleLike(tweet.id)}>
        {tweet.likedByMe ? "Je n'aime plus" : "J'aime"} ({tweet.likes})
      </button>
      <p>{formattedDate}</p>
    </article>
  );
}
