var GoogleCustomMap;

function initMap() {

/*----------------------------------------------------------------- 
 ARRAY met mapstyles SNAZZY MAPS  https://snazzymaps.com/
-----------------------------------------------------------------  */
 var pinLocation = new google.maps.LatLng(50.946832, 3.506803); //coordinaten: http://mondeca.com/index.php/en/any-place-en#


/*----------------------------------------------------------------- 
  MAP SPECIFIEKE OPTIES GAAN BEPALEN
-----------------------------------------------------------------  */
  var mapOptions = {

  	//standaard funtionaliteiten
    zoom: 14, //zoom niveau gaan bepalen
    center: pinLocation, //zie variabele


    //knoppen + en -
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
   
	//maptype: kaart / satelliet
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.SMALL, //small
      position: google.maps.ControlPosition.TOP_LEFT
    },
    
    //schaalmogelijkheid
    scaleControl: false,
    scaleControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },

    //streetView
    streetViewControl: false,

    //...
    overviewMapControl: false
  };


//de mapopties gaan koppelen aan het ID
  var GoogleCustomMap = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  // GoogleCustomMap.mapTypes.set('map_style', styledMap); //stijl aan de map gaan koppelen
  // GoogleCustomMap.setMapTypeId('map_style');

  
/*----------------------------------------------------------------- 
  EIGEN MARKER GAAN TOEVOEGEN
-----------------------------------------------------------------  */
var iconBase = './assets/images/';
var marker = new google.maps.Marker({
    position: pinLocation,
    map: GoogleCustomMap,
    icon: iconBase +'marker.png'
})
}


function loadScript() {
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCojjQQoihPaSqfSMvPJEH12GK6fmDOYjo&callback=initMap';
  document.body.appendChild(script);
}

window.onload = loadScript;

/*----------------------------------------------------------------- 
  MEER INFO? https://developers.google.com/maps/  **HAPPY MAPPING**
-----------------------------------------------------------------  */

