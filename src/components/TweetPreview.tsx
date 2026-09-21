import { useState } from "react";
import type { Tweet } from "../types/Tweet";

type TweetPreviewProps = {
  tweet: Tweet;
};

export function TweetPreview({ tweet }: TweetPreviewProps): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString("France");

  const isLong = tweet.content.length > 180;
  const displayedContent = isLong && !isExpanded
    ? tweet.content.slice(0, 180) + "..."
    : tweet.content;  //operateur ternaire donc condition ? valeur_si_vrai : valeur_si_faux

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

      <p>{displayedContent}</p>

      {isLong && ( // si c long et si on click on declenche la suite 
        <button onClick={() => setIsExpanded( (prev) => !prev)}> 
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>
      )}

      <p>{formattedDate}</p>
    </article>
  );
}
