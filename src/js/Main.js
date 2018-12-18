import data from '../data'
import Parallax from './Parallax'
import Sounds from './Sounds'

export default class Main {
    constructor() {
        this.currentRoute = window.location.pathname
        this.currentData = null
        this.history = window.history
        
        this.params = {
            linkClassName: '.js-link',
            routeClassName: '.js-route',
            loadingClassName: '.js-loader',
            timelineDotsClassName: '.js-timeline'
        }

        this.loading = document.querySelector(this.params.loadingClassName)
        this.links = document.querySelectorAll(this.params.linkClassName)
        this.routes = document.querySelectorAll(this.params.routeClassName)
        this.timelineDots = document.querySelectorAll(this.params.timelineDotsClassName)

        this.registerLinkEvents()
        this.renderRoutes()

        this.sounds = new Sounds({toggleBtnClass: '.nav > .nav-item.sound'})

        window.onpopstate = e => {
            this.showLoading()
            setTimeout(() => {
                this.currentRoute = window.location.pathname
                this.renderRoutes()
            }, 200)
        }
    }

    showLoading() {
        this.loading.style.display = "flex"
        setTimeout(() => {
            this.loading.classList.remove('loaded')
        }, 100);
    }

    hideLoading() {
        this.loading.classList.add('loaded')
        setTimeout(() => {
            this.loading.style.display = "none"
        }, 510);
    }

    registerLinkEvents() {
        for (const link of this.links) {
            link.addEventListener('click', () => {
                this.showLoading()
                this.currentRoute = link.dataset.href
                this.history.pushState({}, 'Les voix de la guerre', link.dataset.href)
                setTimeout(() => {
                    this.renderRoutes()
                }, 410)
            })
        }
    }

    renderTimeline() {
        for (const element of this.timelineDots) {
            const dot = element.querySelector('.timeline-dot')
            if (parseInt(element.dataset.index) === parseInt(this.currentData.index)) {
                dot.classList.add('active')
            } else {
                dot.classList.remove('active')
            }
        }
    }

    renderRoutes() {
        for (const route of this.routes) {
            const pathSplit = this.currentRoute.split('/')
            const target = `/${pathSplit[1]}`

            if (route.dataset.path === target) {
                route.style.display = 'block'
                route.classList.add('loading-in')
                route.classList.remove('loading-out')
                setTimeout(() => {
                    this.hideLoading()
                    route.classList.remove('loading-in')
                    route.classList.add('loading-out')
                }, 1000)
            } else {
                route.style.display = 'none'
            }
        }

        if (window.location.pathname.includes('content')) {
            const rindex = window.location.pathname.split('/').pop()
            if (!isNaN(parseInt(rindex))) {
                const d = data.filter(val => val.index === parseInt(rindex))
                this.currentData = d[0]
                this.parallax = new Parallax(this.currentData)
                this.parallax.render()
                this.renderTimeline()
                this.renderText()
            } else {
                this.currentRoute = '/'
                this.history.pushState({}, 'Les voix de la guerre', link.dataset.href)
                this.renderRoutes()
            }
        }
    }

    renderText() {
        if (this.currentData) {
            const container = document.querySelector('.content-container')
            if (this.currentData.textContent.right) {
                container.querySelector('.content-column').classList.add('right')
            } else {
                container.querySelector('.content-column').classList.remove('right')
            }
            const title = container.querySelector('.content.title')
            const main = container.querySelector('.content.main')
            const btn = container.querySelector('.content.btn')
            const more = container.querySelector('.content.more')
    
            const txt = this.currentData.textContent
            title.innerText = txt.title
            main.innerText = txt.main
            more.innerText = txt.more
            btn.innerText = txt.btn
            // btn.addEventListener('click', () => {
            //     if (this.sounds.isPlayingVoice) {
            //         this.sounds.pauseVoice()
            //     }
            //     this.sounds.playVoice({
            //         play
            //         file: this.data.soundContent.file,
            //         el: btn
            //     })
            // })
        }
    }
}