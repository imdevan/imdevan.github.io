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
        bar: gei('menu-bar'),
        isOpen: function() {
            return this.button.classList.contains('open');
        }
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
    initScroll: function() {
        var ths = this
            last = 0,
            current = 0;

        window.setInterval(function() {
            current = document.body.scrollTop;

            if (current === last || m.isOpen()){
                return;
            }
            else if(current > last ){
                m.bar.classList.add('close');
                console.log("close");
            } else {
                m.bar.classList.remove('close');
                console.log("open");
            }
            last = current;
        }, 50);
    },
    init: function() {
        m = this.elms;
        this.addEvents();
        this.initScroll();
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
        var ths = this;

        if(m.isOpen()) {
             ths.close();
        } else {
            ths.open();
        }
    }
}

menu.init();
