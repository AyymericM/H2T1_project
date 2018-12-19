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
        document.body.style.overflow = "hidden"
        this.loading.style.display = "flex"
        setTimeout(() => {
            this.loading.classList.remove('loaded')
        }, 100);
    }

    hideLoading() {
        this.loading.classList.add('loaded')
        setTimeout(() => {
            document.body.style.overflow = "auto"
            this.loading.style.display = "none"
        }, 510);
    }

    registerLinkEvents() {
        for (const link of this.links) {
            link.addEventListener('click', () => {
                this.showLoading()
                this.unregisterContentEvents()
                this.hideModal()
                this.sounds.stopVoice()
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

    showModal() {
        const modal = document.querySelector('.content-modal')
        const content = document.querySelector('.content-wrapper')
        modal.style.display = 'flex'
        content.classList.add('modal-opened')
    }

    hideModal() {
        const modal = document.querySelector('.content-modal')
        const content = document.querySelector('.content-wrapper')
        modal.style.display = 'none'
        content.classList.remove('modal-opened')
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
            const letter = container.querySelector('.content.letter')
    
            const txt = this.currentData.textContent
            title.innerText = txt.title
            main.innerText = txt.main
            more.innerText = txt.more
            btn.innerText = txt.btn
            letter.innerText = txt.letter
            
            this.renderModal()
            this.registerContentEvents()
        }
    }

    renderModal() {
        const modal = document.querySelector('.modal-container')
        const title = modal.querySelector('.modal-content.text > .title')
        const text = modal.querySelector('.modal-content.text > .text')
        const img = modal.querySelector('.modal-image-display .image')
        const imgtext = modal.querySelector('.modal-image-display .text')
        const thumbs = modal.querySelectorAll('.modal-thumb-container .thumb')

        const stat_1 = modal.querySelector('.modal-stats-item > .text._1')
        const stat_2 = modal.querySelector('.modal-stats-item > .text._2')
        const stat_3 = modal.querySelector('.modal-stats-item > .text._3')
        const stat_4 = modal.querySelector('.modal-stats-item > .text._4')
        console.log(stat_1)
        const modalContent = this.currentData.modalContent

        title.innerText = modalContent.title
        text.innerText = modalContent.text
        imgtext.innerText = modalContent.imgs[0].title
        stat_1.innerText = modalContent.stats.deads
        stat_2.innerText = modalContent.stats.woundeds
        stat_3.innerText = modalContent.stats.teams
        stat_4.innerText = modalContent.stats.duration

        document.querySelector('.modal-image-display .image').style.backgroundImage = `url('/static/modal/${modalContent.imgs[0].file}')`

        if (document.querySelector('.thumb.selected')) {
            document.querySelector('.thumb.selected').classList.remove('selected')
        }

        thumbs[0].classList.add('selected')

        for (let i = 0; i < this.currentData.modalContent.imgs.length; i++) {
            const img = this.currentData.modalContent.imgs[i]
            thumbs[i].style.backgroundImage = `url('/static/modal/${img.file}')`
            thumbs[i].onclick = () => {
                document.querySelector('.modal-image-display .image').style.backgroundImage = `url('/static/modal/${img.file}')`
                document.querySelector('.modal-image-display .text').innerText = img.title
                document.querySelector('.thumb.selected').classList.remove('selected')
                thumbs[i].classList.add('selected')
            }
        }
    }

    unregisterContentEvents() {
        document.querySelector('.content.more').removeEventListener('click', this.showModal)
        document.querySelector('.modal-exit').removeEventListener('click', this.hideModal)
        const thumbs = document.querySelectorAll('.thumb')
        for (const thumb of thumbs) {
            thumb.removeEventListener('click', this.displayModalImg)
        }
    }

    
    registerContentEvents() {
        document.querySelector('.content.more').addEventListener('click', this.showModal)
        document.querySelector('.modal-exit').addEventListener('click', this.hideModal)
        document.querySelector('.content.btn').onclick = () => {
            console.log(this.sounds)
            if (this.sounds.voice.isPlayingVoice) {
                this.sounds.stopVoice()
            } else {
                this.sounds.playVoice(this.currentData.sound)
            }
        }

        const thumbs = document.querySelectorAll('.thumb')
        for (const thumb of thumbs) {
            thumb.addEventListener('click', this.displayModalImg)
        }
    }

    displayModalImg(e) {
        const imgData = e.target.style.backgroundImage
        const img = document.querySelector('.modal-image-display > .image')
        img.style.backgroundImage = `url(${imgData})`
        console.log(img)
    }
}