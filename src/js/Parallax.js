export default class Parallax {
    constructor(_data, _hideLoading, _route) {
        this.data = _data
        this.layers = []
        this.route = _route
        this.render = this.render.bind(this)
        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.hideLoading = _hideLoading

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

    lazyLoad(_item) {
        return new Promise((resolve, reject) => {
            const i = new Image()
            i.onload = () => resolve()
            i.src = `/static/parallax/${_item}`
        })
    }

    render() {
        const container = document.querySelector(`.${this.data.parallax.containerClassName}`)
        container.innerHTML = ''

        for (const item of this.data.parallax.layers) {
            this.lazyLoad(item.file).then(() => {
                const layer = document.createElement('div')
                layer.classList.add(this.data.parallax.layerClassName)
                layer.style.backgroundImage = `url('/static/parallax/${item.file}')`
                layer.style.zIndex = item.zIndex
                layer.dataset.offset = item.offset
                this.layers.push(layer)
                container.appendChild(layer)
                if (this.layers.length >= this.data.parallax.layers.length) {
                    this.hideLoading()
                    this.route.classList.remove('loading-in')
                    this.route.classList.add('loading-out')
                }
            }).catch(e => console.error(e))
        }

        const overlay = document.createElement('div')
        overlay.classList.add('parallax-overlay')
        container.appendChild(overlay)
        this.registerEvents()
    }
}