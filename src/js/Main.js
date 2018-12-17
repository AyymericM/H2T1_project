import data from '../data'
import Router from './Router'
//import Canvas from './Canvas'

export default class Main {
    constructor() {
        this.router = new Router({
            linkClassName: '.js-link',
            routeClassName: '.js-route'
        })

        //this.canvas = new Canvas()
    }
}