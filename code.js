let consulta = window.matchMedia('(max-width: 800px)');
consulta.addListener(mediaQuery);
let burger = document.getElementById('burger');
let menu = document.getElementById("menu");
let body = document.body;
let hammer = new Hammer(body);

function toggleMenu () {
	menu.classList.toggle("active");
	burger.classList.toggle("icon-close");
	body.classList.toggle("opened");
}

function mediaQuery() {
	if (consulta.matches) {
		console.log("se cumple")
		burger.addEventListener('click', toggleMenu);
		burger.addEventListener('touch', toggleMenu);

	}
	else {
		console.log('No se cumple');
		burger.removeEventListener('click', toggleMenu);
		burger.removeEventListener('touch', toggleMenu);
	}

}

mediaQuery();

var bLazy = new Blazy({
    selector: 'img'
});

hammer.on('swiperight', function(ev) {
	menu.classList.add("active");
	burger.classList.add("icon-close");
	body.classList.add("opened")
	console.log(ev)
});


hammer.on('swipeleft', function (ev) {
	menu.classList.remove("active");
	burger.classList.remove("icon-close");
	body.classList.remove("opened");
	console.log(ev)
});



	
