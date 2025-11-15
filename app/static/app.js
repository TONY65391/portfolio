const openBtn = document.querySelector('header nav');
const subMenu = document.querySelector('header ul');
openBtn.onclick = () => {
    openBtn.classList.toggle('open');
    subMenu.classList.toggle('open');
}