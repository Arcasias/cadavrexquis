const headers = [
  "en solde",
  "gratuit</e>",
  "à vendre",
  "vendu</e> pour cause de manque de place",
  "perdu</e>",
  "tout</e> neu<f/ve>",
  "à voir au salon des inventeurs",
  "venu</e> de France exprès pour vous",
  "on liquide",
  "garanti</e> pour 2 semaines",
  "vente aux enchères",
  "à mettre dans votre porte-feuille",
  "en rabais",
  "pour mieux vivre, achetez",
  "à ne pas acheter",
  "on a perdu",
  "sur le marché",
  "à jeter",
  "est caché</e> quelque part",
  "on recherche",
  "s'est envolé</e> en fumée",
  "à acheter au magasin du coin",
  "on annonce",
  "est tombé</e> dans l'égout",
  "a disparu",
  "à vendre au plus offrant",
  "cherchez bien",
  "vendu</e> pour cause de décès",
  "n'a fait que 2km",
];

const subjects = [
  ["un cadavre", "m"],
  ["un caleçon", "m"],
  ["une dinette", "f"],
  ["une aile d'avion", "f"],
  ["un élevage de singes", "m"],
  ["un tram", "m"],
  ["un nounours", "m"],
  ["un réveille-matin", "m"],
  ["un paquebot", "m"],
  ['une "tutut"', "f"],
  ["un W.C.", "m"],
  ["un produit chimique", "m"],
  ["une voiture de course", "f"],
  ["un dé à coudre", "m"],
  ["un jardin plein de pissenlits", "m"],
  ["une puce précieuse", "f"],
  ["un planeur", "m"],
  ["une fusée", "f"],
  ["un soldat non gradé", "m"],
  ["une trompette", "f"],
  ["une bonne d'enfants", "f"],
  ["un éléphant", "m"],
  ["un mexicain", "m"],
  ["un médecin", "m"],
  ["une locomotive", "f"],
  ["un carnet de chèque", "m"],
  ["un microbe", "m"],
  ["une lampe de chevet", "f"],
  ["une cravate", "f"],
];

const endings = [
  "éléctrique",
  "de 2 km de long",
  "avec pneu crevé",
  "en papier et en carton",
  "qui est très apétissant</e>",
  "très fragile",
  "qui sonne toutes les 2 minutes",
  "qui coule",
  "très chatouilleu<x/se>",
  "auto-nettoyant</e>",
  "sans visses ni clous",
  "qui donne du fromage",
  "extra-plat</e>",
  "en mille morceaux",
  'qui dit : "papa, maman, oui, non"',
  "de 10cm de volume",
  "qui est tout</e> rose",
  "avec des grosses moustaches",
  "qui fume et qui pue",
  "qui se met dans une valise",
  "d'où il manque 6 pièces",
  "très noci<f/ve>",
  "en état de décomposition",
  "qui vole",
  "en conserve",
  'qui fait "pouêt pouêt"',
  "avec ou sans embalage",
  "qui va vite",
  "qui ne coûte que 5 francs",
  "blanc</he> avec des pois rouges",
];

const adaptGender = (part, gender) =>
  part.replace(/<(\w*)\/(\w*)>/g, (_, m, f) => (gender === "m" ? m : f));

const choice = (l) => l[Math.floor(Math.random() * l.length)];

const setNewSentence = () => {
  const [subject, gender] = choice(subjects);
  const header = adaptGender(choice(headers), gender);
  const ending = adaptGender(choice(endings), gender);

  document.getElementById("header").innerHTML =
    header[0].toUpperCase() + header.slice(1);
  document.getElementById("phrase").innerHTML = `${subject} ${ending}`;
};

setNewSentence();
