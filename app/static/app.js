const menu = document.querySelector('header ul');
const openBtn = document.querySelector('header nav');

openBtn.onclick = () => {
    openBtn.classList.toggle('open');
    menu.classList.toggle('open');
}

const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        };
    });
}, { threshold : 0.2 });

sections.forEach(section => {observer.observe(section);})


const footer = document.querySelector('footer');

const FooterObserver = new IntersectionObserver(entry => {
    if (entry[0].isIntersecting){
        entry[0].target.classList.add('show');
    }
}, { threshold : 0.2 });


FooterObserver.observe(footer);


const toTop = document.querySelector('.top');

window.addEventListener('load', () => {
    if (window.scrollY <= 200){
        toTop.classList.add('hide');
    }else{toTop.classList.remove('hide')};
});
window.addEventListener('scroll', () => {
    if (window.scrollY <= 200){
        toTop.classList.add('hide');
    }else{toTop.classList.remove('hide')};
});

const toggle = document.getElementById('theme');
toggle.onclick = () => {
    document.querySelector('body').classList.toggle('dark');
}

const update = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        let increment = target / 10000
        if ( count < target ){
            count += increment
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update)
        }else{
            counter.innerText = '0';
        }
    });
};



const headers = document.querySelectorAll('main #hire-me .faq h3');
headers.forEach(header => {
    header.addEventListener('click', () => {
        headers.forEach(item => {
            const content = item.nextElementSibling;
            const i = item.querySelector('i');
            header === item ? (content.classList.toggle('open'), i.classList.remove(`fa-arrow-down`), i.classList.add(`fa-arrow-up`)) : (content.classList.remove('open'), i.classList.add('fa-arrow-down'), i.classList.remove('fa-arrow-up'));
        });
    });
});