const data = [
    {
        index: 1,
        path: '/content',
        textContent: {
            right: false,
            title: 'Antiquité',
            main: 'Archidamos II fut l’un des rois de Sparte durant la guerre du Péloponnèse. On le retrouve ici lors d’un discours face à ses troupes aux débuts du conflit pendant le siège de la cité de Platées.',
            btn: 'Ecouter le discours complet d’Archidamos II',
            more: 'Plus d’informations sur la Guerre du Péloponnèse',
            letter: "Lire la lettre en entier",
            letterText: "« Péloponnésiens et alliés ! nos pères eux aussi ont fait bien des expéditions à l'intérieur du Péloponnèse et au dehors ; et les plus âgés d'entre nous ne se lassent pas d'avoir l'expérience de la guerre. Toutefois aucune de nos expéditions au dehors n'a provoqué de préparatifs plus importants. [...] La guerre est pleine d'incertitudes. Très souvent les attaques se produisent à l'improviste et dans un état d'irritation. Souvent aussi des troupes inférieures en nombre, parce qu'elles sont sur leurs gardes, repoussent des forces plus nombreuses, qui par dédain de l'adversaire ne prennent pas de précautions. Il faut donc constamment, en pays ennemi, faire preuve d'audace dans ses desseins, mais de précaution et de prudence dans l'action. C'est ainsi que dans la marche à l'ennemi on est plein d'assurance et plein de sécurité dans la défense. La ville contre laquelle nous marchons, loin d'être dans l'impossibilité de se défendre, est mieux équipée que toute autre. Aussi devons-nous nous attendre à voir l'ennemi nous livrer bataille ; s'il ne le fait pas maintenant que nous sommes à quelque distance, il le fera quand il nous verra sur son territoire, ravageant et détruisant ses biens. Puisque telle est la puissance de la ville que nous attaquons, puisque nos succès ou nos revers doivent mesurer la gloire que nous acquerrons pour nos ancêtres et pour nous-mêmes, suivez vos chefs partout où ils vous conduiront, respectez toujours l'ordre et la discipline et exécutez promptement les commandements. Rien n'est plus beau, rien ne garantit mieux la sécurité qu'une armée nombreuse obéissant à une stricte discipline. »"
        },
        sound: "1_AN.mp3",
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '1_antiquity_background.jpg', offset: 0.3, zIndex: 10},
                {file: '1_antiquity_foreground.png', offset: -0.2, zIndex: 15},
            ]
        },
        modalContent: {
            title: "Antiquité / Guerre du Péloponnèse / Siège de Platées",
            text: "Ici, Archidamos II est dans un discours qui représente parfaitement l’idéal du guerrier grec, celui d’un meneur brave, sûr de lui et au charisme qui lui permet de diriger ses hommes sans peur. Néanmoins, on ressent dans ses mots une crainte de l’ennemi, comme une sorte de conscience que cette campagne pourrait être la fin du voyage pour lui et ses hommes. Il sait que la guerre inspire la terreur chez ses hommes et, malgré son apparente faim de gloire, il demeure un être humain qui a peur de la mort.",
            imgs: [
                {file: "ANT1.jpg", title: "Vase de soldats de Sparte"},
                {file: "ANT2.jpg", title: "Sculpture de Thucydide"},
                {file: "ANT3.jpg", title: "Discours du chef des Spartes"}
            ],
            stats: {
                deads: "80 000 morts",
                woundeds: "50 000 blessés",
                teams: "Spartes vs Athèniens",
                duration: "Environ 27 années"
            }
        }
    },
    {
        index: 2,
        path: '/content',
        textContent: {
            right: false,
            title: 'Guerre de cent ans, bataille d’Azincourt',
            main: 'Eustache Deschamps, né vers 1340 et mort vers 1425, était un poète français qui fut huissier d’armes du roi Charles V. Voici un poème qu’il aurait écrit après la bataille d’Azincourt durant la Guerre de Cent Ans, où la France a essuyé une lourde défaite contre les anglais en 1415.',
            btn: "Ecouter le Poème d'Eustache Deschamps",
            more: 'Envie d’en savoir plus sur la bataille d’Azincourt ?',
            letter: "Lire la lettre en entier",
            letterText: "Car on y fait les sept péchés mortels, Voler, meurtrir, l’un va l’autre tuant, Femmes ravir, les temples sont cassés, Loi n’a entre eux, le moindre est le plus grand, Et l’un voisin va l’autre défoulant. Corps et âme met à perdition Qui guerre suit; aux diables le comment Guerre mener n’est que damnation. Car on y fait les sept péchés mortels, Voler,* meurtrir, l’un va l’autre tuant, Femmes ravir, les temples sont cassés, Loi n’a entre eux, le moindre est le plus grand, Et l’un voisin va l’autre défoulant. Corps et âme met à perdition Qui guerre suit; aux diables le comment Guerre mener n’est que damnation."
        },
        sound: "2_MA.mp3",
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '2_middle_age_background.jpg', offset: 0.3, zIndex: 10},
                {file: '2_middle_age_darken.png', offset: 0.01, zIndex: 13},
                {file: '2_middle_age_foreground.png', offset: -0.1, zIndex: 15},
            ]
        },
        modalContent: {
            title: "Moyen-Âge / Guerre de Cent Ans / Bataille d’Azincourt",
            text: "La chronique du religieux de Saint-Denis racontait que  les troupes françaises « étaient déjà vaincues avant même de rencontrer l’ennemi ». C’était vrai. La cavalerie se lança en première ligne, tomba tête la première dans la boue, s’empala sur les défenses et croula sous les flèches anglaises qui noircissaient le ciel. les cadavres jonchaient le sol, les chevaux s'entremêlent : les fantassins sonnaient la charge et s’enfoncèrent dans cet enfer. Les pieds enracinés par la boue, la tête vers le bas, ils se retrouvent à la merci des forces adverses et tombent un par un, malgré l’arrivé de renforts. Un survivant Guillebert de Lannoy, raconte que les prisonniers furent égorgés, écrasés à la masse d’arme, ou encore jetés dans des granges enflammées. Les troupes française sont en déroute et Henry V est sorti victorieux de la bataille, après avoir achevé les blessés restants.",
            imgs: [
                {file: "MA1.png", title: "The morning of the battle of Agincourt, Sir John Gilbert, 1884"},
                {file: "MA2.jpg", title: "Miniature extraite de l’Abrégé de la Chronique, Enguerrand de Monstrelet, XVeme siècle"},
                {file: "MA3.jpg", title: "La Bataille d’Azincourt, Miniature extraite des Vigiles de Charles VII de Martial d’Auvergne 1483"}
            ],
            stats: {
                deads: "6 500 morts",
                woundeds: "2200 prisonniers",
                teams: "Français vs Anglais",
                duration: "25 octobre 1415"
            }
        }
    },
    {
        index: 3,
        path: '/content',
        textContent: {
            right: false,
            title: 'Bataille et sac de Magdebourg',
            main: 'Cette lettre de Peter Hagendorf, un mercenaire qui nous narre la bataille et le sac de Magdebourg pendant la guerre de Trente Ans, en 1631. Hagendorf est lui-même originaire de la ville qu’il s’apprête à envahir.',
            btn: 'Ecouter la lettre de Peter Hagendorf',
            more: 'Plus d’informations sur la Guerre de Trente Ans',
            letter: "Lire la lettre en entier",
            letterText: "“Nous nous sommes établis dans les villages locaux et avons assiégés la ville de Magdebourg tout l’hiver, restant campés dans nos villages jusqu’au printemps 1631. Là, nous avons pris d’assaut plusieurs positions dans la forêt de Magdebourg mais notre capitaine y a laissé sa peau, abattu par l’ennemi. Le 22 mars, Johann Galgart fut nommé comme notre nouveau capitaine puis mourut le 28 avril d’une balle dans la tête. Le 6 mai, Tilge Neuberg a été promu avant de démissionner 10 jours plus tard. Le 20 mai, nous avons attaqué et pris d’assaut pour de bon Magdebourg. J’ai pénétré la ville pendant une tempête et sans subir de blessures, Dieu merci. Malheureusement, arrivé en ville à la porte de Neustadt, on m’a tiré deux balles dans le corps. Voilà mon butin. J’étais terriblement attristé du sac de la ville bien que j’en fut un des acteurs non seulement car elle est magnifique mais aussi parce que c’est là où je suis né. Les massacres étaient cruels et les pertes humaines immenses. Je ne pourrai pas l’oublier.”"
        },
        sound: "3_RE.mp3",
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '3_renaissance_background.jpg', offset: 0.3, zIndex: 10},
                {file: '3_renaissance_foreground.png', offset: -0.2, zIndex: 15},
            ]
        },
        modalContent: {
            title: "Renaissance / Guerre de 30 ans / Bataille de Magdebourg",
            text: "La lettre de Peter Hagendorf nous montre le point de vue d’un des vainqueurs : il essaye de ne pas retranscrire d'émotion quand à la bataille bien que le soulagement de sortir vivant du conflit est nettement marqué. Puis viennent ses réactions sur le saccage et le massacre de la ville et de sa population. Il les déplore amèrement bien qu’il y ait participé, montrant le côté contradictoire de l’homme qui, en se rendant compte que l’action est horrible, y prend part.",
            imgs: [
                {file: "RE1.jpg", title: "Sac de Magdebourg après le siège par les forces catholiques, 1631"},
                {file: "RE2.jpg", title: "Eduard Steinbrück, Die Magdeburger Jungfrauen, 1866"},
                {file: "RE3.png", title: "Sac de Magdebourg, Pieter Van Der 1698"}
            ],
            stats: {
                deads: "300 morts pour l’empire et 25 000 civiles massacrés",
                woundeds: "Pas de prisonniers",
                teams: "Empire germanique vs Saxes Anhalt",
                duration: "20 jours"
            }
        }
    },
    {
        index: 4,
        path: '/content',
        textContent: {
            right: false,
            title: 'La guerre de sécession',
            main: 'Alonzo Wolverto était soldat durant la guerre de Sécession. Cette lettre, adressée à sa soeur, fut écrite juste après la bataille de Franklin, le 30 novembre 1864. Il y décrit l’horreur de sa première bataille.',
            btn: 'Ecouter le témoignage d’Alonzo Wolverto',
            more: 'Apprenez en plus sur la bataille de Franklin',
            letter: "Lire la lettre en entier",
            letterText: "Ma chère soeur, Notre batterie était au cœur du combat - nous avons perdu près de la moitié de nos hommes et avons terminé la bataille sous le commandement d’un sergent. Je n’aurais jamais pensé que les hommes pouvaient s’affronter avec autant de rage, de désespoir. Je ne m’attendais pas à en sortir vivant, mais j’ai eu de la chance... Je ne savais pas ce qu’était une bataille avant. Le grondement de la mousqueterie et le tonnerre de l’artillerie étaient assourdissants, et dix minutes après le début de la bataille, il faisait aussi noir que lorsqu’elle a cessé. Les étoiles étaient la seule façon de savoir qu’il faisait nuit."
        },
        sound: "4_TR.mp3",
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '5_temps_revolutionnaire_background.jpg', offset: 0.2, zIndex: 10},
                {file: '5_temps_revolutionnaire_foreground.png', offset: 0.1, zIndex: 15},
            ]
        },
        modalContent: {
            title: "Temps Révolutionnaires / Guerre de sécession / Bataille de Franklin",
            text: "La bataille de Franklin est la première du soldat Alonso Wolverto. Il y découvre la peur et la rage du désespoir. Et dans une guerre où les armes à feu constituent le gros de l’armement, ce dont le soldat se souviendra c’est les détonations et le bruit des explosions. La bataille ne fut pas une des plus grande de cette guerre, mais l’une des plus importante pour l’histoire puisqu’elle en décida l’issue et a donc défini les Etats-Unis que l’on connaît aujourd’hui.",
            imgs: [
                {file: "ER1.jpg", title: "Bataille de Gettysburg, 3e Brigade du Mississippi sous le général Barksdale"},
                {file: "ER2.jpg", title: "Kurz & Allison, bataille de Spottsylvania 1864"},
                {file: "ER3.png", title: "Troupes de l'Union en formation, Beaufort, Caroline du Sud, 1862"}
            ],
            stats: {
                deads: "2 000 morts",
                woundeds: "5 000 blessés",
                teams: "Nordiste vs Sudistes",
                duration: "24h"
            }
        }
    },
    {
        index: 5,
        path: '/content',
        textContent: {
            right: false,
            title: 'La grande guerre',
            main: 'René Pigeard avait vingt ans en 1914. Né dans l’Yonne. Il fut blessé à Verdun puis nommé caporal. Cette lettre destinée à son père dépeint l’horreur de cette guerre mais aussi l’optimisme dans la fatalité que ressentaient les poilus en ce temps.',
            btn: 'Ecouter la lettre de René Pigeard',
            more: 'Plus d’informations sur la bataille de Verdun',
            letter: "Lire la lettre en entier",
            letterText: "Cher papa, J’espère que tu vas bien, je suis toujours sur le front, à Verdun. Pense que de chaque côté des lignes, sur une largeur de un kilomètre, il ne reste pas un brin de verdure, mais une terre grise de poudre, sans cesse retournée par les obus : des blocs de pierre cassés, émiettés, des troncs déchiquetés, des débris de maçonnerie qui laissent supposer qu’il y a eu là une construction, qu’il y a eu des « hommes »… Je croyais avoir tout vu à Neuville. Eh bien non, c’était une illusion. Là-bas, c’était encore de la guerre : on entendait des coups de fusil, des mitrailleuses, mais ici rien que des obus, rien que cela ; puis des tranchées que l’on se bouleverse mutuellement, des lambeaux de chair qui volent en l’air, du sang qui éclabousse… Tu vas croire que j’exagère, non. C’est encore en dessous de la vérité. On se demande comment il se peut que l’on laisse se produire de pareilles choses. Je ne devrais peut-être pas décrire ces atrocités, mais il faut qu’on sache, on ignore la vérité trop brutale. Et dire qu’il y a vingt siècles que Jésus-Christ prêchait sur la bonté des hommes !Nous tenons bon cependant, c’est admirable. Mais ce qui dépasse l’imagination, c’est que les Boches attaquent encore. Il faut avouer que jamais on aura vu une pareille obstination dans le sacrifice inutile :  quand par hasard ils gagnent un bout de terrain ils savent ce que ça leur coûte et encore ne le conservent-ils pas souvent.J’espère aller bientôt vous revoir et on boira encore un beau coup de pinard à la santé de ton poilu qui t’embrasse bien fort."
        },
        sound: "5_GM.mp3",
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '4_contemporain_background.png', offset: 0.7, zIndex: 10},
                {file: '4_contemporain_middleground.png', offset: 0.4, zIndex: 15},
                {file: '4_contemporain_foreground.png', offset: 0.1, zIndex: 20},
                {file: '4_contemporain_props.png', offset: -0.7, zIndex: 25},
            ]
        },
        modalContent: {
            title: "XXème siècle / Première guerre mondiale / Bataille de Verdun",
            text: "René Pigeard est, comme de nombreux soldats lors du conflit, âgé d’à peine vingt ans. 52% des soldats ayant son âge ou moins périront pendant les combats. Il n’est pas de guerre plus propre à l’horreur que la Grande Guerre. Ce n’est pas que le nombre de morts mais aussi la démocratisation des armes à feu et de l’artillerie lourde qui rendent le conflit abominable à bien des aspects. Il suffit de voir les séquelles de certains blessés comme les fameuses “Gueules cassées“, des hommes profondément affectés physiquement suite aux batailles dont le nombre s’élève à 300 000 rien qu’en Europe. Avec 1 milliard d’obus tirés lors du conflit et tous les morts qu’ils ont amenés, la Grande Guerre aura été une fracture totale avec le passé et une brisure dans les sociétés avec plusieurs traumatismes dûs aux disparitions de proches sur le front.",
            imgs: [
                {file: "ww1_1.jpg", title: "Verdun, Ugo Matania, 1917"},
                {file: "ww1_2.jpg", title: "Verdun L'enfer, Georges Leroux 1921"},
                {file: "ww1_3.jpg", title: "Verdun, Félix Vallotton, 1917"}
            ],
            stats: {
                deads: "306 000 morts",
                woundeds: "394 000 blessés",
                teams: "Français vs Allemands",
                duration: "9 mois et 27 jours"
            }
        }
    },
    {
        index: 6,
        path: '/content',
        textContent: {
            right: true,
            title: 'Les missions en Afghanistan',
            main: 'Cette lettre est issue du carnet du Sergent Christophe Tran Van Can qui faisait partie du 21ème régiment d’infanterie de Marine en 2010 pendant la guerre en Afghanistan. Il montre que malgré la modernité du conflit la guerre reste une entreprise terrible.',
            btn: 'Ecouter la lettre du sergent Tran Van Can',
            more: 'Tout ce qu’il faut savoir sur la guerre en Afghanistan',
            letter: "Lire la lettre en entier",
            letterText: "“18 août. L'épuisement. Je n'écris plus depuis une quinzaine de jours. Plus le temps, trop fatigué. Depuis la mi-juillet, le rythme des missions s'est accéléré, je n'en peux plus. Nous n'en pouvons plus ! Nous n'avons plus une seule minute à nous. Nous rentrons du terrain pour nous laver, nous raser, dormir quelques heures puis enchaîner déjà sur une autre mission. Dans la section, tout le monde a le sentiment d'être à son maximum, de vivre un risque permanent. Avec la fatigue qui s'installe, les réflexes qui s'émoussent et la tête qui se met à gamberger. Le cocktail est explosif ! La rumeur court que les chefs, à Nijrab ou plus haut, trouvent que nous n'en faisons pas assez, que le rythme des missions peut encore s'accélérer. Une rumeur qui est claire : s'il n'y a pas de blessés ni de morts, c'est que l'on peut aller plus loin ! C'est tout simplement fou, insupportable.”"
        },
        sound: "6_TD.mp3",
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '6_today_background.jpg', offset: 0.2, zIndex: 10},
                {file: '6_today_foreground.png', offset: -0.1, zIndex: 15},
            ]
        },
        modalContent: {
            title: "Aujourd’hui / Guerre d’Afghanistan / Tagab",
            text: "Le Sergent Tran Van Can raconte dans son carnet une année entière passée en Afghanistan. Cet homme marié et père de trois enfants nous livre son vécu sur le terrain, ses missions, ses peines et ses joies de jour comme de nuit. Au fil des lectures il peut nous faire ressentir la crainte qui croît en lui mais le sentiment de patriotisme reste très présent. Il nous décrit également ses pensées qui sont toujours plus fortes pour sa famille. Dans cet extrait le Sergent montre l’envers de la guerre, les attentes de ses supérieurs et aussi les conditions dans lesquelles il vit.",
            imgs: [
                {file: "EC1.jpg", title: "Guy Lafleur, 2011"},
                {file: "EC2.jpg", title: "Sebastien Chenebeau, 2013"},
                {file: "EC3.jpg", title: "Forces spéciales, 2018"}
            ],
            stats: {
                deads: "86 000 morts",
                woundeds: "65 000 blessés",
                teams: "Alliance du Nord et OTAN vs l'émirat islamique d’Afghanistan",
                duration: "13 ans"
            }
        }
    }
]

export default data