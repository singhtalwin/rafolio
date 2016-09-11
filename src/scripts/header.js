(function(window){
    const headerNavBtn = document.querySelector('.raf-header-nav__btn');
    const headerNavLinks = document.querySelector('.raf-header-nav__links-list');

    function toggleNavLinks() {
        const openAttr = 'open';

        if (this.hasAttribute(openAttr)) {
            this.removeAttribute(openAttr);
        } else {
            this.setAttribute(openAttr, '');
        }
    }

    function toggleNavBtnState() {
        const openAttr = 'nav-open';

        if (this.hasAttribute(openAttr)) {
            this.removeAttribute(openAttr);
        } else {
            this.setAttribute(openAttr, '');
        }
    } 

    headerNavBtn.addEventListener('click', toggleNavLinks.bind(headerNavLinks));
    headerNavBtn.addEventListener('click', toggleNavBtnState);
})(window);
