var test = {};
(function(test){
"use strict";
    var div;

    function clear(){
        if( div && div.timeID) clearTimeout(div.timeID);
        Array.prototype.forEach.call(document.querySelectorAll('div'), function(e){ e.remove(); });
    }

    Math.rndRange = function( min, max ){
        var d = (Math.random()*((max-min)+1)) + min;
        return d;
    }

    function init(){
        test.clear();
        div = document.createElement('div');
        div.style.width           = 100 +'px';
        div.style.height          = 100 +'px';
        div._cx                   = ((window.innerWidth/2) - 50);
        div._cy                   = ((window.innerHeight/2) - 50);
        div._x                    = div._cx;
        div._y                    = div._cy;
        div._ix                   = div._x;
        div._iy                   = div._y;
        div._radius               = 200;
        div.style.top             = div._y + 'px';
        div.style.left            = div._x + 'px';
        div.style.backgroundColor = 'white';
        div.style.position        = 'fixed';
        div.animate               = true;
        div.cnt                   = 0;
        document.body.appendChild(div);
    }

    function anim(){
        if( !div.animate ) return;

        div.cnt+=0.01;
        div._x = div._cx + Math.cos(div.cnt*Math.PI)*div._radius;
        div._y = div._cy + Math.sin(div.cnt*Math.PI)*div._radius;
        div.style.top = (~~div._y) + 'px';
        div.style.left = (~~div._x) + 'px';
        div.timeID = setTimeout(anim,10);
    }

    test.init = init;
    test.clear = clear;
    test.anim  = anim;
    test.go = function(){
        test.init();
        test.anim();
    }
})(test);
