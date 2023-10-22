var btn = document.querySelectorAll('.tab-btn')
var tab = document.querySelectorAll('.tab')

function reset(){
	for (var i = 0; i < tab.length; i++){
		tab[i].style.display = 'none';
		btn[i].style.backgroundcolor = '#222';

	}
}

function tabOne(){
	reset();
		tab[0].style.display = 'block';
		btn[0].style.backgroundcolor = '#08c';


}tabOne();

for (let a = 0; a < btn.length; a++) {
	btn[a].addEventListener('click', function() {

		reset();

		tab[a].style.display = 'block';
		btn[a].style.backgroundcolor = '#229dbc';

	});
}


