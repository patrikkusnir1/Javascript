(function($) {

	var jb = $('.justin'),
		overlay = $('#overlay');


	// progress barujeme
	jb.on('click', function() {

		// zatial nechame zmiznut justina
		jb.fadeOut('fast');

		// po kliknuti na justina zobrazime overlay, ktory obsahuje progress bar
		overlay.fadeIn('fast', function() {
			
			// TOTO JE TEN DOLEZITY RIADOK PRE PROGRESS BAR
			// kde element bar, reprezentujuci naplnanie sa, zacne natahovat sirku z nuly na 100%
			overlay.find('.bar').animate({ width: '100%' }, 2000, function() {
				
				// ked doloadujeme, nechame zasa zmiznut cely overlay 
				// a ked zmizne, zresetujeme bar zasa na sirku nula, aby po dalsom kliku sa zacne zasa loadovat
				overlay.fadeOut('fast', function() {
					overlay.find('.bar').css({ width: 0 });
				});
				
				// pocas miznutie overlayu, nechame zasa justina zobrazit
				jb.fadeIn('fast');

			});

		});

	});


	// hybeme sa
	$(document).on('keydown', function(event) {

		switch (event.which) {
			case 38: // up
				jb.css({ top: '-=5' });
				break;
			case 37: // left
				jb.css({ left: '-=5' });
				break;
			case 39: // right
				jb.css({ left: '+=5' });
				break; 
			case 40: // down
				jb.css({ top: '+=5' });
				break;
		}

	});



	/**
	 * VYSVETLIVKY
	 * 

		// ten switch je nieco podobne, ako keby som napisal 

		if ( event.which == 38 ) {
			jb.css({ top: '-=5' });
		}
		else if ( event.which == 37 ) { 
			jb.css({ left: '-=5' });
		}
		else if ( event.which == 39 ) { 
			jb.css({ left: '+=5' });
		}
		else if ( event.which == 40 ) { 
			jb.css({ top: '+=5' });
		}


		// tento zapis znamena, ze to zoberie aktualnu hodnotu left a zmensi ju o 5
		jb.css({ left: '-=5' });

		// je to jednoduchsi sposob, ako zapisat nieco na styl 
		jb.css({ top: jb.position().top - 5 });

	 */

})(jQuery);