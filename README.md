# Projet XYZ - Programmation Web L3 MIASHS

## Informations

- **Prénom / Nom :** Baichou Marwane
- **Email universitaire :** marwane.baichou4@etu.univ-lorraine.fr
- **Groupe de TD :** Groupe 2

## Séance 02 - Affichage du fil de tweets

### Difficultés rencontrées et solutions

- Confusion entre `import { X }` et `import X` selon qu'un composant est exporté avec `export function` ou `export default`. Corrigé en comprenant la différence entre export nommé et export par défaut.
- Définition du type `Tweet` dupliquée à la fois dans `types/Tweet.ts` et dans `data/tweets.ts`, ce que TypeScript refusait. Corrigé en ne gardant la définition que dans `types/Tweet.ts`, et en l'important dans `tweets.ts`.
- Erreur sur `toLocaleDateString("France")`, qui n'est pas un code de langue valide. Corrigé avec `"fr-FR"`.
- Indentation irrégulière dans plusieurs fichiers, réglée avec le formatage automatique de VS Code (Maj + Option + F).

### Apprentissages

- Usage de `useState` et du setter fonctionnel `(prev) => !prev` pour l'affichage "Voir plus / Voir moins".
- Affichage conditionnel avec l'opérateur `&&`.
- Utilisation de `.map` avec `key={tweet.id}` pour afficher une liste.

## Séance 03 - Navigation Master / Detail

### Difficultés rencontrées et solutions

- `react-router-dom` était utilisé dans le code mais absent des dépendances de `package.json`, ce qui faisait planter le projet. J'ai contacté ma chargée de TD, Amandine Decker, qui m'a conseillé de rechercher l'erreur via un moteur de recherche plutôt que de passer directement par l'IA, afin de trouver des explications de personnes ayant rencontré le même problème. J'ai résolu le problème avec `bun add react-router-dom`.
- Erreur de syntaxe dans un template string pour le lien de l'image (apostrophes `'...'` au lieu de backticks `` `...` ``), ce qui empêchait la construction correcte de l'URL `/tweets/:id`.
- Différence entre `.find` (renvoie un seul élément ou `undefined`) et `.filter` (renvoie un tableau), utilisés respectivement pour trouver le tweet principal et ses réponses dans `TweetDetailsPage`.
- Mise en place de la prop optionnelle `linkToDetail` avec un opérateur ternaire, pour que l'image ne soit cliquable que dans le fil et pas sur la page de détail.

### Apprentissages

- Mise en place de `react-router-dom` avec `BrowserRouter`, `Routes` et `Route` imbriquées.
- `useParams` pour lire un paramètre d'URL.
- `Link` plutôt que `<a>` pour naviguer sans recharger la page.
- Gestion d'une route inconnue avec `path="*"`.

## Séance 04 - Formulaire et partage de données entre les pages

### Difficultés rencontrées et solutions

- Mauvais emplacement du code dans `App.tsx` : la fonction `addTweet` et le type `TweetsContextValue` avaient été écrits en dehors du composant `App`, ce qui empêchait `addTweet` d'accéder à `setTweets`. Corrigé en plaçant `addTweet` et `toggleLike` à l'intérieur du composant, juste après le `useState`.
- Oubli de transmettre `onToggleLike` à `TweetsList` depuis `TweetsMasterPage` : les boutons "J'aime" ne fonctionnaient que sur la page de détail, pas sur le fil principal.
- Compréhension de l'ordre des hooks : `useDocumentTitle` doit être appelé de façon inconditionnelle, avant tout retour anticipé (`if (!tweet) { return ... }`), sinon React ne l'accepte pas.
- Difficulté à comprendre `useContext` pour partager l'état `tweets` entre `App` et les différentes pages, sans le transmettre manuellement à chaque niveau.

### Apprentissages

- `useContext` pour partager un état entre plusieurs pages sans le passer manuellement de composant en composant.
- Remontée d'état (lifting state up) vers le plus proche ancêtre commun, ici `App`.
- Formulaire contrôlé avec `value` / `onChange`, et nettoyage du contenu avec `trim()`.
- `useEffect` et son tableau de dépendances, pour synchroniser le titre de l'onglet avec la page affichée.
- `.map` et l'opérateur de décomposition (`...`) pour mettre à jour un tableau sans le muter.

### Ajouts personnels (non demandés par le sujet)

- Bouton "← Retour" sur la page de détail d'un tweet, utilisant `useNavigate` pour revenir à la page précédente.

## Usage de l'IA générative

J'ai utilisé Claude et Gemini tout au long du projet, principalement pour :
- me faire expliquer des erreurs TypeScript et des concepts React que je ne comprenais pas (contexte, hooks, opérateur de décomposition, `.reduce`) ;
- me faire relire des extraits de code que j'avais écrits moi-même, pour vérifier leur logique et repérer mes erreurs (fautes de syntaxe, mauvais emplacement de code, props manquantes) ;
- déboguer des erreurs rencontrées après une première tentative de ma part ;
- m'aider à rédiger ce fichier README (structure des sections, formulation, orthographe), à partir des difficultés et apprentissages que j'ai moi-même identifiés au fil des séances.

Pour l'erreur liée à `react-router-dom` absent des dépendances (séance 03), j'ai contacté ma chargée de TD plutôt que de rester sur l'IA, sur ses conseils de privilégier une recherche via moteur de recherche pour trouver des explications humaines. Elle m'a aussi rappelé qu'une IA ne comprend pas réellement un problème, même si elle peut en donner l'impression — je garde ce point en tête dans l'usage que j'en fais.

Je n'ai pas fait générer de fonctionnalité à ma place : à chaque étape, j'ai écrit le code moi-même, demandé des explications quand je ne comprenais pas une notion, et vérifié les corrections proposées avec `bun run lint`, `bun tsc --noEmit` et `bun run build`, ainsi qu'en testant manuellement le comportement dans le navigateur.