var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

function fireEvent(name, x, y, chart) {
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(
        name, true, true, chart.screen.el, null, x + 400, y + 40, x + 400, y + 40,
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