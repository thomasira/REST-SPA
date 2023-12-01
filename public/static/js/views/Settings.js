
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{

    constructor(params) {
        super(params);
        this.init();
    }

    init() {
        this.setTitle('Settings');
    }

    async getHTML() {
        return `
        <h1>Settings</h1>
        <p>Hello, pls come in</p>
        <a href="/posts" data-link>See the last Post</a>
        `;
    }
}