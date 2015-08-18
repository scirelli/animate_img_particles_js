/** *****************************************************************************************************
* Author: Steve Cirelli
* File Desc: 
* Requires:
******************************************************************************************************* */
if( scUtils === undefined ) { var scUtils = {}; }

(function(ns){
'use strict';
    var RADIUS = 200;

    function init( div ){
        div._ix                   = div._x;
        div._iy                   = div._y;
        div._x                    = Math.rndRange( 0, window.innerWidth );
        div._y                    = Math.rndRange( 0, window.innerHeight );
        div._radius               = RADIUS;
        div._xRadius              = Math.rndRange(-div._radius,div._radius);
        div._yRadius              = Math.rndRange(-div._radius,div._radius);
        div.style.top             = div._y + 'px';
        div.style.left            = div._x + 'px';

        div.animate               = true;
        div.cnt                   = 2;
        div.angle                 = 0;
        document.body.appendChild(div);
    }

    ns.RotateImage = function( sURL ){
        this.oParticleImg = new scUtils.ParticlizeImage(sURL);

        ParticlizeImage.attachCommonStyles();
        this.oParticleImg.register( this );
        this.retrieveImageData();
    }
    ns.RotateImage.prototype = {
        onInitParticle:function( oDiv ){
            init(oDiv);
        },

        anim:function(){
            var p = this.oParticleImg.getParticles();

            div.cnt   -= 0.005;
            div.angle += 0.01;
            var angle = div.angle*Math.PI,
                cos   = Math.cos(angle),
                sin   = Math.sin(angle);

            div._x = div._ix + cos*(div._xRadius*div.cnt);
            div._y = div._iy + sin*(div._yRadius*div.cnt);
            div.style.top = (~~div._y) + 'px';
            div.style.left = (~~div._x) + 'px';

            if( div.cnt >= 0 ){
                div.timeID = setTimeout(anim,10);
            }
        }
    
    }
})(scUtils);
