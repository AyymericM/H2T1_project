const data = [
    {
        index: 1,
        path: '/content',
        textContent: {
            title: 'Antiquité'
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
            title: 'Moyen âge'
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
            title: 'Renaissance'
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
            title: 'Epoque contemporaine'
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
        index: 5,
        path: '/content',
        textContent: {
            title: 'Temps révolutionnaires'
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
            title: `Aujourd'hui`
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