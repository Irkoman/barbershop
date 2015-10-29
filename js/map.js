function displayMap() {
                document.getElementById('map-canvas').style.display="block";
                initialize();
            }        
function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        scrollwheel: false, 
        zoom: 17,        
        center: new google.maps.LatLng(59.9403473,30.3190278)
        }      
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.9387942,30.3230833),
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

