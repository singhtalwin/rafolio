(function(window){

    function scrollToSection(e) {
        e.preventDefault();

        window.scrollTo(0, this.offsetTop);
    }

    function generatSubNavItems() {
        const sections = document.querySelectorAll('.raf-section');
        const subNav = document.querySelector('#raf-sub-nav');
        const template = subNav.querySelector('#raf-sub-nav__item--template');
        const templateItem = template.content.querySelector('.raf-sub-nav__item');

        Array.prototype.forEach.call(sections, (section) => {
            const subNavItem = templateItem.cloneNode();

            subNavItem.addEventListener('click', scrollToSection.bind(section));
            subNav.appendChild(subNavItem);
        });
    }

    function sectionInView() {
        const scrollBuffer = 100;
        const scrollTop = window.scrollY;
        const scrollBottom = scrollTop + window.innerHeight;
        const sectionTop = this.offsetTop;
        const sectionBottom = this.offsetTop + this.offsetHeight;

        return (sectionTop < scrollBottom) && (sectionBottom > scrollTop + scrollBuffer);
    }

    const setActiveNavItem = debounce(() => {
        const activeAttr = 'active';
        const sections = document.querySelectorAll('.raf-section');
        const subNavItems = document.querySelectorAll('.raf-sub-nav__item');
        let match = false;

        for(let i=0; i < sections.length; i++) {
            const subNavItem = subNavItems[i];
            const section = sections[i];
            const inView = sectionInView.call(section);

            if (!match && inView) {
                subNavItem.setAttribute(activeAttr, '');
                match = true;
            } else {
                subNavItem.removeAttribute(activeAttr);
            }
        }
    }, 50);

    generatSubNavItems();
    setActiveNavItem();
    window.addEventListener('scroll', setActiveNavItem);
    window.addEventListener('resize', setActiveNavItem);
})(window);
