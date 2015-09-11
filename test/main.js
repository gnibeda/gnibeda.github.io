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
    event.initMouseEvent(
        name, true, true, window, null, x + 400, y + 40, x + 400, y + 40,
        false, false, false, false,
        0, null
    );
    event.synthetic = true;
    chart.screen.el.dispatchEvent(event);
}

describe('Chart library', function(){
    colorTest();
    canvasTest();
    chartTest();
    axisTest();
    testShapes();
    testEvents();
    testSelector();
});