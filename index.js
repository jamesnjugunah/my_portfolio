const navSlide = () => {
    const header = document.getElementsByClassName('.header');
    const nav = document.getElementsByClassName('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    header.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        header.classList.toggle('toggle');
    });
}

navSlide();