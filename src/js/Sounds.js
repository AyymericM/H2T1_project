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
            currentVoice: null,
            progression: document.querySelector('.content.btn > .progression')
        }

        this.playVoice = this.playVoice.bind(this)
        this.pauseVoice = this.pauseVoice.bind(this)
        this.stopVoice = this.stopVoice.bind(this)
        this.playStatusLoop = this.playStatusLoop.bind(this)

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
            this.muteAmbiant()
            this.stopVoice()
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
        console.log(this.voice.currentVoice)
        if (!this.voice.currentVoice) {
            console.log('nop');
            
            this.isMuted = false
            this.justLanded = false
            this.toggleBtn.classList.remove('audio-notification')
            this.renderBtn()
            this.muteAmbiant()
            this.voice.isPlayingVoice = true
            this.voice.currentVoice = new Audio(`/static/sounds/${_file}`)
            this.voice.currentVoice.play()
            this.playStatusLoop()
        } else {
            this.resumeVoice()
        }
    }

    resumeVoice() {
        this.isMuted = false
        this.voice.isPlayingVoice = true
        this.renderBtn()
        this.muteAmbiant()
        this.voice.currentVoice.play()
    }

    pauseVoice() {
        if (this.voice.currentVoice) {
            this.voice.currentVoice.pause()
            if (!this.isMuted) {
                this.playAmbiant()
            }
            this.voice.isPlayingVoice = false
        }
    }

    stopVoice() {
        if (this.voice.currentVoice) {
            this.voice.currentVoice.pause()
            if (!this.isMuted) {
                this.playAmbiant()
            }
            this.voice.isPlayingVoice = false
            this.voice.currentVoice = null
        }
    }

    playStatusLoop() {
        window.requestAnimationFrame(this.playStatusLoop)
        if (this.voice.isPlayingVoice) {
            const status = this.voice.currentVoice.currentTime / this.voice.currentVoice.duration
            this.voice.progression.style.transform = `scaleX(${status})`
            if (status >= 1) {
                this.stopVoice()
            }
        }
    }
}