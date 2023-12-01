import Dashboard from "./views/Dashboard.js";
import Post from "./views/Post.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');
const getParams = match => {
    const values = match.isMatch.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(isMatch => isMatch[1]);
    return Object.fromEntries(keys.map((key, i) => { return [key, values[i]] }));
}

const router = async () => {

    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Post },
        { path: "/post-view/:id", view: PostView },
        { path: "/settings", view: Settings },
    ];

    // 1.2 match function
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname.match(pathToRegex(route.path))
        }
    });
    
    // 1.3 matching and other non-match
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if(!match) {
        match = {
            route: routes[0],
            isMatch: [location.pathname]
        }
    }

    // 1.4 inject view into DOM
    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHTML();
}

//2 push url into browser and history
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}
window.addEventListener('popstate', router);

//3 run the router in interactions
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});


