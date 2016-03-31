var m, menu = {
    vars: {
        menu: document.querySelector('.menu'),
        menuButton: document.querySelector('.menu--button--OPEN'),
        menuCloseButton: document.querySelector('.menu--button--CLOSE'),
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
    open: function() {
        m.container.classList.add('open');
        m.menuButton.classList.add('open');
        m.menu.classList.add('open');
        m.page.classList.add('open');
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
        });
        m.menuButton.addEventListener('click', function(e) {
            menu.open();
            e.stopPropagation();
        });
        m.container.addEventListener('click', function() {
            menu.close();
        });
        m.menuCloseButton.addEventListener('click', function() {
            menu.close();
        });
        document.addEventListener('keydown', function(e) {
            if(e.which === 27) {
                menu.close();
            }
            if(e.which === 77) {
                menu.open();
            }
        });
    }
};

menu.init();
