class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<p>Hello World, this is so simple!</p>';
    }
}

window.customElements.define('hello-world', HelloWorld);