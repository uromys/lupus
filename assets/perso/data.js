const condition_Loup = "Pour gagner il doit tuer tout les membres du villages";
const condition_village = "Pour gagner il doit tuer tout les loups garous";
export const perso = [
  {
    id: "122222222",
    title: "Loup garou",
    pouvoir:
      "Il se réunit chaque nuit avec les autres loups-garous pour décider de tuer un joueur",
    photo: require("../lupus.webp"),
    description:
      "Il connaît l'identité des autres loups-garous et doit essayer de tuer tous les villageois sans se faire découvrir",
    camp: "loup",
    condition: condition_Loup,
  },
  {
    id: "1",
    title: "Loup ancien",
    pouvoir:
      "Lors de la première nuit, il peut infecter un membre du village, qui conserve ces pouvoirs mais doit désormais tuer tous les villageois",
    photo: require("../old_loup.webp"),
    description:
      "Le loup ancien a traversé les âges et permis à la meute d'atteindre un nombre important de membres",
    camp: "loup",
    condition: condition_Loup,
  },
  {
    id: "13332666",
    title: "Sbire",
    photo: require("../sbire.webp"),
    description:
      "Serviteur et adorateurs des loups." +
      "Il ne se réveille pas en même temps que les loups et les loups garous ne connaissent pas son existence",
    camp: "loup",
    condition: condition_Loup,
  },
  {
    id: "8000",
    title: "Loup blanc",
    photo: require("../loup-blanc.jpg"),
    description:
      "Le loup-garou blanc est un loup albinos, rejeté par ses pairs, il ne désire que se venger",
    camp: "solo",
    condition:
      "doit être le dernier survivant du village ( avec potentiellement le survivant )",
  },
  {
    id: "2",
    title: "Villageois",
    photo: require("../villageois.jpg"),
    description:
      "Le villageois n'a aucun pouvoir spécial, si ce n'est de voter au conseil du village contre celui qu'il suspecte être loup-garou.",
    camp: "village",
    condition: condition_village,
  },
  {
    id: "3",
    title: "Voyante",
    pouvoir:
      "Chaque nuit, elle peut connaître le rôle d'un joueur qu'elle aura choisi",
    description:
      "La voyante dispose d'accès mystiques lui permettant de devenir reine du royaume des ombres",
    camp: "village",
    condition: condition_village,
  },
  {
    id: "4",
    title: "Chasseur",
    description:
      "Le chasseur n'a aucun rôle particulier à jouer tant qu'il est vivant. Mais dès qu'il meurt, qu'il soit tué dans la nuit (Loups-garous, sorcière) ou à la suite d'une décision des villageois, il doit désigner une personne qui mourra également, sur-le-champ",
    camp: "village",
    condition: condition_village,
  },
  {
    id: "5",
    title: "Survivant",
    photo: require("../survivant.jpeg"),
    description:
      "Le survivant n'a pas de pouvoir. Son unique but est de rester en vie jusqu'à la fin de la partie",
    camp: "solo",
    condition: "rester en vie jusqu'à la fin de la partie",
  },
  {
    id: "6",
    title: "Ange",
    photo: require("../ange.jpeg"),
    description:
      "Rageur, il ne cherche que la rédemption. Pour cela, il désire sacrifier son existence pour dévoiler la vérité.",
    camp: "solo",
    condition: "Gagnez seul lors du premier tour, ou gagnez avec le village",
  },
  {
    id: "7",
    title: "Renard",
    photo: require("../renard.jpg"),
    description:
      "Le renard a toujours eu un instinct lui permettant de déceler le vrai du faux",
    pouvoir:
      "Il désigne une personne, si la personne ou ses 2 voisins sont dans le camp des loups, alors il pourra réutiliser son pouvoir la nuit prochaine",
    camp: "village",
    condition: condition_village,
  },
  {
    id: "8",
    title: "Salvateur",
    photo: require("../salvateur.jpg"),
    description:
      "Devenu maître des arts occultes,cet homme connait tout des loups garou",
    pouvoir:
      "Il designe une personne, cette personne est immunisé contre les loups garous pendant une nuit",
    camp: "village",
    condition: condition_village,
  },
  {
    id: "9",
    title: "Sorcière",
    photo: require("../sorciere.jpg"),
    description: "Experte en potion,on raconte qu'elle a traversé les âges",
    pouvoir:
      "Elle dispose de deux potions à usage unique,une permet de ressusciter la victime des loups garoux, l'autres de tuer un joueur",
    camp: "village",
    condition: condition_village,
  },
  {
    id: "10",
    title: "Cupidon",
    photo: require("../cupidon.jpg"),
    description:
      "Ce chérubin ne désire que voir l'amour naître entre ces citoyens",
    pouvoir:
      "Il designe deux joueurs, si l'un meurt l'autre meurt.Si leurs conditions de victoires sont en oppositions,ils gagnent lorsqu'ils sont les deux derniers en vie",
    camp: "village",
    condition: condition_village,
  },
  {
    id: "11",
    title: "Montreur d'ours",
    photo: require("../bear.png"),
    description:
      "Bête de foire, cet homme a réussi à capturer un ours vivant qu'il a dressé pour faire des tours",
    pouvoir:
      "Tout les matins,l'ours grognent si les voisins (ou si le montreurs d'ours suite à une infection par le loup noir ) sont dans le camps des loups",
    camp: "village",
    condition: condition_village,
  },
];
