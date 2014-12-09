$(function() {
	
	//HOMEPAGE FEATURED ITEMS ROLLOVER
	
	$('.featured-item').on('mouseenter', function() {
		$(this).find('.featured-rollover').stop(true, false).slideDown();
	}).on('mouseleave', function () {
		$(this).find('.featured-rollover').stop(true, false).slideUp();
	});
	
	//IN THE WORKS INSTAGRAM FEED
	
	var userFeed = new Instafeed({
    	get: 'user',
    	userId: 561512138,
    	accessToken: '979224891.467ede5.64540ce197644033a4d2237c114c3191',      	
    	success: function(response) {
            for(var c = 0; c < response.data.length; c++) {
                var image = response.data[c].images.standard_resolution.url,
                	id = response.data[c].id,
                	IGthumbnail = '<a href="'+image+'" data-lightbox="instagram"><img id="'+id+'" class="thumbnail grid_3" src="'+image+'"/></a>';
                $('.IGfeed').append(IGthumbnail);
                
                /*$('.thumbnail').on('click', function() {
                	$('.lightbox').show().append(this);
                });*/
            }
        }
    	
	});
	userFeed.run();
	
	//WAITLIST TAB DISPLAY
	
	$('.tab').on('click', function() {
		var tabID = $(this).attr('id');
		
		switch(tabID) {
			case 'tab1':
				$('.tab').removeClass("current");
				$(this).addClass("current");
				$('.waitlist-image').hide();
				$('#display1').show();
				break;
			case 'tab2':
				$('#display1').hide();
				$('.tab').removeClass("current");
				$(this).addClass("current");
				$('.waitlist-image').hide();
				$('#display2').show();
				break;
			case 'tab3':
				$('#display1').hide();
				$('.tab').removeClass("current");
				$(this).addClass("current");
				$('.waitlist-image').hide();
				$('#display3').show();
				break;
			case 'tab4':
				$('#display1').hide();
				$('.tab').removeClass("current");
				$(this).addClass("current");
				$('.waitlist-image').hide();
				$('#display4').show();
				break;
			case 'tab5':
				$('#display1').hide();
				$('.tab').removeClass("current");
				$(this).addClass("current");
				$('.waitlist-image').hide();
				$('#display5').show();
				break;
			case 'tab6':
				$('#display1').hide();
				$('.tab').removeClass("current");
				$(this).addClass("current");
				$('.waitlist-image').hide();
				$('#display6').show();
				break;
			default:
				$('#display1').show();
		}
	}); //end tab on click
	
	$('.control').on('click', function() {
		var control = $(this).attr('id');
		
		if (control == 'down-control') {
			
			var currentTab = $('.tabs').find('.current').attr('id');
			
			switch(currentTab) {
				case 'tab1':
				$('#tab1').removeClass("current");
				$('#tab2').addClass("current");
				$('.waitlist-image').hide();
				$('#display2').show();
				break;
			case 'tab2':
				$('#display1').hide();
				$('#tab2').removeClass("current");
				$('#tab3').addClass("current");
				$('.waitlist-image').hide();
				$('#display3').show();
				break;
			case 'tab3':
				$('#display1').hide();
				$('#tab3').removeClass("current");
				$('#tab4').addClass("current");
				$('.waitlist-image').hide();
				$('#display4').show();
				break;
			case 'tab4':
				$('#display1').hide();
				$('#tab4').removeClass("current");
				$('#tab5').addClass("current");
				$('.waitlist-image').hide();
				$('#display5').show();
				break;
			case 'tab5':
				$('#display1').hide();
				$('#tab5').removeClass("current");
				$('#tab6').addClass("current");
				$('.waitlist-image').hide();
				$('#display6').show();
				break;
			case 'tab6':
				$('#display1').hide();
				$('#tab6').removeClass("current");
				$('#tab1').addClass("current");
				$('.waitlist-image').hide();
				$('#display1').show();
				break;
			default:
				$('#display1').show();
			}
			
		} else if (control == 'up-control') {
		
			var currentTab = $('.tabs').find('.current').attr('id');
		
			switch(currentTab) {
				case 'tab1':
				$('#tab1').removeClass("current");
				$('#tab6').addClass("current");
				$('.waitlist-image').hide();
				$('#display6').show();
				break;
			case 'tab2':
				$('#display1').hide();
				$('#tab2').removeClass("current");
				$('#tab1').addClass("current");
				$('.waitlist-image').hide();
				$('#display1').show();
				break;
			case 'tab3':
				$('#display1').hide();
				$('#tab3').removeClass("current");
				$('#tab2').addClass("current");
				$('.waitlist-image').hide();
				$('#display2').show();
				break;
			case 'tab4':
				$('#display1').hide();
				$('#tab4').removeClass("current");
				$('#tab3').addClass("current");
				$('.waitlist-image').hide();
				$('#display3').show();
				break;
			case 'tab5':
				$('#display1').hide();
				$('#tab5').removeClass("current");
				$('#tab4').addClass("current");
				$('.waitlist-image').hide();
				$('#display4').show();
				break;
			case 'tab6':
				$('#display1').hide();
				$('#tab6').removeClass("current");
				$('#tab5').addClass("current");
				$('.waitlist-image').hide();
				$('#display5').show();
				break;
			default:
				$('#display1').show();
			}
		} 		
	}); //end control on click
	
	//SHOP FILTERS
	
	$('.filter-label').on('mouseenter', function() {
		$(this).parent().find('ul').stop(true, false).slideDown();
		$(this).parent().css('background-color', 'rgba(255,255,255,0.8)');
	});
	$('.filter').on('mouseleave', function () {
		$(this).find('ul').stop(true, false).hide();
		$(this).css('background-color', 'rgba(255,255,255,0)');
	}); //end filter-label on click
	
	$('.filter-category').on('click', function() {
		var category = $(this).attr('id');
		var items = $('.item');
		
		items.show();

	    items.filter(function() {
	        var asdf = $(this).hasClass(category);
	        return !asdf;
	    }).hide();
	}); //end filter-category on click
	
	$('.show-all').on('click', function() {
		var items = $('.item');
		
		items.show();
	}); //end show-all on click
	
	//ITEM HOVER
	
	$('.item').on('mouseenter', function() {
		$(this).find('.item-hover').fadeIn();
	}).on('mouseleave', function() {
		$(this).find('.item-hover').fadeOut();
	}); //end item hover
	
	//GALLERY CONTROLS
	
	$('#gallery1').addClass("current-image");
	
	$('.gallery-control').on('click', function() {
		var galleryControl = $(this).attr('id');
		
		if (galleryControl == 'left-control') {
		
			var currentImage = $('.gallery').find('.current-image').attr('id');
			
			switch(currentImage) {
				case 'gallery1':
					$('#gallery1').removeClass("current-image");
					$('#gallery5').addClass("current-image");
					break;
				case 'gallery2':
					$('#gallery2').removeClass("current-image");
					$('#gallery1').addClass("current-image");
					break;
				case 'gallery3':
					$('#gallery3').removeClass("current-image");
					$('#gallery2').addClass("current-image");
					break;
				case 'gallery4':
					$('#gallery4').removeClass("current-image");
					$('#gallery3').addClass("current-image");
					break;
				case 'gallery5':
					$('#gallery5').removeClass("current-image");
					$('#gallery4').addClass("current-image");
					break;
				default:
					$('.current-image').show();
			}
			
		
		} else if (galleryControl == 'right-control') {
			
			var currentImage = $('.gallery').find('.current-image').attr('id');
			
			switch(currentImage) {
				case 'gallery1':
					$('#gallery1').removeClass("current-image");
					$('#gallery2').addClass("current-image");
					break;
				case 'gallery2':
					$('#gallery2').removeClass("current-image");
					$('#gallery3').addClass("current-image");
					break;
				case 'gallery3':
					$('#gallery3').removeClass("current-image");
					$('#gallery4').addClass("current-image");
					break;
				case 'gallery4':
					$('#gallery4').removeClass("current-image");
					$('#gallery5').addClass("current-image");
					break;
				case 'gallery5':
					$('#gallery5').removeClass("current-image");
					$('#gallery1').addClass("current-image");
					break;
				default:
					$('.current-image').show();
			}

			
		}
	}); //end gallery-control on click
	
	// RELATED ITEM HOVER
	
	$('.related-item').on('mouseenter', function() {
		$(this).find('.related-hover').fadeIn();
	}).on('mouseleave', function() {
		$(this).find('.related-hover').fadeOut();
	});

}); //end doc