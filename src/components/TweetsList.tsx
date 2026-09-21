import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

type TweetsListProps = {
  tweets: Tweet[];
};

export function TweetsList({ tweets }: TweetsListProps): React.JSX.Element {
  return (
    <section className="tweets-list">
      {tweets.map((tweet) => (
        <TweetPreview key={tweet.id} tweet={tweet} />
      ))}
    </section>
  );
}
