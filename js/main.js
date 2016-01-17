var m, menu = {
	vars: {
		menu: document.querySelector('.menu'),
		menuButton: document.querySelector('.menu--button'),
		container: document.querySelector('.menu--container')
	},
	init: function (){
		m = this.vars;
		this.bindUI();
	},
	toggle: function() {
		m.container.classList.toggle('open');
		m.menuButton.classList.toggle('open');
		m.menu.classList.toggle('open');
	},
	close: function() {
		m.container.classList.remove('open');
		m.menu.classList.remove('open');
		m.menuButton.classList.remove('open');
	},
	bindUI: function() {
		m.menu.addEventListener('click', function(e) {
			e.stopPropagation();
			console.log(m.menu.classList);
		})
		m.menuButton.addEventListener('click', function(e) {
			menu.toggle();
			e.stopPropagation();
		});
		m.container.addEventListener('click', function() {
			menu.close();
			console.log(m.menu.classList);
		});
	}
};

menu.init();
