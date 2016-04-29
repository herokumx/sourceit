jQuery(function ($) {

    'use strict';
	
	/*==============================================================*/
    // Table of index
   /*==============================================================*/

    /*==============================================================
    # Slider Height
    # Menu Toggle
    # Menu Scrolling
	# Animated Progress bar
    # Parallax Scroll
    # Fun Fact Timer
    # Pretty Photo
    # Portfolio Filter
    # Style Chooser
    # Google Map Customization
	=============================================================*/
	
	/*==============================================================*/
	//Mobile Toggle Control
	/*==============================================================*/
	 $(function(){ 
		 var navMain = $("#main-menu");

		 navMain.on("click", "a", null, function () {
			 navMain.collapse('hide');
		 });
	 });
	/*==============================================================*/
    // Slider images Source
   /*==============================================================*/
	(function () {
		$('#slider-section').vegas({
			slides: [
				{ src: 'images/slider/1.jpg' },
				{ src: 'images/slider/2.jpg' },
				{ src: 'images/slider/3.jpg' }
			]
		});
	}());
	
	
	/*==============================================================*/
    // Menu add class
   /*==============================================================*/
	(function () {	
		function menuToggle(){
			var windowWidth = $(window).width();
			if(windowWidth > 767 ){
				$(window).on('scroll', function(){
					if( $(window).scrollTop()>700 ){
						$('.navbar').addClass('main-nav');
					} else {
						$('.navbar').removeClass('main-nav');
					}
				});
			}else{
				
				$('.navbar').addClass('main-nav');
					
			};	
		}

		menuToggle();
	}());
	
	/*==============================================================*/
    // Menu Scrolling
   /*==============================================================*/
	$('#navigation .navbar-nav').onePageNav({
			currentClass: 'active',
			filter: ':not(.exclude)',
		});
	/*==============================================================*/
    // Parallax Scrolling
   /*==============================================================*/
	
	(function () {
		function parallaxInit() {				
			$("#speakers").parallax("50%", 0.3);
			$("#schedule").parallax("50%", 0.3);
			$("#registration").parallax("50%", 0.3);
			$("#call-to-action").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());
	
	/*==============================================================*/
    // Ticket-select
   /*==============================================================*/
	(function () {
		$('.ticket-type-select').on('click', '.ticket-type a', function(ev) {
			if ("#" === $(this).attr('href')) {
				ev.preventDefault();
				var parent = $(this).parents('.ticket-type-select');
				parent.find('.change-text').html($(this).html());
			}
		});
	}());
	
	/*==============================================================*/
    // Magnific Popup
   /*==============================================================*/
	
	(function () {
		$('#photo-gallery .image-link').magnificPopup({
			gallery: {
			  enabled: true
			},
			type: 'image' 
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());
	
	
	
	/*==============================================================*/
    // # Google Map Customization
   /*==============================================================*/


	(function(){

		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 35.038104,
			lng: -15.804419,
			scrollwheel:false,
			zoom: 16,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'map-icon.png';
		map.addMarker({
			lat: 35.038104,
			lng: -15.804419,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			 infoWindow: {
				content: '<div class="map-info"><address>ThemeRegion<br />The Malawi Polytechnic, Chichiri, Blantyre <br />Malawi</address></div>',
				borderColor: 'red',
			}
		});
		  
		var styles = [ 

			{
			  "featureType": "road",
			  "stylers": [
				{ "color": "#000000" }
			  ]
			  },{
			  "featureType": "landscape",
			  "stylers": [
				{ "color": "#141414" }
			  ]
			  },{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{ "color": "#808080" }
			  ]
			  },{
			  "featureType": "poi",
			  "stylers": [
				{ "color": "#161616" }
			  ]
			  },{
			  "elementType": "labels.text",
			  "stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#7f8080" }
			  ]
			}
	  
		];

		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
		});

		map.setStyle("map_style");
	}());
	
		
});

