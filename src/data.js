const data = [
    {
        index: 1,
        path: '/content',
        textContent: {
            right: false,
            title: 'Antiquité',
            main: 'Archidamos II fut l’un des rois de Sparte durant la guerre du Péloponnèse. On le retrouve ici lors d’un discours face à ses troupes aux débuts du conflit pendant le siège de la cité de Platées.',
            btn: 'Ecouter le discours complet d’Archidamos II',
            more: 'Plus d’informations sur la Guerre du Péloponnèse'
        },
        soundContent: {
            file: "audio_1.mp3"
        },
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '1_antiquity_background.jpg', offset: 0.3, zIndex: 10},
                {file: '1_antiquity_foreground.png', offset: -0.2, zIndex: 15},
            ]
        },
    },
    {
        index: 2,
        path: '/content',
        textContent: {
            right: false,
            title: 'Guerre de cent ans, bataille d’Azincourt',
            main: 'Eustache Deschamps, né vers 1340 et mort vers 1425, était un poète français qui fut huissier d’armes du roi Charles V. Voici un poème qu’il aurait écrit après la bataille d’Azincourt durant la Guerre de Cent Ans, où la France a essuyé une lourde défaite contre les anglais en 1415.',
            btn: "Ecouter le Poème d'Eustache Deschamps",
            more: 'Envie d’en savoir plus sur la bataille d’Azincourt ?'
        },
        soundContent: {
            file: "audio_2.mp3"
        },
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '2_middle_age_background.jpg', offset: 0.3, zIndex: 10},
                {file: '2_middle_age_darken.png', offset: 0.01, zIndex: 13},
                {file: '2_middle_age_foreground.png', offset: -0.1, zIndex: 15},
            ]
        },
    },
    {
        index: 3,
        path: '/content',
        textContent: {
            right: false,
            title: 'Bataille et sac de Magdebourg',
            main: 'Cette lettre de Peter Hagendorf, un mercenaire qui nous narre la bataille et le sac de Magdebourg pendant la guerre de Trente Ans, en 1631. Hagendorf est lui-même originaire de la ville qu’il s’apprête à envahir.',
            btn: 'Ecouter la lettre de Peter Hagendorf',
            more: 'Plus d’informations sur la Guerre de Trente Ans'
        },
        soundContent: {
            file: "audio_3.mp3"
        },
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '3_renaissance_background.jpg', offset: 0.3, zIndex: 10},
                {file: '3_renaissance_foreground.png', offset: -0.2, zIndex: 15},
            ]
        },
    },
    {
        index: 4,
        path: '/content',
        textContent: {
            right: false,
            title: 'La guerre de sécession',
            main: 'Alonzo Wolverto était soldat durant la guerre de Sécession. Cette lettre, adressée à sa soeur, fut écrite juste après la bataille de Franklin, le 30 novembre 1864. Il y décrit l’horreur de sa première bataille.',
            btn: 'Ecouter le témoignage d’Alonzo Wolverto',
            more: 'Apprenez en plus sur la bataille de Franklin'
        },
        soundContent: {
            file: "audio_5.mp3"
        },
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '5_temps_revolutionnaire_background.jpg', offset: 0.2, zIndex: 10},
                {file: '5_temps_revolutionnaire_foreground.png', offset: 0.1, zIndex: 15},
            ]
        },
    },
    {
        index: 5,
        path: '/content',
        textContent: {
            right: false,
            title: 'La grande guerre',
            main: 'René Pigeard avait vingt ans en 1914. Né dans l’Yonne. Il fut blessé à Verdun puis nommé caporal. Cette lettre destinée à son père dépeint l’horreur de cette guerre mais aussi l’optimisme dans la fatalité que ressentait les poilus en ce temps.',
            btn: 'Ecouter la lettre de René Pigeard',
            more: 'Plus d’informations sur la bataille de Verdun'
        },
        soundContent: {
            file: "audio_4.mp3"
        },
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
    },
    {
        index: 6,
        path: '/content',
        textContent: {
            right: true,
            title: 'Les missions en Afghanistan',
            main: 'Cette lettre est issue du carnet du Sergent Christophe Tran Van Can qui faisait partie du 21ème régiment d’infanterie de Marine en 2010 pendant la guerre en Afghanistan. Il montre que malgré la modernité du conflit la guerre reste une entreprise terrible.',
            btn: 'Ecouter la lettre du sergent Tran Van Can',
            more: 'Tout ce qu’il faut savoir sur la guerre en Afghanistan'
        },
        soundContent: {
            file: "audio_6.mp3"
        },
        parallax: {
            containerClassName: 'js-parallax',
            layerClassName: 'parallax-layer',
            layers: [
                {file: '6_today_background.jpg', offset: 0.2, zIndex: 10},
                {file: '6_today_foreground.png', offset: -0.1, zIndex: 15},
            ]
        },
    }
]

export default data