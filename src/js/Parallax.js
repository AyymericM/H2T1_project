export default class Parallax {
    constructor(_params) {
        this.params = _params
        this.layers = []
        this.render = this.render.bind(this)
        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.registerScreenEvents()
    }

    registerScreenEvents() {
        window.addEventListener('resize', () => {
            this.screen = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        })
    }

    registerEvents() {
        window.addEventListener('mousemove', e => {
            const widthRatio = (this.screen.width / 2) - e.clientX
            const heightRatio = (this.screen.height / 2) - e.clientY
            for (const layer of this.layers) {
                const offset = layer.dataset.offset
                const move = {
                    x: (widthRatio * offset) / 20,
                    y: (heightRatio * offset) / 20,
                }
                layer.style.transform = `translateX(${move.x}px) translateY(${move.y}px)`
            }
        })
    }

    render() {
        const container = document.querySelector(`.${this.params.containerClassName}`)
        container.innerHTML = ''
        for (const item of this.params.layers) {
            const layer = document.createElement('div')
            layer.classList.add(this.params.layerClassName)
            layer.style.backgroundImage = `url('/static/parallax/${item.file}')`
            layer.style.zIndex = item.zIndex
            layer.dataset.offset = item.offset
            this.layers.push(layer)
            container.appendChild(layer)
        }
        this.registerEvents()
    }
}