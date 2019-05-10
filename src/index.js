import Element from './Element';

function ClassToggler () {
    this._nodes = document.querySelectorAll('[data-toggler]');
    this._elements = [];

    this.addListeners();
    
    this.scrollHandler();

    document.addEventListener('scroll', () => {
        this.scrollHandler();
    });
}

ClassToggler.prototype.addListeners = function () {

    if(this._nodes) {
        [].forEach.call(this._nodes, (node) => {
            
            this._elements.push(new Element(node));

        });
    }
}

ClassToggler.prototype.scrollHandler = function () {
    const top = window.scrollY;

    this._elements.forEach(element => {
        if(top >= element.shortHandedTop && !element.added) {
            const delay = Number(element.delay);

            if(delay !== false && delay > 0) {
                setTimeout(() => {
                    element.addClass();
                }, delay * 1000);
            } else {
                element.addClass();
            }
        } else if (top <  element.top) {
            element.removeClass();
        }
    });
}

const toggler = new ClassToggler();