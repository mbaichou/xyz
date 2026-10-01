import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFoundPage(): React.JSX.Element {
  useDocumentTitle("Page introuvable");

  return (
    <section>
      <h2>Page introuvable</h2>
      <Link to="/">Retour à l'accueil</Link>
    </section>
  );
}