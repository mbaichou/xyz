import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetsList } from "../components/TweetsList";
import { TweetForm } from "../components/TweetForm";

export default function TweetsMasterPage(): React.JSX.Element {
  const { tweets, addTweet } = useContext(TweetsContext)!; //Pour dire a typescript que c'est obligé que c'est pas null
  const bonTweet = tweets.filter((tweet) => tweet.parentId === undefined);

  return (
    <>
      <TweetForm onSubmit={addTweet} />
      <TweetsList tweets={bonTweet} />
    </>
  );
}