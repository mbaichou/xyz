import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetsList } from "../components/TweetsList";

export default function TweetsMasterPage(): React.JSX.Element {
  const { tweets } = useContext(TweetsContext)!; //Pour dire a typescript que c'est obligé que c'est pas null
  const bonTweet = tweets.filter((tweet) => tweet.parentId === undefined);
  return (
    <TweetsList tweets={bonTweet} />
  );
}
