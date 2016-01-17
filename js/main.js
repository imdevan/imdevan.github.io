var m, menu = {
	vars: {
		menu: document.querySelector('.menu'),
		menuButton: document.querySelector('.menu--button'),
		container: document.querySelector('.menu--container'),
		page: document.querySelector('.page')
	},
	init: function (){
		m = this.vars;
		this.bindUI();
	},
	toggle: function() {
		m.container.classList.toggle('open');
		m.menuButton.classList.toggle('open');
		m.menu.classList.toggle('open');
		m.page.classList.toggle('open');
	},
	close: function() {
		m.container.classList.remove('open');
		m.menuButton.classList.remove('open');
		m.menu.classList.remove('open');
		m.page.classList.remove('open');
	},
	bindUI: function() {
		m.menu.addEventListener('click', function(e) {
			e.stopPropagation();
		})
		m.menuButton.addEventListener('click', function(e) {
			menu.toggle();
			e.stopPropagation();
		});
		m.container.addEventListener('click', function() {
			menu.close();
		});
		document.addEventListener('keypress', function(e) {
			if(e.which === 27)
				menu.close();
		});
	}
};

menu.init();
