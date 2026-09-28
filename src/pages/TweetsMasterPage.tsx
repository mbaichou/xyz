import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

export default function TweetsMasterPage(): React.JSX.Element {
  const bonTweet = initialTweets.filter((tweet) => tweet.parentId === undefined);
  return (
    <TweetsList tweets={bonTweet} />
  );

}
