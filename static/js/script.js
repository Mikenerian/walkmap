var map, circle;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: 35.6812, lng: 139.7671}
    });

    map.addListener('click', function(event) {
        clickListener(event, map);
    });
}

function clickListener(event, map) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const marker = new google.maps.Marker({
        position: {lat, lng},
        map: map
    });

    // 新しい円を描画
    circle = new google.maps.Circle({
        strokeColor: '#ffc0cb',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#ffc0cb',
        fillOpacity: 0.35,
        map: map,
        center: {lat, lng},
        radius: 10000
    });
}
