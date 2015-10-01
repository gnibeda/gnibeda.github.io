var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

function isChrome() {
    var isChromium = window.chrome,
        vendorName = window.navigator.vendor,
        isOpera = window.navigator.userAgent.indexOf("OPR") > -1;
    if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false) {
        return true;
    } else {
        return false;
    }
}

function fireEvent(name, x, y, chart) {
    var event = document.createEvent("MouseEvents");
    //var sx = window.scrollX || document.documentElement.scrollLeft;
    //var sy = window.scrollY || document.documentElement.scrollTop;
    var xx = x + chart.screen.el.parentNode.offsetLeft;
    var yy = y + chart.screen.el.parentNode.offsetTop;
   /* if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        // Firefox coordinate fix;
        xx -= chart.screen.el.parentNode.offsetLeft;
        yy -= chart.screen.el.parentNode.offsetTop;
    }*/

    event.initMouseEvent(
        name, true, true, window, null, xx, yy, xx, yy,
        false, false, false, false,
        0, chart.screen.el
    );
    event.synthetic = true;
    chart.screen.el.dispatchEvent(event);
}

describe('Chart library v.' + cl.version, function(){
    colorTest();
    canvasTest();
    chartTest();
    axisTest();
    testEvents();
    testSelector();
    testShapes();
});