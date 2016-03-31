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
		})
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
			console.log(e.which);
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

function rand(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame          ||
        window.webkitCancelRequestAnimationFrame    ||
        window.mozCancelRequestAnimationFrame       ||
        window.oCancelRequestAnimationFrame     ||
        window.msCancelRequestAnimationFrame        ||
        clearTimeout
} )();

var p, projectMenu = {
    vars: {
        projects: document.querySelectorAll('.project'),
        shapeCanvas: document.querySelector('.shapes'),
        shapeArray: [],
        square: document.getElementById('square'),
        circle: document.getElementById('circle'),
        triangle: document.getElementById('triangle'),
        star: document.getElementById('star')
    },
    stopShapes: function() {

    },
    initShapes: function(shapes, height, width) {

    },
    moveShapes: function (shapes) {
    },
    init: function() {
        var that = this;
        p = that.vars;
        p.shapeArray = [{shape:p.square}, {shape: p.circle}, {shape: p.triangle}, {shape: p.star}];
        that.bindUI();
        // window.requestAnimationFrame(that.draw);
    },
    bindUI: function() {
        var that = this;
        [].forEach.call(p.projects, function(project) {
            project.addEventListener('mouseenter', function(e) {
                // height and width of paroject
                var height = this.offsetHeight;
                var width = this.offsetWidth;
                // Set random position to to each shape
                [].forEach.call(p.shapeArray, function(shape) {
                    shape.rotation = rand(0, 359) + "deg";
                    shape.rotationSpeed = rand(1,5);
                    shape.speed = rand(1,5);
                    shape.pos = {x: rand(0, width), y: rand(0, height)};
                    shape.shape.style.transform = "rotate(" + shape.rotation +
                        ") translate(" + shape.pos.x + "px, " + shape.pos.y + "px)";
                    console.log(shape);
                });
                this.appendChild(p.shapeCanvas);
                that.moveShapes(p.shapes);
            });
        });
        [].forEach.call(p.projects, function(project) {
            project.addEventListener('mouseleave', function(e) {
                this.removeChild(p.shapeCanvas);
                that.stopShapes(p.shapes);
            });
        });
    }
}

if(document.querySelectorAll('.project')) {
    projectMenu.init();
}
