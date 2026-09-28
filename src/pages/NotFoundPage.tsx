import { Link } from "react-router-dom";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <section>
      <h2>Page introuvable</h2>
      <Link to="/">Retour à l'accueil</Link>
    </section>
  );
}