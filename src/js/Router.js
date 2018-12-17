import data from '../data'
import Parallax from './Parallax'

export default class Router {
    constructor(_params) {
        this.currentRoute = window.location.pathname
        this.history = window.history
        
        this.links = document.querySelectorAll(_params.linkClassName)
        this.routes = document.querySelectorAll(_params.routeClassName)

        this.registerLinkEvents()
        this.renderRoutes()

        window.onpopstate = e => {
            this.currentRoute = window.location.pathname
            this.renderRoutes()
        }
    }

    registerLinkEvents() {
        for (const link of this.links) {
            link.addEventListener('click', () => {
                this.currentRoute = link.dataset.href
                this.history.pushState({}, 'Les voix de la guerre', link.dataset.href)
                this.renderRoutes()
            })
        }
    }

    renderRoutes() {
        for (const route of this.routes) {
            const pathSplit = this.currentRoute.split('/')
            const target = `/${pathSplit[1]}`

            if (route.dataset.path === target) {
                route.style.display = 'block'
            } else {
                route.style.display = 'none'
            }
        }

        if (window.location.pathname.includes('content')) {
            const rindex = window.location.pathname.split('/').pop()
            if (!isNaN(parseInt(rindex))) {
                this.parallax = new Parallax(data[rindex - 1].parallax)
                this.parallax.render()
            } else {
                this.currentRoute = '/'
                this.history.pushState({}, 'Les voix de la guerre', link.dataset.href)
                this.renderRoutes()
            }
        }
    }
}