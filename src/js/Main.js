import data from '../data'
import Router from './Router'

export default class Main {
    constructor() {
        this.router = new Router({
            linkClassName: '.js-link',
            routeClassName: '.js-route'
        })
    }
}