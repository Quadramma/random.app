function copyToClipboard(s) {
	return;
	s = s || $('#rta').html();
	var copyEvent = new ClipboardEvent('copy', {
		dataType: 'text/plain',
		data: s
	});
	document.dispatchEvent(copyEvent);

}


var current = '#home';
var ns = new Nonsense();
var type = '';

function generate(arg) {
	type = arg;
	if (arg == 'nombre') {
		$('.type').html('Nombre');
		return;
	}
	if (arg == 'nombreyApellido') {
		$('.type').html('Nombre completo');
		return;
	}
	if (arg == 'apellido') {
		$('.type').html('Apellido');
		return;
	}
	if (arg == 'tituloTrabajo') {
		$('.type').html('Titulo de Trabajo');
		return;
	}


	$('.type').html('Error');
}

function generateWord() {
	if (type == 'nombre') {
		$('#rta').html(ns.firstName());
		return;
	}
	if (type == 'nombreyApellido') {
		$('#rta').html(ns.name());
		return;
	}
	if (type == 'apellido') {
		$('#rta').html(ns.lastName());
		return;
	}
	if (type == 'tituloTrabajo') {
		$('#rta').html(ns.jobTitle());
		return;
	}
}

function goto(n, args) {
	$(current).toggle(false);
	current = '#' + n;
	$(current).toggle(true);
	$('body').scrollTop(0);

	if (current == '#generate') {
		generate(args);
	}
}
$(function() {

	$('#start').click(function() {
		goto('type');
	});
	$('#backBtn').click(function() {
		goto('type');
	});
	$('#generateBtn').click(function() {
		generateWord();
	});

});