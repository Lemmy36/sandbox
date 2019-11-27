'use strict';
(function () {
	function uhrzeit() {
		var jetzt = new Date(),
			h = jetzt.getHours(),
			m = jetzt.getMinutes(),
			s = jetzt.getSeconds();
		m = fuehrendeNull(m);
		s = fuehrendeNull(s);
		document.getElementById('uhr')
			.innerHTML = h + ':' + m + ':' + s;
		setTimeout(uhrzeit, 500);
	}

	function fuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		return zahl;
	}
	document.addEventListener('DOMContentLoaded', uhrzeit);
}());