
function criadoshoje(url_atual) {
	alert('Teste edição criadoshoje');
	var url = url_atual.split('#D')[0];
	url = url + '_PublishedToday_YES';
	window.open(url, "_blank");
};

