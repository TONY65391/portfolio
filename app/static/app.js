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
const initialCenter = [6.5244, 3.3792];

mapboxgl.accessToken = TOKEN;
const map = new mapboxgl.Map({
    center : initialCenter,
    container : 'map',
    style : 'mapbox://styles/mapbox/streets-v12',
    zoom : 9
});

let marker = new mapboxgl.Marker().setLngLat(initialCenter).addTo(map);
const popup = new mapboxgl.Popup({ offset: 25 })
  .setText('Hello from Mapbox!');

marker.setPopup(popup);

async function openPDF() {
  await window.open("./static/images/tondev_resume.pdf", "_blank");
};


const business = document.getElementById('business');
const clientName = document.getElementById('name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const textArea = document.getElementById('message')
const allInputs = Array(business, clientName, email, telephone, textArea);
const sendBtn = document.getElementById('getMessage');


sendBtn.onclick = () => {
    var error = 0;
    allInputs.forEach(input => {
        const inputValue = input.value.toUpperCase();
        if (inputValue.trim() === '' || inputValue.length === 0){error++; return};
        error > 0 ? window.alert('Cannot send empty messages') : sendMessage(); 
    })
}
const sendMessage = () => {
    const messageDiv = document.createElement('div');
    allInputs.forEach(input => {
        const inputValue = input.value;
        // if (inputValue.trim() == '' || inputValue.length == 0) return;

        const specificInput = input.getAttribute('id').toUpperCase();
        messageDiv.innerHTML += `
        <p>${specificInput}: ${inputValue}</p><br>`;
    });
    window.location.href = `mailto:umofiainemesit65391@gmail.com?subject=Client Message&body=${messageDiv.innerText}`;
}