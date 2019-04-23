(function () {
	document.body.addEventListener('keydown', function(e) {
		if (e.ctrlKey && e.which == 69) {
			e.preventDefault();
			changeToText();
		}

		if (e.ctrlKey && e.which == 83) {
			e.preventDefault();
			changeToBlock();
		}

		if (e.which == 27) {
			changeToBlock();
			div.innerHTML = '';
		}

	})
})();


var textarea = document.querySelector('.textarea'),
	div = document.querySelector('.switch');

function changeToText() {
	div.style.display = 'none';
	textarea.style.display = 'block';
}

function changeToBlock() {
	div.style.display = 'block';
	textarea.style.display = 'none';
	div.innerHTML = textarea.value;
}