//création de la map et setview
var map = L.map('mapid').setView([43.184, 3.003], 13);

//attribution et style de la map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHlybmEiLCJhIjoiY2tqanNkOWt2MW05ZzJ6bG9sYXRhdHhnNiJ9.DFQdCswa6tjm84zpbUDwTg'
}).addTo(map);

//création de l'icone Mcdonalds
var mcdonaldIcon = L.icon({
    iconUrl: 'assets/img/map/hamburger.png',

    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//création de l'icone espace liberté
var bowlingIcon = L.icon({
    iconUrl: 'assets/img/map/bowling.png',

    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// création de l'icone de l'hopital
var hopitalIcon = L.icon({
    iconUrl: 'assets/img/map/hospital.png',

    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// création de l'icone de la mediatheque
var mediaIcon = L.icon({
    iconUrl: 'assets/img/map/open-book.png',

    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//création de l'icone pour le café etienne
var cafeIcon = L.icon({
    iconUrl: 'assets/img/map/coffee.png',

    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// je place mes marqueurs sur ma map
L.marker([43.185447298142975, 3.040350603646218], {icon: mcdonaldIcon}).addTo(map).bindPopup("<img src='assets/img/map/mcdo.jpeg' width='100%'/><strong>Mc Donalds</strong><br/>Burger d'anthologie. Ce restaurant vous offrira une gastronomie d'exception.");
L.marker([43.173767, 2.993], {icon: bowlingIcon}).addTo(map).bindPopup("<img src='assets/img/map/bowling.jpg' width='100%'><br/><strong>L'Espace Liberté-Bowling</strong><br/>Le bowling est un endroit agréable à venir entre ami, même en étant trés nul vous pouvez vous réfugier dans le pub et vous alcooliser pour avoir un meilleur niveau.");
L.marker([43.180508, 3.000136], {icon: hopitalIcon}).addTo(map).bindPopup("<img src='assets/img/map/hopital.jpg' width='100%'><br/><strong>Hôpital de Narbonne</strong><br/>En période cet periode de COVID, si vous êtes à la recherche de sensation forte et de trés bons cocktails de maladies.<br> Bienvenue à l'hopital c'est l'endroit qu'il vous faut !");
L.marker([43.186014291235786, 3.0003297153453854], {icon: mediaIcon}).addTo(map).bindPopup("<img src='assets/img/map/media.jpg' width='100%'><br/><strong>La Médiathèque</strong><br/>A la recherche d'un endroit chaud et calme, rendez-vous à la médiathèque.");
L.marker([43.18411976701291, 3.0031344522334247], {icon: cafeIcon}).addTo(map).bindPopup("<img src='assets/img/map/cafeetienne.png' width='100%'><br/><strong>Café Etienne</strong><br/>Avec son vaste choix de cafés et thés , venez vous réfugiez entre amis dans cet établissement où on y retrouve des employés sympathiques et du WIFI.");
