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
mapboxgl.accessToken = TOKEN;

// Lagos coordinates
const lagosCoordinates = [3.3792, 6.5244];

const lagos = [3.3792, 6.5244];

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: lagos,
    zoom: 15,
});

map.addControl(new mapboxgl.NavigationControl());

// Add stable marker
let marker = new mapboxgl.Marker({color:'green'}).setLngLat(lagos).addTo(map);

const search = document.getElementById('search');
const searchBtn = document.getElementById('sendBtn');
const resultDiv = document.getElementById('resultDiv');
search.addEventListener('keydown', (e) => {
    const searchValue = search.value.trim();
    if (searchValue === '' || searchValue.length === 0) return;
    if (e.key !== 'Enter') return;

    resultDiv.innerHTML = `<p>Searching 🔍...</p>`
    setTimeout(() => {
        searchPlace(searchValue);
    }, 1000);
});

async function searchPlace(place){
    resultDiv.innerHTML = '';
    const BASE_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${TOKEN}&limit=5`
    const response = await fetch(BASE_URL);
    const data = await response.json();
    
    data.features.forEach(feature => {
        const p = document.createElement('p');
        p.innerText = feature.place_name;
        p.classList.add('result');
        p.setAttribute("data-longitude", feature.center[0])
        p.setAttribute("data-latitude", feature.center[1]);
        resultDiv.append(p);
    })
    return data.features || [];
};

resultDiv.addEventListener('click', (e) => {
    const longitude = parseFloat(e.target.getAttribute('data-longitude'));
    const latitude = parseFloat(e.target.getAttribute('data-latitude'));
    map.flyTo({center : [longitude, latitude]});
    marker.setLngLat([longitude, latitude]);
    search.value = e.target.innerText;
    resultDiv.innerHTML = '';
})

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

        const specificInput = input.getAttribute('id').toUpperCase();
        messageDiv.innerHTML += `
        <p>${specificInput}: ${inputValue}</p><br>`;
    });
    window.location.href = `mailto:umofiainemesit65391@gmail.com?subject=Client Message&body=${messageDiv.innerText}`;
};

async function openPDF() {
  await window.open("./static/images/tondev_resume.pdf", "_blank");
};
