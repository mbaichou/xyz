import { initialTweets } from "./data/tweets";
import { TweetsList } from "./components/TweetsList";
import "./App.css";

export function App(): React.JSX.Element {
  return (
    <main className="app">
      <h1>Fil d'actualité XYZ</h1>
      <TweetsList tweets={initialTweets} />
    </main>
  );
}

export default App;
