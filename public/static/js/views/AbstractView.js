
export default class {

    constructor(params) {
        this.params = params;
        console.log(this.params);
    }

    setTitle(title) {
        document.title = "REST-SPA | " + title;
    }

    async getHTML() {
        return "";
    }
}