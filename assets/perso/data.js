
const condition_Loup = "Pour gagner il doit tuer tout les membres du villages"
const condition_village = "Pour gagner il doit tuer tout les loups garoux"
export const perso = [
    {pouvoir: 'Il se réunit chaque nuit avec les autres loups-garous pour décider de tuer un joueur',photo: require("../loup-garou.jpg"), id: '1', title: 'loup garou', description: 'Il connaît l\'identité des autres loups-garous et doit essayer de tuer tous les villageois sans se faire découvrir' ,camp : "loup" ,condition :condition_Loup},
    {pouvoir: 'Lors de la première nuit il peut infecter un membre du village, qui conserve ces pouvoirs mais doit désormais tuer tout les villageois',photo: require("../loup-noir.jpg"), id: '2', title: 'loup ancien', description: 'Le loup ancien a traversé les âges et permi a la meute d\'atteindre un nombre important de membre' ,camp : "loup" ,condition :condition_Loup},
    {photo: require("../loup-blanc.jpg"), id: '8', title: 'loup blanc', description: 'Le loup garou blanc est un loup albinos,rejeter par ces pairs,il ne désire que se venger' ,camp : "solo" ,condition :'doit être le dernier survivant du village'},
    {photo: require("../villageois.jpg"), id: '3', title: 'villageois', description: 'Le villageois n\'a aucun pouvoir spécial, si ce n\'est de voter au conseil du village contre celui qu\'il suspecte être loup garou.',camp : "village" ,condition :condition_village},
    { id: '4', title: 'voyante', description: 'La voyante dispose d\'accès mystique lui permettant de devenir reine du royaume des ombres',pouvoir: 'Chaque nuit, elle peut connaître le rôle d\'un joueur qu\'elle aura choisi',camp : "village" ,condition :condition_village},
    { id: '5', title: 'chasseur', description: 'Le chasseur n\'a aucun rôle particulier à jouer tant qu\'il est vivant. Mais dès qu\'il meurt qu\'il soit tué dans la nuit (Loups-garous, sorcière) ou à la suite d\'une décision des villageois il doit désigner une personne qui mourra également, sur-le-champ' ,camp : "village",condition :condition_village },
    { id: '6', title: 'survivant', description: 'Le survivant n\'a pas de pouvoir.Son unique but est de rester  en vie jusq\'a la fin de la parti' ,camp : "solo",condition :"rester en vie" },
    { id: '7', title: 'Ange' ,description: 'Rageur,il ne cherche que la redemption pour cela il désire sacrifier son existence pour dévoiler la vérité.' ,camp : "solo",condition :"Gagnez seul lors du premier tour, ou gagnez avec le village" },

];