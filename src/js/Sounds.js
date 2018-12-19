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

        this.voice = {
            isPlayingVoice: false,
            currentVoice: null
        }

        this.playVoice = this.playVoice.bind(this)
        this.stopVoice = this.stopVoice.bind(this)

        this.playAmbiant()
        this.renderBtn()
    }

    playAmbiant() {
        this.sounds.ambiant.loop = true
        this.sounds.ambiant.volume = 0.3
        this.sounds.ambiant.play()
            .then(() => {
                this.toggleBtn.classList.remove('audio-notification')
                this.isMuted = false
            })
            .catch(() => {
                this.isMuted = true
                this.alertUser()
            })
        this.renderBtn()
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

    muteAmbiant() {
        this.sounds.ambiant.pause()
    }

    playVoice(_file) {
        console.log(_file)
        this.isMuted = false
        this.justLanded = false
        this.toggleBtn.classList.remove('audio-notification')
        this.renderBtn()
        this.muteAmbiant()
        this.voice.isPlayingVoice = true
        this.voice.currentVoice = new Audio(`/static/sounds/${_file}`)
        this.voice.currentVoice.play()
    }

    stopVoice() {
        if (this.voice.currentVoice) {
            this.voice.currentVoice.pause()
            this.playAmbiant()
            this.voice.isPlayingVoice = false
            this.voice.currentVoice = null
        }
    }
}