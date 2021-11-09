// Открытие главных разделов | Opening a main sections 
let objectItems = document.querySelectorAll('.object-item'),
	objectSublists = document.querySelectorAll('.object-sublist');

for (let i = 0; i < objectItems.length; i++) {
	objectItems[i].addEventListener('click', function(e) {
		for (let j = 0; j < objectSublists.length; j++) {
			objectSublists[j].style.maxHeight = null;
			objectItems[j].classList.remove('open');
		}

		let panel = this.nextElementSibling;
		this.classList.toggle('open');

		if (this.classList.contains('open')) {
		    panel.style.maxHeight = panel.scrollHeight + "px";
		} else {
			panel.style.maxHeight = null;
		}
	});
}