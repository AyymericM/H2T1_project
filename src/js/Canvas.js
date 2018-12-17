export default class Canvas {
    constructor() {
        this.canvas = document.querySelector('.js-canvas')
        this.greyCanvas = document.querySelector('.js-canvas-grayscale')
        
        this.context = this.canvas.getContext('2d')
        this.greyContext = this.canvas.getContext('2d')

        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.canvas.width = this.screen.width
        this.canvas.height = 300

        this.registerScreenEvents()

        this.loop = this.loop.bind(this)
        this.loop()
    }

    registerScreenEvents() {
        window.addEventListener('resize', () => {
            this.screen = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            this.canvas.width = this.screen.width
            this.canvas.height = 300
        })
    }

    draw() {
        this.context.strokeStyle = "#ffffff"
        this.context.strokeWidth = 5
        this.context.beginPath();
        this.context.moveTo(0, this.canvas.height / 2);
        this.context.bezierCurveTo(
            this.canvas.height / 2, this.canvas.height / 2,
            150, 150,
            200, 0
        );
        this.context.bezierCurveTo(
            200, 0,
            this.canvas.height / 2, this.canvas.height / 2,
            300, this.canvas.height
        );
        this.context.stroke();
    }

    loop() {
        window.requestAnimationFrame(this.loop)
        this.draw()
    }
}