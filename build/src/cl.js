// tween.js v.0.15.0 https://github.com/sole/tween.js
void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});var TWEEN=TWEEN||function(){var n=[];return{REVISION:"14",getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var r=n.indexOf(t);-1!==r&&n.splice(r,1)},update:function(t){if(0===n.length)return!1;var r=0;for(t=void 0!==t?t:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();r<n.length;)n[r].update(t)?r++:n.splice(r,1);return!0}}}();TWEEN.Tween=function(n){var t=n,r={},i={},u={},o=1e3,e=0,a=!1,f=!1,c=!1,s=0,h=null,l=TWEEN.Easing.Linear.None,p=TWEEN.Interpolation.Linear,E=[],d=null,v=!1,I=null,w=null,M=null;for(var O in n)r[O]=parseFloat(n[O],10);this.to=function(n,t){return void 0!==t&&(o=t),i=n,this},this.start=function(n){TWEEN.add(this),f=!0,v=!1,h=void 0!==n?n:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now(),h+=s;for(var o in i){if(i[o]instanceof Array){if(0===i[o].length)continue;i[o]=[t[o]].concat(i[o])}r[o]=t[o],r[o]instanceof Array==!1&&(r[o]*=1),u[o]=r[o]||0}return this},this.stop=function(){return f?(TWEEN.remove(this),f=!1,null!==M&&M.call(t),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var n=0,t=E.length;t>n;n++)E[n].stop()},this.delay=function(n){return s=n,this},this.repeat=function(n){return e=n,this},this.yoyo=function(n){return a=n,this},this.easing=function(n){return l=n,this},this.interpolation=function(n){return p=n,this},this.chain=function(){return E=arguments,this},this.onStart=function(n){return d=n,this},this.onUpdate=function(n){return I=n,this},this.onComplete=function(n){return w=n,this},this.onStop=function(n){return M=n,this},this.update=function(n){var f;if(h>n)return!0;v===!1&&(null!==d&&d.call(t),v=!0);var M=(n-h)/o;M=M>1?1:M;var O=l(M);for(f in i){var m=r[f]||0,N=i[f];N instanceof Array?t[f]=p(N,O):("string"==typeof N&&(N=m+parseFloat(N,10)),"number"==typeof N&&(t[f]=m+(N-m)*O))}if(null!==I&&I.call(t,O),1==M){if(e>0){isFinite(e)&&e--;for(f in u){if("string"==typeof i[f]&&(u[f]=u[f]+parseFloat(i[f],10)),a){var T=u[f];u[f]=i[f],i[f]=T}r[f]=u[f]}return a&&(c=!c),h=n+s,!0}null!==w&&w.call(t);for(var g=0,W=E.length;W>g;g++)E[g].start(n);return!1}return!0}},TWEEN.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i)))},Out:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*n)*Math.sin(2*(n-t)*Math.PI/i)+1)},InOut:function(n){var t,r=.1,i=.4;return 0===n?0:1===n?1:(!r||1>r?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),(n*=2)<1?-.5*r*Math.pow(2,10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i):r*Math.pow(2,-10*(n-=1))*Math.sin(2*(n-t)*Math.PI/i)*.5+1)}},Back:{In:function(n){var t=1.70158;return n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*n*n*((t+1)*n-t):.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-TWEEN.Easing.Bounce.Out(1-n)},Out:function(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return.5>n?.5*TWEEN.Easing.Bounce.In(2*n):.5*TWEEN.Easing.Bounce.Out(2*n-1)+.5}}},TWEEN.Interpolation={Linear:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=TWEEN.Interpolation.Utils.Linear;return 0>t?o(n[0],n[1],i):t>1?o(n[r],n[r-1],r-i):o(n[u],n[u+1>r?r:u+1],i-u)},Bezier:function(n,t){var r,i=0,u=n.length-1,o=Math.pow,e=TWEEN.Interpolation.Utils.Bernstein;for(r=0;u>=r;r++)i+=o(1-t,u-r)*o(t,r)*n[r]*e(u,r);return i},CatmullRom:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=TWEEN.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(0>t&&(u=Math.floor(i=r*(1+t))),o(n[(u-1+r)%r],n[u],n[(u+1)%r],n[(u+2)%r],i-u)):0>t?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[r]-(o(n[r],n[r],n[r-1],n[r-1],i-r)-n[r]):o(n[u?u-1:0],n[u],n[u+1>r?r:u+1],n[u+2>r?r:u+2],i-u)},Utils:{Linear:function(n,t,r){return(t-n)*r+n},Bernstein:function(n,t){var r=TWEEN.Interpolation.Utils.Factorial;return r(n)/r(t)/r(n-t)},Factorial:function(){var n=[1];return function(t){var r,i=1;if(n[t])return n[t];for(r=t;r>1;r--)i*=r;return n[t]=i}}(),CatmullRom:function(n,t,r,i,u){var o=.5*(r-n),e=.5*(i-t),a=u*u,f=u*a;return(2*t-2*r+o+e)*f+(-3*t+3*r-2*o-e)*a+o*u+t}}},"undefined"!=typeof module&&module.exports&&(module.exports=TWEEN);
(function(namespace){

    // Log current library version
    var ver = "1.0.9b";
    if (ver !== "{{Package.Json.Version}}".toLowerCase()) console.log("%c ˖•● ChartLibrary v." + ver + " ●•˖ ", 'background: #44A; color: #FFF');

    /**
     * @namespace {object} cl
     * @description Global object which stores all chart classes
     */
    window.cl = {
        version: "1.0.9b"
    };

})(window);
/**
 * @module sys/utils
 * @description Module describes utility functions
 * @author Anton Gnibeda
 */
