import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetsList } from "../components/TweetsList";
import { TweetForm } from "../components/TweetForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function TweetsMasterPage(): React.JSX.Element {
  const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
  const bonTweet = tweets.filter((tweet) => tweet.parentId === undefined);
  const totalLikes = bonTweet.reduce((total, tweet) => total + tweet.likes, 0);
  useDocumentTitle("Accueil");


  return (
    <>
      <TweetForm onSubmit={addTweet} />
      <p>{totalLikes} mentions J'aime au total</p>
      <TweetsList tweets={bonTweet} onToggleLike={toggleLike} />
    </>
  );
}