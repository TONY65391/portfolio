const openBtn = document.querySelector('header nav');
const subMenu = document.querySelector('header ul');
openBtn.onclick = () => {
    openBtn.classList.toggle('open');
    subMenu.classList.toggle('open');
};


const toTop = document.querySelector('.top');

window.addEventListener('load', () => {toTop.classList.add('shrink');});

window.addEventListener('scroll', () => {if (document.documentElement.scrollTop === 0) {toTop.classList.add('shrink');} else{toTop.classList.remove('shrink');}});

toTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})