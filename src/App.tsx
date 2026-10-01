import { useState } from "react";
import { Outlet } from "react-router-dom";
import type { Tweet } from "./types/Tweet";
import { initialTweets } from "./data/tweets";
import { TweetsContext, type TweetsContextValue } from "./contexts/TweetsContext";
import "./App.css";

export function App(): React.JSX.Element {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  function addTweet(content: string): void {
    setTweets((prevTweets) => [
      {
        id: crypto.randomUUID(),
        authorName: "Vous",
        authorHandle: "vous",
        content,
        createdAt: new Date().toISOString(),
        likes: 0,
        likedByMe: false,
      },
      ...prevTweets,
    ]);
  }

  function toggleLike(id: string): void {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.id !== id) {
          return tweet;
        }
        return {
          ...tweet,
          likedByMe: !tweet.likedByMe,
          likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1,
        };
      }),
    );
  }

  const context: TweetsContextValue = { tweets, addTweet, toggleLike };
  return (
    <main className="app">
      <header>
      <img src="/xyz.png" alt="Logo XYZ" className="logo" />
        <h1>Fil d'actualité XYZ</h1>
      </header>
      <TweetsContext.Provider value={context}>
        <Outlet />
      </TweetsContext.Provider>
    </main>
  );
}

export default App;