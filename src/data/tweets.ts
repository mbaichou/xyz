import type { Tweet } from "../types/Tweet";

export const initialTweets: Tweet[] = [
  {
    id: "1",
    authorName: "Ada Lovelace",
    authorHandle: "ada_lovelace",
    content: "La machine analytique n'a nullement la prétention de créer quelque chose par elle-même. Elle peut exécuter tout ce que nous savons lui ordonner d'exécuter.",
    createdAt: "2026-07-01T09:12:00.000Z",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
      alt: "Portrait d'Ada Lovelace",
    },
  },
  {
    id: "2",
    authorName: "Steve Jobs",
    authorHandle: "steve_jobs",
    content: "Votre temps est limité, ne le gâchez pas en menant une vie qui n'est pas la vôtre.",
    createdAt: "2026-07-03T09:12:00.000Z",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/500px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
      alt: "Portrait de Steve Jobs",
    },
  },
  {
    id: "3",
    authorName: "Grace Hopper",
    authorHandle: "grace_hopper",
    content: "L'expression la plus dangereuse de la langue est : « On a toujours fait comme ça ».",
    createdAt: "2026-07-04T10:00:00.000Z",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
      alt: "Portrait de Grace Hopper",
    },
  },
  {
    id: "4",
    authorName: "Alan Turing",
    authorHandle: "alan_turing",
    content: "On peut espérer que les machines finiront par rivaliser avec les hommes dans tous les domaines purement intellectuels. Mais par où commencer ? Même pour savoir par où commencer, il faut beaucoup réfléchir.",
    createdAt: "2026-07-05T14:30:00.000Z",
  },
  {
    id: "5",
    authorName: "Margaret Hamilton",
    authorHandle: "margaret_hamilton",
    content: "Il n'y avait pas de second choix. Nous devions trouver un moyen, et nous l'avons trouvé.",
    createdAt: "2026-07-06T16:45:00.000Z",
  },
  {
    id: "6",
    authorName: "Dennis Ritchie",
    authorHandle: "dennis_ritchie",
    content: "Le C est bizarre, imparfait et a un succès immense.",
    createdAt: "2026-07-07T08:15:00.000Z",
  },
  {
    id: "7",
    authorName: "Katherine Johnson",
    authorHandle: "katherine_johnson",
    content: "J'aimais aller travailler tous les jours.",
    createdAt: "2026-07-08T11:20:00.000Z",
  },
  {
    id: "8",
    authorName: "Barbara Liskov",
    authorHandle: "barbara_liskov",
    content: "Ce que nous cherchions, c'était une manière de construire des logiciels modulaires faciles à modifier et à maintenir.",
    createdAt: "2026-07-09T13:00:00.000Z",
  },
  {
    id: "9",
    authorName: "Donald Knuth",
    authorHandle: "donald_knuth",
    content: "L'optimisation prématurée est la racine de tous les maux.",
    createdAt: "2026-07-10T17:10:00.000Z",
  },
  {
    id: "10",
    authorName: "Radia Perlman",
    authorHandle: "radia_perlman",
    content: "Le monde serait bien meilleur si les gens comprenaient qu'il n'y a pas qu'une seule façon de voir les choses.",
    createdAt: "2026-07-11T18:05:00.000Z",
  },
];
