import { useState } from "react";

const CONTENT_MAX_LENGTH = 280;

type TweetFormProps = {
  onSubmit: (content: string) => void;
};

export function TweetForm({ onSubmit }: TweetFormProps): React.JSX.Element {
  const [content, setContent] = useState("");

  const remaining = CONTENT_MAX_LENGTH - content.length;
  const trimmed = content.trim();
  const isDisabled = trimmed.length === 0 || content.length > CONTENT_MAX_LENGTH;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSubmit(trimmed);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <p>{remaining} caractères restants</p>
      <button type="submit" disabled={isDisabled}>
        Publier
      </button>
    </form>
  );
}