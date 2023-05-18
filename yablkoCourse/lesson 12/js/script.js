String.prototype.capitalize = function() { 
	return this.charAt(0).toUpperCase() + this.slice(1);
};

(function($) {

	var features = $('.features');

	features.sortable({
		items: 'li',
		axis: 'y',
		cursor: 'move',
		handle: '.badge-left',
		update: function(event, ui) {
			var item  = ui.item,
				order = features.sortable('serialize');

			$.ajax({
				url: 'sort',
				type: 'GET',
				data: order,
			}).then(function(data) {
				ui.item.find('.badge-right').delay(250).effect('highlight');
			});
		}
	});


	var slider = $('#slider'),
		handle,
		tip;
 
	slider.slider({
		value: 2000,
		min: 0,
		max: 10000,
		step: 20,
		create: function() {

			console.log( 'vznikol som!' );

			handle = $(this).find('.ui-slider-handle');
			
			handle
				.attr('title', $(this).slider('value'))
				.on('mouseleave', function(event) {
					event.stopImmediatePropagation();
				})
				.tooltip({
					position: {
						my: "center top+10",
        				at: "center bottom",
					},
					open: function() {
						tip = $('.ui-tooltip');
					}
				});

		},
		slide: function( event, ui ) {
			
			console.log( 'hybem sa!' );

			handle.tooltip( 'option', 'content', ui.value.toString() );
			tip.css({ left: handle.offset().left - tip.width() / 2 });

		},
		change: function( event, ui ) {

			console.log( 'zmenil som sa:(' );

			handle.tooltip( 'option', 'content', ui.value.toString() );
			tip.css({ left: handle.offset().left - tip.width() / 2 });
			
			// ajax request sem

		}
	});
	


	// -----------

	// vytiahneme si gallery element 
	var gallery  = $('.gallery'),
		selected = $('.menu').find('.selected');

	// po kliknuti na link v menu 
	$('.menu a').on('click', function(event) {
		
		// nechceme byt presmerovani na stranku
		event.preventDefault();

		// vytiahneme url adresu ktoru chceme ist prezriet ajaxom
		var a      = $(this),
			href   = a.attr('href'),
			parent = a.parent('li');

		// ak chceme zobrazit uz zobrazene, kasleme na to
		if ( selected.is( parent ) ) return;

		// vyznacime noveho parenta
		selected = parent;

		// oznacime link na ktory sme klikli ako selected
		parent.addClass('selected')
			  .siblings().removeClass('selected');

		// nechame zmiznut aktualnu galeriu
		gallery.find('.gallery-set').fadeOut();

		// ajax request, vytiahneme iba .gallery-set
		$.ajax({
			url: href,
			type: 'GET',
			dataType: 'html',
			success: function(data) {
				
				// najdeme novy gallery set a vlozime ho do .gallery
				var newGallery = $(data).find('.gallery-set');
					gallery.html( newGallery );
				
				// pridame gallery setu class s fejdovanim
				newGallery.addClass('fadeIn' + selected.data('from').capitalize());

			}
		});
	});

})(jQuery);