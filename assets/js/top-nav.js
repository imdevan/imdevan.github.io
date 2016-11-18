var nav = window.nav || {};

nav.TopNav= function() {
  this.container = document.querySelector("[data-top-nav='container']");
  this.icon = document.querySelector("[data-top-nav='icon']");
  this.text = document.querySelector("[data-top-nav='text']");
  this.elements = [this.container, this.icon, this.text];
  this.position = 0;
}

nav.TopNav.prototype.init = function() {
  console.log('init');
    this.initScroll();
}

nav.TopNav.prototype.hide = function() {
  this.container.classList.add('hide');
}

nav.TopNav.prototype.unHide = function() {
  this.container.classList.remove('hide');
}

nav.TopNav.prototype.initScroll = function() {
    var ths = this;

  window.setInterval(function() {
    var pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (pos < 300){
      ths.container.classList.add('onTop');
    } else {
      ths.container.classList.remove('onTop');
    }
    console.log(ths.position);
    if (pos < ths.position) {
      ths.unHide();
    } else if (pos > ths.position) {
      ths.hide();
    }

    ths.position = pos;
  }, 150);
}

nav.TopNav.prototype.onTop = function() {
    console.log(pos);
    return pos < 1
}

nav.instance = new nav.TopNav;
nav.instance.init();
