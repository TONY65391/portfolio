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
});


const headers = [...document.querySelectorAll('main .contact .faq .question .header')];

headers.map((header, index) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        headers.forEach(item => {
            const itemContent = item.nextElementSibling;
            if (itemContent.innerText !== content.innerText){
                itemContent.classList.remove('open');
            }else{
                itemContent.classList.toggle('open');
            }
        })
    })
});


const TOKEN = 'pk.eyJ1IjoidG9uZGV2NCIsImEiOiJjbWh6MjM5eXkwYTJ4MmtzaHEyMXhtZnYwIn0.u--2EgXvYhrkcy1Q7r_BAg';
let initialCenter = [-74.5, 40];
mapboxgl.accessToken = TOKEN;
const map = new mapboxgl.Map({
    center : initialCenter,
    container : 'map',
    style : 'mapbox://styles/mapbox/streets-v12',
    zoom : 9
});

let marker = mapboxgl.Marker().setLngLat(initialCenter).addTo(map);
const popup = new mapboxgl.Popup({ offset: 25 })
  .setText('Hello from Mapbox!');

marker.setPopup(popup);




async function openPDF() {
  await window.open("./static/images/tondev_resume.pdf", "_blank");
}