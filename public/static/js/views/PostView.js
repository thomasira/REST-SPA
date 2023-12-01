
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{

    constructor(params) {
        super(params);
        this.init();
    }

    init() {
        this.setTitle('Post-view');
    }

    async getHTML() {
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
        const data = await getData('/static/data/posts.json');
        const postId = Number(this.params.id)
        const post = data.find(post => post.id === postId);
        
        return `
        <h1>${post.title}</h1>
        <p>${post.description}</p>
        <cite>${post.author}</cite>
        <a href='/posts' data-link>Back</a>
        `;
    }
}