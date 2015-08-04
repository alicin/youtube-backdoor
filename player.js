var Player = function () {

  this.init = function () {
    document.body.appendChild(this.createOverlay());
  };
  
  this.getVideoId = function () {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == 'v') {
            return decodeURIComponent(pair[1]);
        };
    };
  };

  this.buildIframeUrl = function () {
    return 'https://www.youtube.com/embed/' + this.getVideoId() + '?rel=0&amp;showinfo=0';
  };

  this.createOverlay = function () {
    var div = document.createElement('div');
    div.innerHTML = '<div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: rgba(0,0,0,.7);z-index: 9999999999;"><iframe width="560" height="315" src="' + this.buildIframeUrl() + '" frameborder="0" style="position: fixed; top: 50%;left: 50%;margin-top: -157px;margin-left: -280px;" allowfullscreen></iframe></div>';
    return div;
  };

};

var player = new Player();
player.init();