import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

type TweetsListProps = {
  tweets: Tweet[];
  onToggleLike: (id: string) => void;
};

export function TweetsList({ tweets, onToggleLike }: TweetsListProps): React.JSX.Element {
  return (
    <section className="tweets-list">
      {tweets.map((tweet) => (
        <TweetPreview key={tweet.id} tweet={tweet} onToggleLike={onToggleLike} />
      ))}
    </section>
  );
}