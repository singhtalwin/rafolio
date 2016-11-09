(function(document, window){

    function itemInView() {
        const rect = this.getBoundingClientRect();
        const buffer = window.innerHeight / 2;

        return (
            (rect.top >= -buffer && rect.bottom - buffer <= window.innerHeight)
            || (rect.top -buffer < 0 && rect.bottom > window.innerHeight -buffer)
        );
    }

    const setSectionVisible = debounce(() => {
        const fadedItems = document.querySelectorAll('.raf-fadeded-item');

        for(let i=0; i < fadedItems.length; i++) {
            const fadedItem = fadedItems[i];
            const inView = itemInView.call(fadedItem);

            if (inView) {
                fadedItem.setAttribute('show-faded-item', '');
            } else {
                // fadedItem.removeAttribute('show-faded-item');
            }
        }
    }, 50);

    setSectionVisible();
    window.addEventListener('DOMContentLoaded', setSectionVisible);
    window.addEventListener('load', setSectionVisible);
    window.addEventListener('resize', setSectionVisible);
    window.addEventListener('scroll', setSectionVisible);
})(document, window);
