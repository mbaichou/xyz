import { Link, useParams } from "react-router-dom";
import { initialTweets } from "../data/tweets";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";

export default function TweetDetailsPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();

  // on cherche le tweet principal
  const tweet = initialTweets.find((tweet) => tweet.id === id);

  // on trouve les reponses a ce tweet
  const replies = initialTweets.filter((tweet) => tweet.parentId === id);

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
      <TweetPreview tweet={tweet} linkToDetail={false} />
      
      {replies.length === 0 ? (
        <p>Aucune reponse</p>
      ) : (
        <TweetsList tweets={replies} />
      )}
    </section>
  );
}
