(function(window){
    const links = document.querySelectorAll('.raf-text-link');
    const pathName = window.location.pathname;

    Array.prototype.forEach.call(links, (link) => {

        if (link.getAttribute('href') === pathName) {
            link.setAttribute('active', '');
        }
    });
})(window);
