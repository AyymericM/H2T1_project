import data from '../data'
import Parallax from './Parallax'

export default class Main {
    constructor() {
        this.parallax = new Parallax(data[4].parallax)

        this.parallax.render()
    }
}