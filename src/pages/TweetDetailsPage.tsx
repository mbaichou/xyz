import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function TweetDetailsPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { tweets, toggleLike } = useContext(TweetsContext)!;

  // on cherche le tweet principal
  const tweet = tweets.find((tweet) => tweet.id === id);

  // on trouve les reponses a ce tweet
  const replies = tweets.filter((tweet) => tweet.parentId === id);

  useDocumentTitle(tweet ? `Tweet de ${tweet.authorName}` : "Tweet introuvable");

  // si le tweet nexiste pas on arrete tout
  if (!tweet) {
    return (
      <section>
        <p>Ce tweet n'existe pas</p>
        <Link to="/">Retour a l'accueil</Link>
      </section>
    );
  }

  // sinon on montre le tweet et ses reponses
  return (
    <section>
      <TweetPreview tweet={tweet} linkToDetail={false} onToggleLike={toggleLike} />

      {replies.length === 0 ? (
        <p>Aucune réponse</p>
      ) : (
        <TweetsList tweets={replies} onToggleLike={toggleLike} />
      )}
    </section>
  );
}
