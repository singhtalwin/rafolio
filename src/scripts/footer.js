(function(window){
    const backToTopBtn = document.querySelector('.raf-footer__back-to-top');

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    backToTopBtn.addEventListener('click', scrollToTop);
})(window);
