function gei (id) {
    return document.getElementById(id);
}
function qsa (qs) {
    return document.querySelectorAll(qs);
}

var m, menu = {
    elms: {
        button: gei('menu-button'),
        container: gei('menu-container'),
        navList: qsa('menu__list-item'),
        bar: gei('menu-bar')
    },
    addEvents: function() {
        var ths = this;
        m.button.addEventListener('click', function() {
            ths.toggle();
        });

        document.onkeydown = function(evt) {
            evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                ths.close();
            }
        };
    },
    manageScroll: function() {

    },
    init: function() {
        m = this.elms;
        this.addEvents();
    },
    open: function () {
        m.button.classList.add('open');
        m.container.classList.add('open');
    },
    close: function () {
        m.button.classList.remove('open');
        m.container.classList.remove('open');
    },
    toggle: function() {
        console.log("this", this);
        var ths = this,
            open = m.button.classList.contains('open');
            if(open) {
                 ths.close();
            } else {
                ths.open();
            }
    }
}

menu.init();
