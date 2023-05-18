/**
 * ULOHA 1
 */

// tato funkcia vypise trojnasobok
function vypisTrojnasobok(cislo) {
	console.log( cislo * 3 );
}

// teraz musime zavolat tu funkciu s nejakym cislom
vypisTrojnasobok( 9 );


// toto je podobna funkcia, akurat ze namiesto vypisania, VRATI vysledok
function vratTrojnasobok(cislo) {
	return cislo * 3;
}

// teraz ked spravime toto, tak nic neuvidime
// pretoze funkcia nam sice vrati vysledok, ale my ho nikam neodchytime ani s nim nespravime
vratTrojnasobok( 11 );

// avsak vdaka return si teraz mozeme to cislo odchytit a potom mozeme robit s vysledkom cokolvek
// napriklad s nim dalej pocitat, posielat ho dalsich funckii, whatever, alebo ho len vypisam
var vysledok = vratTrojnasobok( 11 );
console.log( "trojnásobok je: " + vysledok );



/**
 * ULOHA 2
 */

// toto je jeden sposob, ako to spravit
var menu = $('.zoznam'),
	settings = {
		fontWeight: 'bold',
		color: 'red'
	};

menu.children('li:eq(2)').css( settings );
menu.children('li:last-child').css( settings );

// potom druhy sposob, je toto 
// s tym, ze ten class highlight, mam spravny v CSS
// v tomto pripade oznacim prvy a druhy element, vyznacim ho trochu inak

// menu.children('li:first-child').addClass('highlight');
// menu.children('li:eq(1)').addClass('highlight');

// ono sa to da skombinovat aj do jedneho, ak pouzijeme find namiesto children
menu.find('li:first-child, li:eq(1)').addClass('highlight');



/**
 * ULOHA 3
 */

// odchytime kliknutie na link v elemente s classom .controls
$('.controls').find('a').on('click', function(event) {
	
	$(this)
		.parent().addClass('selected') // toto rodicovi (li element) prida class selected
		.siblings().removeClass('selected'); // toto surodencom rodica (vsetky ostatne li) odoberie class selected

	// zabranime klasickej akcii, nech nikam neodideme
	event.preventDefault();
	
});