// tween.js v.0.15.0 https://github.com/sole/tween.js
void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});var TWEEN=TWEEN||function(){var n=[];return{REVISION:"14",getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var r=n.indexOf(t);-1!==r&&n.splice(r,1)},update:function(t){if(0===n.length)return!1;var r=0;for(t=void 0!==t?t:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();r<n.length;)n[r].update(t)?r++:n.splice(r,1);return!0}}}();TWEEN.Tween=function(n){var t=n,r={},i={},u={},o=1e3,e=0,a=!1,f=!1,c=!1,s=0,h=null,l=TWEEN.Easing.Linear.None,p=TWEEN.Interpolation.Linear,E=[],d=null,v=!1,I=null,w=null,M=null;for(var O in n)r[O]=parseFloat(n[O],10);this.to=function(n,t){return void 0!==t&&(o=t),i=n,this},this.start=function(n){TWEEN.add(this),f=!0,v=!1,h=void 0!==n?n:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now(),h+=s;for(var o in i){if(i[o]instanceof Array){if(0===i[o].length)continue;i[o]=[t[o]].concat(i[o])}r[o]=t[o],r[o]instanceof Array==!1&&(r[o]*=1),u[o]=r[o]||0}return this},this.stop=function(){return f?(TWEEN.remove(this),f=!1,null!==M&&M.call(t),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var n=0,t=E.length;t>n;n++)E[n].stop()},this.delay=function(n){return s=n,this},this.repeat=function(n){return e=n,this},this.yoyo=function(n){return a=n,this},this.easing=function(n){return l=n,this},this.interpolation=function(n){return p=n,this},this.chain=function(){return E=arguments,this},this.onStart=function(n){return d=n,this},this.onUpdate=function(n){return I=n,this},this.onComplete=function(n){return w=n,this},this.onStop=function(n){return M=n,this},this.update=function(n){var f;if(h>n)return!0;v===!1&&(null!==d&&d.call(t),v=!0);var M=(n-h)/o;M=M>1?1:M;var O=l(M);for(f in i){var m=r[f]||0,N=i[f];N instanceof Array?t[f]=p(N,O):("string"==typeof N&&(N=m+parseFloat(N,10)),"number"==typeof N&&(t[f]=m+(N-m)*O))}if(null!==I&&I.call(t,O),1==M){if(e>0){isFinite(e)&&e--;for(f in u){if("string"==typeof i[f]&&(u[f]=u[f]+parseFloat(i[f],10)),a){var T=u[f];u[f]=i[f],i[f]=T}r[f]=u[f]}return a&&(c=!c),h=n+s,!0}null!==w&&w.call(t);for(var g=0,W=E.length;W>g;g++)E[g].start(n);return!1}return!0}},TWEEN.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i)))},Out:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*n)*Math.sin(2*(n-t)*Math.PI/i)+1)},InOut:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),(n*=2)<1?-.5*r*Math.pow(2,10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i):r*Math.pow(2,-10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i)*.5+1)}},Back:{In:function(n){var t=1.70158;return n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*n*n*((t+1)*n-t):.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-TWEEN.Easing.Bounce.Out(1-n)},Out:function(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return.5>n?.5*TWEEN.Easing.Bounce.In(2*n):.5*TWEEN.Easing.Bounce.Out(2*n-1)+.5}}},TWEEN.Interpolation={Linear:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=TWEEN.Interpolation.Utils.Linear;return 0>t?o(n[0],n[1],i):t>1?o(n[r],n[r-1],r-i):o(n[u],n[u+1>r?r:u+1],i-u)},Bezier:function(n,t){var r,i=0,u=n.length-1,o=Math.pow,e=TWEEN.Interpolation.Utils.Bernstein;for(r=0;u>=r;r++)i+=o(1-t,u-r)*o(t,r)*n[r]*e(u,r);return i},CatmullRom:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=TWEEN.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(0>t&&(u=Math.floor(i=r*(1+t))),o(n[(u-1+r)%r],n[u],n[(u+1)%r],n[(u+2)%r],i-u)):0>t?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[r]-(o(n[r],n[r],n[r-1],n[r-1],i-r)-n[r]):o(n[u?u-1:0],n[u],n[u+1>r?r:u+1],n[u+2>r?r:u+2],i-u)},Utils:{Linear:function(n,t,r){return(t-n)*r+n},Bernstein:function(n,t){var r=TWEEN.Interpolation.Utils.Factorial;return r(n)/r(t)/r(n-t)},Factorial:function(){var n=[1];return function(t){var r,i=1;if(n[t])return n[t];for(r=t;r>1;r--)i*=r;return n[t]=i}}(),CatmullRom:function(n,t,r,i,u){var o=.5*(r-n),e=.5*(i-t),a=u*u,f=u*a;return(2*t-2*r+o+e)*f+(-3*t+3*r-2*o-e)*a+o*u+t}}},"undefined"!=typeof module&&module.exports&&(module.exports=TWEEN);
/** @namespace */
var cl= (function(){
    var ver = "1.0.1";
    if (ver !== "{{Package.Json.Version}}".toLowerCase()) console.log("%c ˖•● ChartLibrary v." + ver + " ●•˖ ", 'background: #44A; color: #FFF');
    return {
        version: "1.0.1"
    };
})();
/** @namespace */
cl.Utils = (function() {
    'use strict';

    /**
     * Utility singleton
     * @memberof cl
     * @constructor
     * @static
     */
    function Utils() {
        this.merge = merge;
        this.extend = extend;
        this.colorLuminance = colorLuminance;
        this.distSq = distSq;
        this.lineRectIntersect = lineRectIntersect;
        this.distToSegmentSquared = distToSegmentSquared;

        // Make requestAnimFrame request cross browser
        window.requestAnimFrame = (function(){
            return  window.requestAnimationFrame   ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function(callback, element){
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    }

    /**
     * Inherits class
     * @param {function} child Child class
     * @param {function} parent Parent class
     * @memberof cl.Utils.prototype
     */
    function extend(child, parent) {
        var F = function() { };
        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.superclass = parent.prototype;
    }

    /**
     * Merger all object properties to another
     * @param {object} obj1 Object to merge properties in
     * @param {object} obj2 Object to read properties from
     * @param {array|undefined} ignoreProps Names of properties that should be ignored
     * @returns {object} obj1 contains all properties from obj2
     * @memberof cl.Utils.prototype
     */
    function merge(obj1, obj2, ignoreProps) {
        for (var p in obj2) {
            if (!obj2.hasOwnProperty(p)) continue;
            if (ignoreProps && ignoreProps.indexOf(p) !== -1) continue;
            try {
                if (obj2[p].constructor == Object) {
                    obj1[p] = merge(obj1[p] || {}, obj2[p]);

                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }


    /**
     * Makes color lighter or darker
     * @param {string} hex Color
     * @param {number} lum Luminance -1..1 in percent. Example: -0.2 is equal to 20% darker
     * @returns {string} Processed color
     * @memberof cl.Utils.prototype
     */
    function colorLuminance(hex, lum) {
        // Validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;
        // Convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }
        return rgb;
    }

    /**
     * Returns squared distance between two points
     * @param {number} x1 First point X coordinate
     * @param {number} y1 First point Y coordinate
     * @param {number} x2 Second point X coordinate
     * @param {number} y2 Second point Y coordinate
     * @returns {number} Squared distance
     * @memberof cl.Utils.prototype
     */
    function distSq(x1, y1, x2, y2) {
        return (x1 - x2)*(x1 - x2) + (y1 - y2) * (y1 - y2);
    }

    /**
     * Returns squared distance from point to line segment
     * @param {number} pointX Point X coordinate
     * @param {number} pointY Point Y coordinate
     * @param {number} x1 Line first point X coordinate
     * @param {number} y1 Line first point Y coordinate
     * @param {number} x2 Line second point X coordinate
     * @param {number} y2 Line second point Y coordinate
     * @returns {number} Squared distance
     * @memberof cl.Utils.prototype
     */
    function distToSegmentSquared(pointX, pointY, x1, y1, x2, y2) {
        var l2 = cl.Utils.distSq(x1, y1, x2, y2);
        if (l2 === 0) return cl.Utils.distSq(pointX, pointY, x1, y1);
        var t = ((pointX - x1) * (x2 - x1) + (pointY - y1) * (y2 - y1)) / l2;
        if (t < 0) return cl.Utils.distSq(pointX, pointY, x1, y1);
        if (t > 1) return cl.Utils.distSq(pointX, pointY, x2, y2);

        return cl.Utils.distSq(pointX, pointY, x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    }

    /**
     * Line rectangle intersection test
     * @param {number} rectX1 Rectangle top-left point X coordinate
     * @param {number} rectY1 Rectangle top-left point Y coordinate
     * @param {number} rectX2 Rectangle bottom-right point X coordinate
     * @param {number} rectY2 Rectangle bottom-right point Y coordinate
     * @param {number} lineX1 Line fist point X coordinate
     * @param {number} lineY1 Line fist point Y coordinate
     * @param {number} lineX2 Line second point X coordinate
     * @param {number} lineY2 Line second point Y coordinate
     * @returns {boolean} Is intersecting or not
     */
    function lineRectIntersect(rectX1, rectY1, rectX2, rectY2, lineX1, lineY1, lineX2, lineY2)
    {
        // Find min and max X for the segment
        var minX = lineX1;
        var maxX = lineX2;
        if(lineX1 > lineX2) {
            minX = lineX2;
            maxX = lineX1;
        }

        // Find the intersection of the segment's and rectangle's x-projections
        if(maxX > rectX2) maxX = rectX2;
        if(minX < rectX1) minX = rectX1;
        // If their projections do not intersect return false
        if(minX > maxX) return false;

        // Find corresponding min and max Y for min and max X we found before
        var minY = lineY1;
        var maxY = lineY2;
        var dx = lineX2 - lineX1;
        if(Math.abs(dx) > 0.0000001) {
            var a = (lineY2 - lineY1) / dx;
            var b = lineY1 - a * lineX1;
            minY = a * minX + b;
            maxY = a * maxX + b;
        }
        if(minY > maxY) {
            var tmp = maxY;
            maxY = minY;
            minY = tmp;
        }

        // Find the intersection of the segment's and rectangle's y-projections
        if(maxY > rectY2) maxY = rectY2;
        if(minY < rectY1) minY = rectY1;
        // If Y-projections do not intersect return false
        if(minY > maxY) return false;

        return true;
    }

    return new Utils();
})();

/** @namespace */
cl.Lang = (function(){
    'use strict';

    var current = "en";

    /**
     * Localization singleton
     * @memberof cl
     * @constructor
     * @static
     */
    function Lang() {
        this.get = get;
    }

    /**
     * Returns localized string by id
     * @param {string} strId Id of sting to get
     * @params {array|undefined} [Array=undefined] of strings for replacement in template
     * @returns {string}
     * @memberof cl.Lang.prototype
     */
    function get(strId, params) {
        if (!strings[current] || !strings[current][strId]) return strId;
        var str = strings[current][strId] || strId;
        if (params instanceof Array) {
            for (var i = 0; i < params.length; i++) str = str.replace("%" + (i+1).toString(), params[i]);
        } else {
            str = str.replace("%1", params);
        }
        return str;
    }

    var strings = {
        en: {
            errNoElements: "No element specified in options",
            errAxisHaveNoChart: "Trying to access axis with no parent chart",
            errDelBaseAxis: "Can not delete base '%1' axis",
            errShapeNoParam: "Can not create shape without '%1' parameter",
            errUnknownEvent: "Unknown event '%1'",
            errNoShapeClass: "Shape class is not specified",
            errShapeType: "Can not add shape, because same shape with different type already exists"
        }
    };

    return new Lang();
})();
/** @namespace */
cl.Consts = (function(){
    'use strict';

    /**
     * Constants singleton
     * @memberof cl
     * @constructor
     * @static
     */
    function Consts() {
        cl.Utils.merge(this, consts);
    }

    var consts = {

        // Colors

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "#000000"
         */
        COLOR_BLACK: "#000000",

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "#FFFFFF"
         */
        COLOR_WHITE: "#FFFFFF",

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "#AAAAAA"
         */
        COLOR_GRAY: "#AAAAAA",

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "#FF0000"
         */
        COLOR_RED: "#FF0000",

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "#00FF00"
         */
        COLOR_GREEN: "#00FF00",

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "#0000FF"
         */
        COLOR_BLUE: "#0000FF",

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "#AAAAFF"
         */
        COLOR_LIGHTBLUE: "#AAAAFF",



        // Font settings

        /**
         * @memberof cl.Consts.prototype
         * @type {number}
         * @default 14
         */
        FONT_SIZE: 14,

        /**
         * @memberof cl.Consts.prototype
         * @type {string}
         * @default "Arial"
         */
        FONT_NAME: "Arial",

        /**
         * @memberof cl.Consts.prototype
         * @type {number}
         * @default 2 * Math.PI
         */
        TWO_PI: 2 * Math.PI,

        /**
         * @memberof cl.Consts.prototype
         * @type {number}
         * @default Math.PI / 2
         */
        HALF_PI: Math.PI / 2,

        /**
         * @memberof cl.Consts.prototype
         * @type {number}
         * @default Math.PI / 180
         */
        RAD_TO_DEG: Math.PI / 180
    };

    return new Consts();
})();
/** @namespace */
cl.Color = (function(){
    'use strict';

    /**
     * Color singleton
     * @memberof cl
     * @constructor
     * @static
     */
    function Color() {
        var colors = {
            aliceblue: 'f0f8ff',
            antiquewhite: 'faebd7',
            aqua: '00ffff',
            aquamarine: '7fffd4',
            azure: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '000000',
            blanchedalmond: 'ffebcd',
            blue: '0000ff',
            blueviolet: '8a2be2',
            brown: 'a52a2a',
            burlywood: 'deb887',
            cadetblue: '5f9ea0',
            chartreuse: '7fff00',
            chocolate: 'd2691e',
            coral: 'ff7f50',
            cornflowerblue: '6495ed',
            cornsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: '00ffff',
            darkblue: '00008b',
            darkcyan: '008b8b',
            darkgoldenrod: 'b8860b',
            darkgray: 'a9a9a9',
            darkgreen: '006400',
            darkkhaki: 'bdb76b',
            darkmagenta: '8b008b',
            darkolivegreen: '556b2f',
            darkorange: 'ff8c00',
            darkorchid: '9932cc',
            darkred: '8b0000',
            darksalmon: 'e9967a',
            darkseagreen: '8fbc8f',
            darkslateblue: '483d8b',
            darkslategray: '2f4f4f',
            darkturquoise: '00ced1',
            darkviolet: '9400d3',
            deeppink: 'ff1493',
            deepskyblue: '00bfff',
            dimgray: '696969',
            dodgerblue: '1e90ff',
            feldspar: 'd19275',
            firebrick: 'b22222',
            floralwhite: 'fffaf0',
            forestgreen: '228b22',
            fuchsia: 'ff00ff',
            gainsboro: 'dcdcdc',
            ghostwhite: 'f8f8ff',
            gold: 'ffd700',
            goldenrod: 'daa520',
            gray: '808080',
            green: '008000',
            greenyellow: 'adff2f',
            honeydew: 'f0fff0',
            hotpink: 'ff69b4',
            indianred : 'cd5c5c',
            indigo : '4b0082',
            ivory: 'fffff0',
            khaki: 'f0e68c',
            lavender: 'e6e6fa',
            lavenderblush: 'fff0f5',
            lawngreen: '7cfc00',
            lemonchiffon: 'fffacd',
            lightblue: 'add8e6',
            lightcoral: 'f08080',
            lightcyan: 'e0ffff',
            lightgoldenrodyellow: 'fafad2',
            lightgrey: 'd3d3d3',
            lightgreen: '90ee90',
            lightpink: 'ffb6c1',
            lightsalmon: 'ffa07a',
            lightseagreen: '20b2aa',
            lightskyblue: '87cefa',
            lightslateblue: '8470ff',
            lightslategray: '778899',
            lightsteelblue: 'b0c4de',
            lightyellow: 'ffffe0',
            lime: '00ff00',
            limegreen: '32cd32',
            linen: 'faf0e6',
            magenta: 'ff00ff',
            maroon: '800000',
            mediumaquamarine: '66cdaa',
            mediumblue: '0000cd',
            mediumorchid: 'ba55d3',
            mediumpurple: '9370d8',
            mediumseagreen: '3cb371',
            mediumslateblue: '7b68ee',
            mediumspringgreen: '00fa9a',
            mediumturquoise: '48d1cc',
            mediumvioletred: 'c71585',
            midnightblue: '191970',
            mintcream: 'f5fffa',
            mistyrose: 'ffe4e1',
            moccasin: 'ffe4b5',
            navajowhite: 'ffdead',
            navy: '000080',
            oldlace: 'fdf5e6',
            olive: '808000',
            olivedrab: '6b8e23',
            orange: 'ffa500',
            orangered: 'ff4500',
            orchid: 'da70d6',
            palegoldenrod: 'eee8aa',
            palegreen: '98fb98',
            paleturquoise: 'afeeee',
            palevioletred: 'd87093',
            papayawhip: 'ffefd5',
            peachpuff: 'ffdab9',
            peru: 'cd853f',
            pink: 'ffc0cb',
            plum: 'dda0dd',
            powderblue: 'b0e0e6',
            purple: '800080',
            red: 'ff0000',
            rosybrown: 'bc8f8f',
            royalblue: '4169e1',
            saddlebrown: '8b4513',
            salmon: 'fa8072',
            sandybrown: 'f4a460',
            seagreen: '2e8b57',
            seashell: 'fff5ee',
            sienna: 'a0522d',
            silver: 'c0c0c0',
            skyblue: '87ceeb',
            slateblue: '6a5acd',
            slategray: '708090',
            snow: 'fffafa',
            springgreen: '00ff7f',
            steelblue: '4682b4',
            tan: 'd2b48c',
            teal: '008080',
            thistle: 'd8bfd8',
            tomato: 'ff6347',
            turquoise: '40e0d0',
            violet: 'ee82ee',
            violetred: 'd02090',
            wheat: 'f5deb3',
            white: 'ffffff',
            whitesmoke: 'f5f5f5',
            yellow: 'ffff00',
            yellowgreen: '9acd32'
        };

        var defs = [
            {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
                process: function (bits){
                    return [
                        parseInt(bits[1]),
                        parseInt(bits[2]),
                        parseInt(bits[3])
                    ];
                }
            },
            {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                example: ['#00ff00', '336699'],
                process: function (bits){
                    return [
                        parseInt(bits[1], 16),
                        parseInt(bits[2], 16),
                        parseInt(bits[3], 16)
                    ];
                }
            },
            {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                example: ['#fb0', 'f0f'],
                process: function (bits){
                    return [
                        parseInt(bits[1] + bits[1], 16),
                        parseInt(bits[2] + bits[2], 16),
                        parseInt(bits[3] + bits[3], 16)
                    ];
                }
            }
        ];

        this.fromString = function(colorName) {
            if (colors[colorName]) return "#" + colors[colorName];
            return colorName;
        };

        this.toHex = function (red, green, blue) {
            var r = red.toString(16);
            var g = green.toString(16);
            var b = blue.toString(16);
            if (r.length == 1) r = '0' + r;
            if (g.length == 1) g = '0' + g;
            if (b.length == 1) b = '0' + b;
            return '#' + r + g + b;
        };

        this.toRGB = function (color) {
            // strip any leading #
            if (color.charAt(0) == '#') color = color.substr(1,6);
            color = color.replace(/ /g,'').toLowerCase();
            if (colors[color]) color = colors[color];

            var r, g, b, ok;

            ok = false;
            for (var i = 0; i < defs.length; i++) {
                var re = defs[i].re;
                var processor = defs[i].process;
                var bits = re.exec(color);
                if (bits) {
                    var channels = processor(bits);
                    r = channels[0];
                    g = channels[1];
                    b = channels[2];
                    ok = true;
                }

            }

            // validate/cleanup values
            r = (r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r);
            g = (g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g);
            b = (b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b);

            return {r: r, g: g, b: b};
        };
    }

    return new Color();

})();
cl.Event = (function() {
    'use strict';

    /**
     * Represent event class
     * @memberof cl
     * @constructor
     *
     * @property {number} x X coordinate in chart space
     * @property {number} y Y coordinate in chart space
     * @property {cl.Shape|array<cl.Shape>} target Shapes affected by event
     * @property {object} originalEvent Original event
     * @property {string} type Event type. See event names below
     */
    function Event() {
        this.x = null;
        this.y = null;
        this.target = null;
        this.originalEvent = null;
        this.type = null;
    }

    /**
     * Define allowed event names
     */
    var eventNames = {
        /**
         * Name for click event
         * @default "click"
         * @memberOf cl.Event
         */
        click: "click",

        /**
         * Name for double click event
         * @default "dblclick"
         * @memberOf cl.Event
         */
        doubleClick: "dblclick",

        /**
         * Name for mouse move event
         * @default "mousemove"
         * @memberOf cl.Event
         */
        mouseMove: "mousemove",

        /**
         * Name for mouse down event
         * @default "mousedown"
         * @memberOf cl.Event
         */
        mouseDown: "mousedown",

        /**
         * Name for mouse up event
         * @default "mouseup"
         * @memberOf cl.Event
         */
        mouseUp: "mouseup",

        /**
         * Name for shape over event
         * @default "shapeover"
         * @memberOf cl.Event
         */
        shapeOver: "shapeover",

        /**
         * Name for shape out event
         * @default "shapeout"
         * @memberOf cl.Event
         */
        shapeOut: "shapeout",

        /**
         * Name for shape select event
         * @default "select"
         * @memberOf cl.Event
         */
        select: "select",

        /**
         * Name for shape deselect event
         * @default "deselect"
         * @memberOf cl.Event
         */
        deselect: "deselect"

    };

    cl.Utils.merge(Event, eventNames);

    return Event;
})();

cl.EventManager = (function() {
    'use strict';

    /**
     * Represent event manager class
     * @param {cl.Chart} chart Parent chart
     * @memberof cl
     * @constructor
     *
     * @property {cl.Chart} chart Parent chart
     * @property {number} mouseX Mouse X coordinate in screen space
     * @property {number} mouseY Mouse Y coordinate in screen space
     * @property {boolean} mouseDown Is mouse left button pressed or not
     */
    function EventManager(chart) {
        var t = this;

        // Properties
        t.chart = chart;
        t.mouseX = 0;
        t.mouseY = 0;
        t.mouseDown = false;

        // Public methods
        t.destroy = destroy;
        t.hasListener = hasListener;
        t.addEventListener = addEventListener;
        t.removeEventListener = removeEventListener;
        t.callListeners = callListeners;

        // Private
        var
            event = new cl.Event(),
            listeners = {},
            hoveredShape = null;

        // Create arrays in listeners for each event
        for (var name in cl.Event) listeners[cl.Event[name]] = [];

        // Bind all mouse event listeners to screen canvas element
        bindBaseEventListeners();

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Adds event listener
         * @param {string} event Event name. See {@link cl.Event} members
         * @param {function} callback Event callback
         * @memberof cl.EventManager.prototype
         */
        function addEventListener(event, callback) {
            if (!listeners[event]) throw new Error(cl.Lang.get("errUnknownEvent", event));
            if (listeners[event].indexOf(callback) !== -1) return;
            listeners[event].push(callback);
        }

        /**
         * Removes event listener
         * @param {string} event Event name. See {@link cl.Event} members
         * @param {function} callback Event callback
         * @memberof cl.EventManager.prototype
         */
        function removeEventListener(event, callback) {
            if (!listeners[event]) throw new Error(cl.Lang.get("errUnknownEvent", event));
            var idx = listeners[event].indexOf(callback);
            if (idx !== -1) listeners[event].splice(idx, 1);
        }

        /**
         * On mouse move event handler
         * @param {object} e Event
         * @private
         */
        function onMouseMove(e) {
            t.mouseX = e.offsetX;
            t.mouseY = e.offsetY;
            if (hasListener(cl.Event.shapeOver) || hasListener(cl.Event.shapeOut)) {
                var h = t.chart.selector.shapeFromPoint(t.mouseX, t.mouseY);
                if (h) {
                    if (hoveredShape !== h) callListeners(cl.Event.shapeOver, e, h);
                } else {
                    if (hoveredShape !== null) callListeners(cl.Event.shapeOut, e, hoveredShape);
                }
                hoveredShape = h;
            }
            callListeners(cl.Event.mouseMove, e);
        }

        /**
         * On mouse down event handler
         * @param {object} e Event
         * @private
         */
        function onMouseDown(e) {
            t.mouseDown = true;
            callListeners(cl.Event.mouseDown, e);
        }

        /**
         * On mouse up event handler
         * @param {object} e Event
         * @private
         */
        function onMouseUp(e) {
            if (!t.mouseDown && e.currentTarget === document) return;
            t.mouseDown = false;
            callListeners(cl.Event.mouseUp, e);
            // Stop event propagation, no need to fire document onMouseUp
            e.stopPropagation();
        }

        /**
         * On mouse click event handler
         * @param {object} e Event
         * @private
         * @deprecated
         */
        function onClick(e) {
            //callListeners(cl.Event.click, e, t.chart.selector.shapeFromPoint(e.offsetX, e.offsetY));
        }

        /**
         * On mouse double click event handler
         * @param {object} e Event
         * @private
         */
        function onDoubleClick(e) {
            callListeners(cl.Event.doubleClick, e, t.chart.selector.shapeFromPoint(e.offsetX, e.offsetY));
        }

        /**
         * Call event listeners by event name
         * @param {string} eventName Event name
         * @param {object} e Original event
         * @param {cl.Shape|array<cl.Shape>} [target] Shape affected by event
         * @param {number} [xPos] X coordinate in axis space
         * @param {number} [yPos] Y coordinate in axis space
         * @private
         */
        function callListeners(eventName, e, target, xPos, yPos) {
            if (!t.hasListener(eventName)) return;
            var x, y;
            if (xPos === undefined) x = t.chart.xAxis.toAxis(e ? e.offsetX : undefined); else x = xPos;
            if (yPos === undefined) y = t.chart.yAxis.toAxis(e ? e.offsetY : undefined); else y = yPos;

            event.x = x;
            event.y = y;
            event.target = target;
            event.originalEvent = e;
            for (var i = 0, l = listeners[eventName].length; i < l; i++) listeners[eventName][i](event);
        }

        /**
         * Bind all mouse event listeners to screen canvas element
         * @private
         */
        function bindBaseEventListeners() {
            var el = t.chart.screen.el;
            el.addEventListener(cl.Event.mouseMove, onMouseMove);
            el.addEventListener(cl.Event.mouseDown, onMouseDown);
            el.addEventListener(cl.Event.mouseUp, onMouseUp);
            //el.addEventListener(cl.Event.click, onClick);
            el.addEventListener(cl.Event.doubleClick, onDoubleClick);
            // Bind document mouse up to avoid mouse button release outside container
            document.addEventListener(cl.Event.mouseUp, onMouseUp);
        }

        /**
         * Unbind all mouse event listeners to screen canvas element
         * @private
         */
        function unbindBaseEventListeners() {
            var el = t.chart.screen.el;
            el.removeEventListener(cl.Event.mouseMove, onMouseMove);
            el.removeEventListener(cl.Event.mouseDown, onMouseDown);
            el.removeEventListener(cl.Event.mouseUp, onMouseUp);
            //el.removeEventListener(cl.Event.click, onClick);
            el.removeEventListener(cl.Event.doubleClick, onDoubleClick);
            document.removeEventListener(cl.Event.mouseUp, onMouseUp);
        }

        /**
         * Check if manager have any event listeners for specified event
         * @param {string} eventName Event name
         * @returns {boolean} True if has event listeners
         * @memberof cl.EventManager.prototype
         */
        function hasListener(eventName) {
            return listeners[eventName].length !== 0;
        }

        /**
         * Destroys event manager
         * @memberof cl.EventManager.prototype
         */
        function destroy() {
            t.chart = null;
            event = null;
            listeners = null;
            unbindBaseEventListeners();
        }
    }

    return EventManager;
})();

cl.Layer = (function(){
    'use strict';

    /**
     * Represent layer object
     * @param {cl.Chart} chart Parent chart
     * @memberof cl
     * @constructor
     *
     * @property {cl.Chart} chart Parent chart
     * @property {cl.Canvas} surface Render surface
     * @property {string} dirtyFlagName Name of dirty flag. Should be unique for all layers
     * @property {boolean} visible Is layer visible or not
     */
    function Layer(chart) {
        var t = this;

        this.chart = chart;
        this.options = {
            visible: true
        };
        this.surface = new cl.Canvas(chart.width, chart.height);
        this.dirtyFlagName = "";

        Object.defineProperties(t, {
            visible: {
                get: function () { return t.options.visible; },
                set: function (v) { t.options.visible = v; }
            }
        });
    }

    /**
     * Show layer
     * @returns {cl.Layer}
     */
    Layer.prototype.show = function () {
        if (this.options) this.options.visible = true;
        return this;
    };

    /**
     * Hide layer
     * @returns {cl.Layer}
     */
    Layer.prototype.hide = function () {
        if (this.options) this.options.visible = false;
        return this;
    };

    /**
     * Renders layer
     */
    Layer.prototype.apply = function () {
        if (!this.chart) return;
        this.chart.setDirtyFlag(this.dirtyFlagName);
        this.chart.redraw();
    };

    /**
     * Renders layer
     */
    Layer.prototype.render = function () {

    };

    /**
     * Resizes layer
     * @param {number} width New width
     * @param {number} height New height
     * @returns {cl.Layer}
     */
    Layer.prototype.resize = function(width, height) {
        this.surface.resize(width, height);
        return this;
    };

    /**
     * Destroys layer
     */
    Layer.prototype.destroy = function() {
        this.chart = null;
        this.surface.destroy();
        this.surface = null;
    };

    return Layer;

})();

cl.Axis = (function() {
    'use strict';

    /**
     * Represent axis class
     * @param {cl.AxisManager} axisManager Parent axis manager
     * @param {object} [options]
     * @constructor
     * @memberof cl
     *
     * @param {name} [options.name=""] Axis name
     * @param {string} [options.type="x"] Axis type
     * @param {number} [options.min=0] Minimum value of axis
     * @param {number} [options.max=100] Maximum value of axis
     * @param {number} [options.offset=0] Axis offset in uniеs of opposite axis
     * @param {boolean} [options.visible=true] Is axis visible or not
     *
     * @param {object} [options.ticks] Ticks settings
     * @param {number} [options.ticks.big] Big tick
     * @param {number} [options.ticks.big.interval=10] Big tick interval in axis units
     * @param {number} [options.ticks.big.size=8] Size of big tick in pixels
     * @param {string} [options.ticks.big.align="center"] Big ticks align. "center", "left", "right", "top", "bottom"
     * @param {string} [options.ticks.big.color=cl.Consts.COLOR_GRAY] Big ticks color
     * @param {string} [options.ticks.big.opacity=0.8] Big ticks opacity
     * @param {string} [options.ticks.big.type="line"] Big ticks type. "line" or "dot"
     * @param {boolean} [options.ticks.big.first=true] Is first tick visible or not
     * @param {boolean} [options.ticks.big.last=true] Is last tick visible or not
     * @param {number} [options.ticks.small] Small tick
     * @param {number} [options.ticks.small.interval=10] Small tick interval in axis units
     * @param {number} [options.ticks.small.size=8] Size of Small tick in pixels
     * @param {string} [options.ticks.small.align="center"] Small ticks align. "center", "left", "right", "top", "bottom"
     * @param {string} [options.ticks.small.color=cl.Consts.COLOR_GRAY] Small ticks color
     * @param {string} [options.ticks.small.opacity=0.8] Small ticks opacity
     * @param {string} [options.ticks.small.type="line"] Small ticks type. "line" or "dot"
     * @param {boolean} [options.ticks.small.first=true] Is first tick visible or not
     * @param {boolean} [options.ticks.small.last=true] Is last tick visible or not
     *
     * @param {object} [options.margin] Margin settings
     * @param {number} [options.margin.start=20] Axis margin from start in pixels
     * @param {number} [options.margin.end=20] Axis margin from end in pixels
     *
     * @param {object} [options.style] Style settings
     * @param {number} [options.style.lineWidth=1] Width of axis in pixels
     * @param {number} [options.style.color=cl.Consts.COLOR_GRAY] Axis color
     * @param {number} [options.style.arrowSize=10] Arrow size in pixels
     * @param {array} [options.style.lineDash=[]] A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
     *
     * @param {object} [options.title] Title settings
     * @param {number} [options.title.size=14] Font size of title text
     * @param {number} [options.title.align="center"] Title align. "left", "right", "center"
     * @param {number} [options.title.font=cl.Consts.FONT_NAME] Title font
     * @param {number} [options.title.color=cl.Consts.COLOR_BLACK] Title font color
     * @param {string} [options.title.style=""] Font style. "bold", "italic", "bold italic"
     * @param {number} [options.title.offset=0] Title offset from axis in pixels
     *
     * @param {object} [options.labels] Interval labels
     * @param {object} [options.labels.big] Big interval labels
     * @param {number} [options.labels.big.size=10] Label size
     * @param {number} [options.labels.big.align="center"] Label align. "center", "left", "right", "top", "bottom"
     * @param {number} [options.labels.big.font=cl.Consts.FONT_NAME] Label font name
     * @param {number} [options.labels.big.color=cl.Consts.COLOR_GRAY] Label color
     * @param {string} [options.labels.big.style=""] Label font style. "bold", "italic", "bold italic"
     * @param {number} [options.labels.big.opacity=1] Label opacity
     * @param {string} [options.labels.big.before=""] Text that will be inserted before label text
     * @param {string} [options.labels.big.after=""] Text that will be inserted after label text
     * @param {object} [options.labels.small] Small interval labels
     * @param {number} [options.labels.small.size=8] Label size
     * @param {number} [options.labels.small.align="center"] Label align. "center", "left", "right", "top", "bottom"
     * @param {number} [options.labels.small.font=cl.Consts.FONT_NAME] Label font name
     * @param {number} [options.labels.small.color=cl.Consts.COLOR_GRAY] Label color
     * @param {string} [options.labels.small.style=""] Label font style. "bold", "italic", "bold italic"
     * @param {number} [options.labels.small.opacity=1] Label opacity
     * @param {string} [options.labels.small.before=""] Text that will be inserted before label text
     * @param {string} [options.labels.small.after=""] Text that will be inserted after label text
     *
     * @param {object} [options.grid] Grid lines settings
     * @param {object} [options.grid.big] Grid lines settings for big interval
     * @param {object} [options.grid.big.width=1] Line width. Set 0 to hide lines
     * @param {object} [options.grid.big.dash=[3,3]] Line dash style. A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
     * @param {object} [options.grid.big.color="#BEBEBE"] Line color
     * @param {object} [options.grid.big.opacity=0.5] Line opacity
     * @param {object} [options.grid.small] Grid lines settings for big interval
     * @param {object} [options.grid.small.width=1] Line width. Set 0 to hide lines
     * @param {object} [options.grid.small.dash=[10,10]] Line dash style. A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
     * @param {object} [options.grid.small.color="#EFEFEF"] Line color
     * @param {object} [options.grid.small.opacity=0.5] Line opacity
     *
     * @property {cl.AxisManager} parent Parent axis manager
     * @property {object} options Axis settings
     *
     * @example
     * // All property changes can be made in chain style. After that call "apply"
     * // "apply" can be called multiple times, but actual redraw would be called once
     * axis
     *    .setMin(0)
     *    .setColor("#AAFFEE")
     *    .setLineWidth(2)
     *    .apply();
     *
     * // Properties can be changed via options too, like this
     * axis.options.min = 0;
     * axis.style.color = "#AAFFEE";
     * axis.style.lineWidth = 2;
     * axis.apply();
     *
     * // Convert screen coordinate to axis coordinate
     * var scr = axis.toAxis(value);
     *
     * // Convert axis coordinate to screen coordinate
     * var ac = axis.toScreen(value);
     *
     * // Change axis title, align it left and make bold
     * axis
     *    .setName("My custom title")
     *    .setTitleAlign("left")
     *    .setTitleStyle("bold")
     *    .apply();
     *
     * // Add cells before and after axis and disable labels and ticks on this cells
     * var chart = new cl.Chart({
     *     xAxis: {
     *         min: -10,
     *         max: 110,
     *         ticks: {
     *             big: {
     *                 interval: 10,
     *                 first: false,
     *                 last: false
     *             },
     *             small: {
     *                 interval: 5,
     *                 first: false,
     *                 last: false
     *             }
     *         },
     *     },
     * });
     *
     **/
    function Axis(axisManager, options) {
        var t = this;
        t.parent = axisManager;
        t.chart = axisManager.chart;

        // Public methods
        t.show = show;
        t.hide = hide;
        t.apply = apply;
        t.toAxis = toAxis;
        t.setMin = setMin;
        t.setMax = setMax;
        t.getMax = getMax;
        t.getMin = getMin;
        t.render = render;
        t.setName = setName;
        t.getName = getName;
        t.destroy = destroy;
        t.setColor = setColor;
        t.getColor = getColor;
        t.toScreen = toScreen;
        t.getOffset = getOffset;
        t.setOffset = setOffset;
        t.setMargins = setMargins;
        t.getMargins = getMargins;
        t.setLineWidth = setLineWidth;
        t.getLineWidth = getLineWidth;
        t.setTitleSize = setTitleSize;
        t.getTitleSize = getTitleSize;
        t.setTitleFont = setTitleFont;
        t.getTitleFont = getTitleFont;
        t.setTitleAlign = setTitleAlign;
        t.getTitleAlign = getTitleAlign;
        t.setTitleColor = setTitleColor;
        t.getTitleColor = getTitleColor;
        t.setTitleStyle = setTitleStyle;
        t.getTitleStyle = getTitleStyle;
        t.setTickInterval = setTickInterval;
        t.getTickInterval = getTickInterval;
        t.getTickIntervalSmall = getTickIntervalSmall;
        t.setTickIntervalSmall = setTickIntervalSmall;

        // Default settings
        t.options = {
            name: "",
            type: "x",
            min: 0,
            max: 100,
            offset: 0,
            ticks: {
                big: {
                    interval: 10,
                    size: 8,
                    align: "center",
                    color: cl.Consts.COLOR_GRAY,
                    opacity: 0.8,
                    type: "line",
                    first: true,
                    last: true
                },
                small: {
                    interval: 5,
                    size: 4,
                    align: "bottom",
                    color: cl.Consts.COLOR_GRAY,
                    opacity: 0.8,
                    type: "line",
                    first: true,
                    last: true
                }
            },
            margin: {
                start: 20,
                end: 20
            },
            style: {
                lineWidth: 2,
                color: cl.Consts.COLOR_GRAY,
                arrowSize: 12,
                lineDash: []
            },
            title: {
                size: 14,
                align: "center",
                font: cl.Consts.FONT_NAME,
                color: cl.Consts.COLOR_BLACK,
                style: "",
                offset: 0
            },
            labels: {
                big: {
                    size: 10,
                    align: "bottom",
                    font: cl.Consts.FONT_NAME,
                    color: cl.Consts.COLOR_GRAY,
                    style: "",
                    opacity: 1,
                    before: "",
                    after: ""
                },
                small: {
                    size: 8,
                    align: "bottom",
                    font: cl.Consts.FONT_NAME,
                    color: cl.Consts.COLOR_GRAY,
                    style: "",
                    opacity: 1,
                    before: "",
                    after: ""
                }
            },
            grid: {
                big: {
                    width: 1,
                    dash: [3,3],
                    color: "#BEBEBE",
                    opacity: 0.5
                },
                small: {
                    width: 1,
                    dash: [10, 10],
                    color: "#EFEFEF",
                    opacity: 0.5
                }
            },
            visible: true
        };

        // Merge passed settings with default
        cl.Utils.merge(t.options, options || {});

        // Calc intervals if not specified
        if (options && (options.min || options.max)) {
            if (!options.ticks || !options.ticks.big || !options.ticks.big.interval) t.options.ticks.big.interval = parseFloat(((t.options.max - t.options.min) / 10).toFixed(4));
            if (!options.ticks || !options.ticks.small || !options.ticks.small.interval) t.options.ticks.small.interval = parseFloat(((t.options.max - t.options.min) / 20).toFixed(4));
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Returns big tick interval
         * @returns {number} Tick interval
         * @memberof cl.Axis.prototype
         */
        function getTickInterval() {
            return t.options.ticks.big.interval;
        }

        /**
         * Sets big tick interval
         * @param {number} interval Tick interval
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setTickInterval(interval) {
            t.options.ticks.big.interval = interval;
            return t;
        }

        /**
         * Returns small tick interval
         * @returns {number} Tick interval
         * @memberof cl.Axis.prototype
         */
        function getTickIntervalSmall() {
            return t.options.ticks.small.interval;
        }

        /**
         * Sets small tick interval
         * @param {number} interval Tick interval
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setTickIntervalSmall(interval) {
            t.options.ticks.small.interval = interval;
            return t;
        }

        /**
         * Hide axis
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function hide() {
            t.options.visible = false;
            return t;
        }

        /**
         * Show axis
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function show() {
            t.options.visible = true;
            return t;
        }

        /**
         * Returns title style
         * @returns {string} Title style
         * @memberof cl.Axis.prototype
         */
        function getTitleStyle() {
            return t.options.title.style;
        }

        /**
         * Sets title style
         * @param {string} style Title style. "bold", "italic", "bold italic"
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setTitleStyle(style) {
            t.options.title.style = style;
            return t;
        }

        /**
         * Returns title color
         * @returns {string} Title color
         * @memberof cl.Axis.prototype
         */
        function getTitleColor() {
            return t.options.title.color;
        }

        /**
         * Sets title color
         * @param {string} color Title color
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setTitleColor(color) {
            t.options.title.color = color;
            return t;
        }

        /**
         * Returns title font
         * @returns {string} Title font
         * @memberof cl.Axis.prototype
         */
        function getTitleFont() {
            return t.options.title.font;
        }

        /**
         * Sets title font
         * @param {string} font Title font
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setTitleFont(font) {
            t.options.title.font = font;
            return t;
        }

        /**
         * Returns title font size
         * @returns {number} Title font size
         * @memberof cl.Axis.prototype
         */
        function getTitleSize() {
            return t.options.title.size;
        }

        /**
         * Sets title font size
         * @param {number} fontSile Title font size
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setTitleSize(fontSile) {
            t.options.title.size = fontSile;
            return t;
        }

        /**
         * Returns title align
         * @returns {string} Title align
         * @memberof cl.Axis.prototype
         */
        function getTitleAlign() {
            return t.options.title.align;
        }

        /**
         * Sets title align
         * @param {string} align Title align
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setTitleAlign(align) {
            t.options.title.align = align;
            return t;
        }

        /**
         * Sets axis color
         * @param {string} color Axis color
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setColor(color) {
            t.options.style.color = color;
            return t;
        }

        /**
         * Returns axis color
         * @returns {string} Axis color
         * @memberof cl.Axis.prototype
         */
        function getColor() {
            return t.options.style.color;
        }

        /**
         * Returns axis margins
         * @returns {object} margin Axis margin
         * @memberof cl.Axis.prototype
         */
        function getMargins(){
            return {
                start: t.options.margin.start,
                end: t.options.margin.end
            };
        }

        /**
         * Sets axis margin in pixels
         * @param {number} start Start margin
         * @param {number} end End margin
         * @memberof cl.Axis.prototype
         */
        function setMargins(start, end) {
            t.options.margin.start = start;
            t.options.margin.end = end;
            return t;
        }

        /**
         * Sets axis offset in units of opposite axis
         * @param {number} offset Axis offset
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setOffset(offset) {
            t.options.offset = offset;
            return t;
        }

        /**
         * Returns axis offset in units of opposite axis
         * @returns {number} Axis offset
         * @memberof cl.Axis.prototype
         */
        function getOffset() {
            return t.options.offset;
        }

        /**
         * Returns maximum value of axis
         * @returns {number} Maximum value of axis
         * @memberof cl.Axis.prototype
         */
        function getMax() {
            return t.options.max;
        }

        /**
         * Returns minimum value of axis
         * @returns {number} Minimum value of axis
         * @memberof cl.Axis.prototype
         */
        function getMin() {
            return t.options.min;
        }

        /**
         * Sets maximim value of axis
         * @param {number} min Maximim value
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setMax(max) {
            t.options.max = max;
            return t;
        }

        /**
         * Sets minimum value of axis
         * @param {number} min Minimum value
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setMin(min) {
            t.options.min = min;
            return t;
        }

        /**
         * Sets axis name
         * @param {string} name Name of axis
         * @returns {cl.Axis} this
         * @memberof cl.Axis.prototype
         */
        function setName(name) {
            t.options.name = name;
            return t;
        }

        /**
         * Returns axis name
         * @returns {string}
         * @memberof cl.Axis.prototype
         */
        function getName() {
            return t.options.name;
        }

        /**
         * Renders axis to canvas object
         * @param {object} canvas Canvas object to draw axis
         * @memberof cl.Axis.prototype
         */
        function render(canvas) {
            if (!t.options) return;
            if (!t.options.visible) return;
            var o = t.options;
            var k, total, x, offset;

            var isY = t.options.type == "y";

            // Margin start, margin end
            var ms = o.margin.start;
            var me = o.margin.end;

            // Chart width, chart height
            var cw = t.chart.width;
            var ch = t.chart.height;

            // Find precision. Used to draw intervals defined as float numbers
            var str = o.ticks.small.interval.toString();
            var idx = str.indexOf(".");
            var fix = 0;
            if (idx !== -1) fix = str.length - idx - 1;

            canvas.resetTransform();


            // Set style
            canvas.setLineStyle(o.style.lineWidth, o.style.color);
            canvas.setFillColor(o.style.color);

            // Depending on axis type, rotate and flip canvas for Y axis
            if (isY) {
                offset = t.options.offset;
                //if (offset < t.chart.xAxis.getMin()) offset = t.chart.xAxis.getMin();
                //if (offset > t.chart.xAxis.getMax()) offset = t.chart.xAxis.getMax();
                canvas.ctx.translate(t.chart.xAxis.toScreen(offset), 0);
                canvas.ctx.rotate(cl.Consts.HALF_PI);
            } else {
                offset = t.options.offset;
                //if (offset < t.chart.yAxis.getMin()) offset = t.chart.yAxis.getMin();
                //if (offset > t.chart.yAxis.getMax()) offset = t.chart.yAxis.getMax();
                canvas.ctx.translate(0, t.chart.yAxis.toScreen(offset));
            }
            canvas.save();
            if (o.style.lineDash.length !== 0) canvas.setLineDash(o.style.lineDash);


            // Fix blurred 1px lines
            //var translate = (o.style.lineWidth % 2) / 2;
            //canvas.ctx.translate(translate, translate);

            // Draw axis line
            canvas.drawLine(t.toScreen(o.min), 0, t.toScreen(o.max), 0);
            canvas.restore();
            if (o.style.arrowSize !== 0) canvas.drawArrow(t.toScreen(o.max), 0, isY ? Math.PI : 0, o.style.arrowSize);

            ///////////////////////////////////// DRAW TICKS AND GRID //////////////////////////////////////////////////

            //canvas.ctx.translate(translate, translate);


            // Calculate ticks offset
            var to = 0;
            var toS = 0;
            var isBig = false;
            switch (o.ticks.big.align) {
                case "right":case "top": to = -o.ticks.big.size; break;
                case "center": case "middle": to = -o.ticks.big.size / 2; break;
                case "left": case "bottom": to = 0; break;
            }
            switch (o.ticks.small.align) {
                case "right": case "top": toS = -o.ticks.small.size; break;
                case "center": case "middle": toS = -o.ticks.small.size / 2; break;
                case "left": case "bottom": toS = 0; break;
            }

            // Calculate coordinates for grid drawing
            var gridMin, gridMax, gridOffset;
            if (o.type === "x") {
                gridMin = t.chart.yAxis.toScreen(t.chart.yAxis.getMin());
                gridMax = t.chart.yAxis.toScreen(t.chart.yAxis.getMax());
                gridOffset = t.chart.yAxis.toScreen(offset);
            } else {
                gridMin = -t.chart.xAxis.toScreen(t.chart.xAxis.getMin());
                gridMax = -t.chart.xAxis.toScreen(t.chart.xAxis.getMax());
                gridOffset = -t.chart.xAxis.toScreen(offset);
            }

            // Actual draw
            k = o.min;
            total = o.max - o.min;
            while (k <= o.max) {
                x = Math.floor(t.toScreen(k));
                isBig = (k / o.ticks.big.interval) === parseInt((k / o.ticks.big.interval).toFixed(0));
                if (isBig) {
                    if ((k + o.ticks.big.interval <= o.max || o.ticks.big.last) && (k != o.min || o.ticks.big.first)) {
                        if (o.grid.big.width !== 0) {
                            canvas.setLineStyle(o.grid.big.width, o.grid.big.color);
                            canvas.setAlpha(o.grid.big.opacity);
                            if (o.grid.big.dash.length !== 0) canvas.setLineDash(o.grid.big.dash);
                            canvas.drawLine(x, gridMin - gridOffset, x, gridMax - gridOffset);
                        }
                        if (o.ticks.size !== 0) {
                            canvas.setLineStyle(o.style.lineWidth, o.ticks.big.color);
                            canvas.setAlpha(o.ticks.big.opacity);
                            canvas.setLineDash([]);
                            if (o.ticks.big.type === "dot") {
                                canvas.setFillColor(o.ticks.big.color);
                                canvas.ctx.beginPath();
                                canvas.ctx.arc(x, to + o.ticks.big.size / 2, o.ticks.big.size, 0, 2 * Math.PI, false);
                                canvas.ctx.fill();
                            } else canvas.drawLine(x, to, x, to + o.ticks.big.size);
                        }
                    }
                } else {
                    if ((k + o.ticks.big.interval <= o.max || o.ticks.small.last) && (k != o.min + o.ticks.small.interval || o.ticks.small.first)) {
                        if (o.grid.small.width !== 0) {
                            canvas.setLineStyle(o.grid.small.width, o.grid.small.color);
                            canvas.setAlpha(o.grid.small.opacity);
                            if (o.grid.small.dash.length !== 0) canvas.setLineDash(o.grid.small.dash);
                            canvas.drawLine(x, gridMin - gridOffset, x, gridMax - gridOffset);
                        }
                        if (o.ticks.sizeSmall !== 0) {
                            canvas.setLineStyle(o.style.lineWidth, o.ticks.small.color);
                            canvas.setAlpha(o.ticks.small.opacity);
                            canvas.setLineDash([]);
                            if (o.ticks.small.type === "dot") {
                                canvas.setFillColor(o.ticks.small.color);
                                canvas.ctx.beginPath();
                                canvas.ctx.arc(x, toS + o.ticks.small.size / 2, o.ticks.small.size, 0, 2 * Math.PI, false);
                                canvas.ctx.fill();
                            } else canvas.drawLine(x, toS, x, toS + o.ticks.small.size);
                        }
                    }

                }
                k += o.ticks.small.interval;
                k = parseFloat(k.toFixed(fix));
            }
            canvas.ctx.globalAlpha = 1;
            canvas.setLineDash([]);

            //canvas.ctx.translate(translate, translate);
            // Draw axis title
            if (o.title.size !== 0) {
                var al = o.title.align;
                // Change align for vertical axis
                if (al === "bottom") al = "left";
                if (al === "top") al = "right";
                switch (al) {
                    case "left": x =  Math.floor(t.toScreen(o.min)); break;
                    case "right": x = Math.floor(t.toScreen(o.max)); break;
                    case "center": x =  Math.floor(t.toScreen(o.min + (o.max - o.min) / 2)); break;
                    default: x = 0;
                }
                if (o.type === "y") {
                    canvas.ctx.translate(x, o.title.size + (o.title.offset + o.ticks.big.size + o.labels.big.size) * 2);
                    canvas.ctx.rotate(Math.PI);
                }
                canvas.setFillColor(o.title.color);
                canvas.drawText(o.name, // Text
                    o.type === "y" ? 0 : x, // X
                    (o.title.offset + o.ticks.big.size + o.labels.big.size), // Y
                    o.title.size, // size
                    al, // h align
                    "top",  // v align
                    o.title.font, // font
                    o.title.style // style
                );
                if (o.type === "y") {
                    canvas.ctx.rotate(-Math.PI);
                    canvas.ctx.translate(-x, -(o.title.size + (o.title.offset + o.ticks.big.size + o.labels.big.size) * 2));
                }
            }

            // Draw ticks labels
            // Flip valign, because its relative axis, nut text itself
            var vab = o.labels.big.align;
            var vas = o.labels.small.align;
            if (o.type === "y") {
                if (vab === "bottom") vab = "right"; else
                if (vab === "top") vab = "left"; else
                if (vab === "middle") vab = "center";
                if (vas === "bottom") vas = "right"; else
                if (vas === "top") vas = "left"; else
                if (vas === "middle") vas = "center";
                switch (vab) {
                    case "center":case "middle": to = 0; break;
                    case "right": to = o.ticks.big.size; break;
                    case "left": to = -o.ticks.big.size;  break;
                }
                switch (vas) {
                    case "center":case "middle": toS = 0; break;
                    case "right": toS = o.ticks.small.size; break;
                    case "left": toS = -o.ticks.small.size; break;
                }
            } else {
                if (vab === "bottom") vab = "top"; else if (vab === "top") vab = "bottom";
                if (vab === "left") vab = "right"; else if (vab === "right") vab = "left";
                if (vas === "bottom") vas = "top"; else if (vas === "top") vas = "bottom";
                if (vas === "left") vas = "right"; else if (vas === "right") vas = "left";
                switch (vab) {
                    case "center":case "middle": to = 0; break;
                    case "top":case "left": to = o.ticks.big.size; break;
                }
                switch (vas) {
                    case "center":case "middle": toS = 0; break;
                    case "top":case "left": toS = o.ticks.small.size; break;
                }
            }

            k = o.min;
            total = o.max - o.min;
            while (k <= o.max) {
                x = Math.floor(t.toScreen(k));
                if ((k / o.ticks.big.interval) === parseInt((k / o.ticks.big.interval).toFixed(0))) {
                    if (o.ticks.big.size !== 0) {
                        if ((k + o.ticks.big.interval <= o.max || o.ticks.big.last) && (k != o.min || o.ticks.big.first)) {
                            canvas.setFillColor(o.labels.big.color);
                            canvas.setAlpha(o.labels.big.opacity);
                            if (o.type === "y") {
                                canvas.ctx.translate(x, to);
                                canvas.ctx.rotate(-cl.Consts.HALF_PI);
                                canvas.drawText(o.labels.big.before + k.toFixed(fix) + o.labels.big.after, 0, 0, o.labels.big.size, vab, "center", o.labels.big.font, o.labels.big.style);
                                canvas.ctx.rotate(cl.Consts.HALF_PI);
                                canvas.ctx.translate(-x, -to);
                            } else
                                canvas.drawText(o.labels.big.before + k.toFixed(fix) + o.labels.big.after, x, to, o.labels.big.size, "center", vab, o.labels.big.font, o.labels.big.style);
                        }
                    }
                } else {
                    if (o.ticks.small.size !== 0) {
                        if ((k + o.ticks.big.interval <= o.max || o.ticks.small.last) && (k != o.min + o.ticks.small.interval || o.ticks.small.first)) {
                            canvas.setFillColor(o.labels.small.color);
                            canvas.setAlpha(o.labels.small.opacity);
                            if (o.type === "y") {
                                canvas.ctx.translate(x, toS);
                                canvas.ctx.rotate(-cl.Consts.HALF_PI);
                                canvas.drawText(o.labels.small.before + k.toFixed(fix) + o.labels.small.after, 0, 0, o.labels.small.size, vas, "center", o.labels.small.font, o.labels.small.style);
                                canvas.ctx.rotate(cl.Consts.HALF_PI);
                                canvas.ctx.translate(-x, -toS);
                            } else
                                canvas.drawText(o.labels.small.before + k.toFixed(fix) + o.labels.small.after, x, toS, o.labels.small.size, "center", vas, o.labels.small.font, o.labels.small.style);
                        }
                    }
                }
                k += o.ticks.small.interval;
                k = parseFloat(k.toFixed(fix));
            }

            canvas.setAlpha(1);

            canvas.resetTransform();
        }

        /**
         * Converts screen value to axis space
         * @param {number} value Value on screen
         * @memberof cl.Axis.prototype
         * @returns {number} Axis coordinate
         */
        function toAxis(value) {
            if (!t.chart) throw cl.Lang.get("errAxisHaveNoChart");
            var k = t.chart.width;
            if (t.options.type === "x") {
                return t.options.min + (value - t.options.margin.start) / (k - t.options.margin.start - t.options.margin.end) * (t.options.max - t.options.min);
            } else {
                k = t.chart.height;
                value = k - value;
                return t.options.min + (value - t.options.margin.start) / (k - t.options.margin.start - t.options.margin.end) * (t.options.max - t.options.min);
            }
        }

        /**
         * Converts axis value to screen space
         * @param {number} value Value on axis
         * @memberof cl.Axis.prototype
         * @returns {number} Pixel coordinate
         */
        function toScreen(value) {
            if (!t.chart) throw cl.Lang.get("errAxisHaveNoChart");
            var k = t.chart.width;
            if (t.options.type === "x") {
                return t.options.margin.start +  (value - t.options.min) / (t.options.max - t.options.min) *  (k - t.options.margin.start - t.options.margin.end);
            } else {
                k = t.chart.height;
                return t.chart.height - (t.options.margin.start +  (value - t.options.min) / (t.options.max - t.options.min) *  (k - t.options.margin.start - t.options.margin.end));
                //return t.chart.height - t.options.margin.start + (value - t.options.min) / (t.options.max - t.options.min) *  (k - t.options.margin.start - t.options.margin.end);
            }
        }

        /**
         * Applies option changes and request chart for axis redraw
         * @memberof cl.Axis.prototype
         * @returns {cl.Axis} this
         */
        function apply() {
            t.parent.apply();
            return t;
        }

        /**
         * Sets axis line width in pixels
         * @param {number} w
         * @memberof cl.Axis.prototype
         * @returns {cl.Axis} this
         * @example
         * axis.setLineWidth(2).apply();
         */
        function setLineWidth(w) {
            t.options.style.lineWidth = w;
            return t;
        }

        /**
         * Returns axis line width
         * @returns {number} Line width
         * @memberof cl.Axis.prototype
         */
        function getLineWidth() {
            return t.options.style.lineWidth;
        }

        /**
         * Destroys axis
         * @memberof cl.Axis.prototype
         */
        function destroy() {
            t.options = null;
            t.chart = null;
        }
    }

    return Axis;
})();


cl.AxisManager = (function() {
    'use strict';

    /**
     * Represent axis manager class
     * @extends cl.Layer
     * @param {cl.Chart} chart Parent chart
     * @memberof cl
     * @constructor
     *
     * @property {cl.Chart} chart Parent chart
     * @property {array<cl.Axis>} shapes Axis shapes
     */
    function AxisManager(chart) {
        var t = this;
        cl.Layer.call(t, chart);

        // Public methods
        t.add = add;
        t.get = get;
        t.remove = remove;
        t.render = render;

        // Properties
        t.chart = chart;
        t.shapes = [];
        t.dirtyFlagName = "axis";

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Renders all axis on surface
         * @memberof cl.AxisManager.prototype
         */
        function render() {
            var i, l;
            t.surface.resetTransform();
            t.surface.clear();
            for (i = 0, l = t.shapes.length; i < l; i++) t.shapes[i].render(t.surface);
        }

        /**
         * Adds axis
         * @param {object} axisOptions Axis settings. See "options" in {@link cl.Axis} constructor
         * @memberof cl.AxisManager.prototype
         * @returns {cl.Axis} New axis
         */
        function add(axisOptions) {
            var axis = new cl.Axis(t, axisOptions || {});
            t.shapes.push(axis);
            t.apply();
            return axis;
        }

        /**
         * Returns axis with specified index or name. Will return first axis with name. Returns undefined if axis was not found
         * @param {number|string} indexOrName or axis name
         * @memberof cl.AxisManager.prototype
         * @returns {cl.Axis|undefined}
         */
        function get(indexOrName) {
            var i, l;
            if (typeof indexOrName === "string") {
                for (i = 0, l = t.shapes.length; i < l; i++) if (t.shapes[i].getName() === indexOrName) return t.shapes[i];
            } else return t.shapes[indexOrName];
        }

        /**
         * Removes axis from shapes
         * @param {object} axis Axis
         * @private
         */
        function removeAxis(axis) {
            if (!axis) return;
            // Deny base axis remove
            if (axis === t.chart.xAxis || axis === t.chart.yAxis) throw cl.Lang.get("errDelBaseAxis", axis.options.type);
            var idx = t.shapes.indexOf(axis);
            if (idx === -1 || !t.shapes[idx]) return;
            t.shapes.splice(idx, 1);
            t.apply();

            axis.destroy();
        }

        /**
         * Removes axis
         * @param {object|string|number} axis Axis itself or axis name, or axis index
         * @memberof cl.AxisManager.prototype
         */
        function remove(axis) {
            switch (typeof axis) {
                case "object": {
                    removeAxis(axis);
                    break;
                }
                default: {
                    removeAxis(get(axis));
                    break;
                }
            }
        }

        /**
         * Destroys axis manager
         * @memberof cl.AxisManager.prototype
         */
        function destroy() {
            var i, l;
            for (i = 0, l = t.shapes.length; i < l; i++) t.shapes[i].destroy();

            t.shapes = null;

            t.constructor.superclass.destroy.call(t);
        }

    }

    cl.Utils.extend(AxisManager, cl.Layer);

    return AxisManager;
})();

cl.Background = (function() {
    'use strict';

    /**
     * Represent background class
     * @extends cl.Layer
     * @param {cl.Chart} chart Parent chart
     * @param {object} [options] Background settings
     * @param {string} [options.url] Background url or base64 string
     * @param {boolean} [options.visible=true] Is background visible or not
     *
     * @param {object} [options.align] Background align
     * @param {string} [options.align.x="left"] Horizontal align. "left", "right", "center"
     * @param {string} [options.align.y="bottom"] Vertical align. "top", "bottom", "middle"
     *
     * @param {object} [options.pos] Background position
     * @param {number} [options.pos.x=0] X coordinate in axis units of background position
     * @param {number} [options.pos.y=0] Y coordinate in axis units of background position
     *
     * @param {number} [options.fit=cl.Background.FIT_ALL] Background fit type. Can be:<br><b>cl.Background.FIT_NONE = 0</b>; no fit, image size not changed<br><b>cl.Background.FIT_STRETCH = 1</b>; stretch image to fit chart size<br><b>cl.Background.FIT_ALL = 2</b>; image will be scaled to fit chart size using aspect ratio<br><b>cl.Background.FIT_FILL = 2</b>; image will be scaled to fill all chart using aspect ratio
     *
     * @memberof cl
     * @constructor
     *
     * @property {object} image Background image
     * @property {boolean} isLoaded Is image loaded or not
     * @property {object} options Background settings. Same as "options" in constructor
     */
    function Background(chart, options) {
        var t = this;
        cl.Layer.call(t, chart);

        // Public fields
        t.dirtyFlagName = "bg";
        t.image = null;
        t.isLoaded = false;

        // Default settings
        cl.Utils.merge(t.options, {
            url: "",
            align: {
                x: "left",
                y: "bottom"
            },
            pos: {
                x: 0,
                y: 0
            },
            fit: Background.FIT_ALL,
            fitToScreen: false,
            visible: true
        });
        cl.Utils.merge(t.options, options || {});

        // Public methods
        t.render = render;
        t.setFit = setFit;
        t.destroy = destroy;
        t.setImage = setImage;

        // Load image
        if (t.options.url) t.setImage(t.options.url);

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Sets background fit style
         * @param {number} fit Fit style. See "options.fit" in constructor for details
         * @returns {cl.Background} this
         * @memberof cl.Background.prototype
         */
        function setFit(fit) {
            t.options.fit = fit;
            return t;
        }

        /**
         * Renders background
         * @memberof cl.Background.prototype
         */
        function render() {
            if (!t.image) return;
            if (!t.options.visible) return;

            var hRatio, vRatio, ratio;

            // Align
            var ax = t.options.align.x;
            var ay = t.options.align.y;

            // Cooridinates
            var x = t.chart.xAxis.toScreen(t.options.pos.x);
            var y = t.chart.yAxis.toScreen(t.options.pos.y);

            // Margins x and y
            var mx = t.chart.xAxis.getMargins();
            var my = t.chart.yAxis.getMargins();

            // Canvas links to screen, not to chart area
            if (t.options.fitToScreen) {
                x = 0;
                y = t.chart.height;
                mx.start = 0;
                mx.end = 0;
                my.start = 0;
                my.end = 0;
            }

            // Dimensions
            var imageW = t.image.width;
            var imageH = t.image.height;
            var holderW = t.chart.width - mx.start - mx.end;
            var holderH = t.chart.height - my.start - my.end;

            // Calculate fit
            switch (t.options.fit) {
                case Background.FIT_STRETCH: {
                    imageW = t.chart.width - mx.start - mx.end;
                    imageH = t.chart.height - my.start - my.end;
                    break;
                }
                case Background.FIT_ALL: {
                    hRatio = holderW / imageW;
                    vRatio = holderH / imageH ;
                    ratio  = Math.min ( hRatio, vRatio );
                    imageW *= ratio;
                    imageH *= ratio;
                    x = mx.start + holderW / 2;
                    y = my.end + holderH / 2;
                    ax = "center";
                    ay = "center";
                    break;
                }
                case Background.FIT_FILL: {
                    hRatio = holderW / imageW;
                    vRatio = holderH / imageH ;
                    ratio  = Math.max( hRatio, vRatio );
                    imageW *= ratio;
                    imageH *= ratio;
                    x = mx.start + holderW / 2;
                    y = my.end + holderH / 2;
                    ax = "center";
                    ay = "center";
                    break;
                }
            }

            // Calc coordinates depending on align
            switch (ax) {
                case "left": x -= 0; break;
                case "right": x -= imageW; break;
                case "center": x -= imageW / 2; break;
            }
            switch (ay) {
                case "top": y -= 0; break;
                case "bottom": y -= imageH; break;
                case "middle","center": y -= imageH / 2; break;
            }

            // Clip image if mode is FILL
            if (t.options.fit === Background.FIT_FILL) {
                t.surface.save();
                t.surface.ctx.rect(mx.start, my.end, holderW, holderH);
                t.surface.ctx.clip();
            }

            // Actual draw
            t.surface.ctx.drawImage(t.image, Math.floor(x), Math.floor(y), imageW, imageH);

            // Remove clip if mode is FILL
            if (t.options.fit === Background.FIT_FILL) t.surface.restore();

            t.constructor.superclass.render.call(t);
        }

        /**
         * Sets background image
         * @param {string} url image url or base64 string
         * @memberof cl.Background.prototype
         */
        function setImage(url) {
            t.image = new Image();
            t.isLoaded = false;
            // After image is loaded - redraw layer
            t.image.onload = function() {
                t.isLoaded = true;
                t.apply();
            };
            t.image.src = url;
        }

        /**
         * Destroys background
         * @memberof cl.Background.prototype
         */
        function destroy() {
            t.image = null;
            t.constructor.superclass.destroy.call(t);
        }
    }
    cl.Utils.extend(Background, cl.Layer);

    // Constants for fit
    /**
     * Don't fit image, draws in original size
     * @memberof cl.Background
     * @type {number}
     * @default 0
     */
    Background.FIT_NONE = 0;
    /**
     * Stretch image to fit area, don't save aspect ratio
     * @memberof cl.Background
     * @type {number}
     * @default 0
     */
    Background.FIT_STRETCH = 1;
    /**
     * Fit whole image to area, save aspect ratio
     * @memberof cl.Background
     * @type {number}
     * @default 0
     */
    Background.FIT_ALL = 2;
    /**
     * Fit image to fill whole area, save aspect ratio
     * @memberof cl.Background
     * @type {number}
     * @default 0
     */
    Background.FIT_FILL = 3;

    return Background;

})();

cl.Canvas = (function(){
    'use strict';

    /**
     * Represent canvas object with specified width and height
     * @param {number} width Width of canvas
     * @param {number} height Height of canvas
     *
     * @property {object} el Canvas DOM element
     * @property {object} ctx Canvas 2d context
     *
     * @memberof cl
     * @constructor
     */
    function Canvas(width, height) {
        var t = this;

        // Private
        var
            _currentLineWidth = 0,
            _pixelOffset = 0; // Used to solve "blurred lines" issue

        // Public methods
        t.draw = draw;
        t.save = save;
        t.clear = clear;
        t.resize = resize;
        t.destroy = destroy;
        t.restore = restore;
        t.drawText = drawText;
        t.drawLine = drawLine;
        t.drawRect = drawRect;
        t.setAlpha = setAlpha;
        t.drawArrow = drawArrow;
        t.setLineDash = setLineDash;
        t.setLineStyle = setLineStyle;
        t.setFillColor = setFillColor;
        t.resetTransform = resetTransform;

        // Properties
        t.el = document.createElement("canvas");
        t.ctx = this.el.getContext('2d');
        Object.defineProperties(t, {
            width: { get: function() { return t.el.width; } },
            height: { get: function() { return t.el.height; } }
        });

        // Set size
        t.resize(width, height);

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Sets canvas line dash style
         * @param {array} dash A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
         * @memberof cl.Canvas.prototype
         */
        function setLineDash(dash) {
            if (t.ctx.setLineDash) t.ctx.setLineDash(dash);
        }

        /**
         * Restores canvas state
         * @memberof cl.Canvas.prototype
         */
        function restore() {
            t.ctx.restore();
        }

        /**
         * Saves canvas state
         * @memberof cl.Canvas.prototype
         */
        function save() {
            t.ctx.save();
        }


        /**
         * Sets fill color
         * @param {string} color Color
         * @memberof cl.Canvas.prototype
         */
        function setFillColor(color) {
            t.ctx.fillStyle = color;
        }

        /**
         * Sets line style
         * @param {number} width Line width
         * @param {string} [color=black] Line color
         * @param {boolean|undefined} ignoreBlurFix True to ignore fix for 1px blurred lines
         * @memberof cl.Canvas.prototype
         */
        function setLineStyle(width, color, ignoreBlurFix) {
            var col = color || cl.Consts.COLOR_BLACK;
            t.ctx.lineWidth = width;
            t.ctx.strokeStyle = col;

            if (ignoreBlurFix) return;
            if (Math.abs(_currentLineWidth - width) > 0.001) {
                _currentLineWidth = width;
                var translate = (width % 2) / 2;
                if (Math.abs(_pixelOffset - translate) > 0.001) {
                    t.ctx.translate(-_pixelOffset, -_pixelOffset);
                    _pixelOffset = translate;
                    t.ctx.translate(_pixelOffset, _pixelOffset);
                }
            }
        }

        /**
         * Draws text
         * @param {string} text Text to draw
         * @param {number} x X coordinate
         * @param {number} y Y coordinate
         * @param {number} [size=cl.Consts.FONT_SIZE(14)] Font size
         * @param {string} [align="left"] Text align: "left", "right", "center"
         * @param {string} [valign="top"] Text vertical align: "top", "bottom", "middle"
         * @param {string} [fontName=cl.Consts.FONT_NAME(Arial)] Font name
         * @param {string|undefined} [style=undefined] Text style. "bold", "italic", "bold italic"
         * @param {number|undefined} [width=undefined] Fit text to specified width
         */
        function drawText(text, x, y, size, align, valign, fontName, style, width) {
            var s = (size || cl.Consts.FONT_SIZE) + "px";
            var n = fontName || cl.Consts.FONT_NAME;
            var st = style || "";
            var a = align || "left";
            var va = valign || "top";
            if (va === "center") va = "middle";
            t.ctx.textBaseline = va;
            t.ctx.textAlign = a;
            t.ctx.font = st + " " + s + " " + n;
            if (width !== undefined)
                t.ctx.fillText(text, x, y, width);
            else
                t.ctx.fillText(text, x, y);
        }

        /**
         * Draws arrow
         * @param {number} x X coordinate
         * @param {number} y Y coordinate
         * @param {number} rotation Angle rotation in radians
         * @param {number} len Arrow length in pixels
         * @param {number} [arrowAngle=Math.PI / 10] Arrow left and right angle in radians
         * @memberof cl.Canvas.prototype
         */
        function drawArrow(x, y, rotation, len, arrowAngle) {
            var dx, dy, aa;
            aa = arrowAngle || Math.PI / 10;

            // Draw left side of arrow
            dx = Math.cos(rotation + aa);
            dy = Math.sin(rotation + aa);
            t.ctx.beginPath();
            t.ctx.moveTo(x, y);
            t.ctx.lineTo(x - dx * len, y - dy * len);

            // Draw right side of arrow
            dx = Math.cos(rotation - aa);
            dy = Math.sin(rotation - aa);
            t.ctx.lineTo(x - dx * len, y - dy * len);
            t.ctx.lineTo(x, y+1);
            t.ctx.closePath();


            t.ctx.fill();
        }

        /**
         * Draws rectangle on canvas
         * @param {number} x1 First point X coordinate
         * @param {number} y1 First point Y coordinate
         * @param {number} x2 Second point X coordinate
         * @param {number} y2 Second point Y coordinate
         * @param {number} r Border radius
         * @param {boolean} [dontCreatePath] If true, function will not start "beginPath"
         * @memberof cl.Canvas.prototype
         */
        function drawRect(x1, y1, x2, y2, r, dontCreatePath) {
            var sx, sy, ex, ey;
            sx = Math.min(x1, x2);
            sy = Math.min(y1, y2);
            ex = Math.max(x1, x2);
            ey = Math.max(y1, y2);
            if (r) {
                // Ensure that the radius isn't too large for x
                if (( ex - sx ) - ( 2 * r ) < 0) {
                    r = ( ( ex - sx ) / 2 );
                }
                // Ensure that the radius isn't too large for y
                if (( ey - sy ) - ( 2 * r ) < 0) {
                    r = ( ( ey - sy ) / 2 );
                }
                if (!dontCreatePath) t.ctx.beginPath();
                t.ctx.moveTo(sx + r, sy);
                t.ctx.lineTo(ex - r, sy);
                t.ctx.arc(ex - r, sy + r, r, cl.Consts.RAD_TO_DEG * 270, cl.Consts.RAD_TO_DEG * 360, false);
                t.ctx.lineTo(ex, ey - r);
                t.ctx.arc(ex - r, ey - r, r, cl.Consts.RAD_TO_DEG * 0, cl.Consts.RAD_TO_DEG * 90, false);
                t.ctx.lineTo(sx + r, ey);
                t.ctx.arc(sx + r, ey - r, r, cl.Consts.RAD_TO_DEG * 90, cl.Consts.RAD_TO_DEG * 180, false);
                t.ctx.lineTo(sx, sy + r);
                t.ctx.arc(sx + r, sy + r, r, cl.Consts.RAD_TO_DEG * 180, cl.Consts.RAD_TO_DEG * 270, false);
                if (!dontCreatePath) t.ctx.closePath();
            } else {
                t.ctx.rect(sx, sy, ex - sx, ey - sy);
            }
        }

        /**
         * Draws line on canvas
         * @param {number} x1 First point X coordinate
         * @param {number} y1 First point Y coordinate
         * @param {number} x2 Second point X coordinate
         * @param {number} y2 Second point Y coordinate
         * @param {boolean} [dontCreatePath] If true, function will not start "beginPath"
         * @memberof cl.Canvas.prototype
         */
        function drawLine(x1, y1, x2, y2, dontCreatePath) {
            if (!dontCreatePath) t.ctx.beginPath();
            t.ctx.moveTo(x1, y1);
            t.ctx.lineTo(x2, y2);
            if (!dontCreatePath) t.ctx.stroke();
        }

        /**
         * Sets global alpha value
         * @param {number} alpha Alpha value
         * @memberof cl.Canvas.prototype
         * @returns {cl.Canva} this
         */
        function setAlpha(alpha) {
            t.ctx.globalAlpha = alpha;
            return t;
        }

        /**
         * Resets canvas transform
         * @memberof cl.Canvas.prototype
         */
        function resetTransform() {
            t.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }

        /**
         * Draws another canvas on this
         * @param {object} canvas
         * @param {number} x X coordinate
         * @param {number} y Y coordinate
         * @memberof cl.Canvas.prototype
         */
        function draw(canvas, x, y) {
            //if (_pixelOffset !== 0) t.ctx.translate(-_pixelOffset, -_pixelOffset);
            t.ctx.drawImage(canvas.el, x || 0, y || 0);
            //if (_pixelOffset !== 0) t.ctx.translate(_pixelOffset, _pixelOffset);
        }

        /**
         * Destroys canvas
         * @memberof cl.Canvas.prototype
         */
        function destroy() {
            if (t.el.parentNode) t.el.parentNode.removeChild(t.el);
            t.ctx = null;
            t.el = null;
        }

        /**
         * Clears canvas
         * @memberof cl.Canvas.prototype
         */
        function clear() {
            if (_pixelOffset !== 0) t.ctx.translate(-_pixelOffset, -_pixelOffset);
            t.ctx.clearRect(-1, -1, t.width+1, t.height+1);
            if (_pixelOffset !== 0) t.ctx.translate(_pixelOffset, _pixelOffset);
        }

        /**
         * Resizes canvas
         * @param {number} width New width
         * @param {number} height New height
         * @memberof cl.Canvas.prototype
         */
        function resize(width, height) {
            t.el.width = width;
            t.el.height = height;
        }
    }

    return Canvas;
})();

cl.Selector = (function() {
    'use strict';

    /**
     * Represent selector class. All shapes selections done with help of current class. Also this class does dragging.
     * @extends cl.Layer
     * @param {cl.Chart} chart Parent chart
     * @param {object} [options] Selector settings
     * @param {boolean} [options.draggable=false] Shapes drag enabled or not
     *
     * @param {object} [options.hover] Hovering settings
     * @param {boolean} [options.hover.enabled=true] Is shape hover enabled
     * @param {number} [options.hover.width=1] Hover width
     * @param {string} [options.hover.color=cl.Consts.COLOR_BLUE] Hover color
     * @param {number} [options.hover.opacity=1] Hover opacity
     * @param {boolean} [options.hover.showHand=true] Show hand cursor on hover
     *
     * @param {object} [options.selection] Selection settings
     * @param {boolean} [options.selection.enabled=true] Is enabled or not
     * @param {boolean} [options.selection.multiple=true] Allow multiple selection
     * @param {object} [options.selection.shape] Shape selection settings
     * @param {number} [options.selection.shape.width=1] Selected shape line width
     * @param {string} [options.selection.shape.color=cl.Consts.COLOR_RED] Selected shape line color
     * @param {number} [options.selection.shape.opacity=1] Selected shape line opacity
     * @param {object} [options.selection.rect] Selection frame settings
     * @param {boolean} [options.selection.rect.enabled=true] Is enabled or not
     * @param {number} [options.selection.rect.width=1] Selected shape line width
     * @param {string} [options.selection.rect.color=cl.Consts.COLOR_LIGHTBLUE] Selected shape line color
     * @param {number} [options.selection.rect.opacity=0.3] Selected shape line opacity
     *
     * @memberof cl
     * @constructor
     *
     * @property {object} options Selector settings. Same as "options" in constructor
     * @property {array<cl.Shape>} selection Current selection
     */
    function Selector(chart, options) {
        var t = this;
        cl.Layer.call(t, chart);

        // Public fields
        t.selection = [];
        t.hover = null;
        t.dirtyFlagName = "sel";

        // Default settings
        cl.Utils.merge(t.options, {
            draggable: false,
            hover: {
                enabled: true,
                width: 2,
                color: cl.Consts.COLOR_RED,
                opacity: 1,
                showHand: true
            },
            selection: {
                enabled: true,
                multiple: false,
                shape: {
                    width: 1,
                    color: cl.Consts.COLOR_BLUE,
                    opacity: 1
                },
                rect: {
                    enabled: true,
                    width: 1,
                    color: cl.Consts.COLOR_LIGHTBLUE,
                    opacity: 0.3
                }
            }
        });
        cl.Utils.merge(t.options, options || {});

        // Private
        var
            drag = {
                active : false, // Is dragging active or not
                prepared: false,  // Is dragging prepared or not. Used to determine if we start drag shape or empty space
                items: [], // Items have been dragged
                bounds: null, // Bounds of items
                sx: 0, // Current drag x coordinate
                sy: 0, // Current drag y coordinate
                lx: 0, // Drag start x coordinate
                ly: 0,// Drag start y coordinate
                layer: new cl.Canvas(t.chart.width, t.chart.height) // Layer to hold cache shapes have been dragging
            },
            rect = { active: false, sx: 0, sy: 0, ex: 0, ey: 0},
            click = {down: null, up: null}; // Store shapes to call click evet. Down - shape o mouse down, up - shape on mouse up

        // Public methods
        t.resize = resize;
        t.render = render;
        t.destroy = destroy;
        t.deselect = deselect;
        t.getBounds = getBounds;
        t.enableDrag = enableDrag;
        //t.isSelecting = isSelecting;
        t.disableDrag = disableDrag;
        t.getSelection = getSelection;
        t.shapesFromRect = shapesFromRect;
        t.shapeFromPoint = shapeFromPoint;
        t.shapesFromPoint = shapesFromPoint;
        t.enableMultiselect = enableMultiselect;
        t.disableMultiselect = disableMultiselect;

        // Bind mouse move event
        t.chart.addEventListener(cl.Event.shapeOver, onShapeOver);
        t.chart.addEventListener(cl.Event.shapeOut, onShapeOut);
        t.chart.addEventListener(cl.Event.mouseDown, onMouseDown);
        t.chart.addEventListener(cl.Event.mouseUp, onMouseUp);
        t.chart.addEventListener(cl.Event.mouseMove, onMouseMove);

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /*function isSelecting() {
            return rect.active;
        }*/

        /**
         * Removes selection
         * @memberof cl.Selector.prototype
         */
        function deselect() {
            if (t.selection.length === 0) return;
            t.chart.events.callListeners(cl.Event.deselect, null, t.selection);
            t.selection = [];
            t.apply();
        }

        /**
         * Returns selection
         * @returns {array.<cl.Shape>}
         * @memberof cl.Selector.prototype
         */
        function getSelection() {
            return t.selection;
        }

        /**
         * Enables multiselection
         * @memberof cl.Selector.prototype
         */
        function enableMultiselect() {
            t.options.selection.enabled = true;
            t.options.selection.rect.enabled = true;
            t.options.selection.multiple = true;
        }

        /**
         * Disables multiselection
         * @memberof cl.Selector.prototype
         */
        function disableMultiselect() {
            t.options.selection.multiple = false;
        }

        /**
         * Enables dragging
         * @memberof cl.Selector.prototype
         */
        function enableDrag() {
            t.options.draggable = true;
        }

        /**
         * Disables dragging
         * @memberof cl.Selector.prototype
         */
        function disableDrag() {
            t.options.draggable = false;
        }

        /**
         * Shape over event handler
         * @param {cl.Event} e
         * @private
         */
        function onShapeOver(e) {
            if (drag.active || rect.active) return;
            if (e.target && e.target.props.cursor) t.chart.setCursor(e.target.props.cursor);
                else if (t.options.hover.showHand) showHand();
            t.hover = e.target;
            t.apply();
        }

        /**
         * Shape out event handler
         * @param {cl.Event} e
         * @private
         */
        function onShapeOut(e) {
            if (drag.active || rect.active) return;
            if ((e.target && e.target.props.cursor) || t.options.hover.showHand) resetCursor();
            t.hover = null;
            t.apply();
        }

        /**
         * Returns bounds of shapes
         * @param {array<cl.Shape>} items Items array
         * @returns {{x: Number, y: Number, w: number, h: number}} Bounds
         * @memberof cl.Selector.prototype
         */
        function getBounds(items) {
            var x1, y1, x2, y2, i, l, b;
            x1 = Number.MAX_VALUE;
            y1 = Number.MAX_VALUE;
            x2 = Number.MIN_VALUE;
            y2 = Number.MIN_VALUE;
            for (i = 0, l = items.length; i < l; i++) {
                b = items[i].getBounds();
                if (b.x < x1) x1 = b.x;
                if (b.y < y1) y1 = b.y;
                if (b.x + b.w > x2) x2 = b.x + b.w;
                if (b.y + b.h > y2) y2 = b.y + b.h;
            }
            return {x: x1, y: y1, w: x2 - x1, h: y2 - y1};
        }

        /**
         * Starts dragging process
         * @param {object} e Event
         * @private
         */
        function startDrag(e) {
            if (!t.options.draggable) return;
            // Check if there shape under cursor
            var currentItem = t.shapeFromPoint(t.chart.events.mouseX, t.chart.events.mouseY);
            if (!currentItem) return;
            // Make selection if not exists
            if (currentItem && t.selection.indexOf(currentItem) === -1) {
                t.selection = [currentItem];
                t.chart.events.callListeners(cl.Event.select, e, t.selection);
            }
            if (t.selection.length === 0) return;

            var i, l;
            var sel = t.selection;

            // Initialise
            drag.items = [];
            drag.sx = t.chart.xAxis.toAxis(drag.sx);
            drag.sy = t.chart.yAxis.toAxis(drag.sy);

            // Calculate bounds of draggable shapes
            drag.bounds = t.getBounds(sel);
            drag.bounds.x = Math.floor(drag.bounds.x) - 10;
            drag.bounds.y = Math.floor(drag.bounds.y) - 10;

            // Prepare drag layer for drawing
            drag.layer.resize(drag.bounds.w + 20, drag.bounds.h + 20);
            drag.layer.resetTransform();
            drag.layer.clear();
            drag.layer.ctx.translate(-drag.bounds.x, -drag.bounds.y);

            for (i = 0, l = sel.length; i < l; i++) if (sel[i].props.draggable) {
                // Add draggable item
                drag.items.push(sel[i]);
                // Render draggable shape in drag layer
                sel[i].render(drag.layer);
                if (!sel[i].isAnimating) {
                    // Update static layer if draggable shapes was in static
                    t.chart.shapes.updateStatic();
                    t.chart.shapes.apply();
                }
                sel[i].isAnimating = true;
            }
            // Renders selection of draggable shapes
            renderSelection(drag.layer, drag.items);

            // Sets _isDragged flag to hide shapes from rendering in ShapeManager
            for (i = 0, l = drag.items.length; i < l; i++) drag.items[i]._isDragged = true;

            drag.active = true;
            t.apply();
        }

        /**
         * Mouse move callback
         * @private
         * @param {cl.Event} e Event
         */
        function onMouseMove(e) {
            var i, l;
            if (drag.active) {
                // Move all draggable shapes
                for (i = 0, l = drag.items.length; i < l; i++) drag.items[i].processDrag(e.x - drag.sx, e.y - drag.sy);//{
                    //drag.items[i].props.x += e.x - drag.sx;
                    //drag.items[i].props.y += e.y - drag.sy;
                //}
                // Request shapes and selector redraw
                t.apply();
                t.chart.shapes.apply();
                // Store new coordinates
                drag.sx = e.x;
                drag.sy = e.y;

            } else
            // Start drag if moved by Selector.DRAG_THRESOLD pixels
            if (drag.prepared && t.chart.events.mouseDown && ((Math.abs(drag.sx - e.originalEvent.offsetX) > Selector.DRAG_THRESOLD) || (Math.abs(drag.sy - e.originalEvent.offsetY) > Selector.DRAG_THRESOLD))) startDrag(e);

            // Change selection rectangle coordinates
            if (rect.active) {
                rect.ex = e.originalEvent.offsetX;
                rect.ey = e.originalEvent.offsetY;
                t.apply();
            }
        }

        /**
         * Mouse down event listener
         * @private
         * @param {cl.Event} e Event
         */
        function onMouseDown(e) {
            click.down = t.hover;
            if (!drag.active && t.hover) {
                // Store drag parameters
                drag.prepared = true;
                drag.sx = e.originalEvent.offsetX;
                drag.sy = e.originalEvent.offsetY;
                drag.lx = drag.sx;
                drag.ly = drag.sy;
            } else drag.prepared = false;
            if (!t.hover && t.options.selection.enabled && t.options.selection.rect.enabled && t.options.selection.multiple) {
                // Store selection rectangle parameters
                rect.sx = e.originalEvent.offsetX;
                rect.sy = e.originalEvent.offsetY;
                rect.ex = rect.sx;
                rect.ey = rect.sy;
                rect.active = true;
            }
        }

        /**
         * Mouse down event listener
         * @private
         * @param {cl.Event} e Event
         */
        function onMouseUp(e) {
            var i, l, res;
            click.up = t.hover;
            var clickedOnShape = click.down && click.up && click.down === click.up;
            if (rect.active) {
                // Calculate selection
                var hw = Math.abs(rect.ex - rect.sx) / 2;
                var hh = Math.abs(rect.ey - rect.sy) / 2;
                var rx = Math.max(rect.sx, rect.ex) - hw;
                var ry = Math.max(rect.sy, rect.ey) - hh;
                res = t.shapesFromRect(rx, ry, hw, hh);
                if (res.length === 0)
                    t.chart.events.callListeners(cl.Event.deselect, e, t.selection);
                else
                    t.chart.events.callListeners(cl.Event.select, e, res);
                t.selection = res;
                rect.active = false;
                t.apply();
            } else
            if (drag.active) {
                // Move all dragged shapes in static layer
                for (i = 0, l = drag.items.length; i < l; i++) {
                    drag.items[i]._isDragged = false;
                    if (!drag.items[i].tween) {
                        drag.items[i].isAnimating = false;
                        t.chart.shapes.updateStatic();
                        t.chart.shapes.apply();
                    }
                }
                // Stop dragging
                drag.items = null;
                drag.active = false;
                drag.prepared = false;
                t.apply();
            } else {
                // Select shapes
                if (t.options.selection.enabled) {
                    if (t.options.selection.multiple && t.hover) {
                        // Multiple selection. Add or remove shape from selection
                        var idx = t.selection.indexOf(t.hover);
                        if (idx === -1) t.selection.push(t.hover); else t.selection.splice(idx, 1);
                    } else if (clickedOnShape) {
                        // Single selection
                        if (t.hover) {
                            if (t.selection.length === 1 && t.selection[0] === t.hover) {
                                t.chart.events.callListeners(cl.Event.deselect, e, t.selection);
                                t.selection = [];
                            } else {
                                t.selection = [t.hover];
                                t.chart.events.callListeners(cl.Event.select, e, t.selection);
                            }
                        } else {
                            t.chart.events.callListeners(cl.Event.deselect, e, t.selection);
                            t.selection = [];
                        }
                    }
                    t.apply();
                }

                // Fire click event
                if (clickedOnShape) t.chart.events.callListeners(cl.Event.click, e.originalEvent, click.up);
                    else if (click.down === null && click.up === null ) t.chart.events.callListeners(cl.Event.click, e.originalEvent, null);
            }
        }

        /**
         * Returns all shapes intersecting rectangle
         * @param {number} rx X coordinate in pixels of rectangle center
         * @param {number} ry Y coordinate in pixels of rectangle center
         * @param {number} hw Half width
         * @param {number} hh Half height
         * @returns {Array<cl.Shape>} Array of shapes intersecting rectangle
         * @memberof cl.Selector.prototype
         */
        function shapesFromRect(rx, ry, hw, hh) {
            var i, l, res = [];
            l = t.chart.shapes.count;
            for (i = 0; i < l; i++) if (t.chart.shapes.shapes[i].hitTestRect(rx, ry, hw, hh)) res.push(t.chart.shapes.shapes[i]);
            return res;
        }


        /**
         * Returns all shapes under point in screen coordinates
         * @param {number} x X coordinate in pixels
         * @param {number} y Y coordinate in pixels
         * @returns {Array} Array of shapes under point
         * @memberof cl.Selector.prototype
         */
        function shapesFromPoint(x, y) {
            var i, l, res = [];
            l = t.chart.shapes.count;
            for (i = 0; i < l; i++) if (t.chart.shapes.shapes[i].hitTest(x, y)) res.push(t.chart.shapes.shapes[i]);
            return res;
        }

        /**
         * Returns one closest shape under point in screen coordinates
         * @param {number} x X coordinate in pixels
         * @param {number} y Y coordinate in pixels
         * @returns {cl.Shape|undefined} Shape under point
         * @memberof cl.Selector.prototype
         */
        function shapeFromPoint(x, y) {
            var shapes = t.chart.selector.shapesFromPoint(x, y);
            if (shapes.length !== 0) {
                var min = Number.MAX_VALUE;
                var idx = 0;
                // Find closest shape
                for (var i = 0, l = shapes.length; i < l; i++) {
                    var size = shapes[i].getPixelArea();
                    if (size < min) {
                        min = size;
                        idx = i;
                    }
                }
                return shapes[idx];
            }
        }

        /**
         * Renders selector
         * @memberof cl.Selector.prototype
         */
        function render() {
            if (!t.options.visible) return;
            var i, l;

            t.surface.clear();
            if (drag.active) t.surface.draw(drag.layer, drag.bounds.x -drag.lx + t.chart.events.mouseX, drag.bounds.y -drag.ly + t.chart.events.mouseY); else {

                // Render selection
                renderSelection(t.surface, t.selection);

                if (t.options.hover.enabled && !rect.active) {
                    // Recalculate hover if shapes is moving, but not when dragging
                    if (t.chart.shapes.isAnimating && !drag.active) t.hover = t.shapeFromPoint(t.chart.events.mouseX, t.chart.events.mouseY);
                    // Render hover if exists
                    if (t.hover && !(t.hover.props.hover && t.hover.props.hover.enabled === false)) {
                        if (t.hover.props.hover) {
                            t.surface.ctx.strokeStyle = t.hover.props.hover.color !== undefined ? t.hover.props.hover.color : t.options.hover.color;
                            t.surface.ctx.lineWidth = t.hover.props.hover.border !== undefined ? t.hover.props.hover.border : t.options.hover.width;
                            t.surface.ctx.globalAlpha = t.hover.props.hover.opacity !== undefined ? t.hover.props.hover.opacity : t.options.hover.opacity;
                        } else {
                            t.surface.ctx.strokeStyle = t.options.hover.color;
                            t.surface.ctx.lineWidth = t.options.hover.width;
                            t.surface.ctx.globalAlpha = t.options.hover.opacity;
                        }
                        t.surface.ctx.beginPath();
                        t.hover.renderHover(t.surface, t.options.hover.width / 2 + (t.hover.props.hover ? (t.hover.props.hover.offset || 0) : 0));
                        t.surface.ctx.stroke();
                        t.surface.ctx.closePath();
                    }
                }

                // Render selection rectangle
                if (rect.active) {
                    t.surface.ctx.strokeStyle = cl.Utils.colorLuminance(t.options.selection.rect.color, -0.2);
                    t.surface.ctx.fillStyle = t.options.selection.rect.color;
                    t.surface.ctx.lineWidth = t.options.selection.rect.width;
                    t.surface.ctx.globalAlpha = t.options.selection.rect.opacity;
                    t.surface.ctx.beginPath();
                    t.surface.ctx.rect(rect.sx + 0.5, rect.sy + 0.5, rect.ex - rect.sx, rect.ey - rect.sy);
                    t.surface.ctx.fill();
                    t.surface.ctx.stroke();
                    t.surface.ctx.closePath();
                }
            }

            t.constructor.superclass.render.call(t);
        }

        /**
         * Renders selection
         * @param {cl.Canvas} canvas Canvas
         * @param {array<cl.Shape>} shapes Shapes to draw
         * @private
         */
        function renderSelection(canvas, shapes) {
            var i, l;

            if (t.options.selection.enabled && t.selection.length !== 0) {
                canvas.ctx.strokeStyle = t.options.selection.shape.color;
                canvas.ctx.lineWidth = t.options.selection.shape.width;
                canvas.ctx.globalAlpha = t.options.selection.shape.opacity;
                canvas.ctx.beginPath();
                for (i = 0, l = shapes.length; i < l; i++) shapes[i].renderHover(canvas);
                canvas.ctx.stroke();
                canvas.ctx.closePath();
            }
        }

        /**
         * Resizes layer
         * @param {number} width New width
         * @param {number} height New height
         * @returns {cl.Layer}
         */
        function resize(width, height) {
            if (drag.layer) drag.layer.resize(width, height);

            t.constructor.superclass.resize.call(t, width, height);
            return t;
        }

        /**
         * Destroys selector
         * @memberof cl.Selector.prototype
         */
        function destroy() {
            if (drag.layer) drag.layer.destroy();
            click.up = null;
            click.down = null;
            t.hover = null;
            t.options = null;
            drag.layer = null;
            t.selection = [];
            t.constructor.superclass.destroy.call(t);
        }

        /**
         * Shows hand cursor
         * @private
         */
        function showHand() {
            t.chart.setCursor("pointer");
        }

        /**
         * Hides hand cursor
         * @private
         */
        function resetCursor() {
            t.chart.setCursor();
        }

    }
    cl.Utils.extend(Selector, cl.Layer);

    /**
     * Number of pixels indicates mouse movement before drag actually start
     * @memberof cl.Selector
     * @type {number}
     * @default 3
     */
    Selector.DRAG_THRESOLD = 3;

    return Selector;

})();

cl.Shape = (function() {
    'use strict';

    /**
     * Represent base shape class. This is base class for all displayable objects, like bubbles, polygons, etc.
     * @param {object} parent Parent shape manager
     * @param {object} props shape settings
     * @param {object} props.id Shape id
     * @param {string} [props.cursor] Change cursor to specified when shape is hovered
     * @param {object} [props.x=0] Shape X coordinate
     * @param {object} [props.y=0] Shape Y coordinate
     * @param {object} [props.color=cl.Consts.COLOR_RED] Shape color
     * @param {object} [props.border=1] Shape border width
     * @param {object} [props.opacity=0.3] Shape opacity
     * @param {array} [props.lineDash=[]] Shape line dash. Example: [2, 2]
     * @param {array} [props.links=[]] Array of linked shapes id's
     * @param {boolean} [props.draggable=true] Is shape draggable
     * @param {object} [props.track] Shape track. Can be displayed while shape is animating
     * @param {boolean} [props.track.enabled=false] Enabled or not
     * @param {number} [props.track.width=1] Line width
     * @param {string} [props.track.color=cl.Consts.COLOR_GREEN] Line color
     * @param {number} [props.track.opacity=0.4] Line opacity
     * @param {object} [props.hover] Hover style
     * @param {boolean} [props.hover.enabled=true] Is hover enabled
     * @param {number} [props.hover.border] Hover border size
     * @param {string} [props.hover.color] Hover color
     * @param {number} [props.hover.opacity] Hover opacity
     * @param {number} [props.hover.offset] Hover offset
     *
     * @property {object} props Shape properties. Same as "props" in constructor
     * @property {cl.Shape} props.owner Owner of properties
     * @property {string} type Shape type
     * @constructor
     * @memberof cl
     **/
    function Shape(parent, props) {
        var t = this;
        if (!parent) throw new Error(cl.Lang.get("errShapeNoParam", "parent"));
        // Private
        var opt = props || {};

        // Properties
        t.parent = parent;
        t.type = "base";
        t.isAnimating = false;
        t.animProps = null;

        // Private
        t._isDragged = false;
        // TODO: make tween class
        t.tween = null;
        t.props = {
            owner: t,
            id: undefined,
            x: 0,
            y: 0,
            color: cl.Consts.COLOR_RED,
            borderColor: null,
            border: 1,
            opacity: 0.3,
            lineDash: null,
            links: [],
            draggable: true,
            track: {
                enabled: false,
                width: 1,
                color: cl.Consts.COLOR_GREEN,
                opacity: 0.4,
                startSize: 2,
                endSize: 4
            },
            hover: null
        };
        cl.Utils.merge(t.props, props);

        if (t.props.color) t.props.color = cl.Color.fromString(t.props.color);
        if (t.props.borderColor) t.props.borderColor = cl.Color.fromString(t.props.borderColor); else t.props.borderColor = cl.Utils.colorLuminance(t.props.color, -0.2);

        // Dont create shapes without id
        if (t.props.id === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "id"));
    }

    /**
     * Sets shape hover style
     */
    Shape.prototype.setHoverStyle = function(h) {
        cl.Utils.merge(this.props.hover, h);
    };

    /**
     * Returns shape hover style
     * @returns {object} Hover style
     */
    Shape.prototype.getHoverStyle = function() {
        return cl.Utils.merge({}, this.props.hover);
    };

    /**
     * Returns shape area in pixels. Function used in shape selection to determine smallest shape
     * @returns {number} Shape area
     */
    Shape.prototype.getPixelArea = function() {

    };

    /**
     * Returns X coordinate of shape center
     * @returns {number} X coordinate in axis space
     */
    Shape.prototype.getCenterX = function() {
        return this.props.x;
    };

    /**
     * Returns Y coordinate of shape center
     * @returns {number} Y coordinate in axis space
     */
    Shape.prototype.getCenterY = function() {
        return this.props.y;
    };

    /**
     * Used to update shape position while shape dragged
     * @param {number} deltaX X coordinate changes
     * @param {number} deltaY Y coordinate changes
     */
    Shape.prototype.processDrag = function(deltaX, deltaY) {
        this.props.x += deltaX;
        this.props.y += deltaY;
    };

    /**
     * Returns shape bounds in screen space
     * @returns {{x: number, y: number, w: number, h: number}} Shape bounds
     */
    Shape.prototype.getBounds = function() {

    };

    /**
     * Checks if shape intersecting rectangle
     * @param {number} rx X coordinate in pixels of rectangle center
     * @param {number} ry Y coordinate in pixels of rectangle center
     * @param {number} hw Half width
     * @param {number} hh Half height
     * @returns {boolean} Intersecting or not
     */
    Shape.prototype.hitTestRect = function(rx, ry, hw, hh) {

    };

    /**
     * Check if point inside shape
     * @param {number} x X coordinate in pixels
     * @param {number} y Y coordinate in pixels
     * @returns {boolean} Inside or not
     */
    Shape.prototype.hitTest = function(x, y) {

    };

    /**
     * Link shape to other shapes
     * @param {array} ids Array with id's
     */
    Shape.prototype.link = function(ids) {
        var t = this;
        var changed = false;
        ids.forEach(function(v){
            if (t.props.links.indexOf(v) === -1) {
                var obj = t.parent.get(v);
                if (!obj || obj.props.id === t.props.id) return;
                t.props.links.push(v);
                if (!obj.isAnimating) changed = true;
            }
        });
        // Request redraw static if shape was changed and laying in static
        if (changed) {
            t.parent.updateStatic();
            t.parent.apply();
        }
    };

    /**
     * Unlink shape from other shapes
     * @param {array} ids Array with id's
     */
    Shape.prototype.unlink = function(ids) {
        var t = this;
        var prevLength = t.props.links.length;
        ids.forEach(function(v){
            var idx = t.props.links.indexOf(v);
            if (idx !== -1) t.props.links.splice(idx, 1);
        });
        // Request redraw static if shape was changed and laying in static
        if (prevLength !== t.props.links.length && !t.isAnimating) {
            t.parent.updateStatic();
            t.parent.apply();
        }
    };

    /**
     * Called each frame when animation was updated
     * @this current object "props" with animated properties
     */
    Shape.prototype.onAnimationUpdate = function() {

    };

    /**
     * Starts animation of shape. Will tween "props" to "animProps". "animProps" should be exist
     */
    Shape.prototype.startAnimation = function(animationSpeed) {
        var _this = this;

        // Can't animate without animProps
        if (!this.animProps) return;

        // If shape is not animating, update anim count and request static update
        if (!this.isAnimating) {
            this.parent.animCount++;
            this.parent.updateStatic();
        }
        this.isAnimating = true;

        // Stop tween if already exists
        if (this.tween) {
            this.tween.stop();
            this.tween = null;
        }

        // Calculate colors for animations
        var rgbFrom;
        var rgbTo;
        if (this.animProps.color) {
            rgbFrom = cl.Color.toRGB(this.props.color);
            rgbTo = cl.Color.toRGB(this.animProps.color);
            this.props.color_r = rgbFrom.r;
            this.props.color_g = rgbFrom.g;
            this.props.color_b = rgbFrom.b;
            this.animProps.color_r = rgbTo.r;
            this.animProps.color_g = rgbTo.g;
            this.animProps.color_b = rgbTo.b;
            delete this.animProps.color;
        }
        if (this.animProps.color2) {
            rgbFrom = cl.Color.toRGB(this.props.color2 || this.props.color);
            rgbTo = cl.Color.toRGB(this.animProps.color2);
            this.props.color2_r = rgbFrom.r;
            this.props.color2_g = rgbFrom.g;
            this.props.color2_b = rgbFrom.b;
            this.animProps.color2_r = rgbTo.r;
            this.animProps.color2_g = rgbTo.g;
            this.animProps.color2_b = rgbTo.b;
            delete this.animProps.color2;
        }
        if (this.animProps.borderColor) {
            rgbFrom = cl.Color.toRGB(this.props.borderColor || this.props.color);
            rgbTo = cl.Color.toRGB(this.animProps.borderColor);
            this.props.borderColor_r = rgbFrom.r;
            this.props.borderColor_g = rgbFrom.g;
            this.props.borderColor_b = rgbFrom.b;
            this.animProps.borderColor_r = rgbTo.r;
            this.animProps.borderColor_g = rgbTo.g;
            this.animProps.borderColor_b = rgbTo.b;
            delete this.animProps.borderColor;
        }
        // Create tween for animation
        this.tween = new TWEEN.Tween(this.props)
            .to(this.animProps, animationSpeed || cl.ShapeManager.ANIMATION_SPEED)
            .easing(TWEEN.Easing.Quadratic.Out)
            .delay(cl.ShapeManager.ANIMATION_DELAY)
            .onUpdate(function () {
                _this.onAnimationUpdate.call(this);
                var r, g, b;
                if (this.color_r !== undefined) {
                    r = Math.floor(this.color_r);
                    g = Math.floor(this.color_g);
                    b = Math.floor(this.color_b);
                    if (r < 0) r = 0;
                    if (g < 0) g = 0;
                    if (b < 0) b = 0;
                    if (r > 255) r = 255;
                    if (g > 255) g = 255;
                    if (b > 255) b = 255;
                    this.color = cl.Color.toHex(r, g, b);
                }
                if (this.color2_r !== undefined) {
                    r = Math.floor(this.color2_r);
                    g = Math.floor(this.color2_g);
                    b = Math.floor(this.color2_b);
                    if (r < 0) r = 0;
                    if (g < 0) g = 0;
                    if (b < 0) b = 0;
                    if (r > 255) r = 255;
                    if (g > 255) g = 255;
                    if (b > 255) b = 255;
                    this.color2 = cl.Color.toHex(r, g, b);
                }
                if (this.borderColor_r !== undefined) {
                    r = Math.floor(this.borderColor_r);
                    g = Math.floor(this.borderColor_g);
                    b = Math.floor(this.borderColor_b);
                    if (r < 0) r = 0;
                    if (g < 0) g = 0;
                    if (b < 0) b = 0;
                    if (r > 255) r = 255;
                    if (g > 255) g = 255;
                    if (b > 255) b = 255;
                    this.borderColor = cl.Color.toHex(r, g, b);
                }
            })
            .onComplete(function () {
                // Stop animation, but don't stop tween inside onComplete(this can cause bugs)
                this.owner.stopAnimation(true);
            })
            .start();
    };

    /**
     * Returns shape id
     * @returns {number} Id
     */
    Shape.prototype.getId = function() {
        return this.props.id;
    };

    /**
     * Updates shape properties
     * @param {object} newProps New properties
     * @param {boolean} [animate=false] Animate properties change
     * @param {number} [animationSpeed=cl.ShapeManager.ANIMATION_SPEED] Animation speed in ms
     * @returns {boolean} Is shape changed or not
     */
    Shape.prototype.setProps = function(newProps, animate, animationSpeed) {
        if (this._isDragged) return false;
        // Get animation properties
        var result = this.calcAnimProps(newProps);
        if (result) {
            // Check max animated items and don't start animation if full
            if (!this.isAnimating) {
                if (animate && this.parent.animCount >= cl.ShapeManager.MAX_ANIMATED_ITEMS) animate = false;
            }
            if (!animate) {
                // If no animation, set all properties immediately
                cl.Utils.merge(this.props, this.animProps, ["id", "owner"]);
                // If shape was in static layer, update it. No need to update animated shape, because it will update every frame
                if (!this.isAnimating) this.parent.updateStatic();
            } else this.startAnimation(animationSpeed);

            // Say to parent that something is changed
            this.parent.apply();

            return true;
        }
        return false;
    };

    /**
     * Returns shape properties
     * @returns {object} Shape properties
     */
    Shape.prototype.getProps = function() {
        return cl.Utils.merge({}, this.props, ["owner"]);
    };

    /**
     * Calculate changed properties for animation
     * @param {object} newProps New properties
     * @returns {boolean} Is shape changed or not
     */
    Shape.prototype.calcAnimProps = function(newProps) {
        this.animProps = {};
        this.animProps.owner = this;
        if (this._isDragged) return false;
        if (newProps.x !== undefined && newProps.x !== this.props.x) {
            this.animProps.x = newProps.x;
            this.animProps.changed = true;
        }
        if (newProps.y !== undefined && newProps.y !== this.props.y) {
            this.animProps.y = newProps.y;
            this.animProps.changed = true;
        }
        if (newProps.color !== undefined && newProps.color !== this.props.color) {
            this.animProps.color = newProps.color;
            this.animProps.changed = true;
        }
        if (newProps.borderColor !== undefined && newProps.borderColor !== this.props.borderColor) {
            this.animProps.borderColor = newProps.borderColor;
            this.animProps.changed = true;
        }
        if (newProps.border !== undefined && newProps.border !== this.props.border) {
            this.animProps.border = newProps.border;
            this.animProps.changed = true;
        }
        if (newProps.opacity !== undefined &&  newProps.opacity !== this.props.opacity) {
            this.animProps.opacity = newProps.opacity;
            this.animProps.changed = true;
        }

        return this.animProps.changed;
    };

    /**
     * Apply shape changes
     */
    Shape.prototype.apply = function() {
        this.parent.apply();
    };

    /**
     * Renders shape on canvas
     * @param {cl.Canvas} canvas
     * @param {cl.Chart} chart
     */
    Shape.prototype.render = function(canvas) {

    };

    /**
     * Renders shape hover on canvas
     * @param {cl.Canvas} canvas
     * @param {number} [offset=0] Hover offset
     * @param {cl.Chart} chart
     */
    Shape.prototype.renderHover = function(canvas, offset) {

    };

    /**
     * Stops animation
     * @param {boolean} [dontStopTween=false] Don't stop tween. Not usable in general cases. Used only if method called from onComplete tween event
     */
    Shape.prototype.stopAnimation = function(dontStopTween) {
        // Set all props to animProps, because this is end of animation
        if (this.tween && this.animProps) cl.Utils.merge(this.props, this.animProps, ["id", "owner"]);

        if (this.tween && !dontStopTween) this.tween.stop();
        this.tween = null;
        this.animProps = null;
        if (this.isAnimating) this.parent.animCount--;
    };

    /**
     * Destroys shape
     */
    Shape.prototype.destroy = function() {
        this.stopAnimation();
        this.props.owner = null;
        this.props = null;
        this.parent = null;
    };

    return Shape;

})();
cl.ShapeManager = (function() {
    'use strict';

    /**
     * Represent shapes manager class. Stores bubbles, polys and other chart shapes.
     * @extends cl.Layer
     * @param {cl.Chart} chart Parent chart
     * @param {object} [options] Settings
     * @param {object} [options.links] Links settings
     * @param {number} [options.links.width=1] Line width
     * @param {string} [options.links.color=cl.Consts.COLOR_BLACK] Link color
     * @param {number} [options.links.opacity=0.5] Link opacity
     * @param {object} [options.centers] Shapes center display settings
     * @param {boolean} [options.centers.visible=false] Visible or not
     * @param {number} [options.centers.width=1] Line width
     * @param {number} [options.centers.size=3] Radius
     * @param {number} [options.centers.opacity=0.3] Opacity
     * @param {string} [options.centers.color=cl.Consts.COLOR_BLACK] Line color
     *
     * @memberof cl
     * @constructor
     *
     * @property {cl.Chart} chart Parent chart
     * @property {array} shapes Shapes
     * @property {number} count Shapes count
     * @property {boolean} isAnimating True if any shapes is in animation state
     * @property {number} animCount Count of shapes currently animated
     */
    function ShapeManager(chart, options) {
        var t = this;
        cl.Layer.call(t, chart);
        // Private
        var _shouldRedrawStatic = false; // Indicates that some object moved to(from) static layer. So layer should be redrawn
        var _animCount = 0; // Counts objects that currently is animating
        var hash = {}; // Ids hash for fast access

        // Public methods
        t.add = add;
        t.get = get;
        t.clear = clear;
        t.remove = remove;
        t.render = render;
        t.resize = resize;
        t.destroy = destroy;
        t.updateStatic = updateStatic;
        t.showCenters = showCenters;
        t.hideCenters = hideCenters;

        // Properties
        t.chart = chart;
        t.shapes = [];
        t.dirtyFlagName = "items";
        t.static = new cl.Canvas(chart.width, chart.height);
        t.options = {
            zIndexUsage: false,
            links: {
                width: 1,
                color: cl.Consts.COLOR_BLACK,
                opacity: 0.5
            },
            centers: {
                visible: false,
                width: 1,
                size: 3,
                opacity: 0.3,
                color: cl.Consts.COLOR_BLACK
            }
        };
        cl.Utils.merge(t.options, options || {});

        Object.defineProperties(t, {
            animCount: {
                get: function() { return _animCount; },
                set: function(v) { _animCount = v; if (_animCount === 0) endAnimation(); }
            },
            isAnimating: { get: getAnimating },
            count: { get: function() { return t.shapes.length; } }
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Hides shapes centers
         * @memberof cl.ShapeManager.prototype
         */
        function hideCenters() {
            t.options.centers.visible = false;
            t.updateStatic();
            t.apply();
        }

        /**
         * Shows shapes centers
         * @memberof cl.ShapeManager.prototype
         */
        function showCenters() {
            // TODO: bug. calling this will move all shapes by 1px after redraw!?
            t.options.centers.visible = true;
            t.updateStatic();
            t.apply();
        }

        /**
         * Getter for isAnimating property
         * @memberof cl.ShapeManager.prototype
         * @returns {boolean} Is animating or not
         */
        function getAnimating() {
            return _animCount !== 0;
        }

        function renderCenters(canvas, staticPass) {
            var i, l, x, y;
            if (!t.options.centers.visible) return;
            canvas.setAlpha(t.options.centers.opacity);
            canvas.setLineStyle(t.options.centers.width, t.options.centers.color);
            canvas.ctx.beginPath();
            for (i = 0, l = t.shapes.length; i < l; i++) {
                if (staticPass && t.shapes[i].isAnimating) continue;
                if (!staticPass && !t.shapes[i].isAnimating) continue;
                x = t.chart.toScreenX(t.shapes[i].getCenterX());
                y = t.chart.toScreenY(t.shapes[i].getCenterY());
                canvas.ctx.moveTo(x + t.options.centers.size, y);
                canvas.ctx.arc(x, y, t.options.centers.size, 0, cl.Consts.TWO_PI, false);
            }
            canvas.ctx.stroke();
            canvas.ctx.closePath();
        }

        /**
         * Renders links lines
         * @param {cl.Canvas} canvas Canvas
         * @param {boolean} staticPass Is static pass or not
         * @private
         */
        function renderLinks(canvas, staticPass) {
            var i, k, l, lc;
            // TODO: optimize scree coordinate calculation

            canvas.ctx.lineWidth = t.options.links.width;
            canvas.ctx.strokeStyle = t.options.links.color;
            //canvas.setLineStyle(1, "#000000");
            canvas.setAlpha(t.options.links.opacity);
            canvas.ctx.beginPath();
            //var count = 0;
            for (i = 0, l = t.shapes.length; i < l; i++) {
                var isStatic = !t.shapes[i].isAnimating;
                if (!isStatic && staticPass) continue;
                lc = t.shapes[i].props.links.length;
                if (lc === 0) continue;
                var x = chart.xAxis.toScreen(t.shapes[i].getCenterX());
                var y = chart.yAxis.toScreen(t.shapes[i].getCenterY());
                for (k = 0; k < lc; k++) {
                    if (t.shapes[i].props.links[k] == t.shapes[i].props.id) continue;
                    var obj = t.get(t.shapes[i].props.links[k]);
                    if (!obj) continue;
                    if (obj.isAnimating && staticPass) continue;
                    if (!staticPass && (isStatic && !obj.isAnimating)) continue;
                    var tx = t.chart.xAxis.toScreen(obj.props.x);
                    var ty = t.chart.yAxis.toScreen(obj.props.y);
                    //canvas.drawLine(x, y, tx, ty);
                    canvas.ctx.moveTo(x, y);
                    canvas.ctx.lineTo(tx, ty);
                    //count++;
                }
            }
            canvas.ctx.stroke();
            canvas.ctx.closePath();
            //if (staticPass) console.log("lines in static: ", count);
        }

        function zIndexSorter(a, b) {
            return (a.props.zIndex < b.props.zIndex) ? -1: 1;
        }

        /**
         * Renders all axis on surface
         * @memberof cl.ShapeManager.prototype
         */
        function render() {
            var i, l;
            var items = t.shapes;
            //console.log("render objects")
            //if (t.options.zIndexUsage)
            if (t.options.zIndexUsage === true) {
                // Sort shapes based on zIndex
                items = t.shapes.sort(zIndexSorter);
            }

            if (_shouldRedrawStatic) {
                //console.log("Static redrawn");
                _shouldRedrawStatic = false;
                t.static.resetTransform();
                t.static.clear();
                //var k = 0;
                for (i = 0, l = items.length; i < l; i++) if (!items[i].isAnimating) {
                    items[i].render(t.static, t.chart);
                    //k++;
                }
                renderLinks(t.static, true);
                renderCenters(t.static, true);
                //console.log("objects in static:", k);
            }

            t.surface.resetTransform();
            t.surface.clear();
            t.surface.setAlpha(1);
            t.static.setAlpha(1);
            t.surface.draw(t.static, 0, 0);
            for (i = 0, l = items.length; i < l; i++)  if (items[i].isAnimating) items[i].render(t.surface, t.chart);
            renderLinks(t.surface, false);
            renderCenters(t.surface, false);

            // Render tracks
            for (i = 0, l = items.length; i < l; i++)  if (items[i].isAnimating && items[i].props.track.enabled && items[i].animProps) {
                var x1, y1, x2, y2;
                x1 = t.chart.xAxis.toScreen(items[i].props.x);
                y1 = t.chart.yAxis.toScreen(items[i].props.y);
                x2 = t.chart.xAxis.toScreen(items[i].animProps.x);
                y2 = t.chart.yAxis.toScreen(items[i].animProps.y);
                t.surface.ctx.strokeStyle = items[i].props.track.color;
                t.surface.ctx.lineWidth = items[i].props.track.width;
                t.surface.ctx.beginPath();
                t.surface.ctx.moveTo(x1, y1);
                t.surface.ctx.lineTo(x2, y2);
                t.surface.ctx.stroke();

                if (items[i].props.track.startSize !== 0 && items[i].props.track.endSize !== 0) {
                    t.surface.ctx.fillStyle = items[i].props.track.color;
                    if (items[i].props.track.startSize !== 0)
                        t.surface.ctx.arc(x1, y1, items[i].props.track.startSize, 0, cl.Consts.TWO_PI, false);
                    if (items[i].props.track.endSize !== 0)
                        t.surface.ctx.arc(x2, y2, items[i].props.track.endSize, 0, cl.Consts.TWO_PI, false);
                    t.surface.ctx.fill();
                }
            }
        }

/*
        function rgb2hsv () {
            var rr, gg, bb,
                r = arguments[0] / 255,
                g = arguments[1] / 255,
                b = arguments[2] / 255,
                h, s,
                v = Math.max(r, g, b),
                diff = v - Math.min(r, g, b),
                diffc = function(c){
                    return (v - c) / 6 / diff + 1 / 2;
                };

            if (diff == 0) {
                h = s = 0;
            } else {
                s = diff / v;
                rr = diffc(r);
                gg = diffc(g);
                bb = diffc(b);

                if (r === v) {
                    h = bb - gg;
                }else if (g === v) {
                    h = (1 / 3) + rr - bb;
                }else if (b === v) {
                    h = (2 / 3) + gg - rr;
                }
                if (h < 0) {
                    h += 1;
                }else if (h > 1) {
                    h -= 1;
                }
            }
            return {
                h: Math.round(h),
                s: Math.round(s),
                v: Math.round(v)
            };
        }

        function HSVtoRGB(h, s, v) {
            var r, g, b, i, f, p, q, t;
            if (arguments.length === 1) {
                s = h.s, v = h.v, h = h.h;
            }
            i = Math.floor(h * 6);
            f = h * 6 - i;
            p = v * (1 - s);
            q = v * (1 - f * s);
            t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0: r = v, g = t, b = p; break;
                case 1: r = q, g = v, b = p; break;
                case 2: r = p, g = v, b = t; break;
                case 3: r = p, g = q, b = v; break;
                case 4: r = t, g = p, b = v; break;
                case 5: r = v, g = p, b = q; break;
            }
            return {
                r: Math.round(r * 255),
                g: Math.round(g * 255),
                b: Math.round(b * 255)
            };
        }*/

        /**
         * Adds shapes by defined class
         * @param {object|array} item Shapes to add. Can be single shape or array
         * @param {function} ShapeClass Shape class to create. For example: "cl.Bubble"
         * @param {boolean} [allowAnimation=false] Allow animations on property changes
         * @param {number} [animationSpeed=cl.ShapeManager.ANIMATION_SPEED] Duration of animation in ms
         * @memberof cl.ShapeManager.prototype
         */
        function add(item, ShapeClass, allowAnimation, animationSpeed) {
            var i, l;
            var it;
            var aa = allowAnimation || false;
            if (!ShapeClass) throw new Error(cl.Lang.get("errNoShapeClass"));
            if (!(item instanceof Array)) it = [item];  else it = item;
            var changedItems = [];

            for (i = 0, l = it.length; i < l; i++) {
                if (it[i].id === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "id"));
                var obj = t.get(it[i].id);
                if (obj) {
                    if (obj.constructor !== ShapeClass) throw new Error(cl.Lang.get("errShapeType"));
                    var changed = obj.setProps(it[i], aa, animationSpeed);
                    if (changed) {
                        changedItems.push(obj);
                        if (!obj.isAnimating) t.updateStatic();
                    }
                } else {
                    var shape = new ShapeClass(t, it[i]);
                    t.shapes.push(shape);
                    hash[it[i].id] = shape;
                    t.updateStatic();
                }
            }
            if (changedItems.length !== 0 && aa) {
                // Animate maximum allowed shapes
                l = changedItems.length;
                if (l > ShapeManager.MAX_ANIMATED_ITEMS) l = ShapeManager.MAX_ANIMATED_ITEMS;
                for (i = 0; i < l; i++) if (changedItems[i].animProps) {
                    changedItems[i].startAnimation(animationSpeed);
                }
                // Other shapes must change properties immediately
                for (i = ShapeManager.MAX_ANIMATED_ITEMS, l = changedItems.length; i < l; i++) {
                    cl.Utils.merge(changedItems[i].props, changedItems[i].animProps);
                }
            } else {
                t.updateStatic();
            }
            changedItems = null;

            t.apply();
        }

        /**
         * Called after all animations are ended (animCount == 0). Used to move all animated items back to static layer
         * @private
         */
        function endAnimation() {
            var i, l;
            var found = false;
            var itemsMovOnTop = [];
            for (i = 0, l = t.shapes.length; i < l; i++) if (t.shapes[i].isAnimating && t.shapes[i].tween === null) {
                t.shapes[i].isAnimating = false;
                found = true;
                itemsMovOnTop.push(t.shapes[i]);
            }
            // Move animated shapes on top
            for (i = 0, l = itemsMovOnTop.length; i < l; i++) {
                var idx = t.shapes.indexOf( itemsMovOnTop[i]);
                t.shapes.splice(idx, 1);
            }
            for (i = 0, l = itemsMovOnTop.length; i < l; i++) {
                t.shapes.push(itemsMovOnTop[i]);
            }
            t.updateStatic();
            t.apply();
        }

        /**
         * Returns item with specified id. Will return first item with id. Returns undefined if id was not found
         * @param {number} id Id of item
         * @memberof cl.ShapeManager.prototype
         * @returns {object|undefined}
         */
        function get(id) {
            var i, l;
            if (hash[id]) return hash[id];
        }

        /**
         * Removes item from shapes array
         * @param {object} item Shape to remove
         * @private
         */
        function removeItem(item) {
            if (!item) return;
            // Find item index
            var idx = t.shapes.indexOf(item);
            if (idx === -1 || !t.shapes[idx]) return;

            // Clear ids hash
            delete hash[item.props.id];

            // Remove item from shapes array
            t.shapes.splice(idx, 1);
            t.apply();

            // Remove item from selection
            idx = t.chart.selector.selection.indexOf(item);
            if (idx !== -1) {
                t.chart.selector.selection.splice(idx, 1);
                t.chart.selector.apply();
            }

            // Destroy item
            item.destroy();
        }

        /**
         * Removes all shapes
         * @memberof cl.ShapeManager.prototype
         */
        function clear() {
            // Remove shapes. Destroy would be called in remove function
            while (t.count !== 0) t.remove(t.shapes[0]);

            // Remove shapes from selection
            t.chart.selector.selection = [];
            t.chart.selector.apply();

            // Update static and redraw
            t.updateStatic();
            t.apply();
        }

        /**
         * Removes item
         * @param {object|number} item Shape itself or item id
         * @memberof cl.ShapeManager.prototype
         */
        function remove(item) {
            switch (typeof item) {
                case "object": {
                    removeItem(item);
                    break;
                }
                default: {
                    removeItem(get(item));
                    break;
                }
            }
        }

        /**
         * Destroys shape manager
         * @memberof cl.ShapeManager.prototype
         */
        function destroy() {
            var i, l;
            for (i = 0, l = t.shapes.length; i < l; i++) t.shapes[i].destroy();

            t.shapes = null;
            t.static.destroy();

            hash = null;

            t.constructor.superclass.destroy.call(t);
        }

        /**
         * Resizes layer
         * @param {number} width New width
         * @param {number} height New height
         * @memberof cl.ShapeManager.prototype
         * @returns {cl.ShapeManager}
         */
        function resize(width, height) {
            _shouldRedrawStatic = true;
            t.static.resize(width, height);

            t.constructor.superclass.resize.call(t, width, height);
            return t;
        }

        /**
         * Request for static update. Will update static layer on next redraw
         * @memberof cl.ShapeManager.prototype
         */
        function updateStatic() {
            _shouldRedrawStatic = true;
        }
    }

    cl.Utils.extend(ShapeManager, cl.Layer);

    /**
     * Maximum of animated items at same time. Needed due canvas rendering limitations for smooth animations
     * @memberof cl.ShapeManager
     * @type {number}
     * @default 500
     */
    ShapeManager.MAX_ANIMATED_ITEMS = 500;
    /**
     * Default animation delay for all animations. Needed for smooth animations, because before animation start, static layer should be redrawn and this can take a bit of time
     * @memberof cl.ShapeManager
     * @type {number}
     * @default 100
     */
    ShapeManager.ANIMATION_DELAY = 100;
    /**
     * Default animation duration in ms
     * @memberof cl.ShapeManager
     * @type {number}
     * @default 400
     */
    ShapeManager.ANIMATION_SPEED = 400;

    return ShapeManager;
})();

cl.Bubble = (function() {
    'use strict';

    /**
     * Represent bubble shape class
     * @extends cl.Shape
     * @param {object} parent Parent shape manager
     * @param {object} props shape settings
     * @param {object} props.id Shape id
     * @param {string} [props.cursor] Change cursor to specified when shape is hovered
     * @param {object} [props.x=0] Shape X coordinate
     * @param {object} [props.y=0] Shape Y coordinate
     * @param {object} props.size Bubble radius in pixels
     * @param {object} [props.color=cl.Consts.COLOR_RED] Shape color
     * @param {object} [props.borderColor=props.color] Shape border color
     * @param {object} [props.border=1] Shape border width
     * @param {object} [props.opacity=0.3] Shape opacity
     * @param {array} [props.lineDash=[]] Shape line dash. Example: [2, 2]
     * @param {array} [props.links=[]] Array of linked shapes id's
     * @param {boolean} [props.draggable=true] Is shape draggable
     * @param {object} [props.track] Shape track. Can be displayed while shape is animating
     * @param {boolean} [props.track.enabled=false] Enabled or not
     * @param {number} [props.track.width=1] Line width
     * @param {string} [props.track.color=cl.Consts.COLOR_GREEN] Line color
     * @param {number} [props.track.opacity=0.4] Line opacity
     * @param {object} [props.hover] Hover style
     * @param {boolean} [props.hover.enabled=true] Is hover enabled
     * @param {number} [props.hover.border] Hover border size
     * @param {string} [props.hover.color] Hover color
     * @param {number} [props.hover.opacity] Hover opacity
     * @param {number} [props.hover.offset] Hover offset
     *
     * @constructor
     * @memberof cl
     **/
    function Bubble(parent, props) {
        var t = this;
        cl.Shape.call(t, parent, props);

        // Public methods
        t.type = "bubble";
        t.parent = parent;
        t.render = render;
        t.destroy = destroy;
        t.hitTest = hitTest;
        t.getBounds = getBounds;
        t.hitTestRect = hitTestRect;
        t.renderHover = renderHover;
        t.getPixelArea = getPixelArea;
        t.calcAnimProps = calcAnimProps;

        // Private
        var opt = props || {};
        if (t.props.size === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "size"));

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Returns shape area in pixels
         * @returns {number} Shape area
         * @memberof cl.Bubble.prototype
         */
        function getPixelArea() {
            return Math.PI * t.props.size * t.props.size;
        }

        /**
         * Returns shape bounds
         * @returns {{x: number, y: number, w: number, h: number}} Shape bounds
         * @memberof cl.Bubble.prototype
         */
        function getBounds() {
            return {
                x: t.parent.chart.xAxis.toScreen(t.props.x) - t.props.size,
                y: t.parent.chart.yAxis.toScreen(t.props.y) - t.props.size,
                w: t.props.size * 2,
                h: t.props.size * 2
            };
        }

        /**
         * Checks if shape intersecting rectangle
         * @param {number} rx X coordinate in pixels of rectangle center
         * @param {number} ry Y coordinate in pixels of rectangle center
         * @param {number} hw Half width
         * @param {number} hh Half height
         * @returns {boolean} Intersecting or not
         * @memberof cl.Bubble.prototype
         */
        function hitTestRect(rx, ry, hw, hh) {
            var cx = t.parent.chart.xAxis.toScreen(t.props.x);
            var cy = t.parent.chart.yAxis.toScreen(t.props.y);
            var cdx = Math.abs(cx - rx);
            var cdy = Math.abs(cy - ry);
            var r = t.props.size;

            if (cdx > hw + r) { return false; }
            if (cdy > hh + r) { return false; }

            if (cdx <= hw ) { return true; }
            if (cdy <= hh ) { return true; }

            var cdsq = (cdx - hw) * (cdx - hw) + (cdy - hh) * (cdy - hh);

            return cdsq <= r * r;
        }

        /**
         * Check if point inside shape
         * @param {number} x X coordinate in pixels
         * @param {number} y Y coordinate in pixels
         * @returns {boolean} Intersect or not
         * @memberof cl.Bubble.prototype
         */
        function hitTest(x, y) {
            var bx = t.parent.chart.xAxis.toScreen(t.props.x);
            var by = t.parent.chart.yAxis.toScreen(t.props.y);
            return (x - bx) * (x - bx) + (y - by) * (y - by) <= t.props.size * t.props.size;
        }

        /**
         * Updates shape properties
         * @param {object} newProps New properties
         * @returns {boolean} Is shape changed or not
         * @memberof cl.Bubble.prototype
         */
        function calcAnimProps(newProps) {
            t.constructor.superclass.calcAnimProps.call(t, newProps);

            if (newProps.size !== undefined && newProps.size !== t.props.size) {
                t.animProps.size = newProps.size;
                t.animProps.changed = true;
            }
            return t.animProps.changed;
        }

        /**
         * Renders bubble on canvas
         * @param {cl.Canvas} canvas
         * @memberof cl.Bubble.prototype
         */
        function render(canvas) {
            if (t._isDragged) return;
            var chart = t.parent.chart;
            if (t.props.size >= 0) {
                canvas.setAlpha(t.props.opacity);
                canvas.setFillColor(t.props.color);
                if (t.props.border) canvas.setLineStyle(t.props.border, t.props.borderColor, true);
                if (t.props.lineDash) canvas.setLineDash(t.props.lineDash);
                canvas.ctx.beginPath();
                canvas.ctx.arc(chart.xAxis.toScreen(t.props.x), chart.yAxis.toScreen(t.props.y), t.props.size, 0, cl.Consts.TWO_PI, false);
                canvas.ctx.fill();
                if (t.props.border) canvas.ctx.stroke();
                canvas.ctx.closePath();
                if (t.props.lineDash) canvas.setLineDash([]);
            }

            t.constructor.superclass.render.call(t, canvas);
        }

        /**
         * Renders bubble hover on canvas
         * @param {cl.Canvas} canvas
         * @param {number} [offset=0] Hover offset
         * @memberof cl.Bubble.prototype
         */
        function renderHover(canvas, offset) {
            if (t._isDragged) return;
            offset = (offset || 0) + (t.props.border || 0) / 2;
            var chart = t.parent.chart;
            if (t.props.size >= 0) {
                var x = chart.xAxis.toScreen(t.props.x);
                var y = chart.yAxis.toScreen(t.props.y);
                canvas.ctx.moveTo(x + t.props.size + offset, y);
                canvas.ctx.arc(x, y, t.props.size + offset, 0, cl.Consts.TWO_PI, false);
            }

            t.constructor.superclass.renderHover.call(t, canvas);
        }


        /**
         * Destroys bubble
         * @memberof cl.Bubble.prototype
         */
        function destroy() {
            t.constructor.superclass.destroy.call(t);
        }
    }

    cl.Utils.extend(Bubble, cl.Shape);


    return Bubble;

})();
cl.Centroid = (function() {
    'use strict';

    /**
     * Represent centroid shape class.
     * @extends cl.Bubble
     * @param {object} parent Parent shape manager
     * @param {object} props shape settings
     * @param {object} props.id Shape id
     * @param {string} [props.cursor] Change cursor to specified when shape is hovered
     * @param {object} [props.x=0] Shape X coordinate
     * @param {object} [props.y=0] Shape Y coordinate
     * @param {object} props.size Bubble radius in pixels
     * @param {object} [props.color=cl.Consts.COLOR_RED] Shape color
     * @param {object} [props.border=1] Shape border width
     * @param {object} [props.opacity=0.3] Shape opacity
     * @param {array} [props.lineDash=[]] Shape line dash. Example: [2, 2]
     * @param {array} [props.links=[]] Array of linked shapes id's
     * @param {boolean} [props.draggable=true] Is shape draggable
     * @param {object} [props.track] Shape track. Can be displayed while shape is animating
     * @param {boolean} [props.track.enabled=false] Enabled or not
     * @param {number} [props.track.width=1] Line width
     * @param {string} [props.track.color=cl.Consts.COLOR_GREEN] Line color
     * @param {number} [props.track.opacity=0.4] Line opacity
     * @param {object} [props.hover] Hover style
     * @param {boolean} [props.hover.enabled=true] Is hover enabled
     * @param {number} [props.hover.border] Hover border size
     * @param {string} [props.hover.color] Hover color
     * @param {number} [props.hover.opacity] Hover opacity
     * @param {number} [props.hover.offset] Hover offset
     *
     * @constructor
     * @memberof cl
     **/
    function Centroid(parent, props) {
        var t = this;
        cl.Bubble.call(t, parent, props);

        // Public methods
        t.type = "centroid";

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }

    cl.Utils.extend(Centroid, cl.Bubble);


    return Centroid;

})();
cl.Rect = (function() {
    'use strict';

    /**
     * Represent rectangle shape class
     * @extends cl.Shape
     * @param {object} parent Parent shape manager
     * @param {object} props shape settings
     * @param {object} props.id Shape id
     * @param {string} [props.cursor] Change cursor to specified when shape is hovered
     * @param {object} [props.x=0] First corner X coordinate
     * @param {object} [props.y=0] First corner Y coordinate
     * @param {number} props.x2 Second corner X coordinate
     * @param {number} props.y2 Second corner Y coordinate
     * @param {string} [props.color=cl.Consts.COLOR_RED] First corner color
     * @param {object} [props.borderColor=props.color] Shape border color
     * @param {string} [props.color2] Second corner color
     * @param {object} [props.border=1] Shape border width
     * @param {number} [props.borderRadius=0] Border radius
     * @param {object} [props.opacity=0.3] Shape opacity
     * @param {array} [props.lineDash=[]] Shape line dash. Example: [2, 2]
     * @param {array} [props.links=[]] Array of linked shapes id's
     * @param {boolean} [props.draggable=true] Is shape draggable
     * @param {object} [props.track] Shape track. Can be displayed while shape is animating
     * @param {boolean} [props.track.enabled=false] Enabled or not
     * @param {number} [props.track.width=1] Line width
     * @param {string} [props.track.color=cl.Consts.COLOR_GREEN] Line color
     * @param {number} [props.track.opacity=0.4] Line opacity
     * @param {object} [props.hover] Hover style
     * @param {boolean} [props.hover.enabled=true] Is hover enabled
     * @param {number} [props.hover.border] Hover border size
     * @param {string} [props.hover.color] Hover color
     * @param {number} [props.hover.opacity] Hover opacity
     * @param {number} [props.hover.offset] Hover offset
     *
     * @constructor
     * @memberof cl
     **/
    function Rect(parent, props) {
        var t = this;
        cl.Shape.call(t, parent, props);

        // Public methods
        t.type = "rect";
        t.parent = parent;
        t.render = render;
        t.destroy = destroy;
        t.hitTest = hitTest;
        t.getBounds = getBounds;
        t.getCenterX = getCenterX;
        t.getCenterY = getCenterY;
        t.hitTestRect = hitTestRect;
        t.renderHover = renderHover;
        t.processDrag = processDrag;
        t.getPixelArea = getPixelArea;
        t.calcAnimProps = calcAnimProps;

        // Private
        var opt = props || {};
        opt.borderRadius = opt.borderRadius || 0;
        if (t.props.color2) t.props.color2 = cl.Color.fromString(t.props.color2);

        if (t.props.x2 === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "x2"));
        if (t.props.y2 === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "y2"));

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Returns shape area in pixels
         * @returns {number} Shape area
         * @memberof cl.Rect.prototype
         */
        function getPixelArea() {
            var bounds = t.getBounds();
            return t.w * t.h;
        }

        /**
         * Returns X coordinate of shape center
         * @returns {number} X coordinate in axis space
         * @memberof cl.Rect.prototype
         */
        function getCenterX() {
            var x1, x2;
            // Find right coordinates order: (x1, y1) -> should be top left corner
            if (t.props.x < t.props.x2) { x1 = t.props.x; x2 = t.props.x2; } else { x1 = t.props.x2; x2 = t.props.x; }
            return (x1 + Math.abs(x2 - x1) / 2);
        }

        /**
         * Returns Y coordinate of shape center
         * @returns {number} Y coordinate in axis space
         * @memberof cl.Rect.prototype
         */
        function getCenterY() {
            var y1, y2;
            // Find right coordinates order: (x1, y1) -> should be top left corner
            if (t.props.y < t.props.y2) { y1 = t.props.y; y2 =  t.props.y2; } else { y1 = t.props.y2; y2 = t.props.y; }
            return (y1 + Math.abs(y2 - y1) / 2);
        }

        /**
         * Used to update shape position while shape dragged
         * @param {number} deltaX X coordinate changes
         * @param {number} deltaY Y coordinate changes
         * @memberof cl.Rect.prototype
         */
        function processDrag(deltaX, deltaY) {
            t.props.x2 += deltaX;
            t.props.y2 += deltaY;
            t.constructor.superclass.processDrag.call(t, deltaX, deltaY);
        }

        /**
         * Returns shape bounds
         * @returns {{x: number, y: number, w: number, h: number}} Shape bounds
         * @memberof cl.Rect.prototype
         */
        function getBounds() {
            var x1, y1, x2, y2, sx, sy, ex, ey;
            x1 = t.parent.chart.xAxis.toScreen(t.props.x);
            y1 = t.parent.chart.yAxis.toScreen(t.props.y);
            x2 = t.parent.chart.xAxis.toScreen(t.props.x2);
            y2 = t.parent.chart.yAxis.toScreen(t.props.y2);
            sx = Math.min(x1, x2);
            sy = Math.min(y1, y2);
            ex = Math.max(x1, x2);
            ey = Math.max(y1, y2);
            return {
                x: sx,
                y: sy,
                w: ex - sx,
                h: ey - sy
            };
        }

        /**
         * Checks if shape intersecting rectangle
         * @param {number} rx X coordinate in pixels of rectangle center
         * @param {number} ry Y coordinate in pixels of rectangle center
         * @param {number} hw Half width
         * @param {number} hh Half height
         * @returns {boolean} Intersecting or not
         * @memberof cl.Rect.prototype
         */
        function hitTestRect(rx, ry, hw, hh) {
            var x1, y1, x2, y2, sx, sy, ex, ey;
            x1 = t.parent.chart.xAxis.toScreen(t.props.x);
            y1 = t.parent.chart.yAxis.toScreen(t.props.y);
            x2 = t.parent.chart.xAxis.toScreen(t.props.x2);
            y2 = t.parent.chart.yAxis.toScreen(t.props.y2);
            sx = Math.min(x1, x2);
            sy = Math.min(y1, y2);
            ex = Math.max(x1, x2);
            ey = Math.max(y1, y2);

            // This shape half width and height
            var thw = (ex - sx) / 2;
            var thh = (ey - sy) / 2;

            // This shape center
            var cx = sx + thw;
            var cy = sy + thh;

            var cdx = Math.abs(cx - rx);
            var cdy = Math.abs(cy - ry);

            return ((cdx <= thw + hw) && (cdy <= thh + hh));
        }

        /**
         * Check if point inside shape
         * @param {number} x X coordinate in pixels
         * @param {number} y Y coordinate in pixels
         * @returns {boolean} Inside or not
         * @memberof cl.Rect.prototype
         */
        function hitTest(x, y) {
            var x1, y1, x2, y2, sx, sy, ex, ey;
            x1 = t.parent.chart.xAxis.toScreen(t.props.x);
            y1 = t.parent.chart.yAxis.toScreen(t.props.y);
            x2 = t.parent.chart.xAxis.toScreen(t.props.x2);
            y2 = t.parent.chart.yAxis.toScreen(t.props.y2);
            sx = Math.min(x1, x2);
            sy = Math.min(y1, y2);
            ex = Math.max(x1, x2);
            ey = Math.max(y1, y2);

            return ((x >= sx) && (x <= ex) && (y >= sy) && (y <= ey));
        }

        /**
         * Updates shape properties
         * @param {object} newProps New properties
         * @returns {boolean} Is shape changed or not
         * @memberof cl.Rect.prototype
         */
        function calcAnimProps(newProps) {
            t.constructor.superclass.calcAnimProps.call(t, newProps);

            if (newProps.x2 !== undefined && newProps.x2 !== t.props.x2) {
                t.animProps.x2 = newProps.x2;
                t.animProps.changed = true;
            }
            if (newProps.y2 !== undefined && newProps.y2 !== t.props.y2) {
                t.animProps.y2 = newProps.y2;
                t.animProps.changed = true;
            }
            if (newProps.borderRadius !== undefined && newProps.borderRadius !== t.props.borderRadius) {
                t.animProps.borderRadius = newProps.borderRadius;
                t.animProps.changed = true;
            }
            if (newProps.color2 !== undefined && newProps.color2 !== t.props.color2) {
                t.animProps.color2 = newProps.color2;
                t.animProps.changed = true;
            }
            return t.animProps.changed;
        }

        /**
         * Renders rect on canvas
         * @param {cl.Canvas} canvas
         * @memberof cl.Rect.prototype
         */
        function render(canvas) {
            if (t._isDragged) return;
            var chart = t.parent.chart;

            // Calculate rectangle coordinates
            var x1, y1, x2, y2;
            x1 = chart.xAxis.toScreen(t.props.x);
            y1 = chart.yAxis.toScreen(t.props.y);
            x2 = chart.xAxis.toScreen(t.props.x2);
            y2 = chart.yAxis.toScreen(t.props.y2);

            canvas.setAlpha(t.props.opacity);
            if (!t.props.color2 || t.props.color === t.props.color2) canvas.setFillColor(t.props.color); else {
                // Calculate gradient
                var sx, sy, ex, ey;
                sx = Math.min(x1, x2);
                sy = Math.min(y1, y2);
                ex = Math.max(x1, x2);
                ey = Math.max(y1, y2);

                var gradient = canvas.ctx.createLinearGradient(sx, sy, ex, ey);
                gradient.addColorStop(0, t.props.color);
                gradient.addColorStop(1, t.props.color2);
                canvas.ctx.fillStyle = gradient;
            }
            if (t.props.border) canvas.setLineStyle(t.props.border, t.props.borderColor);
            if (t.props.lineDash) canvas.setLineDash(t.props.lineDash);
            canvas.ctx.beginPath();
            canvas.drawRect(x1, y1, x2, y2, t.props.borderRadius);
            canvas.ctx.fill();
            if (t.props.border) canvas.ctx.stroke();
            canvas.ctx.closePath();
            if (t.props.lineDash) canvas.setLineDash([]);

            t.constructor.superclass.render.call(t, canvas);
        }

        /**
         * Renders rect hover on canvas
         * @param {cl.Canvas} canvas
         * @param {number} [offset=0] Hover offset
         * @memberof cl.Rect.prototype
         */
        function renderHover(canvas, offset) {
            if (t._isDragged) return;
            offset = (offset || 0) + (t.props.border || 0) / 2;
            var chart = t.parent.chart;

            // Calculate rectangle coordinates
            var x1, y1, x2, y2;
            x1 = chart.xAxis.toScreen(t.props.x);
            y1 = chart.yAxis.toScreen(t.props.y);
            x2 = chart.xAxis.toScreen(t.props.x2);
            y2 = chart.yAxis.toScreen(t.props.y2);

            canvas.drawRect(x1, y1, x2, y2, t.props.borderRadius, true);

            t.constructor.superclass.renderHover.call(t, canvas);
        }


        /**
         * Destroys rect
         * @memberof cl.Rect.prototype
         */
        function destroy() {
            t.constructor.superclass.destroy.call(t);
        }
    }

    cl.Utils.extend(Rect, cl.Shape);


    return Rect;

})();
cl.Line = (function() {
    'use strict';

    /**
     * Represent line shape class
     * @extends cl.Shape
     * @param {object} parent Parent shape manager
     * @param {object} props shape settings
     * @param {object} props.id Shape id
     * @param {string} [props.cursor] Change cursor to specified when shape is hovered
     * @param {object} [props.x=0] First corner X coordinate
     * @param {object} [props.y=0] First corner Y coordinate
     * @param {number} props.x2 Second corner X coordinate
     * @param {number} props.y2 Second corner Y coordinate
     * @param {string} [props.color=cl.Consts.COLOR_RED] Line color
     * @param {object} [props.border=1] Shape border width
     * @param {number} [props.size=0] First point size
     * @param {number} [props.size2=0] Second point size
     * @param {string} [props.pointColor=cl.Consts.COLOR_RED] First point color
     * @param {string} [props.pointColor2=cl.Consts.COLOR_RED] Socund point color
     * @param {object} [props.opacity=0.3] Shape opacity
     * @param {array} [props.lineDash=[]] Shape line dash. Example: [2, 2]
     * @param {array} [props.links=[]] Array of linked shapes id's
     * @param {boolean} [props.draggable=true] Is shape draggable
     * @param {object} [props.track] Shape track. Can be displayed while shape is animating
     * @param {boolean} [props.track.enabled=false] Enabled or not
     * @param {number} [props.track.width=1] Line width
     * @param {string} [props.track.color=cl.Consts.COLOR_GREEN] Line color
     * @param {number} [props.track.opacity=0.4] Line opacity
     * @param {object} [props.hover] Hover style
     * @param {boolean} [props.hover.enabled=true] Is hover enabled
     * @param {number} [props.hover.border] Hover border size
     * @param {string} [props.hover.color] Hover color
     * @param {number} [props.hover.opacity] Hover opacity
     * @param {number} [props.hover.offset] Hover offset
     *
     * @constructor
     * @memberof cl
     **/
    function Line(parent, props) {
        var t = this;
        cl.Shape.call(t, parent, props);

        // Public methods
        t.type = "line";
        t.parent = parent;
        t.render = render;
        t.destroy = destroy;
        t.hitTest = hitTest;
        t.getBounds = getBounds;
        t.getCenterX = getCenterX;
        t.getCenterY = getCenterY;
        t.hitTestRect = hitTestRect;
        t.renderHover = renderHover;
        t.processDrag = processDrag;
        t.getPixelArea = getPixelArea;
        t.calcAnimProps = calcAnimProps;
        t.startAnimation = startAnimation;
        t.onAnimationUpdate = onAnimationUpdate;

        // Private
        var opt = props || {};
        opt.borderRadius = opt.borderRadius || 0;
        if (t.props.pointColor) t.props.pointColor = cl.Color.fromString(t.props.pointColor);
        if (t.props.pointColor2) t.props.pointColor2 = cl.Color.fromString(t.props.pointColor2);

        if (t.props.x2 === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "x2"));
        if (t.props.y2 === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "y2"));

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Returns shape area in pixels
         * @returns {number} Shape area
         * @memberof cl.Line.prototype
         */
        function getPixelArea() {
            return Math.sqrt(cl.Utils.distSq(t.props.x, t.props.y, t.props.x2, t.props.y2));
        }

        /**
         * Uses to update point colors
         */
        function onAnimationUpdate() {
            /*jshint validthis:true */
            var _this = this;
            var r, g, b;
            if (_this.pointColor_r !== undefined) {
                r = Math.floor(_this.pointColor_r);
                g = Math.floor(_this.pointColor_g);
                b = Math.floor(_this.pointColor_b);
                if (r < 0) r = 0;
                if (g < 0) g = 0;
                if (b < 0) b = 0;
                if (r > 255) r = 255;
                if (g > 255) g = 255;
                if (b > 255) b = 255;
                _this.pointColor = cl.Color.toHex(r, g, b);
            }
            if (_this.pointColor2_r !== undefined) {
                r = Math.floor(_this.pointColor2_r);
                g = Math.floor(_this.pointColor2_g);
                b = Math.floor(_this.pointColor2_b);
                if (r < 0) r = 0;
                if (g < 0) g = 0;
                if (b < 0) b = 0;
                if (r > 255) r = 255;
                if (g > 255) g = 255;
                if (b > 255) b = 255;
                _this.pointColor2 = cl.Color.toHex(r, g, b);
            }
        }

        /**
         * @param {number} animationSpeed Animation duration in ms
         */
        function startAnimation(animationSpeed) {
            /*jshint validthis:true */
            var _this = this;
            var rgbFrom;
            var rgbTo;
            if (_this.animProps.pointColor) {
                rgbFrom = cl.Color.toRGB(_this.props.pointColor || _this.props.color);
                rgbTo = cl.Color.toRGB(_this.animProps.pointColor);
                _this.props.pointColor_r = rgbFrom.r;
                _this.props.pointColor_g = rgbFrom.g;
                _this.props.pointColor_b = rgbFrom.b;
                _this.animProps.pointColor_r = rgbTo.r;
                _this.animProps.pointColor_g = rgbTo.g;
                _this.animProps.pointColor_b = rgbTo.b;
                delete _this.animProps.pointColor;
            }
            if (_this.animProps.pointColor2) {
                rgbFrom = cl.Color.toRGB(_this.props.pointColor2 || _this.props.pointColor || _this.props.color);
                rgbTo = cl.Color.toRGB(_this.animProps.pointColor2);
                _this.props.pointColor2_r = rgbFrom.r;
                _this.props.pointColor2_g = rgbFrom.g;
                _this.props.pointColor2_b = rgbFrom.b;
                _this.animProps.pointColor2_r = rgbTo.r;
                _this.animProps.pointColor2_g = rgbTo.g;
                _this.animProps.pointColor2_b = rgbTo.b;
                delete _this.animProps.pointColor2;
            }

            t.constructor.superclass.startAnimation.call(t, animationSpeed);
        }

        /**
         * Returns X coordinate of shape center
         * @returns {number} X coordinate in axis space
         * @memberof cl.Rect.prototype
         */
        function getCenterX() {
            var x1, x2;
            // Find right coordinates order: (x1, x2) -> first x should be left corner
            if (t.props.x < t.props.x2) { x1 = t.props.x; x2 = t.props.x2; } else { x1 = t.props.x2; x2 = t.props.x; }
            return (x1 + Math.abs(x2 - x1) / 2);
        }

        /**
         * Returns Y coordinate of shape center
         * @returns {number} Y coordinate in axis space
         * @memberof cl.Rect.prototype
         */
        function getCenterY() {
            var y1, y2;
            // Find right coordinates order: (y1, y2) -> first y should be top corner
            if (t.props.y < t.props.y2) { y1 = t.props.y; y2 =  t.props.y2; } else { y1 = t.props.y2; y2 = t.props.y; }
            return (y1 + Math.abs(y2 - y1) / 2);
        }

        /**
         * Used to update shape position while shape dragged
         * @param {number} deltaX X coordinate changes
         * @param {number} deltaY Y coordinate changes
         * @memberof cl.Line.prototype
         */
        function processDrag(deltaX, deltaY) {
            t.props.x2 += deltaX;
            t.props.y2 += deltaY;
            t.constructor.superclass.processDrag.call(t, deltaX, deltaY);
        }

        /**
         * Returns shape bounds
         * @returns {{x: number, y: number, w: number, h: number}} Shape bounds
         * @memberof cl.Line.prototype
         */
        function getBounds() {
            var x1, y1, x2, y2, sx, sy, ex, ey, r1, r2;
            r1 = t.props.size || 0;
            r2 = t.props.size2 || 0;
            x1 = t.parent.chart.xAxis.toScreen(t.props.x);
            y1 = t.parent.chart.yAxis.toScreen(t.props.y);
            x2 = t.parent.chart.xAxis.toScreen(t.props.x2);
            y2 = t.parent.chart.yAxis.toScreen(t.props.y2);
            // Extend coordinates by circles radius. Because line can have big circles on points
            if (x1 < x2) {
                x1 -= r1;
                x2 += r2;
            } else {
                x1 += r1;
                x2 -= r2;
            }
            if (y1 < y2) {
                y1 -= r1;
                y2 += r2;
            } else {
                y1 += r1;
                y2 -= r2;
            }
            sx = Math.min(x1, x2);
            sy = Math.min(y1, y2);
            ex = Math.max(x1, x2);
            ey = Math.max(y1, y2);
            return {
                x: sx,
                y: sy,
                w: ex - sx,
                h: ey - sy
            };
        }

        /**
         * Checks if shape intersecting rectangle
         * @param {number} rx X coordinate in pixels of rectangle center
         * @param {number} ry Y coordinate in pixels of rectangle center
         * @param {number} hw Half width
         * @param {number} hh Half height
         * @returns {boolean} Intersecting or not
         * @memberof cl.Rect.prototype
         */
        function hitTestRect(rx, ry, hw, hh) {
            var x1, y1, x2, y2;
            x1 = t.parent.chart.xAxis.toScreen(t.props.x);
            y1 = t.parent.chart.yAxis.toScreen(t.props.y);
            x2 = t.parent.chart.xAxis.toScreen(t.props.x2);
            y2 = t.parent.chart.yAxis.toScreen(t.props.y2);

            return cl.Utils.lineRectIntersect(rx - hw, ry - hh, rx + hw, ry + hh, x1, y1, x2, y2);
        }

        /**
         * Check if point inside shape
         * @param {number} x X coordinate in pixels
         * @param {number} y Y coordinate in pixels
         * @returns {boolean} Inside or not
         * @memberof cl.Rect.prototype
         */
        function hitTest(x, y) {
            var x1, y1, x2, y2, sx, sy, ex, ey;
            x1 = t.parent.chart.xAxis.toScreen(t.props.x);
            y1 = t.parent.chart.yAxis.toScreen(t.props.y);
            x2 = t.parent.chart.xAxis.toScreen(t.props.x2);
            y2 = t.parent.chart.yAxis.toScreen(t.props.y2);
            /*sx = Math.min(x1, x2);
            sy = Math.min(y1, y2);
            ex = Math.max(x1, x2);
            ey = Math.max(y1, y2);

            return ((x >= sx) && (x <= ex) && (y >= sy) && (y <= ey));*/
            return cl.Utils.distToSegmentSquared(x, y, x1, y1, x2, y2) < Line.HOVER_THRESHOLD;
        }

        /**
         * Updates shape properties
         * @param {object} newProps New properties
         * @returns {boolean} Is shape changed or not
         * @memberof cl.Rect.prototype
         */
        function calcAnimProps(newProps) {
            t.constructor.superclass.calcAnimProps.call(t, newProps);

            if (newProps.x2 !== undefined && newProps.x2 !== t.props.x2) {
                t.animProps.x2 = newProps.x2;
                t.animProps.changed = true;
            }
            if (newProps.y2 !== undefined && newProps.y2 !== t.props.y2) {
                t.animProps.y2 = newProps.y2;
                t.animProps.changed = true;
            }
            if (newProps.size !== undefined && newProps.size !== t.props.size) {
                t.animProps.size = newProps.size;
                t.animProps.changed = true;
            }
            if (newProps.size2 !== undefined && newProps.size2 !== t.props.size2) {
                t.animProps.size2 = newProps.size2;
                t.animProps.changed = true;
            }
            if (newProps.pointColor !== undefined && newProps.pointColor !== t.props.pointColor) {
                t.animProps.pointColor = newProps.pointColor;
                t.animProps.changed = true;
            }
            if (newProps.pointColor2 !== undefined && newProps.pointColor2 !== t.props.pointColor2) {
                t.animProps.pointColor2 = newProps.pointColor2;
                t.animProps.changed = true;
            }
            return t.animProps.changed;
        }

        /**
         * Renders line on canvas
         * @param {cl.Canvas} canvas
         * @memberof cl.Line.prototype
         */
        function render(canvas) {
            if (t._isDragged) return;
            var chart = t.parent.chart;

            // Calculate line coordinates
            var x1, y1, x2, y2;
            x1 = chart.xAxis.toScreen(t.props.x);
            y1 = chart.yAxis.toScreen(t.props.y);
            x2 = chart.xAxis.toScreen(t.props.x2);
            y2 = chart.yAxis.toScreen(t.props.y2);

            canvas.setAlpha(t.props.opacity);
            canvas.setLineStyle(t.props.border, t.props.color);
            if (t.props.lineDash) canvas.setLineDash(t.props.lineDash);

            canvas.drawLine(x1, y1, x2, y2);

            if (t.props.size) {
                canvas.ctx.beginPath();
                canvas.setFillColor(t.props.pointColor || t.props.color);
                canvas.ctx.moveTo(x1, y1);
                canvas.ctx.arc(x1, y1, t.props.size, 0, cl.Consts.TWO_PI, false);
                canvas.ctx.fill();
                canvas.ctx.closePath();
            }
            if (t.props.size2) {
                canvas.ctx.beginPath();
                canvas.setFillColor(t.props.pointColor2 || t.props.pointColor || t.props.color);
                canvas.ctx.moveTo(x2, y2);
                canvas.ctx.arc(x2, y2, t.props.size2, 0, cl.Consts.TWO_PI, false);
                canvas.ctx.fill();
                canvas.ctx.closePath();
            }

            if (t.props.lineDash) canvas.setLineDash([]);

            t.constructor.superclass.render.call(t,canvas);
        }

        /**
         * Renders line hover on canvas
         * @param {cl.Canvas} canvas
         * @param {number} [offset=0] Hover offset
         * @memberof cl.Line.prototype
         */
        function renderHover(canvas, offset) {
            if (t._isDragged) return;
            var chart = t.parent.chart;

            // Calculate rectangle coordinates
            var x1, y1, x2, y2;
            x1 = chart.xAxis.toScreen(t.props.x);
            y1 = chart.yAxis.toScreen(t.props.y);
            x2 = chart.xAxis.toScreen(t.props.x2);
            y2 = chart.yAxis.toScreen(t.props.y2);

            /*var angle = Math.atan2(x2 - x1, y2 - y1) + Math.PI / 2;
            var dx = Math.cos(angle) * (t.props.border || 1) * offset;
            var dy = Math.cos(angle) * (t.props.border || 1) * offset;
            canvas.drawLine(x1+dx, y1+dy, x2+dx, y2+dy);
            angle += Math.PI;
            dx = Math.cos(angle) * (t.props.border || 1) * offset;
            dy = Math.cos(angle) * (t.props.border || 1) * offset;
            canvas.drawLine(x1+dx, y1+dy, x2+dx, y2+dy);*/
            canvas.drawLine(x1, y1, x2, y2, true);
            if (t.props.size) {
                canvas.ctx.moveTo(x1 + t.props.size + (offset || 0), y1);
                canvas.ctx.arc(x1, y1, t.props.size + (offset || 0), 0, cl.Consts.TWO_PI, false);
            }
            if (t.props.size2) {
                canvas.ctx.moveTo(x2 + t.props.size2 + (offset || 0), y2);
                canvas.ctx.arc(x2, y2, t.props.size2 + (offset || 0), 0, cl.Consts.TWO_PI, false);
            }

            t.constructor.superclass.renderHover.call(t,canvas);
        }


        /**
         * Destroys line
         * @memberof cl.Rect.prototype
         */
        function destroy() {
            t.constructor.superclass.destroy.call(t);
        }
    }

    cl.Utils.extend(Line, cl.Shape);

    /**
     * Squared distance to line, when line considered hovered
     * @memberof cl.Line
     * @type {number}
     * @default 25
     */
    Line.HOVER_THRESHOLD = 25;

    return Line;

})();
cl.Chart = (function(){
    'use strict';

    /**
     * Represent chart class
     *
     * @param {object} options Chart settings
     * @param {object} options.xAxis Settings for xAxis, described like options in {@link cl.Axis} constructor
     * @param {object} options.yAxis Settings for yAxis, described like options in {@link cl.Axis} constructor
     * @param {object} options.element DOM element on which chart will be created
     * @param {object} options.preloader preloader DOM element
     * @param {number|undefined} options.width Width of chart. If undefined, chart will fits parent element width
     * @param {number|undefined} options.height Height of chart. If undefined, chart will fits parent element height
     * @param {object} options.background Background options, described like options in {@link cl.Background} constructor
     * @param {object} options.shapes Shapes options, described like options in {@link cl.ShapeManager} constructor
     * @param {object} options.selector Selector options, described like options in {@link cl.Selector} constructor
     *
     * @property {object} options Chart settings
     * @property {cl.Axis} xAxis Chart x axis
     * @property {cl.Axis} yAxis Chart y axis
     * @property {cl.AxisManager} axis Chart axis
     * @property {object} element Parent DOM element
     * @property {cl.Canvas} screen Main canvas. All things will be rendered here
     * @property {cl.ShapeManager} shapes Chart shapes
     * @property {cl.Selector} selector Chart selector
     * @property {cl.Background} background Chart background
     * @property {number} width Chart width (readonly). To set size use {@link cl.Chart#resize}
     * @property {number} height Chart width (readonly). To set size use {@link cl.Chart#resize}
     * @property {boolean} isDirty Indicates that chart should be redrawed on next frame. Actual redrawing would be fired if this flag is true
     *
     * @example
     * // Minimal setup
     * var chart = new cl.Chart({ element: document.getElementById("myDiv") });
     *
     * // Setup with axis
     * var chart = new cl.Chart({
     *      element: document.getElementById("myDiv")
     *      xAxis: {
     *         min: -10
     *         max: 20
     *      }
     * }
     *
     * // Setup chart with custom background
     * var chart = new cl.Chart({
     *      element: document.getElementById("myDiv")
     *      background: {
     *         url: "http://www.my.com/image.png",
     *         fit: cl.Background.FIT_NONE
     *         pos: {
     *            x: 50,
     *            y: 0
     *         }
     *      }
     * }
     *
     * // Setup chart with zIndex support
     * var chart = new cl.Chart({
     *      element: document.getElementById("myDiv")
     *      shapes: {
     *          zIndexUsage: true
     *      }
     * }
     *
     * // Add new axis
     * chart.axis.add({ type: "x", name: "My custom axis", offset: 30 });
     *
     * // Coordinate conversion
     * var screenX = chart.toScreenX(xValue);
     * var axisX = chart.toAxisX(xPixel);
     *
     * // Refresh(redraw) chart
     * chart.redraw()
     *
     * // Get custom axis by name
     * chart.axis.get("My custom axis")
     *
     * // Add bubbles to chart
     * chart.addBubbles([
     *      { x: 20, y: 30, size: 3 },
     *      { x: 40, y: 10, size: 4, color: "#AAFFAA", opacity: 0.7 }
     * ]);
     *
     * // Add rectangles to chart
     * chart.addRects([
     *      { x: 20, y: 30, x2: 30, y2: 40 },
     *      { x: 40, y: 10, x2: 100, y2: 20, color: "#AAFFAA", color2: "#FFFFFF", cursor: "crosshair" }
     * ]);
     *
     * // Add lines to chart
     * chart.addLines([
     *      { x: 20, y: 30, x2: 30, y2: 40 },
     *      { x: 40, y: 10, x2: 100, y2: 20, color: "green", size: 4, size2: 8, pointColor: "blue", pointColor2: "red" }
     * ]);
     *
     * // Add custom shapes to chart
     * chart.shapes.add(bubblesArray, cl.Bubble, allowAnimation, animationSpeed);
     * chart.shapes.add(itemsArray, cl.MyCustomClass, allowAnimation, animationSpeed);
     *
     * // Change single bubble properties with animation
     * var b = chart.shapes.get(myBubbleID);
     * b.setProps({ x: 50, y: 50, size: 2}, true);
     *
     * // Link shape to another by ids
     * b.link([13, 14]);
     *
     * // Add event listeners to chart
     * chart.addEventListener(cl.Event.shapeOver, function(e) {
     *      console.log("x: ", e.x, " y: ", e.y);
     *      console.log("Shape is: ", e.target);
     * });
     *
     * // Don't pass event object in callbacks, because it can be destroyed or changed
     * // Just copy needed properties
     * chart.addEventListener(cl.Event.shapeOver, function(e) {
     *     setTimeout(function() {
     *          console.log(e.target); // WRONG
     *     }, 1000);
     * });
     * chart.addEventListener(cl.Event.shapeOver, function(e) {
     *     var target = e.target;
     *     setTimeout(function() {
     *          console.log(target); // right
     *     }, 1000);
     * });
     *
     * // Enable multiselect and drag
     * chart.selector.enableMultiselect();
     * chart.selector.enableDrag();
     *
     * // Get all shapes under screen point
     * var shapes = chart.selector.shapeFromPoint(x, y);
     *
     * // Show shape centers
     * chart.shapes.showCenters();
     *
     * @constructor
     * @memberof cl
     **/
    function Chart(options) {
        var t = this;

        // Properties
        t.options = options || {};
        t.xAxis = null;
        t.yAxis = null;
        t.preloader = t.options.preloader;
        t.element = t.options.element;
        Object.defineProperties(t, {
            isDirty: { get: getIsDirty },
            width: { get: function() { return t.screen.width; } },
            height: { get: function() { return t.screen.height; } }
        });

        // Private
        var _redrawRequested = false;
        var _dirtyFlags = {
            all: false
        };

        // Public methods
        t.redraw = redraw;
        t.resize = resize;
        t.destroy = destroy;
        t.toAxisX = toAxisX;
        t.toAxisY = toAxisY;
        t.addRects = addRects;
        t.addLines = addLines;
        t.setCursor = setCursor;
        t.toScreenX = toScreenX;
        t.toScreenY = toScreenY;
        t.addBubbles = addBubbles;
        t.setDirtyFlag = setDirtyFlag;
        t.showPreloader = showPreloader;
        t.hidePreloader = hidePreloader;
        t.getBackground = getBackground;
        t.setBackground = setBackground;
        t.addEventListener = addEventListener;
        t.removeEventListener = removeEventListener;

        if (!t.element) throw cl.Lang.get("errNoElements");

        t.screen = new cl.Canvas(t.options.width || t.element.offsetWidth, t.options.height || t.element.offsetHeight);
        t.screen.el.classList.add("cl-chart");
        t.events = new cl.EventManager(t);

        // Create layers
        t.background = new cl.Background(t, t.options.background || {});
        t.axis = new cl.AxisManager(t);
        t.shapes = new cl.ShapeManager(t, t.options.shapes);
        t.selector = new cl.Selector(t, t.options.selector);
        t.layers = [
            t.background,
            t.axis,
            t.shapes,
            t.selector
        ];

        // Create deafult axis
        t.xAxis = t.axis.add(cl.Utils.merge({ type: "x" }, t.options.xAxis || {}));
        t.yAxis = t.axis.add(cl.Utils.merge({ type: "y" }, t.options.yAxis || {}));

        // Add screen to DOM
        t.element.appendChild(t.screen.el);
        t.redraw();

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Changes chart cursor
         * @param {string} [name] Cursor name
         * @memberof cl.Chart.prototype
         */
        function setCursor(name) {
            if (!name) t.screen.el.style.cursor = "default"; else t.screen.el.style.cursor = name;
        }

        /**
         * Converts X coordinate in screen space to axis space
         * @param {number} v Value
         * @returns {number} Value in axis space
         * @memberof cl.Chart.prototype
         */
        function toAxisX(v) {
            return t.xAxis.toAxis(v);
        }

        /**
         * Converts Y coordinate in screen space to axis space
         * @param {number} v Value
         * @returns {number} Value in axis space
         * @memberof cl.Chart.prototype
         */
        function toAxisY(v) {
            return t.yAxis.toAxis(v);
        }

        /**
         * Converts Y coordinate in axis space to screen space
         * @param {number} v Value
         * @returns {number} Value in screen space
         * @memberof cl.Chart.prototype
         */
        function toScreenY(v) {
            return t.yAxis.toScreen(v);
        }

        /**
         * Converts X coordinate in axis space to screen space
         * @param {number} v Value
         * @returns {number} Value in screen space
         * @memberof cl.Chart.prototype
         */
        function toScreenX(v) {
            return t.xAxis.toScreen(v);
        }

        /**
         * Add bubbles to chart. If been added exists id's, bubbles will update its properties
         * @param {array} items Array of bubbles. Contains only properties description, not bubble class
         * @param {boolean} [allowAnimation=false] Play animation if bubble properties changed
         * @param {number} [animationSpeed=cl.ShapeManager.ANIMATION_SPEED] Animation speed in ms
         * @memberof cl.Chart.prototype
         */
        function addBubbles(items, allowAnimation, animationSpeed) {
            t.shapes.add(items, cl.Bubble, allowAnimation, animationSpeed);
        }

        /**
         * Add rects to chart. If been added exists id's, rects will update its properties
         * @param {array} items Array of rects. Contains only properties description, not rect class
         * @param {boolean} [allowAnimation=false] Play animation if rect properties changed
         * @param {number} [animationSpeed=cl.ShapeManager.ANIMATION_SPEED] Animation speed in ms
         * @memberof cl.Chart.prototype
         */
        function addRects(items, allowAnimation, animationSpeed) {
            t.shapes.add(items, cl.Rect, allowAnimation, animationSpeed);
        }

        /**
         * Add lines to chart. If been added exists id's, lines will update its properties
         * @param {array} items Array of lines. Contains only properties description, not rect class
         * @param {boolean} [allowAnimation=false] Play animation if rect properties changed
         * @param {number} [animationSpeed=cl.ShapeManager.ANIMATION_SPEED] Animation speed in ms
         * @memberof cl.Chart.prototype
         */
        function addLines(items, allowAnimation, animationSpeed) {
            t.shapes.add(items, cl.Line, allowAnimation, animationSpeed);
        }

        /**
         * Removes preloader from chart
         * @memberof cl.Chart.prototype
         */
        function hidePreloader() {
            if (!t.options.element) return;
            var p = t.options.element.parentNode;
            t.options.preloader.classList.add("cl-preloader-hidden");
        }

        /**
         * Shows preloader on chart using "options.preloader" element
         * @memberof cl.Chart.prototype
         */
        function showPreloader() {
            if (!t.options.element || !t.options.element.parentNode) return;
            var p = t.preloader;
            var parent = t.options.element.parentNode;
            p.classList.remove("hidden");
            p.classList.remove("cl-preloader-hidden");
            p.classList.add("cl-preloader");
            var style = "";
            var x = Math.floor(t.element.offsetLeft + t.width / 2 - p.offsetWidth / 2);
            var y = Math.floor(t.element.offsetTop + t.height / 2 - p.offsetHeight / 2);
            style = "left: " + x + "px; top: " + y + "px";
            style += ";" + p.getAttribute("style");
            p.setAttribute("style", style);
            parent.appendChild(p);
        }

        /**
         * Sets dirty flag
         * @param {string} name Dirty flag name. Can be "all" or layer name. See "dirtyFlagName" property in {@link cl.Layer}
         * @memberof cl.Chart.prototype
         */
        function setDirtyFlag(name) {
            _dirtyFlags[name] = true;
        }

        /**
         * Retruns chart background
         * @returns {cl.Background}
         * @memberof cl.Chart.prototype
         */
        function getBackground() {
            return t.background;
        }

        /**
         * Clear all dirty flags
         * @private
         */
        function clearDirtyFlags() {
            _redrawRequested = false;
            _dirtyFlags.all = false;
            for (var k in _dirtyFlags) if (_dirtyFlags.hasOwnProperty(k)) _dirtyFlags[k] = false;
        }

        /**
         * Returns true if chart is dirty(need to refresh)
         * @private
         * @returns {boolean}
         */
        function getIsDirty() {
            if (_dirtyFlags.all) return true;
            for (var k in _dirtyFlags) if (_dirtyFlags.hasOwnProperty(k)) if (_dirtyFlags[k]) return true;
            return false;
        }

        /**
         * Creates request for chart refresh. Can be called multiply times, but actual refresh would be called once by requestAnimationFrame
         * @param {object|undefined} dirtyFlags If specified, sets corresponding dirty flags
         * @private
         */
        function redraw() {
            if (_redrawRequested) return;
            requestAnimFrame(render);
            _redrawRequested = true;
        }

        /**
         * Sets chart background image
         * @param url Image url or base64 string
         * @memberof cl.Chart.prototype
         */
        function setBackground(url) {
            t.background.setImage(url);
        }

        /**
         * Renders chart
         * @private
         */
        function render(time) {
            TWEEN.update(time);

            if (!t.screen) return;
            //console.log("render");
            var i, l;

            // Request shapes redraw if they is animated
            if (t.shapes.isAnimating) {
                t.shapes.apply();
                t.selector.apply();
            }

            // Should redraw all objects if axis changed
            if (_dirtyFlags.axis) {
                _dirtyFlags.shapes = true;
                t.shapes.updateStatic();
            }

            // Render layers based on dirty flags
            for (i = 0, l = t.layers.length; i < l; i++) {
                if (_dirtyFlags.all || _dirtyFlags[t.layers[i].dirtyFlagName]) t.layers[i].render();
            }

            // Draw layers on screen
            t.screen.clear();
            /*t.screen.ctx.fillStyle = "#eeeeee";
            t.screen.ctx.beginPath();
            t.screen.ctx.rect(0, 0, t.width, t.height);
            t.screen.ctx.fill();*/

            for (i = 0, l = t.layers.length; i < l; i++) t.screen.draw(t.layers[i].surface);

            clearDirtyFlags();

            if (t.shapes.isAnimating && !_redrawRequested) {
                _redrawRequested = true;
                requestAnimFrame(render);
            }
        }

        /**
         * Resizes chart
         * @param {number} width New width
         * @param {number} height New height
         * @memberof cl.Chart.prototype
         */
        function resize(width, height) {
            var i, l;
            // Resize layers
            for (i = 0, l = t.layers.length; i < l; i++) t.layers[i].resize(width, height);

            t.screen.resize(width, height);
            _dirtyFlags.all = true;
            t.redraw();
        }

        /**
         * Adds event listener
         * @param {string} event Event name. See {@link cl.Event} members
         * @param {function} callback Event callback
         * @memberof cl.Chart.prototype
         * @example
         * chart.addEventListener(cl.Event.shapeOver, function(e) { console.log(e.target); });
         * // equals to
         * chart.addEventListener("shapeover", function(e) { console.log(e.target); });
         */
        function addEventListener(event, callback) {
            t.events.addEventListener(event, callback);
        }

        /**
         * Removes event listener
         * @param {string} event Event name. See {@link cl.Event} members
         * @param {function} callback Event callback
         * @memberof cl.Chart.prototype
         */
        function removeEventListener(event, callback) {
            t.events.removeEventListener(event, callback);
        }

        /**
         * Destroys chart
         * @memberof cl.Chart.prototype
         */
        function destroy() {
            var i, l;

            // Destroy all layers
            for (i = 0, l = t.layers.length; i < l; i++) t.layers[i].destroy();

            t.screen.destroy();
            t.layers = [];
            t.screen = null;
            t.background = null;
            t.element = null;

        }
    }

    return Chart;
})();
