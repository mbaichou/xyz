import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

export default function TweetsMasterPage(): React.JSX.Element { 
  return (
    <TweetsList tweets={initialTweets} />
  );
}
