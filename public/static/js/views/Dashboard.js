
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{

    constructor() {
        super();
        this.init();
    }

    init() {
        this.setTitle('Dashboard');
    }

    async getHTML() {
        return `
        <h1>DashBoard</h1>
        <p>Hello, pls come in</p>
        <a href="/posts" data-link>See the last Post</a>
        `;
    }
}