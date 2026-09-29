import { useState } from "react";
import { Outlet } from "react-router-dom";
import type { Tweet } from "./types/Tweet";
import { initialTweets } from "./data/tweets";
import { TweetsContext, type TweetsContextValue } from "./contexts/TweetsContext";
import "./App.css";

export function App(): React.JSX.Element {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  const context: TweetsContextValue = { tweets };

  return (
    <main className="app">
      <header>
        <h1>Fil d'actualité XYZ</h1>
      </header>
      <TweetsContext.Provider value={context}>
        <Outlet />
      </TweetsContext.Provider>
    </main>
  );
}

export default App;