(function(namespace, window) {
    'use strict';

    /**
     * Utility class
     * @memberof cl
     * @constructor
     * @namespace
     */
    function Utils() {
        // Make requestAnimFrame request cross browser
        window.requestAnimFrame = (function(){
            return  window.requestAnimationFrame   ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function(callback){
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    }

    /**
     * Inherits class
     * @param {Function} child Child class
     * @param {Function} parent Parent class
     * @example
     * cl.Utils.Extend(Cat, Animal)
     */
    Utils.prototype.extend = function(child, parent) {
        var F = function() { };
        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.superclass = parent.prototype;
    };

    /**
     * Merge all object properties to another. obj1 properties with same names will be overwritten from obj2
     * @param {Object} obj1 Object to merge properties in
     * @param {Object} obj2 Object to read properties from
     * @param {Array} [ignoreProps] Names of properties that should be ignored
     * @returns {Object} obj1 contains all properties from obj2
     * @example
     * // Simple merge
     * var o1 = { a: 1, b: 2, o: { a: 1 } };
     * var o2 = { a: 3, c: 3, o: { b: 5 } };
     * var r = cl.Utils.merge(o1, o2);
     * console.log(r); // { a: 3, b: 2, c: 3, o: { a: 1, b: 5 } }
     *
     * // Ignore id property
     * var o1 = { id: 1 }
     * var o2 = { id: 2, b: 3 }
     * var r = cl.Utils.merge(o1, o2, "id");
     * console.log(r); // { id: 1, b: 3 }
     */
    Utils.prototype.merge = function(obj1, obj2, ignoreProps) {
        if (!obj2) return obj1;

        // If object is array, construct new array and make clone
        if (obj2.constructor === Array) {
            obj1 = [];
            for (var i = 0; i < obj2.length; i++) {
                if (typeof obj2[i] === "object") obj1[i] = this.merge({}, obj2[i]); else obj1[i] = obj2[i];
            }
            return obj1;
        }

        // Copy all properties
        for (var p in obj2) {
            if (!obj2.hasOwnProperty(p)) continue;
            if (obj2[p] === null) {
                obj1[p] = null;
                continue;
            }
            if (obj2[p] === undefined) {
                obj1[p] = undefined;
                continue;
            }
            if (ignoreProps && ignoreProps.indexOf(p) !== -1) continue;
            try {
                if (obj2[p].constructor == Object) obj1[p] = this.merge(obj1[p] || {}, obj2[p]);
                    else if (obj2[p].constructor == Array) obj1[p] = this.merge(undefined, obj2[p], ignoreProps);
                        else obj1[p] = obj2[p];
            } catch (e) {
                console.warn("Something go wrong during object merge", obj1, 'to', obj2, ". Property", p);
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    };

    /**
     * Makes color lighter or darker
     * @param {string} hex Color
     * @param {number} lum Luminance -1..1 in percent. Example: -0.2 is equal to 20% darker
     * @returns {string} Processed color
     * @example
     * var c = cl.Utils.colorLuminance("#ff0080", -0.5);
     * console.log(c); // "#800040"
     */
    Utils.prototype.colorLuminance = function(hex, lum) {
        // Validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        lum = lum || 0;

        // Convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }

        return rgb;
    };

    /**
     * Returns squared distance between two points
     * @param {number} x1 First point X coordinate
     * @param {number} y1 First point Y coordinate
     * @param {number} x2 Second point X coordinate
     * @param {number} y2 Second point Y coordinate
     * @returns {number} Squared distance
     * @example
     * var d = cl.Utils.distSq(10, 10, 20, 20)
     * console.log(d); // 200
     */
    Utils.prototype.distSq = function(x1, y1, x2, y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    };

    /**
     * Returns squared distance from point to line segment
     * @param {number} pointX Point X coordinate
     * @param {number} pointY Point Y coordinate
     * @param {number} x1 Line first point X coordinate
     * @param {number} y1 Line first point Y coordinate
     * @param {number} x2 Line second point X coordinate
     * @param {number} y2 Line second point Y coordinate
     * @returns {number} Squared distance
     * @example
     * var d = cl.Utils.distToSegmentSquared(0, 0, -10, 10, 10, 10)
     * console.log(d); // 100
     */
    Utils.prototype.distToSegmentSquared = function(pointX, pointY, x1, y1, x2, y2) {
        var l2 = this.distSq(x1, y1, x2, y2);
        if (l2 === 0) return this.distSq(pointX, pointY, x1, y1);
        var t = ((pointX - x1) * (x2 - x1) + (pointY - y1) * (y2 - y1)) / l2;
        if (t < 0) return this.distSq(pointX, pointY, x1, y1);
        if (t > 1) return this.distSq(pointX, pointY, x2, y2);

        return this.distSq(pointX, pointY, x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    };

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
     * @example
     * var b = cl.Utils.lineRectIntersect(0, 0, 10, 10, -5, 5, 5, 5);
     * console.log(b); // true
     */
    Utils.prototype.lineRectIntersect = function(rectX1, rectY1, rectX2, rectY2, lineX1, lineY1, lineX2, lineY2)
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
        return minY <= maxY;
    };

    namespace.Utils = new Utils();

})(cl, window);

/**
 * @module sys/lang
 * @description Module contains localization class
 * @author Anton Gnibeda
 */
(function(namespace){
    'use strict';

    var current = "en";

    /**
     * Localization class
     * @memberof cl
     * @constructor
     * @namespace
     */
    function Lang() {
    }

    /**
     * Returns localized string by id
     * @param {string} strId Id of sting to get
     * @param {string|array} [params] Array of strings for replacement in template
     * @returns {string}
     * @example
     * var msg = cl.Lang.get("errNoElements");
     * console.log(msg); // "No element specified in options"
     *
     * var msg = cl.Lang.get("errUnknownEvent", "test");
     * console.log(msg); // "Unknown event 'test'"
     */
    Lang.prototype.get = function(strId, params) {
        if (!this.strings[current] || !this.strings[current][strId]) return strId;
        var str = this.strings[current][strId] || strId;
        if (params instanceof Array) {
            for (var i = 0; i < params.length; i++) str = str.replace("%" + (i+1).toString(), params[i]);
        } else {
            str = str.replace("%1", params);
        }
        return str;
    };

    /**
     * Contains all strings for all languages
     * @type {object}
     * @example
     * // All strings for english language
     * console.log(cl.Lang.en);
     *
     * // Add language
     * cl.Lang.de = {}
     *
     * // Add strings to language
     * cl.Langl.de.errNoElements = "Kein element in pptionen angegeben";
     */
    Lang.prototype.strings = {
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

    namespace.Lang = new Lang();

})(cl);
/**
 * @module sys/consts
 * @description Module describes constants
 * @author Anton Gnibeda
 */
(function(namespace){
    'use strict';

    /**
     * @namespace cl.Consts
     */
    var Consts = {

        /////////////////////////////////// Colors ///////////////////////////////////////

        /**
         * Black color
         * @memberof cl.Consts
         * @type {string}
         * @default "#000000"
         */
        COLOR_BLACK: "#000000",

        /**
         * White color
         * @memberof cl.Consts
         * @type {string}
         * @default "#FFFFFF"
         */
        COLOR_WHITE: "#FFFFFF",

        /**
         * Gray color
         * @memberof cl.Consts
         * @type {string}
         * @default "#AAAAAA"
         */
        COLOR_GRAY: "#AAAAAA",

        /**
         * Red color
         * @memberof cl.Consts
         * @type {string}
         * @default "#FF0000"
         */
        COLOR_RED: "#FF0000",

        /**
         * Green color
         * @memberof cl.Consts
         * @type {string}
         * @default "#00FF00"
         */
        COLOR_GREEN: "#00FF00",

        /**
         * Blue color
         * @memberof cl.Consts
         * @type {string}
         * @default "#0000FF"
         */
        COLOR_BLUE: "#0000FF",

        /**
         * Light blue color
         * @memberof cl.Consts
         * @type {string}
         * @default "#AAAAFF"
         */
        COLOR_LIGHTBLUE: "#AAAAFF",

        /////////////////////////////////// Font settings ///////////////////////////////////////

        /**
         * Default font size
         * @memberof cl.Consts
         * @type {number}
         * @default 14
         */
        FONT_SIZE: 14,

        /**
         * Default font name
         * @memberof cl.Consts
         * @type {string}
         * @default "Arial"
         */
        FONT_NAME: "Arial",

        /////////////////////////////////// Math consts ///////////////////////////////////////

        /**
         * Doubled PI - 360 degrees
         * @memberof cl.Consts
         * @type {number}
         * @default 2 * Math.PI
         */
        TWO_PI: 2 * Math.PI,

        /**
         * PI divided by two - 90 degrees
         * @memberof cl.Consts
         * @type {number}
         * @default Math.PI / 2
         */
        HALF_PI: Math.PI / 2,

        /**
         * Constant for radians to degrees conversion
         * @memberof cl.Consts
         * @type {number}
         * @default Math.PI / 180
         */
        RAD_TO_DEG: Math.PI / 180
    };

    namespace.Consts = Consts;

})(cl);
/**
 * @module sys/color
 * @description Module describes class to working with color values and strings
 * @author Anton Gnibeda
 */
(function(namespace){
    'use strict';

    /**
     * Class for working with color values and strings
     * @memberof cl
     * @constructor
     * @namespace
     */
    function Color() {
        var t = this;
        t._colors = {
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

        t._defs = [
            {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*\.?\d*)\)$/,
                example: ['rgba(123, 234, 45, 255)', 'rgba(255,234,245,255)'],
                process: function (bits){
                    return [
                        parseInt(bits[1]),
                        parseInt(bits[2]),
                        parseInt(bits[3])
                    ];
                }
            },
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
                re: /^(\w)(\w)(\w)$/,
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
    }

    /**
     * Converts color name to hex color string
     * @param {string} colorName Color name
     * @returns {string} Color hex string
     * @example
     * var c = cl.Color.fromString("red");
     * console.log(c); // "#ff0000"
     * c = cl.Color.fromString("saddlebrown");
     * console.log(c); // "#8b4513"
     */
    Color.prototype.fromString = function(colorName) {
        var t = this;
        if (t._colors[colorName]) return "#" + t._colors[colorName];
        return colorName;
    };

    /**
     * Convert RGB values to hex color string
     * @param {number} red Red value [0..255]
     * @param {number} green Green value [0..255]
     * @param {number} blue Blue value [0..255]
     * @returns {string} Color hex string
     * @example
     * var c = cl.Color.toHex(255, 128, 0);
     * console.log(c); // "#ff8000"
     */
    Color.prototype.toHex = function (red, green, blue) {
        var r, g, b;
        r = red.toString(16);
        g = green.toString(16);
        b = blue.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    };

    /**
     * Converts color hex string or color name to RGB values
     * @param {string} color Color hex string or color name
     * @returns {{r: number, g: number, b: number}} rgb RGB values
     * @example
     * var v = cl.Color.toRGB("red");
     * console.log(v); // {r: 255, g: 0, b: 0}
     * v = cl.Color.toRGB("#8000FF");
     * console.log(v); // {r: 128, g: 0, b: 255}
     */
    Color.prototype.toRGB = function (color) {
        var t = this;
        // Strip any leading #
        if (color.charAt(0) == '#') color = color.substr(1,6);
        color = color.replace(/ /g,'').toLowerCase();
        // Find by name if exists
        if (t._colors[color]) color = t._colors[color];

        var r, g, b;
        for (var i = 0; i < t._defs.length; i++) {
            var re = t._defs[i].re;
            var processor = t._defs[i].process;
            var bits = re.exec(color);
            if (bits) {
                var channels = processor(bits);
                r = channels[0];
                g = channels[1];
                b = channels[2];
            }
        }

        // Validate/cleanup values
        r = (r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r);
        g = (g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g);
        b = (b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b);

        return {r: r, g: g, b: b};
    };

    namespace.Color = new Color();

})(cl);
/**
 * @module events/event
 * @description Module contains event class and event names constants.
 * @author Anton Gnibeda
 */
(function(namespace) {
    'use strict';


    /**
     * Represent event class
     * @memberof cl
     * @constructor
     *
     * @property {number} x X coordinate in chart space
     * @property {number} y Y coordinate in chart space
     * @property {cl.Shape|Array<cl.Shape>} target Shapes affected by event
     * @property {Object} originalEvent Original event
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
        deselect: "deselect",

        /**
         * Name for drag start event
         * @default "dragstart"
         * @memberOf cl.Event
         */
        dragStart: "dragstart",

        /**
         * Name for drag end event
         * @default "dragend"
         * @memberOf cl.Event
         */
        dragEnd: "dragend"
    };

    cl.Utils.merge(Event, eventNames);

    namespace.Event = Event;
})(cl);

/**
 * @module events/eventManager
 * @description Module contains event manager class. Contains all chart events processing code
 * @author Anton Gnibeda
 */
(function(namespace) {
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

        // Private
        t._event = new cl.Event();
        t._listeners = {};
        t._hoveredShape = null;
        t._pressedShape = null;
        t._prevClickTime = null;
        t._clickTimeout = null;

        // Properties
        t.chart = chart;
        t.mouseX = 0;
        t.mouseY = 0;
        t.mouseDown = false;

        // Create arrays in listeners for each event
        for (var name in cl.Event) if (cl.Event.hasOwnProperty(name)) t._listeners[cl.Event[name]] = [];

        /**
         * On mouse down event handler
         * @param {Object} e Event
         * @private
         */
        t._onMouseDown = function(e) {
            t.mouseDown = true;
            t._callListeners(cl.Event.mouseDown, e);

            // Save shape for click and double click event
            if (t.hasListener(cl.Event.click) || t.hasListener(cl.Event.doubleClick)) {
                t._pressedShape = t.chart.selector.shapeFromPoint(e.offsetX, e.offsetY);
            }
        };

        /**
         * On mouse up event handler
         * @param {object} e Event
         * @private
         */
        t._onMouseUp = function(e) {
            if (!t.mouseDown && e.currentTarget === document) return;
            t.mouseDown = false;
            t._callListeners(cl.Event.mouseUp, e);
            // Stop event propagation, no need to fire document onMouseUp
            e.stopPropagation();

            if (t.hasListener(cl.Event.click) || t.hasListener(cl.Event.doubleClick)) {
                var shape = t.chart.selector.shapeFromPoint(e.offsetX, e.offsetY);
                if (t._pressedShape === shape) t._requestClick(e, t._pressedShape);
            }
        };

        /**
         * On mouse move event handler
         * @param {Object} e Event
         * @private
         */
        t._onMouseMove = function(e) {
            t.mouseX = e.offsetX;
            t.mouseY = e.offsetY;
            if (t.hasListener(cl.Event.shapeOver) || t.hasListener(cl.Event.shapeOut)) {
                var h = t.chart.selector.shapeFromPoint(t.mouseX, t.mouseY);
                if (h) {
                    if (t._hoveredShape !== h) t._callListeners(cl.Event.shapeOver, e, h);
                } else {
                    if (t._hoveredShape !== null) t._callListeners(cl.Event.shapeOut, e, t._hoveredShape);
                }
                t._hoveredShape = h;
            }
            t._callListeners(cl.Event.mouseMove, e);
        };

        // Bind all mouse event listeners to screen canvas element
        t._bindBaseEventListeners();
    }

    /**
     * Function used to request click or double click event
     * @param {Object} e Event
     * @param {cl.Shape|Array<cl.Shape>} [target] Shape affected by event
     * @private
     */
    EventManager.prototype._requestClick = function (e, target) {
        var t = this;
        var curTime = Date.now();
        // If second click was made in less time than DOUBLE_CLICK_DELAY - do double click
        if (t._prevClickTime && curTime - t._prevClickTime < EventManager.DOUBLE_CLICK_DELAY) {
            if (t._clickTimeout) clearTimeout(t._clickTimeout);
            t._callListeners(cl.Event.doubleClick, e, target);
        }
        else {
            // Otherwise set timeout for single click
            if (t._clickTimeout) clearTimeout(t._clickTimeout);
            t._clickTimeout = setTimeout(function() {
                t._clickTimeout = null;
                t._callListeners(cl.Event.click, e, target);
            }, EventManager.DOUBLE_CLICK_DELAY);
        }
        t._prevClickTime = curTime;
    };

    /**
     * Adds event listener
     * @param {string} event Event name. See {@link cl.Event} members
     * @param {function} callback Event callback
     */
    EventManager.prototype.addEventListener = function(event, callback) {
        var t = this;
        if (!t._listeners[event]) throw new Error(cl.Lang.get("errUnknownEvent", event));
        if (t._listeners[event].indexOf(callback) !== -1) return;
        t._listeners[event].push(callback);
    };

    /**
     * Removes event listener
     * @param {string} event Event name. See {@link cl.Event} members
     * @param {function} callback Event callback
     */
    EventManager.prototype.removeEventListener = function(event, callback) {
        var t = this;
        if (!t._listeners[event]) throw new Error(cl.Lang.get("errUnknownEvent", event));
        var idx = t._listeners[event].indexOf(callback);
        if (idx !== -1) t._listeners[event].splice(idx, 1);
    };

    /**
     * Call event listeners by event name
     * @param {string} eventName Event name
     * @param {Object} e Original event
     * @param {cl.Shape|Array<cl.Shape>} [target] Shape affected by event
     * @param {number} [xPos] X coordinate in axis space
     * @param {number} [yPos] Y coordinate in axis space
     * @private
     */
    EventManager.prototype._callListeners = function(eventName, e, target, xPos, yPos) {
        var t = this;
        if (!t.hasListener(eventName)) return;
        var x, y;
        if (xPos === undefined) x = t.chart.xAxis.toAxis(e ? e.offsetX : undefined); else x = xPos;
        if (yPos === undefined) y = t.chart.yAxis.toAxis(e ? e.offsetY : undefined); else y = yPos;

        t._event.x = x;
        t._event.y = y;
        t._event.target = target;
        t._event.originalEvent = e;
        for (var i = 0, l = t._listeners[eventName].length; i < l; i++) t._listeners[eventName][i](t._event);
    };

    /**
     * Check if manager have any event listeners for specified event
     * @param {string} eventName Event name
     * @returns {boolean} True if has event listeners
     */
    EventManager.prototype.hasListener = function(eventName) {
        return this._listeners[eventName].length !== 0;
    };


    /**
     * Bind all mouse event listeners to screen canvas element
     * @private
     */
    EventManager.prototype._bindBaseEventListeners = function() {
        var t = this;
        var el = t.chart.screen.el;
        el.addEventListener(cl.Event.mouseMove, t._onMouseMove);
        el.addEventListener(cl.Event.mouseDown, t._onMouseDown);
        el.addEventListener(cl.Event.mouseUp, t._onMouseUp);
        document.addEventListener(cl.Event.mouseUp, t._onMouseUp);
    };

    /**
     * Unbind all mouse event listeners to screen canvas element
     * @private
     */
    EventManager.prototype._unbindBaseEventListeners = function() {
        var t = this;
        var el = this.chart.screen.el;
        el.removeEventListener(cl.Event.mouseMove, t._onMouseMove);
        el.removeEventListener(cl.Event.mouseDown, t._onMouseDown);
        el.removeEventListener(cl.Event.mouseUp, t._onMouseUp);
        document.removeEventListener(cl.Event.mouseUp, t._onMouseUp);
    };

    /**
     * Destroys event manager
     */
    EventManager.prototype.destroy = function() {
        var t = this;
        t.chart = null;
        t._event = null;
        t._listeners = null;
        t._unbindBaseEventListeners();
    };

    /**
     * Double click check delay. Time in ms when second click is considered as double click.
     * @type {number}
     * @default 300
     * @const
     */
    EventManager.DOUBLE_CLICK_DELAY = 300;

    namespace.EventManager = EventManager;
})(cl);

/**
 * @module layer
 * @description Module describes base layer class. All managers and layers are inherited from this class
 * @author Anton Gnibeda
 */
(function(namespace){
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
     * @property {cl.Canvas} surface Layer canvas
     */
    function Layer(chart) {
        var t = this;

        t.chart = chart;
        t.options = {
            visible: true
        };
        t.surface = new cl.Canvas(chart.width, chart.height);
        t.dirtyFlagName = "";

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
     * Apply all changes to layer. This will cause layer redraw on next frame render
     */
    Layer.prototype.apply = function () {
        if (!this.chart) return;
        this.chart._setDirtyFlag(this.dirtyFlagName);
        this.chart.redraw();
    };

    /**
     * Renders layer
     * @private
     */
    Layer.prototype._render = function () {

    };

    /**
     * Will resize layer
     * @param {number} width New layer width
     * @param {number} height New layer height
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

    namespace.Layer = Layer;

})(cl);

/**
 * @module axis/axis
 * @description Module contains axis class
 * @author Anton Gnibeda
 */
(function(namespace) {
    'use strict';

    /**
     * Represent axis class
     * @constructor
     * @memberof cl
     *
     * @param {cl.AxisManager} axisManager Parent axis manager
     * @param {object} [options]
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
     * @param {Array} [options.style.lineDash=[]] A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
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
     * @param {number} [options.labels.big.margin=0] Text offset in th plane of the axis
     * @param {object} [options.labels.small] Small interval labels
     * @param {number} [options.labels.small.size=8] Label size
     * @param {number} [options.labels.small.align="center"] Label align. "center", "left", "right", "top", "bottom"
     * @param {number} [options.labels.small.font=cl.Consts.FONT_NAME] Label font name
     * @param {number} [options.labels.small.color=cl.Consts.COLOR_GRAY] Label color
     * @param {string} [options.labels.small.style=""] Label font style. "bold", "italic", "bold italic"
     * @param {number} [options.labels.small.opacity=1] Label opacity
     * @param {string} [options.labels.small.before=""] Text that will be inserted before label text
     * @param {string} [options.labels.small.after=""] Text that will be inserted after label text
     * @param {number} [options.labels.small.margin=0] Text offset in th plane of the axis
     *
     * @param {object} [options.grid] Grid lines settings
     * @param {object} [options.grid.big] Grid lines settings for big interval
     * @param {number} [options.grid.big.width=1] Line width. Set 0 to hide lines
     * @param {Array} [options.grid.big.dash=[3,3]] Line dash style. A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
     * @param {string} [options.grid.big.color="#BEBEBE"] Line color
     * @param {number} [options.grid.big.opacity=0.5] Line opacity
     * @param {object} [options.grid.small] Grid lines settings for big interval
     * @param {number} [options.grid.small.width=1] Line width. Set 0 to hide lines
     * @param {Array} [options.grid.small.dash=[10,10]] Line dash style. A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
     * @param {string} [options.grid.small.color="#EFEFEF"] Line color
     * @param {number} [options.grid.small.opacity=0.5] Line opacity
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
                    after: "",
                    margin: 0
                },
                small: {
                    size: 8,
                    align: "bottom",
                    font: cl.Consts.FONT_NAME,
                    color: cl.Consts.COLOR_GRAY,
                    style: "",
                    opacity: 1,
                    before: "",
                    after: "",
                    margin: 0
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
    }

    /**
     * Returns big tick interval
     * @returns {number} Tick interval
     */
    Axis.prototype.getTickInterval = function() {
        return this.options.ticks.big.interval;
    };

    /**
     * Sets big tick interval
     * @param {number} interval Tick interval
     * @returns {cl.Axis} this
     */
    Axis.prototype.setTickInterval = function(interval) {
        var t = this;
        t.options.ticks.big.interval = interval;
        return t;
    };

    /**
     * Returns small tick interval
     * @returns {number} Tick interval
     */
    Axis.prototype.getTickIntervalSmall = function() {
        return this.options.ticks.small.interval;
    };

    /**
     * Sets small tick interval
     * @param {number} interval Tick interval
     * @returns {cl.Axis} this
     */
    Axis.prototype.setTickIntervalSmall = function(interval) {
        var t = this;
        t.options.ticks.small.interval = interval;
        return t;
    };

    /**
     * Hide axis
     * @returns {cl.Axis} this
     */
    Axis.prototype.hide = function() {
        var t = this;
        t.options.visible = false;
        return t;
    };

    /**
     * Show axis
     * @returns {cl.Axis} this
     */
    Axis.prototype.show = function() {
        var t = this;
        t.options.visible = true;
        return t;
    };

    /**
     * Returns title style
     * @returns {string} Title style
     */
    Axis.prototype.getTitleStyle = function() {
        return this.options.title.style;
    };

    /**
     * Sets title style
     * @param {string} style Title style. "bold", "italic", "bold italic"
     * @returns {cl.Axis} this
     */
    Axis.prototype.setTitleStyle = function(style) {
        var t = this;
        t.options.title.style = style;
        return t;
    };

    /**
     * Returns title color
     * @returns {string} Title color
     */
    Axis.prototype.getTitleColor = function() {
        return this.options.title.color;
    };

    /**
     * Sets title color
     * @param {string} color Title color
     * @returns {cl.Axis} this
     */
    Axis.prototype.setTitleColor = function(color) {
        var t = this;
        t.options.title.color = color;
        return t;
    };

    /**
     * Returns title font
     * @returns {string} Title font
     */
    Axis.prototype.getTitleFont = function() {
        return this.options.title.font;
    };

    /**
     * Sets title font
     * @param {string} font Title font
     * @returns {cl.Axis} this
     */
    Axis.prototype.setTitleFont = function(font) {
        var t = this;
        t.options.title.font = font;
        return t;
    };

    /**
     * Returns title font size
     * @returns {number} Title font size
     */
    Axis.prototype.getTitleSize = function() {
        return this.options.title.size;
    };

    /**
     * Sets title font size
     * @param {number} fontSile Title font size
     * @returns {cl.Axis} this
     */
    Axis.prototype.setTitleSize = function(fontSile) {
        var t = this;
        t.options.title.size = fontSile;
        return t;
    };

    /**
     * Returns title align
     * @returns {string} Title align
     */
    Axis.prototype.getTitleAlign = function() {
        return this.options.title.align;
    };

    /**
     * Sets title align
     * @param {string} align Title align
     * @returns {cl.Axis} this
     */
    Axis.prototype.setTitleAlign = function(align) {
        var t = this;
        t.options.title.align = align;
        return t;
    };

    /**
     * Sets axis color
     * @param {string} color Axis color
     * @returns {cl.Axis} this
     */
    Axis.prototype.setColor = function(color) {
        var t = this;
        t.options.style.color = color;
        return t;
    };

    /**
     * Returns axis color
     * @returns {string} Axis color
     */
    Axis.prototype.getColor = function() {
        return this.options.style.color;
    };

    /**
     * Returns axis margins
     * @returns {object} margin Axis margin
     */
    Axis.prototype.getMargins = function(){
        var t = this;
        return {
            start: t.options.margin.start,
            end: t.options.margin.end
        };
    };

    /**
     * Sets axis margin in pixels
     * @param {number} start Start margin
     * @param {number} end End margin
     */
    Axis.prototype.setMargins = function(start, end) {
        var t = this;
        t.options.margin.start = start;
        t.options.margin.end = end;
        return t;
    };

    /**
     * Sets axis offset in units of opposite axis
     * @param {number} offset Axis offset
     * @returns {cl.Axis} this
     */
    Axis.prototype.setOffset = function(offset) {
        var t = this;
        t.options.offset = offset;
        return t;
    };

    /**
     * Returns axis offset in units of opposite axis
     * @returns {number} Axis offset
     */
    Axis.prototype.getOffset = function() {
        return this.options.offset;
    };

    /**
     * Returns maximum value of axis
     * @returns {number} Maximum value of axis
     */
    Axis.prototype.getMax = function() {
        return this.options.max;
    };

    /**
     * Returns minimum value of axis
     * @returns {number} Minimum value of axis
     */
    Axis.prototype.getMin = function() {
        return this.options.min;
    };

    /**
     * Sets maximim value of axis
     * @param {number} max Maximim value
     * @returns {cl.Axis} this
     */
    Axis.prototype.setMax = function(max) {
        var t = this;
        t.options.max = max;
        return t;
    };

    /**
     * Sets minimum value of axis
     * @param {number} min Minimum value
     * @returns {cl.Axis} this
     * @memberof cl.Axis.prototype
     */
    Axis.prototype.setMin = function(min) {
        var t = this;
        t.options.min = min;
        return t;
    };

    /**
     * Sets axis name
     * @param {string} name Name of axis
     * @returns {cl.Axis} this
     */
    Axis.prototype.setName = function(name) {
        var t = this;
        t.options.name = name;
        return t;
    };

    /**
     * Returns axis name
     * @returns {string}
     */
    Axis.prototype.getName = function() {
        return this.options.name;
    };

    /**
     * Renders axis to canvas object
     * @param {cl.Canvas} canvas Canvas object to draw axis
     * @private
     */
    Axis.prototype._render = function(canvas) {
        var t = this;
        if (!t.options) return;
        if (!t.options.visible) return;
        var o = t.options;
        var k, x, offset;

        var isY = t.options.type == "y";

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
            canvas.ctx.translate(t.chart.xAxis.toScreen(offset), 0);
            canvas.ctx.rotate(cl.Consts.HALF_PI);
        } else {
            offset = t.options.offset;
            canvas.ctx.translate(0, t.chart.yAxis.toScreen(offset));
        }
        canvas.save();
        if (o.style.lineDash.length !== 0) canvas.setLineDash(o.style.lineDash);

        // Draw axis line
        canvas.drawLine(t.toScreen(o.min), 0, t.toScreen(o.max), 0);
        canvas.restore();
        if (o.style.arrowSize !== 0) canvas.drawArrow(t.toScreen(o.max), 0, isY ? Math.PI : 0, o.style.arrowSize);

        ///////////////////////////////////// DRAW TICKS AND GRID //////////////////////////////////////////////////

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
        //total = o.max - o.min;
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
                    if (o.ticks.big.size !== 0) {
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
                    if (o.ticks.small.size !== 0) {
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
        //total = o.max - o.min;
        while (k <= o.max) {
            x = Math.floor(t.toScreen(k));
            if ((k / o.ticks.big.interval) === parseInt((k / o.ticks.big.interval).toFixed(0))) {
                if (o.labels.big.size !== 0) {
                    if ((k + o.ticks.big.interval <= o.max || o.ticks.big.last) && (k != o.min || o.ticks.big.first)) {
                        x += (o.type === "y" ? -1 : 1) * o.labels.big.margin;
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
                if (o.labels.small.size !== 0) {
                    if ((k + o.ticks.big.interval <= o.max || o.ticks.small.last) && (k != o.min + o.ticks.small.interval || o.ticks.small.first)) {
                        x += (o.type === "y" ? -1 : 1) * o.labels.small.margin;
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
    };

    /**
     * Converts screen value to axis space
     * @param {number} value Value on screen
     * @returns {number} Axis coordinate
     */
    Axis.prototype.toAxis = function(value) {
        var t = this;
        if (!t.chart) throw cl.Lang.get("errAxisHaveNoChart");
        var k = t.chart.width;
        if (t.options.type === "x") {
            return t.options.min + (value - t.options.margin.start) / (k - t.options.margin.start - t.options.margin.end) * (t.options.max - t.options.min);
        } else {
            k = t.chart.height;
            value = k - value;
            return t.options.min + (value - t.options.margin.start) / (k - t.options.margin.start - t.options.margin.end) * (t.options.max - t.options.min);
        }
    };

    /**
     * Converts axis value to screen space
     * @param {number} value Value on axis
     * @returns {number} Pixel coordinate
     */
    Axis.prototype.toScreen = function(value) {
        var t = this;
        if (!t.chart) throw cl.Lang.get("errAxisHaveNoChart");
        var k = t.chart.width;
        if (t.options.type === "x") {
            return t.options.margin.start +  (value - t.options.min) / (t.options.max - t.options.min) *  (k - t.options.margin.start - t.options.margin.end);
        } else {
            k = t.chart.height;
            return t.chart.height - (t.options.margin.start +  (value - t.options.min) / (t.options.max - t.options.min) *  (k - t.options.margin.start - t.options.margin.end));
        }
    };

    /**
     * Applies option changes and request chart for axis redraw
     * @returns {cl.Axis} this
     */
    Axis.prototype.apply = function() {
        var t = this;
        t.parent.apply();
        return t;
    };

    /**
     * Sets axis line width in pixels
     * @param {number} w
     * @returns {cl.Axis} this
     * @example
     * axis.setLineWidth(2).apply();
     */
    Axis.prototype.setLineWidth = function(w) {
        var t = this;
        t.options.style.lineWidth = w;
        return t;
    };

    /**
     * Returns axis line width
     * @returns {number} Line width
     */
    Axis.prototype.getLineWidth = function() {
        return this.options.style.lineWidth;
    };

    /**
     * Destroys axis
     */
    Axis.prototype.destroy = function() {
        var t = this;
        t.options = null;
        t.chart = null;
    };

    namespace.Axis = Axis;

})(cl);


/**
 * @module axis/axisManager
 * @description Module contains axis manager class
 * @author Anton Gnibeda
 */
(function(namespace) {
    'use strict';

    /**
     * Represent axis manager class
     * @constructor
     * @extends cl.Layer
     * @memberOf cl
     *
     * @param {cl.Chart} chart Parent chart
     *
     * @property {cl.Chart} chart Parent chart
     * @property {Array.<cl.Axis>} items Axis items
     * @property {number} count Axis count
     */
    function AxisManager(chart) {
        var t = this;
        t.constructor.superclass.constructor.call(t, chart);

        t.chart = chart;
        t.items = [];
        t.dirtyFlagName = "axis";
        Object.defineProperties(t, {
            count: { get: function() { return t.items.length; } }
        });
    }

    cl.Utils.extend(AxisManager, cl.Layer);

    /**
     * Renders all axis on surface
     * @override
     * @private
     */
    AxisManager.prototype._render = function() {
        var i, l, t = this;
        t.surface.resetTransform();
        t.surface.clear();
        for (i = 0, l = t.items.length; i < l; i++) t.items[i]._render(t.surface);

        t.constructor.superclass._render.call(t, t.surface);
    };

    /**
     * Adds axis
     * @param {Object} axisOptions Axis settings. See "options" in {@link cl.Axis} constructor
     * @returns {cl.Axis} New axis
     */
    AxisManager.prototype.add = function(axisOptions) {
        var t = this;
        var axis = new cl.Axis(t, axisOptions || {});
        t.items.push(axis);
        t.apply();
        return axis;
    };

    /**
     * Returns axis with specified index or name. Will return first axis with name. Returns undefined if axis was not found
     * @param {number|string} indexOrName or axis name
     * @returns {cl.Axis}
     */
    AxisManager.prototype.get = function(indexOrName) {
        var i, l, t = this;
        if (typeof indexOrName === "string") {
            for (i = 0, l = t.items.length; i < l; i++) if (t.items[i].getName() === indexOrName) return t.items[i];
        } else return t.items[indexOrName];
    };

    /**
     * Removes axis
     * @param {cl.Axis|string|number} axis Axis itself or axis name, or axis index
     */
    AxisManager.prototype.remove = function(axis) {
        var t = this;
        if (axis === null || axis === undefined) return;
        switch (typeof axis) {
            case "object": {
                t._removeAxis(axis);
                break;
            }
            default: {
                t._removeAxis(t.get(axis));
                break;
            }
        }
    };

    /**
     * Removes axis from items
     * @param {cl.Axis} axis Axis
     * @private
     */
    AxisManager.prototype._removeAxis = function(axis) {
        var t = this;
        if (!axis) return;
        // Deny base axis remove
        if (axis === t.chart.xAxis || axis === t.chart.yAxis) throw cl.Lang.get("errDelBaseAxis", axis.options.type);
        var idx = t.items.indexOf(axis);
        if (idx === -1 || !t.items[idx]) return;
        t.items.splice(idx, 1);
        t.apply();

        axis.destroy();
    };

    /**
     * Destroys axis manager
     * @override
     */
    AxisManager.prototype.destroy = function() {
        var i, l, t= this;
        for (i = 0, l = t.items.length; i < l; i++) t.items[i].destroy();

        t.items = null;

        t.constructor.superclass.destroy.call(t);
    };

    namespace.AxisManager = AxisManager;

})(cl);

/**
 * @module background
 * @description Module describes background class
 * @author Anton Gnibeda
 */
(function(namespace) {
    'use strict';

    /**
     * Represent background class
     *
     * @constructor
     * @extends cl.Layer
     * @memberof cl
     *
     * @param {cl.Chart} chart Parent chart
     * @param {object} [options] Background settings
     * @param {string} [options.url] Background url or base64 string
     * @param {boolean} [options.visible=true] Is background visible or not
     * @param {number} [options.fit=cl.Background.FIT_ALL] Background fit type. Can be:<br><b>cl.Background.FIT_NONE = 0</b>; no fit, image size not changed<br><b>cl.Background.FIT_STRETCH = 1</b>; stretch image to fit chart size<br><b>cl.Background.FIT_ALL = 2</b>; image will be scaled to fit chart size using aspect ratio<br><b>cl.Background.FIT_FILL = 2</b>; image will be scaled to fill all chart using aspect ratio
     *
     * @param {object} [options.align] Background align
     * @param {string} [options.align.x="left"] Horizontal align. "left", "right", "center"
     * @param {string} [options.align.y="bottom"] Vertical align. "top", "bottom", "middle"
     *
     * @param {object} [options.pos] Background position
     * @param {number} [options.pos.x=0] X coordinate in axis units of background position
     * @param {number} [options.pos.y=0] Y coordinate in axis units of background position
     *
     * @property {object} image Background image
     * @property {boolean} isLoaded Is image loaded or not
     * @property {object} options Background settings. Same as "options" in constructor
     */
    function Background(chart, options) {
        var t = this;
        t.constructor.superclass.constructor.call(t, chart);

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

        // Load image
        if (t.options.url) t.setImage(t.options.url);
    }

    cl.Utils.extend(Background, cl.Layer);


    /**
     * Sets background fit style
     * @param {number} fit Fit style. See "options.fit" in constructor for details
     * @returns {cl.Background} this
     */
    Background.prototype.setFit = function(fit) {
        var t = this;
        t.options.fit = fit;
        return t;
    };

    /**
     * Renders background
     * @override
     * @private
     */
    Background.prototype._render = function() {
        var t = this;
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

        t.constructor.superclass._render.call(t);
    };

    /**
     * Sets background image
     * @param {string} url image url or base64 string
     */
    Background.prototype.setImage = function(url) {
        var t = this;
        t.image = new Image();
        t.isLoaded = false;
        // After image is loaded - redraw layer
        t.image.onload = function() {
            t.isLoaded = true;
            t.apply();
        };
        t.image.src = url;
    };

    /**
     * Destroys background
     * @override
     */
    Background.prototype.destroy = function() {
        var t = this;
        t.image = null;
        t.constructor.superclass.destroy.call(t);
    };

    // Constants for fit
    /**
     * Don't fit image, draws in original size
     * @type {number}
     * @default 0
     */
    Background.FIT_NONE = 0;
    /**
     * Stretch image to fit area, don't save aspect ratio
     * @type {number}
     * @default 0
     */
    Background.FIT_STRETCH = 1;
    /**
     * Fit whole image to area, save aspect ratio
     * @type {number}
     * @default 0
     */
    Background.FIT_ALL = 2;
    /**
     * Fit image to fill whole area, save aspect ratio
     * @type {number}
     * @default 0
     */
    Background.FIT_FILL = 3;

    namespace.Background = Background;

})(cl);

/**
 * @module canvas
 * @description Module describes canvas class
 * @author Anton Gnibeda
 */
(function(namespace){
    'use strict';

    /**
     * Represent canvas object with specified width and height
     *
     * @constructor
     * @memberof cl
     *
     * @param {number} width Width of canvas
     * @param {number} height Height of canvas
     *
     * @property {Element} el Canvas DOM element
     * @property {Object} ctx Canvas 2d context
     */
    function Canvas(width, height) {
        var t = this;

        // Private
        t._currentLineWidth = 0;
        t._pixelOffset = 0; // Used to solve "blurred lines" issue

        // Properties
        t.el = document.createElement("canvas");
        t.ctx = this.el.getContext('2d');
        Object.defineProperties(t, {
            width: { get: function() { return t.el.width; } },
            height: { get: function() { return t.el.height; } }
        });

        // Set size
        t.resize(width, height);
    }

    /**
     * Sets canvas line dash style
     * @param {Array} dash A list of numbers that specifies distances to alternately draw a line and a gap. For example: [5, 15]
     */
    Canvas.prototype.setLineDash = function(dash) {
        var t = this;
        if (t.ctx.setLineDash) t.ctx.setLineDash(dash);
    };

    /**
     * Restores canvas state
     */
    Canvas.prototype.restore = function() {
        this.ctx.restore();
    };

    /**
     * Saves canvas state
     */
    Canvas.prototype.save = function() {
        this.ctx.save();
    };

    /**
     * Sets fill color
     * @param {string} color Color
     */
    Canvas.prototype.setFillColor = function(color) {
        this.ctx.fillStyle = color;
    };

    /**
     * Restores canvas translation after 1px blurred lines fix
     */
    Canvas.prototype.restoreLineFix = function() {
        var t = this;
        t._currentLineWidth = null;
        if (t._pixelOffset !== 0) t.ctx.translate(-t._pixelOffset, -t._pixelOffset);
        t._pixelOffset = 0;
    };

    /**
     * Sets line style
     * @param {number} width Line width
     * @param {string} [color=black] Line color
     * @param {boolean} [ignoreBlurFix=false] True to ignore fix for 1px blurred lines
     */
    Canvas.prototype.setLineStyle = function(width, color, ignoreBlurFix) {
        var t = this;
        var col = color || cl.Consts.COLOR_BLACK;
        t.ctx.lineWidth = width;
        t.ctx.strokeStyle = col;

        if (ignoreBlurFix) return;
        if (Math.abs(t._currentLineWidth - width) > 0.001) {
            t._currentLineWidth = width;
            var translate = (width % 2) / 2;
            if (Math.abs(t._pixelOffset - translate) > 0.001) {
                t.ctx.translate(-t._pixelOffset, -t._pixelOffset);
                t._pixelOffset = translate;
                t.ctx.translate(t._pixelOffset, t._pixelOffset);
            }
        }
    };

    /**
     * Draws text
     * @param {string} text Text to draw
     * @param {number} x X coordinate
     * @param {number} y Y coordinate
     * @param {number} [size=cl.Consts.FONT_SIZE(14)] Font size
     * @param {string} [align="left"] Text align: "left", "right", "center"
     * @param {string} [valign="top"] Text vertical align: "top", "bottom", "middle"
     * @param {string} [fontName=cl.Consts.FONT_NAME(Arial)] Font name
     * @param {string} [style] Text style. "bold", "italic", "bold italic"
     * @param {number} [width] Fit text to specified width
     */
    Canvas.prototype.drawText = function(text, x, y, size, align, valign, fontName, style, width) {
        var t = this;
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
    };

    /**
     * Draws arrow
     * @param {number} x X coordinate
     * @param {number} y Y coordinate
     * @param {number} rotation Angle rotation in radians
     * @param {number} len Arrow length in pixels
     * @param {number} [arrowAngle=Math.PI / 10] Arrow left and right angle in radians
     */
    Canvas.prototype.drawArrow = function(x, y, rotation, len, arrowAngle) {
        var dx, dy, aa, t = this;
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
    };

    /**
     * Draws rectangle on canvas
     * @param {number} x1 First point X coordinate
     * @param {number} y1 First point Y coordinate
     * @param {number} x2 Second point X coordinate
     * @param {number} y2 Second point Y coordinate
     * @param {number} r Border radius
     * @param {boolean} [dontCreatePath] If true, function will not call "beginPath" and "stroke". Used in batch draws
     */
    Canvas.prototype.drawRect = function(x1, y1, x2, y2, r, dontCreatePath) {
        var sx, sy, ex, ey, t = this;
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
            t.ctx.arc(ex - r, ey - r, r, 0, cl.Consts.RAD_TO_DEG * 90, false);
            t.ctx.lineTo(sx + r, ey);
            t.ctx.arc(sx + r, ey - r, r, cl.Consts.RAD_TO_DEG * 90, cl.Consts.RAD_TO_DEG * 180, false);
            t.ctx.lineTo(sx, sy + r);
            t.ctx.arc(sx + r, sy + r, r, cl.Consts.RAD_TO_DEG * 180, cl.Consts.RAD_TO_DEG * 270, false);
            if (!dontCreatePath) t.ctx.closePath();
        } else {
            t.ctx.rect(sx, sy, ex - sx, ey - sy);
        }
    };

    /**
     * Draws circle on canvas
     * @param {number} x X coordinate
     * @param {number} y Y coordinate
     * @param {number} r Circle radius
     */
    Canvas.prototype.drawCircle = function(x, y, r) {
        this.ctx.arc(x, y, r, 0, cl.Consts.TWO_PI, false);
    };

    /**
     * Draws line on canvas
     * @param {number} x1 First point X coordinate
     * @param {number} y1 First point Y coordinate
     * @param {number} x2 Second point X coordinate
     * @param {number} y2 Second point Y coordinate
     * @param {boolean} [dontCreatePath=false] If true, function will not call "beginPath" and "stroke". Used in batch draws
     */
    Canvas.prototype.drawLine = function(x1, y1, x2, y2, dontCreatePath) {
        var t = this;
        if (!dontCreatePath) t.ctx.beginPath();
        t.ctx.moveTo(x1, y1);
        t.ctx.lineTo(x2, y2);
        if (!dontCreatePath) t.ctx.stroke();
    };

    /**
     * Sets global alpha value
     * @param {number} alpha Alpha value
     */
    Canvas.prototype.setAlpha = function(alpha) {
        var t = this;
        t.ctx.globalAlpha = alpha;
    };

    /**
     * Resets canvas transform
     */
    Canvas.prototype.resetTransform = function() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Draws another canvas on this
     * @param {object} canvas
     * @param {number} [x=0] X coordinate
     * @param {number} [y=0] Y coordinate
     * @memberof cl.Canvas.prototype
     */
    Canvas.prototype.draw = function(canvas, x, y) {
        this.ctx.drawImage(canvas.el, x || 0, y || 0);
    };

    /**
     * Clears canvas
     */
    Canvas.prototype.clear = function() {
        var t = this;
        if (t._pixelOffset !== 0) t.ctx.translate(-t._pixelOffset, -t._pixelOffset);
        t.ctx.clearRect(-1, -1, t.width+1, t.height+1);
        if (t._pixelOffset !== 0) t.ctx.translate(t._pixelOffset, t._pixelOffset);
    };

    /**
     * Resize canvas
     * @param {number} width New width
     * @param {number} height New height
     */
    Canvas.prototype.resize = function(width, height) {
        var t = this;
        t.el.width = width;
        t.el.height = height;
    };

    /**
     * Destroys canvas
     */
    Canvas.prototype.destroy = function() {
        var t = this;
        if (t.el.parentNode) t.el.parentNode.removeChild(t.el);
        t.ctx = null;
        t.el = null;
    };

    namespace.Canvas = Canvas;

})(cl);

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
     * @property {Array<cl.Shape>} selection Current selection
     */
    function Selector(chart, options) {
        var t = this;
        cl.Layer.call(t, chart);

        // Public fields
        t.selection = [];
        t.hover = null;
        t.dirtyFlagName = "sel";
        // TODO: wrong hover offset when rendering
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
            hovers = [], // Store hovered shapes for animations
            click = {down: null, up: null}; // Store shapes to call click evet. Down - shape o mouse down, up - shape on mouse up

        // Public methods
        t.resize = resize;
        t._render = render;
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
            t.chart.events._callListeners(cl.Event.deselect, null, t.selection);
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
            // TODO: add hovers to animate
            //if (t.hover && t.hover.props.hover.animation) addHover(t.hover);
            t.apply();
        }

        function addHover(shape) {
            var idx = hovers.indexOf(shape);
            if (idx === -1) hovers.push(shape);
            // TODO: animate here
        }

        /**
         * Shape out event handler
         * @param {cl.Event} e
         * @private
         */
        function onShapeOut(e) {
            if (drag.active || rect.active) return;
            if (t.hover && ((e.target && e.target.props.cursor) || t.options.hover.showHand)) resetCursor();
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
                t.chart.events._callListeners(cl.Event.select, e.originalEvent, t.selection);
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
                sel[i]._render(drag.layer);
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

            t.chart.events._callListeners(cl.Event.dragStart, e.originalEvent, drag.items);
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
            if (!drag.active && t.hover && t.options.draggable) {
                // Store drag parameters
                drag.prepared = true;
                drag.sx = e.originalEvent.offsetX;
                drag.sy = e.originalEvent.offsetY;
                drag.lx = drag.sx;
                drag.ly = drag.sy;
            } else drag.prepared = false;
            if ((!t.hover || !t.options.draggable) && t.options.selection.enabled && t.options.selection.rect.enabled && t.options.selection.multiple) {
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
                    t.chart.events._callListeners(cl.Event.deselect, e, t.selection);
                else
                    t.chart.events._callListeners(cl.Event.select, e, res);
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
                t.chart.events._callListeners(cl.Event.dragEnd, e.originalEvent, drag.items);
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
                    } else {
                        // Single selection
                        if (t.hover && clickedOnShape) {
                            if (t.selection.length === 1 && t.selection[0] === t.hover) {
                                t.chart.events._callListeners(cl.Event.deselect, e, t.selection);
                                t.selection = [];
                            } else {
                                t.selection = [t.hover];
                                t.chart.events._callListeners(cl.Event.select, e, t.selection);
                            }
                        } else {
                            t.chart.events._callListeners(cl.Event.deselect, e, t.selection);
                            t.selection = [];
                        }
                    }
                    t.apply();
                }

                // Fire click event
                // TODO: move click handler to EventManager
                //if (clickedOnShape) t.chart.events._callListeners(cl.Event.click, e.originalEvent, click.up);
                  //  else if (click.down === null && click.up === null ) t.chart.events._callListeners(cl.Event.click, e.originalEvent, null);
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
            for (i = 0; i < l; i++) if (t.chart.shapes.items[i].hitTestRect(rx, ry, hw, hh)) res.push(t.chart.shapes.items[i]);
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
            for (i = 0; i < l; i++) if (t.chart.shapes.items[i].hitTest(x, y)) res.push(t.chart.shapes.items[i]);
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
                        if (t.hover.props.lineDash && t.hover.props.lineDash.length !== 0) t.surface.setLineDash(t.hover.props.lineDash);
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
                        if (t.hover.props.lineDash && t.hover.props.lineDash.length !== 0) t.surface.setLineDash([]);
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

            t.constructor.superclass._render.call(t);
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
     * @param {number} p Animation progress [0..1]
     * @this current object "props" with animated properties
     */
    Shape.prototype.onAnimationUpdate = function(p) {

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
            // TODO: don't use delete because v8 performance issues with changed objects. Replace property name
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
            // TODO: don't use delete because v8 performance issues with changed objects. Replace property name
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
            // TODO: don't use delete because v8 performance issues with changed objects. Replace property name
            delete this.animProps.borderColor;
        }
        // Create tween for animation
        this.tween = new TWEEN.Tween(this.props)
            .to(this.animProps, animationSpeed || cl.ShapeManager.ANIMATION_DURATION)
            .easing(TWEEN.Easing.Quadratic.Out)
            .delay(cl.ShapeManager.ANIMATION_DELAY)
            .onUpdate(function (time) {
                _this.onAnimationUpdate.apply(this, arguments);
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
     * @param {number} [animationSpeed=cl.ShapeManager.ANIMATION_DURATION] Animation speed in ms
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
        this.animProps = {
            changed: false
        };
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
        if (newProps.color !== undefined && cl.Color.fromString(newProps.color) !== cl.Color.fromString(this.props.color)) {
            this.animProps.color = newProps.color;
            this.animProps.changed = true;
        }
        if (newProps.borderColor !== undefined && cl.Color.fromString(newProps.borderColor) !== cl.Color.fromString(this.props.borderColor)) {
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
    Shape.prototype._render = function(canvas) {

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
/**
 * @module shapes/shapeManager
 * @description Module describes shape manager class
 * @author Anton Gnibeda
 *
 */
(function(namespace) {
    'use strict';

    /**
     * Represent shapes manager class. Stores bubbles, polys and other chart shapes.
     *
     * @constructor
     * @extends cl.Layer
     * @memberOf cl
     *
     * @param {cl.Chart} chart Parent chart
     * @param {Object} [options] Shape manager settings
     *
     * @param {Object} [options.links] Links settings
     * @param {number} [options.links.width=1] Line width
     * @param {string} [options.links.color={@link cl.Consts.COLOR_BLACK}] Link color
     * @param {number} [options.links.opacity=0.5] Link opacity
     *
     * @param {Object} [options.centers] Shapes center display settings
     * @param {boolean} [options.centers.visible=false] Visible or not
     * @param {number} [options.centers.width=1] Line width
     * @param {number} [options.centers.size=3] Radius
     * @param {number} [options.centers.opacity=0.3] Opacity
     * @param {string} [options.centers.color={@link cl.Consts.COLOR_BLACK}] Line color
     *
     * @property {cl.Chart} chart Parent chart
     * @property {Array<cl.Shape>} items Shape array
     * @property {number} count Shapes count
     * @property {boolean} isAnimating True if any shapes is in animation state
     * @property {number} animCount Count of shapes currently animated
     * @property {Object} options Shape manager settings. Same as options in constructor
     * @property {cl.Canvas} surface Layer canvas. All animated shapes will be rendered here
     * @property {cl.Canvas} static Canvas for static shapes. All static shapes will be rendered here
     */
    function ShapeManager(chart, options) {
        var t = this;
        this.constructor.superclass.constructor.call(t, chart);

        // Private fields
        // Indicates that some object moved to(from) static layer. So layer should be redrawn
        t._shouldRedrawStatic = false;
        // Counts objects that currently is animating
        t._animCount = 0;
        // Stores shapes to fast access by id
        t._hash = [];

        // Public fields
        t.chart = chart;
        t.items = [];
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

        // Define properties
        Object.defineProperties(t, {
            animCount: {
                get: function() { return t._animCount; },
                set: function(v) {t._animCount = v; if (t._animCount === 0) t._endAnimation(); }
            },
            isAnimating: { get: function() { return t._animCount !== 0; } },
            count: { get: function() { return t.items.length; } }
        });
    }

    cl.Utils.extend(ShapeManager, cl.Layer);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Renders all axis on surface
     * @override
     */
    ShapeManager.prototype._render = function() {
        var i, l,
            t = this,
            items = t.items;

        // Sort shapes based on zIndex
        if (t.options.zIndexUsage === true) items = t.items.sort(zIndexSorter);

        // Render static shapes if needed
        if (t._shouldRedrawStatic) {
            t._shouldRedrawStatic = false;
            t.static.resetTransform();
            t.static.clear();
            for (i = 0, l = items.length; i < l; i++) if (!items[i].isAnimating) items[i]._render(t.static, t.chart);

            t._renderLinks(t.static, true);
            t._renderCenters(t.static, true);
        }

        // Render animated shapes
        t.surface.resetTransform();
        t.surface.clear();
        t.surface.setAlpha(1);
        t.static.setAlpha(1);
        t.surface.draw(t.static, 0, 0);
        for (i = 0, l = items.length; i < l; i++)  if (items[i].isAnimating) items[i]._render(t.surface, t.chart);
        t._renderLinks(t.surface, false);
        t._renderCenters(t.surface, false);
        t._renderTracks(items);
    };

    /**
     * Renders animated shapes tracks
     * @param {Array<cl.Shape>} items Shapes
     * @private
     */
    ShapeManager.prototype._renderTracks = function(items) {
        var i, l, t = this;
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
    };

    /**
     * Renders links lines
     * @param {cl.Canvas} canvas Canvas
     * @param {boolean} [staticPass=false] Is this static pass or not
     * @private
     */
    ShapeManager.prototype._renderLinks = function(canvas, staticPass) {
        var i, k, l, lc, t = this;
        // TODO: optimize scree coordinate calculation

        canvas.ctx.lineWidth = t.options.links.width;
        canvas.ctx.strokeStyle = t.options.links.color;
        canvas.setAlpha(t.options.links.opacity);
        canvas.ctx.beginPath();

        for (i = 0, l = t.items.length; i < l; i++) {
            var isStatic = !t.items[i].isAnimating;
            if (!isStatic && staticPass) continue;
            lc = t.items[i].props.links.length;
            if (lc === 0) continue;
            var x = t.chart.xAxis.toScreen(t.items[i].getCenterX());
            var y = t.chart.yAxis.toScreen(t.items[i].getCenterY());
            for (k = 0; k < lc; k++) {
                if (t.items[i].props.links[k] == t.items[i].props.id) continue;
                var obj = t.get(t.items[i].props.links[k]);
                if (!obj) continue;
                if (obj.isAnimating && staticPass) continue;
                if (!staticPass && (isStatic && !obj.isAnimating)) continue;
                var tx = t.chart.xAxis.toScreen(obj.props.x);
                var ty = t.chart.yAxis.toScreen(obj.props.y);
                canvas.ctx.moveTo(x, y);
                canvas.ctx.lineTo(tx, ty);
            }
        }
        canvas.ctx.stroke();
        canvas.ctx.closePath();
    };

    /**
     * Renders shapes centers
     * @param {cl.Canvas} canvas Canvas
     * @param {boolean} [staticPass=false] Is this static pass or not
     * @private
     */
    ShapeManager.prototype._renderCenters = function(canvas, staticPass) {
        var i, l, x, y, t = this;
        if (!t.options.centers.visible) return;
        canvas.setAlpha(t.options.centers.opacity);
        canvas.setLineStyle(t.options.centers.width, t.options.centers.color);
        canvas.ctx.beginPath();
        for (i = 0, l = t.items.length; i < l; i++) {
            if (staticPass && t.items[i].isAnimating) continue;
            if (!staticPass && !t.items[i].isAnimating) continue;
            x = t.chart.toScreenX(t.items[i].getCenterX());
            y = t.chart.toScreenY(t.items[i].getCenterY());
            canvas.ctx.moveTo(x + t.options.centers.size, y);
            canvas.drawCircle(x, y, t.options.centers.size);
        }
        canvas.ctx.stroke();
        canvas.ctx.closePath();
    };

    /**
     * Hides shapes centers
     */
    ShapeManager.prototype.hideCenters = function() {
        var t = this;
        t.options.centers.visible = false;
        t.updateStatic();
        t.apply();
    };

    /**
     * Shows shapes centers
     */
    ShapeManager.prototype.showCenters = function() {
        var t = this;
        t.options.centers.visible = true;
        t.updateStatic();
        t.apply();
    };

    /**
     * Called after all animations are ended (animCount == 0). Used to move all animated items back to static layer
     * @private
     */
    ShapeManager.prototype._endAnimation = function() {
        var i, l,
            found = false,
            itemsMovOnTop = [],
            t = this;

        // Store items with completed animation
        for (i = 0, l = t.items.length; i < l; i++) if (t.items[i].isAnimating && t.items[i].tween === null) {
            t.items[i].isAnimating = false;
            found = true;
            itemsMovOnTop.push(t.items[i]);
        }
        // Move animated shapes on top (works only if zIndex is disabled)
        for (i = 0, l = itemsMovOnTop.length; i < l; i++) {
            var idx = t.items.indexOf( itemsMovOnTop[i]);
            t.items.splice(idx, 1);
        }
        for (i = 0, l = itemsMovOnTop.length; i < l; i++) t.items.push(itemsMovOnTop[i]);

        t.updateStatic();
        t.apply();
    };

    /**
     * Returns item with specified id. Will return first item with id. Returns undefined if id was not found
     * @param {number} id Id of item
     * @returns {cl.Shape} Shape with specified id
     */
    ShapeManager.prototype.get = function(id) {
        var t = this;
        if (t._hash[id]) return t._hash[id];
    };

    /**
     * Removes all shapes
     */
    ShapeManager.prototype.clear = function() {
        var t = this;

        // Remove shapes. Destroy would be called in remove function
        while (t.count !== 0) t.remove(t.items[0]);

        // Remove shapes from selection
        t.chart.selector.selection = [];
        t.chart.selector.apply();

        // Update static and redraw
        t.updateStatic();
        t.apply();
    };

    /**
     * Adds shapes by defined class
     * @param {Object|array} item Shapes to add. Can be single shape or array
     * @param {Function} ShapeClass Shape class to create. For example: "cl.Bubble"
     * @param {boolean} [allowAnimation=false] Allow animations on property changes
     * @param {number} [animationDuration={@link cl.ShapeManager.ANIMATION_DURATION}] Duration of animation in ms
     * @example
     * // Add bubbles
     * chart.shapes.add([{ id: 1, x: 10, y: 10, size: 5 }, { id: 2, x: 80, y: 60, size: 20 }], cl.Bubble);
     *
     * // Modify exists bubbles with animation
     * chart.shapes.add([{ id: 1, x: 40, y: 90, size: 30 }, { id: 2, x: 20, y: 40, size: 4 }], cl.Bubble, true);
     *
     * // Add poly line
     * chart.shapes.add([{ id: 3, border: 2, color: "red", closed: true, points: [10, 10, 10, 50, 50, 50] }], cl.PolyLine);
     */
    ShapeManager.prototype.add = function(item, ShapeClass, allowAnimation, animationDuration) {
        var i, l, it, obj, shape,
            t = this,
            aa = allowAnimation || false;

        // Check if class specified
        if (!ShapeClass) throw new Error(cl.Lang.get("errNoShapeClass"));

        // If passed one item - make array
        if (!(item instanceof Array)) it = [item];  else it = item;

        // Add items
        for (i = 0, l = it.length; i < l; i++) {
            // Can't add without id prop
            if (it[i].id === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "id"));
            obj = t.get(it[i].id);
            if (obj) {
                // If found - update properties
                if (obj.constructor !== ShapeClass) throw new Error(cl.Lang.get("errShapeType"));
                var changed = obj.setProps(it[i], aa, animationDuration);
                if (changed && !obj.isAnimating) t.updateStatic();
            } else {
                // If not found -  create new
                shape = new ShapeClass(t, it[i]);
                t.items.push(shape);
                t._hash[it[i].id] = shape;
                t.updateStatic();
            }
        }

        t.apply();
    };


    /**
     * Removes item from shapes array
     * @param {cl.Shape} item Shape to remove
     * @private
     */
    ShapeManager.prototype._removeItem = function(item) {
        var t = this;
        if (!item) return;

        // Find item index
        var idx = t.items.indexOf(item);
        if (idx === -1 || !t.items[idx]) return;

        // Clear ids hash
        delete t._hash[item.props.id];

        // Remove item from shapes array
        t.items.splice(idx, 1);
        t.apply();

        // Remove item from selection
        idx = t.chart.selector.selection.indexOf(item);
        if (idx !== -1) {
            t.chart.selector.selection.splice(idx, 1);
            t.chart.selector.apply();
        }

        // Destroy item
        item.destroy();
    };

    /**
     * Removes item
     * @param {cl.Shape|number} item Shape itself or shape id
     */
    ShapeManager.prototype.remove = function(item) {
        var t = this;
        switch (typeof item) {
            case "object": {
                t._removeItem(item);
                break;
            }
            default: {
                t._removeItem(t.get(item));
                break;
            }
        }
    };

    /**
     * @override
     */
    ShapeManager.prototype.resize = function(width, height) {
        var t = this;

        // Resize static layer
        t.static.resize(width, height);
        t.updateStatic();

        t.constructor.superclass.resize.call(t, width, height);
        return t;
    };

    /**
     * Request for static update. Will update static layer on next frame render
     */
    ShapeManager.prototype.updateStatic = function() {
        this._shouldRedrawStatic = true;
    };

    /**
     * Used to sort shapes based on zIndex
     * @private
     * @param {cl.Shape} a First shape
     * @param {cl.Shape} b Second shape
     * @returns {number} Sort result
     */
    function zIndexSorter(a, b) {
        return (a.props.zIndex < b.props.zIndex) ? -1: 1;
    }

    /**
     * @override
     */
    ShapeManager.prototype.destroy = function() {
        var t = this;
        // Destroy all shapes
        t.clear();

        t.items = null;
        t.static.destroy();
        t._hash = null;

        t.constructor.superclass.destroy.call(t);
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Maximum of animated items at same time. Needed due canvas rendering limitations for smooth animations
     * @type {number}
     * @default 500
     * @const
     */
    ShapeManager.MAX_ANIMATED_ITEMS = 500;
    /**
     * Default animation delay for all animations. Needed for smooth animations, because before animation start, static layer should be redrawn and this can take a bit of time
     * @type {number}
     * @default 100
     * @const
     */
    ShapeManager.ANIMATION_DELAY = 100;
    /**
     * Default animation duration in ms
     * @type {number}
     * @default 400
     * @const
     */
    ShapeManager.ANIMATION_DURATION = 400;

    namespace.ShapeManager = ShapeManager;

})(cl);
cl.Bubble = (function() {
    'use strict';

    /**
     * Represent bubble shape class
     * @extends cl.Shape
     * @param {object} parent Parent shape manager
     * @param {object} props shape settings
     * @param {object} props.id Shape id
     * @param {string} [props.cursor] Change cursor to specified when shape is hovered
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
        t._render = render;
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

            t.constructor.superclass._render.call(t, canvas);
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
        t._render = render;
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
            return bounds.w * bounds.h;
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
            if (newProps.color2 !== undefined && cl.Color.fromString(newProps.color2) !== cl.Color.fromString(t.props.color2)) {
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
            if (t.props.border) {
                canvas.ctx.stroke();
                canvas.restoreLineFix();
            }
            canvas.ctx.closePath();
            if (t.props.lineDash) canvas.setLineDash([]);

            t.constructor.superclass._render.call(t, canvas);
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
        t._render = render;
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
         * @memberof cl.Line.prototype
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
         * @memberof cl.Line.prototype
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
         * @memberof cl.Line.prototype
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
         * @memberof cl.Line.prototype
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
         * @memberof cl.Line.prototype
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
            if (newProps.pointColor !== undefined && cl.Color.fromString(newProps.pointColor) !== cl.Color.fromString(t.props.pointColor)) {
                t.animProps.pointColor = newProps.pointColor;
                t.animProps.changed = true;
            }
            if (newProps.pointColor2 !== undefined && cl.Color.fromString(newProps.pointColor2) !== cl.Color.fromString(t.props.pointColor2)) {
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

            t.constructor.superclass._render.call(t,canvas);
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
         * @memberof cl.Line.prototype
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
cl.PolyLine = (function() {
    'use strict';

    /**
     * Represent line segment shape class
     * @extends cl.Shape
     * @param {object} parent Parent shape manager
     * @param {object} props shape settings
     * @param {object} props.id Shape id
     * @param {array<number>} props.points Line points coordinates. Contains [x1, y1, x2, y2, x3, y3, ...]
     * @param {boolean} [props.closed=false] Is poly line closed or not
     * @param {string} [props.cursor] Change cursor to specified when shape is hovered
     * @param {string} [props.color=cl.Consts.COLOR_RED] Line color
     * @param {object} [props.border=1] Shape border width
     * @param {object} [props.opacity=0.3] Shape opacity
     * @param {string} [props.lineJoin="miter"] Line join. Can be "miter", "round", "bevel"
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
    function PolyLine(parent, props) {
        var t = this;
        cl.Shape.call(t, parent, props);

        // Public methods
        t.type = "polyline";
        t.parent = parent;
        t._render = render;
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
        t.onAnimationUpdate = onAnimationUpdate;
        t.stopAnimation = stopAnimation;

        // Private
        var opt = props || {};
        opt.borderRadius = opt.borderRadius || 0;
        if (t.props.pointColor) t.props.pointColor = cl.Color.fromString(t.props.pointColor);
        if (t.props.pointColor2) t.props.pointColor2 = cl.Color.fromString(t.props.pointColor2);

        if (t.props.points === undefined) throw new Error(cl.Lang.get("errShapeNoParam", "points"));
        if (t.props.points.length < 4) throw new Error(cl.Lang.get("errShapeNoParam", "points"));

        // Used for store animation variables
        // TODO: try to make it without anim object. All animation specific properties should be in animProps
        var anim = {
            pointsFrom: [],
            pointsTo: [],
            closedFrom: false,
            closedTo: false,
            closedWidth: 0
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Stops animation
         * @param {boolean} [dontStopTween=false] Don't stop tween. Not usable in general cases. Used only if method called from onComplete tween event
         * @memberof cl.PolyLine.prototype
         */
        function stopAnimation(dontStopTween) {
            var i, l;
            if (t.tween && anim.pointsTo.length !== 0) {
                for (i = 0, l = t.props.points.length; i < l; i++) t.props.points[i] = anim.pointsTo[i];
                if (t.props.delPoints) t.props.points.splice(t.props.points.length - t.props.delPoints * 2, t.props.delPoints * 2);
            }
            anim.closedWidth = 0;
            anim.pointsFrom = [];
            anim.pointsTo = [];
            anim.closedFrom = t.props.closed;
            anim.closedTo = t.props.closed;
            t.constructor.superclass.stopAnimation.call(t, dontStopTween);
        }

        /**
         * Returns shape area in pixels
         * @returns {number} Shape area
         * @memberof cl.PolyLine.prototype
         */
        function getPixelArea() {
            var i, l, dist = 0;
            for (i = 0, l = t.props.points.length; i < l - 2; i += 2) dist += Math.sqrt(cl.Utils.distSq(t.props.points[i], t.props.points[i+1], t.props.points[i+2], t.props.points[i+3]));
            if (t.props.closed) dist += Math.sqrt(cl.Utils.distSq(t.props.points[l-2], t.props.points[l-1], t.props.points[0], t.props.points[1]));
            return dist;
        }

        /**
         * Uses to update point colors
         * @param {number} p Animation progress [0..1]
         */
        function onAnimationUpdate(p) {
            /*jshint validthis:true */
            var i, l, idx, _this = this;
            if (anim.pointsFrom.length !== 0 && anim.pointsTo.length !== 0) {
                for (i = 0, l = _this.points.length; i < l; i++) _this.points[i] = anim.pointsFrom[i] + (anim.pointsTo[i] - anim.pointsFrom[i]) * p;
            }

            if (anim.closedFrom !== anim.closedTo) {
                if (anim.closedTo) anim.closedWidth = p * t.props.border; else anim.closedWidth = (1 - p) * t.props.border;
            }
        }

        function getArea() {
            var area = 0, i, l, point1, point2;
            for (i = 0, l = t.props.points.length; i < l - 2; i += 2) {
                area += t.props.points[i] * t.props.points[i + 3];
                area -= t.props.points[i + 1] * t.props.points[i + 2];
            }
            if (t.props.closed) {
                area += t.props.points[l - 1] * t.props.points[1];
                area -= t.props.points[l - 2] * t.props.points[0];
                //point1.x * point2.y;
                //point1.y * point2.x;
            }
            area /= 2;
            return area;
        }

        /**
         * Returns X coordinate of shape center
         * @returns {number} X coordinate in axis space
         * @memberof cl.PolyLine.prototype
         */
        function getCenterX() {
            var twicearea = 0, x = 0, y = 0, i, l, f;
            for (i = 0, l = t.props.points.length; i < l - 2; i += 2) {
                f = t.props.points[i] * t.props.points[i + 3] - t.props.points[i + 2] * t.props.points[i + 1];
                twicearea += f;
                x += ( t.props.points[i] + t.props.points[i + 2] ) * f;
                //y += ( t.props.points[i + 1] + t.props.points[i + 3] ) * f;
            }
            f = t.props.points[l - 2] * t.props.points[1] - t.props.points[0] * t.props.points[l - 1];
            twicearea += f;
            x += ( t.props.points[l - 2] + t.props.points[0] ) * f;
            //y += ( t.props.points[l - 1] + t.props.points[1] ) * f;

            f = twicearea * 3;
            return x/f;
        }

        /**
         * Returns Y coordinate of shape center
         * @returns {number} Y coordinate in axis space
         * @memberof cl.PolyLine.prototype
         */
        function getCenterY() {
            var twicearea = 0, x = 0, y = 0, i, l, f;
            for (i = 0, l = t.props.points.length; i < l - 2; i += 2) {
                f = t.props.points[i] * t.props.points[i + 3] - t.props.points[i + 2] * t.props.points[i + 1];
                twicearea += f;
                //x += ( t.props.points[i] + t.props.points[i + 2] ) * f;
                y += ( t.props.points[i + 1] + t.props.points[i + 3] ) * f;
            }
            f = t.props.points[l - 2] * t.props.points[1] - t.props.points[0] * t.props.points[l - 1];
            twicearea += f;
            //x += ( t.props.points[l - 2] + t.props.points[0] ) * f;
            y += ( t.props.points[l - 1] + t.props.points[1] ) * f;

            f = twicearea * 3;
            return y/f;
        }

        /**
         * Used to update shape position while shape dragged
         * @param {number} deltaX X coordinate changes
         * @param {number} deltaY Y coordinate changes
         * @memberof cl.PolyLine.prototype
         */
        function processDrag(deltaX, deltaY) {
            var i, l;
            for (i = 0, l = t.props.points.length; i < l; i += 2) {
                t.props.points[i] += deltaX;
                t.props.points[i + 1] += deltaY;
            }

            t.constructor.superclass.processDrag.call(t, deltaX, deltaY);
        }

        /**
         * Returns shape bounds
         * @returns {{x: number, y: number, w: number, h: number}} Shape bounds
         * @memberof cl.PolyLine.prototype
         */
        function getBounds() {
            // TODO: extend bounds with line width?
            var i, l, px, py, x1, y1, x2, y2;
            x1 = Number.MAX_VALUE;
            y1 = Number.MAX_VALUE;
            x2 = Number.MIN_VALUE;
            y2 = Number.MIN_VALUE;
            for (i = 0, l = t.props.points.length; i < l; i += 2) {
                px = t.parent.chart.xAxis.toScreen(t.props.points[i]);
                py = t.parent.chart.yAxis.toScreen(t.props.points[i + 1]);
                if (px < x1) x1 = px;
                if (px > x2) x2 = px;
                if (py < y1) y1 = py;
                if (py > y2) y2 = py;
            }
            return {
                x: x1,
                y: y1,
                w: x2 - x1,
                h: y2-  y1
            };
        }

        /**
         * Checks if shape intersecting rectangle
         * @param {number} rx X coordinate in pixels of rectangle center
         * @param {number} ry Y coordinate in pixels of rectangle center
         * @param {number} hw Half width
         * @param {number} hh Half height
         * @returns {boolean} Intersecting or not
         * @memberof cl.PolyLine.prototype
         */
        function hitTestRect(rx, ry, hw, hh) {
            var i, l, x1, y1, x2, y2;
            for (i = 0, l = t.props.points.length; i < l - 2; i += 2) {
                x1 = t.parent.chart.xAxis.toScreen(t.props.points[i]);
                y1 = t.parent.chart.yAxis.toScreen(t.props.points[i + 1]);
                x2 = t.parent.chart.xAxis.toScreen(t.props.points[i + 2]);
                y2 = t.parent.chart.yAxis.toScreen(t.props.points[i + 3]);
                if (cl.Utils.lineRectIntersect(rx - hw, ry - hh, rx + hw, ry + hh, x1, y1, x2, y2)) return true;
            }
            if (t.props.closed) {
                x1 = t.parent.chart.xAxis.toScreen(t.props.points[l - 2]);
                y1 = t.parent.chart.yAxis.toScreen(t.props.points[l - 1]);
                x2 = t.parent.chart.xAxis.toScreen(t.props.points[0]);
                y2 = t.parent.chart.yAxis.toScreen(t.props.points[1]);
                if (cl.Utils.lineRectIntersect(rx - hw, ry - hh, rx + hw, ry + hh, x1, y1, x2, y2)) return true;
            }

            return false;
        }

        /**
         * Check if point inside shape
         * @param {number} x X coordinate in pixels
         * @param {number} y Y coordinate in pixels
         * @returns {boolean} Inside or not
         * @memberof cl.PolyLine.prototype
         */
        function hitTest(x, y) {
            var i, l, x1, y1, x2, y2;
            for (i = 0, l = t.props.points.length; i < l - 2; i += 2) {
                x1 = t.parent.chart.xAxis.toScreen(t.props.points[i]);
                y1 = t.parent.chart.yAxis.toScreen(t.props.points[i + 1]);
                x2 = t.parent.chart.xAxis.toScreen(t.props.points[i + 2]);
                y2 = t.parent.chart.yAxis.toScreen(t.props.points[i + 3]);
                if (cl.Utils.distToSegmentSquared(x, y, x1, y1, x2, y2) < cl.Line.HOVER_THRESHOLD) return true;
            }
            if (t.props.closed) {
                x1 = t.parent.chart.xAxis.toScreen(t.props.points[l - 2]);
                y1 = t.parent.chart.yAxis.toScreen(t.props.points[l - 1]);
                x2 = t.parent.chart.xAxis.toScreen(t.props.points[0]);
                y2 = t.parent.chart.yAxis.toScreen(t.props.points[1]);
                if (cl.Utils.distToSegmentSquared(x, y, x1, y1, x2, y2) < cl.Line.HOVER_THRESHOLD) return true;
            }

            return false;
        }

        /**
         * Updates shape properties
         * @param {object} newProps New properties
         * @returns {boolean} Is shape changed or not
         * @memberof cl.PolyLine.prototype
         */
        function calcAnimProps(newProps) {
            var i, l, k;
            t.constructor.superclass.calcAnimProps.call(t, newProps);

            if (newProps.lineJoin !== undefined && t.props.lineJoin !== newProps.lineJoin) {
                t.animProps.lineJoin = newProps.lineJoin;
                t.animProps.changed = true;
            }

            if (newProps.closed !== undefined && t.props.closed !== newProps.closed) {
                anim.closedFrom = t.props.closed;
                anim.closedTo = newProps.closed;
                t.animProps.closed = newProps.closed;
                t.animProps.changed = true;
            }

            // Check points
            if (newProps.points !== undefined) {
                // If length equal, check for changes
                if (newProps.points.length === t.props.points.length) {
                    for (i = 0, l = newProps.points.length; i < l; i++) if (t.props.points[i] !== newProps.points[i]) {
                        t.animProps.changed = true;
                        break;
                    }
                } else t.animProps.changed = true;
                if (t.animProps.changed) {
                    // Find out new points to be added or old to be deleted
                    t.props.delPoints = 0;
                    if (t.props.points.length < newProps.points.length) {
                        // NewProps has more points. New points should be added
                        k = t.props.points.length - 2;
                        for (i = t.props.points.length, l = newProps.points.length; i < l; i+=2) {
                            t.props.points.push(t.props.points[k]);
                            t.props.points.push(t.props.points[k + 1]);
                        }
                    } else
                    if (t.props.points.length > newProps.points.length) {
                        // NewProps has less points. Old points should be deleted
                        k = newProps.points.length - 2;
                        for (i = newProps.points.length, l = t.props.points.length; i < l; i+=2) {
                            newProps.points.push(newProps.points[k]);
                            newProps.points.push(newProps.points[k + 1]);
                            t.props.delPoints++;
                        }
                    }

                    // Fill arrays for animation calculations
                    anim.pointsFrom = [];
                    anim.pointsTo = [];
                    for (i = 0, l = t.props.points.length; i < l; i++) anim.pointsFrom.push(t.props.points[i]);
                    for (i = 0, l = newProps.points.length; i < l; i++) anim.pointsTo.push(newProps.points[i]);
                }
            }

            return t.animProps.changed;
        }

        /**
         * Renders line on canvas
         * @param {cl.Canvas} canvas
         * @memberof cl.PolyLine.prototype
         */
        function render(canvas) {
            if (t._isDragged) return;
            var chart = t.parent.chart;

            // Calculate line coordinates
            var i, l;
            var x = [];
            var y = [];
            for (i = 0, l = t.props.points.length; i < l; i+=2) {
                x.push(chart.xAxis.toScreen(t.props.points[i]));
                y.push(chart.yAxis.toScreen(t.props.points[i + 1]));
            }

            // Set drawing style
            canvas.setAlpha(t.props.opacity);
            canvas.setLineStyle(t.props.border, t.props.color, true);
            if (t.props.lineJoin ) canvas.ctx.lineJoin  = t.props.lineJoin;
            if (t.props.lineDash) canvas.setLineDash(t.props.lineDash);

            // Draw lines
            canvas.ctx.beginPath();
            canvas.ctx.moveTo(x[0], y[0]);
            for (i = 1; i < l; i++) canvas.ctx.lineTo(x[i], y[i]);

            // Close poly line if closed === true
            if (t.props.closed || anim.closedWidth) {
                if (anim.closedWidth) {
                    canvas.ctx.stroke();
                    canvas.ctx.beginPath();
                    canvas.setLineStyle(anim.closedWidth, t.props.color, true);
                    canvas.ctx.moveTo(x[x.length - 1], y[y.length - 1]);
                    canvas.ctx.lineTo(x[0], y[0]);
                } else {
                    canvas.ctx.lineTo(x[0], y[0]);
                    canvas.ctx.closePath();
                }
            }
            canvas.ctx.stroke();
            // Restore line dash style
            if (t.props.lineDash) canvas.setLineDash([]);
            if (t.props.lineJoin) canvas.ctx.lineJoin = "miter";
            t.constructor.superclass._render.call(t,canvas);
        }

        /**
         * Renders line hover on canvas
         * @param {cl.Canvas} canvas
         * @param {number} [offset=0] Hover offset
         * @memberof cl.PolyLine.prototype
         */
        function renderHover(canvas, offset) {
            if (t._isDragged) return;
            var chart = t.parent.chart;

            // Calculate line coordinates
            var i, l;
            var x = [];
            var y = [];
            for (i = 0, l = t.props.points.length; i < l; i+=2) {
                x.push(chart.xAxis.toScreen(t.props.points[i]));
                y.push(chart.yAxis.toScreen(t.props.points[i + 1]));
            }

            // Draw lines
            //canvas.ctx.beginPath();
            canvas.ctx.moveTo(x[0], y[0]);
            for (i = 1; i < l; i++) canvas.ctx.lineTo(x[i], y[i]);

            // Close poly line if closed === true
            if (t.props.closed) {
                canvas.ctx.lineTo(x[0], y[0]);
                //canvas.ctx.closePath();
            }
            //canvas.ctx.stroke();

            t.constructor.superclass.renderHover.call(t,canvas);
        }

        /**
         * Destroys polyline
         * @memberof cl.PolyLine.prototype
         */
        function destroy() {
            t.constructor.superclass.destroy.call(t);
        }
    }

    cl.Utils.extend(PolyLine, cl.Shape);

    return PolyLine;

})();
(function(namespace){
    'use strict';

    /**
     * Represent chart class
     *
     * @constructor
     * @memberof cl
     *
     * @param {object} options Chart settings
     * @param {object} options.element DOM element on which chart will be created
     * @param {object} [options.xAxis] Settings for xAxis, described like options in {@link cl.Axis} constructor
     * @param {object} [options.yAxis] Settings for yAxis, described like options in {@link cl.Axis} constructor
     * @param {Element} [options.preloader] preloader DOM element
     * @param {string} [options.cursor] Chart default cursor
     * @param {number} [options.width] Width of chart. If undefined, chart will fits parent element width
     * @param {number} [options.height] Height of chart. If undefined, chart will fits parent element height
     * @param {object} [options.background] Background options, described like options in {@link cl.Background} constructor
     * @param {object} [options.shapes] Shapes options, described like options in {@link cl.ShapeManager} constructor
     * @param {object} [options.selector] Selector options, described like options in {@link cl.Selector} constructor
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
     * // Add poly line
     * chart.shapes.add({ id: -22, border: 10, color: "black", closed: true, lineJoin: "round", points: [0, 0, 90, 10, 80, 90, 70, 20]}, cl.PolyLine);
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
            isDirty: { get: function() {return t._getIsDirty(); } },
            width: { get: function() { return t.screen.width; } },
            height: { get: function() { return t.screen.height; } }
        });

        t._render = render;

        // Private
        t._redrawRequested = false;
        t._dirtyFlags = {
            all: false
        };

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
        t.setCursor();
        t.redraw();

        /**
         * Renders chart. This method called automatically by requestAnimationFrame
         * @param {number} time Elapsed time
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
            if (t._dirtyFlags.axis) {
                t._dirtyFlags.shapes = true;
                t.shapes.updateStatic();
            }

            // Render layers based on dirty flags
            for (i = 0, l = t.layers.length; i < l; i++) {
                if (t._dirtyFlags.all || t._dirtyFlags[t.layers[i].dirtyFlagName]) t.layers[i]._render();
            }

            // Draw layers on screen
            t.screen.clear();

            for (i = 0, l = t.layers.length; i < l; i++) t.screen.draw(t.layers[i].surface);

            t._clearDirtyFlags();

            if (t.shapes.isAnimating && !t._redrawRequested) {
                t._redrawRequested = true;
                requestAnimFrame(t._render);
            }
        }
    }

    /**
     * Changes chart cursor
     * @param {string} [name] Cursor name. If name is not specified, will set options.cursor or "default"
     * @example
     * // Set crosshair cursor
     * chart.setCursor("crosshair");
     *
     * // Back to default cursor. Will set cursor specified in options or "default"
     * chart.setCursor();
     *
     * // Set custom cursor
     * chart.setCursor("url('my-cursor.ico')");
     *
     * // Do disable cursor change on "hand" on shape over
     * chart.selector.options.hover.showHand = false;
     */
    Chart.prototype.setCursor = function(name) {
        var t = this;
        if (!name) t.screen.el.style.cursor = t.options.cursor || "default"; else t.screen.el.style.cursor = name;
    };

    /**
     * Converts X coordinate in screen space to axis space
     * @param {number} v Value
     * @returns {number} Value in axis space
     */
    Chart.prototype.toAxisX = function(v) {
        return this.xAxis.toAxis(v);
    };

    /**
     * Converts Y coordinate in screen space to axis space
     * @param {number} v Value
     * @returns {number} Value in axis space
     */
    Chart.prototype.toAxisY = function(v) {
        return this.yAxis.toAxis(v);
    };

    /**
     * Converts Y coordinate in axis space to screen space
     * @param {number} v Value
     * @returns {number} Value in screen space
     */
    Chart.prototype.toScreenY = function(v) {
        return this.yAxis.toScreen(v);
    };

    /**
     * Converts X coordinate in axis space to screen space
     * @param {number} v Value
     * @returns {number} Value in screen space
     */
    Chart.prototype.toScreenX = function(v) {
        return this.xAxis.toScreen(v);
    };

    /**
     * Add any shape to chart. If been added exists id's, will update shape properties
     * @param {Array.<Object>} items Array of lines. Contains only properties description, not rect class
     * @param {Function} shapeClass Shape class to add. Can be anything inherited from {@link cl.Shape} e.g. {@link cl.Bubble}, {@link cl.Line}, {@link cl.PolyLine}, {@link cl.Centroid}, {@link cl.Rect}
     * @param {boolean} [allowAnimation=false] Play animation if rect properties changed
     * @param {number} [animationDuration={@link cl.ShapeManager.ANIMATION_DURATION}] Animation speed in ms
     * @example
     * chart.add([{id: 1, x: 50, y: 60, size: 30}, {id: 2, x: 90, y: 90, size: 10}, cl.Bubble);
     * chart.add({id: 3, x: 10, y: 20}, cl.Centroid);
     */
    Chart.prototype.add = function(items, shapeClass, allowAnimation, animationDuration) {
        this.shapes.add(items, shapeClass, allowAnimation, animationDuration);
    };

    /**
     * Add bubbles to chart. If been added exists id's, bubbles will update its properties
     * @param {Array} items Array of bubbles. Contains only properties description, not class
     * @param {boolean} [allowAnimation=false] Play animation if bubble properties changed
     * @param {number} [animationDuration={@link cl.ShapeManager.ANIMATION_DURATION}] Animation speed in ms
     */
    Chart.prototype.addBubbles = function(items, allowAnimation, animationDuration) {
        this.shapes.add(items, cl.Bubble, allowAnimation, animationDuration);
    };

    /**
     * Add rects to chart. If been added exists id's, rects will update its properties
     * @param {Array.<Object>} items Array of rects. Contains only properties description, not class
     * @param {boolean} [allowAnimation=false] Play animation if rect properties changed
     * @param {number} [animationDuration={@link cl.ShapeManager.ANIMATION_DURATION}] Animation speed in ms
     */
    Chart.prototype.addRects = function(items, allowAnimation, animationDuration) {
        this.shapes.add(items, cl.Rect, allowAnimation, animationDuration);
    };

    /**
     * Add lines to chart. If been added exists id's, lines will update its properties
     * @param {Array.<Object>} items Array of lines. Contains only properties description, not class
     * @param {boolean} [allowAnimation=false] Play animation if rect properties changed
     * @param {number} [animationDuration={@link cl.ShapeManager.ANIMATION_DURATION}] Animation speed in ms
     */
    Chart.prototype.addLines = function(items, allowAnimation, animationDuration) {
        this.shapes.add(items, cl.Line, allowAnimation, animationDuration);
    };

    /**
     * Add polylines to chart. If been added exists id's, polylines will update its properties
     * @param {Array.<Object>} items Array of polylines. Contains only properties description, not class
     * @param {boolean} [allowAnimation=false] Play animation if rect properties changed
     * @param {number} [animationDuration={@link cl.ShapeManager.ANIMATION_DURATION}] Animation speed in ms
     */
    Chart.prototype.addPolyLines = function(items, allowAnimation, animationDuration) {
        this.shapes.add(items, cl.PolyLine, allowAnimation, animationDuration);
    };

    /**
     * Add centroids to chart. If been added exists id's, centroids will update its properties
     * @param {Array.<Object>} items Array of centroids. Contains only properties description, not class
     * @param {boolean} [allowAnimation=false] Play animation if rect properties changed
     * @param {number} [animationDuration={@link cl.ShapeManager.ANIMATION_DURATION}] Animation speed in ms
     */
    Chart.prototype.addPolyLines = function(items, allowAnimation, animationDuration) {
        this.shapes.add(items, cl.Centroid, allowAnimation, animationDuration);
    };

    /**
     * Shows preloader on chart using "options.preloader" element
     */
    Chart.prototype.showPreloader = function() {
        var t = this;
        if (!t.options.element || !t.options.element.parentNode) return;
        var p = t.preloader;
        var parent = t.options.element.parentNode;
        // Remove hidden class
        p.classList.remove("hidden");
        p.classList.remove("cl-preloader-hidden");
        // Add preloader class
        p.classList.add("cl-preloader");
        var style = "";
        // Set position center
        var x = Math.floor(t.element.offsetLeft + t.width / 2 - p.offsetWidth / 2);
        var y = Math.floor(t.element.offsetTop + t.height / 2 - p.offsetHeight / 2);
        style = "left: " + x + "px; top: " + y + "px";
        style += ";" + p.getAttribute("style");
        p.setAttribute("style", style);
        parent.appendChild(p);
    };

    /**
     * Removes preloader from chart
     */
    Chart.prototype.hidePreloader = function() {
        var t = this;
        if (!t.options.element) return;
        var p = t.options.element.parentNode;
        t.options.preloader.classList.add("cl-preloader-hidden");
    };

    /**
     * Returns chart background
     * @returns {cl.Background}
     */
    Chart.prototype.getBackground = function() {
        return this.background;
    };

    /**
     * Creates request for chart refresh. Can be called multiply times, but actual refresh would be called once by requestAnimationFrame
     * This is async method! Actual redraw will be called later
     */
    Chart.prototype.redraw = function() {
        var t = this;
        if (t._redrawRequested) return;
        requestAnimFrame(t._render);
        t._redrawRequested = true;
    };

    /**
     * Sets chart background image
     * @param {string} url Image url or base64 string
     */
    Chart.prototype.setBackground = function(url) {
        this.background.setImage(url);
    };

    /**
     * Sets dirty flag
     * @param {string} name Dirty flag name. Can be "all" or layer name. See "dirtyFlagName" property in {@link cl.Layer}
     * @private
     */
    Chart.prototype._setDirtyFlag = function(name) {
        this._dirtyFlags[name] = true;
    };

    /**
     * Returns true if chart is dirty (need to refresh)
     * @private
     * @returns {boolean} Is dirty or not
     */
    Chart.prototype._getIsDirty = function() {
        var t = this;
        if (t._dirtyFlags.all) return true;
        for (var k in t._dirtyFlags) if (t._dirtyFlags.hasOwnProperty(k)) if (t._dirtyFlags[k]) return true;
        return false;
    };

    /**
     * Clear all dirty flags
     * @private
     */
    Chart.prototype._clearDirtyFlags = function() {
        var t = this;
        t._redrawRequested = false;
        t._dirtyFlags.all = false;
        for (var k in t._dirtyFlags) if (t._dirtyFlags.hasOwnProperty(k)) t._dirtyFlags[k] = false;
    };

    /**
     * @callback eventCallback
     * @param {cl.Event} e
     */

    /**
     * Adds event listener
     * @param {string} event Event name. See {@link cl.Event} members
     * @param {eventCallback} callback Event callback
     * @example
     * chart.addEventListener(cl.Event.shapeOver, function(e) { console.log(e.target); });
     * // equals to
     * chart.addEventListener("shapeover", function(e) { console.log(e.target); });
     */
    Chart.prototype.addEventListener = function(event, callback) {
        this.events.addEventListener(event, callback);
    };

    /**
     * Removes event listener
     * @param {string} event Event name. See {@link cl.Event} members
     * @param {eventCallback} callback Event callback
     */
    Chart.prototype.removeEventListener = function(event, callback) {
        this.events.removeEventListener(event, callback);
    };

    /**
     * Resizes chart
     * @param {number} width New width
     * @param {number} height New height
     */
    Chart.prototype.resize = function(width, height) {
        var i, l, t = this;
        // Resize layers
        for (i = 0, l = t.layers.length; i < l; i++) t.layers[i].resize(width, height);

        t.screen.resize(width, height);
        t._dirtyFlags.all = true;
        t.redraw();
    };

    /**
     * Destroys chart
     */
    Chart.prototype.destroy = function() {
        var i, l, t = this;

        // Destroy all layers
        for (i = 0, l = t.layers.length; i < l; i++) t.layers[i].destroy();

        t.screen.destroy();
        t.layers = [];
        t.screen = null;
        t.background = null;
        t.element = null;
    };

    namespace.Chart = Chart;

})(cl);
