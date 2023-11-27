
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{

    constructor() {
        super();
        this.init();
    }

    init() {
        this.setTitle('Posts');
    }

    async getHTML() {
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
        const data = await getData('/static/data/posts.json');
        let listPosts = "<ul>";
        data.forEach(item => {
            listPosts += `<li><a href="post-view/${item.id}" data-link>${item.title}</a></li>`;
        });
        listPosts += "</ul>";

        return `
        <h1>List of Posts</h1>
        ${listPosts}`;
    }
}