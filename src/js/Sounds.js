export default class Sounds {
    constructor(_params) {
        this.isMuted = true
        this.justLanded = true
        this.toggleBtn = document.querySelector(_params.toggleBtnClass)
        this.toggleBtn.addEventListener('click', () => this.toggleAudio())

        this.play = {
            ambiant: this.playAmbiant.bind(this)
        }

        this.sounds = {
            ambiant: new Audio('/static/sounds/background_sound.mp3')
        }

        this.playAmbiant()
        this.renderBtn()
    }

    playAmbiant() {
        this.sounds.ambiant.play()
            .then(() => {
                this.toggleBtn.classList.remove('audio-notification')
                this.isMuted = false
            })
            .catch(() => {
                this.isMuted = true
                this.alertUser()
            })
    }

    alertUser() {
        if (this.justLanded) {
            this.justLanded = false
            this.toggleBtn.classList.add('audio-notification')
            return true
        } else {
            return
        }
    }

    toggleAudio() {
        this.isMuted = !this.isMuted
        this.renderBtn()
        if (this.isMuted) {
            this.sounds.ambiant.pause()
        } else {
            this.playAmbiant()
        }
    }

    renderBtn() {
        if (this.isMuted) {
            this.toggleBtn.style.backgroundImage = `url('/static/sound-off.png')`
        } else {
            this.toggleBtn.style.backgroundImage = `url('/static/sound-on.png')`
        }
    }
}