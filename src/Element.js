function Element (node) {
    this.node = node;
    this.top = node.offsetTop - window.screen.height;
    this.className = node.getAttribute('data-toggler');

    const delay = node.getAttribute('data-toggler-delay');

    this.delay = delay ? delay : false; 
    this.shortHandedTop = node.offsetTop - (window.screen.height - window.screen.height / 10);
    this.added = false;
}

Element.prototype.addClass = function() {
    this.node.classList.add(this.className);
    this.added = true;
}

Element.prototype.removeClass = function() {
    this.node.classList.remove(this.className);
    this.added = false;
}

export default Element;