function testSelector() {

    describe("cl.Selector", function() {

        var chart;

        before(function() {
            chart = new cl.Chart({
                element: document.getElementById("test"),
                width: 800,
                height: 600
            });
            chart.addBubbles([{id: 1, x: 50, y: 50, size: 30}, {id: 2, x: 80, y: 50, size: 10}]);
            chart.addRects([{id: 11, x: 0, y: 0, x2: 10, y2: 10}, {id: 22, x: 20, y: 0, x2: 30, y2: 10}]);
        });

        after(function() {
            chart.destroy();
            chart = null;
        });

        it('should get single bubble shape bounds', function() {
            var bounds = chart.selector.getBounds([chart.shapes.get(1)]);
            expect(bounds).to.exists;
            expect(bounds).eql({ x: 370, y: 270, w: 60, h: 60 });
        });

        it('should get multiple bubbles shape bounds', function() {
            var bounds = chart.selector.getBounds([chart.shapes.get(1), chart.shapes.get(2)]);
            expect(bounds).to.exists;
            expect(bounds).eql({x: 370, y: 270, w: 268, h: 60});
        });

        it('should get single rect shape bounds', function() {
            var bounds = chart.selector.getBounds([chart.shapes.get(11)]);
            expect(bounds).to.exists;
            expect(bounds).eql({ x: 20, y: 524, w: 76, h: 56 });
        });

        it('should get multiple rects shape bounds', function() {
            var bounds = chart.selector.getBounds([chart.shapes.get(11), chart.shapes.get(22)]);
            expect(bounds).to.exists;
            expect(bounds).eql({x: 20, y: 524, w: 228, h: 56});
        });

        it('should get bubble shape from point', function() {
            var shape;
            shape = chart.selector.shapeFromPoint(400, 300);
            assert.ok(shape, "Shape was not found");
            expect(shape.getId()).equal(1, "Wrong shape id");

            shape = chart.selector.shapeFromPoint(628, 300);
            assert.ok(shape, "Second shape was not found");
            expect(shape.getId()).equal(2, "Wrong second shape id");
        });

        it('should get rect shape from point', function() {
            var shape;
            shape = chart.selector.shapeFromPoint(24, 524);
            assert.ok(shape, "Shape was not found");
            expect(shape.getId()).equal(11, "Wrong shape id");

            shape = chart.selector.shapeFromPoint(174, 524);
            assert.ok(shape, "Second shape was not found");
            expect(shape.getId()).equal(22, "Wrong second shape id");
        });

        it('should get shapes from point', function() {
            chart.addBubbles([{id: 3, x: 50, y: 50, size: 30}]);

            var shapes;
            shapes = chart.selector.shapesFromPoint(400, 300);

            expect(shapes.length).equal(2, "Wrong shapes count");
            chart.shapes.remove(chart.shapes.get(3));
        });

        it('should get bubble shapes from rect', function() {
            var shapes;
            shapes = chart.selector.shapesFromRect(513, 300, 228, 4);
            expect(shapes.length).equal(2, "Wrong shapes count");
        });

        it('should get rect shapes from rect', function() {
            var shapes;
            shapes = chart.selector.shapesFromRect(24, 524, 240, 525);
            expect(shapes.length).equal(2, "Wrong shapes count");
        });

        it('should enable drag', function() {
            chart.selector.enableDrag();
            expect(chart.selector.options.draggable).to.be.true;
        });

        it('should enable multiselect', function() {
            chart.selector.enableMultiselect();
            expect(chart.selector.options.selection.enabled).to.be.true;
            expect(chart.selector.options.selection.multiple).to.be.true;
            expect(chart.selector.options.selection.rect.enabled).to.be.true;
        });

        it('should hover shape', function() {
            fireEvent("mousemove", 400, 300, chart);
            expect(chart.selector.hover).to.exists;
        });

        it('should select shape', function() {
            fireEvent("mouseup", 400, 300, chart);
            expect(chart.selector.getSelection().length).equal(1, "Wrong selected shapes count");
        });

        it('should select multiple shapes', function() {
            fireEvent("mousemove", 628, 300, chart);
            fireEvent("mouseup", 628, 300, chart);
            expect(chart.selector.getSelection().length).equal(2, "Wrong selected shapes count");
        });

        it('should deselect multiple shapes', function() {
            fireEvent("mousemove", 628, 300, chart);
            fireEvent("mouseup", 628, 300, chart);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);
            expect(chart.selector.getSelection().length).equal(0, "Wrong selected shapes count");
        });

        it('should select multiple shapes with rectangle', function() {
            fireEvent("mousemove", 200, 100, chart);
            fireEvent("mousedown", 200, 100, chart);
            fireEvent("mousemove", 700, 400, chart);
            fireEvent("mouseup", 700, 400, chart);
            expect(chart.selector.getSelection().length).equal(2, "Wrong selected shapes count");
        });

        it('should deselect all', function() {
            chart.selector.deselect();
            expect(chart.selector.getSelection().length).equal(0, "Wrong selected shapes count");
        });

        it('should drag bubble shape', function() {
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mousemove", 410, 310, chart);
            fireEvent("mousemove", 20, 20, chart);
            fireEvent("mouseup", 20, 20, chart);
            expect(chart.shapes.get(1).props.x).equal(0, "Shape dragged incorrectly. Wrong shape X coordinate");
            expect(chart.shapes.get(1).props.y).equal(100, "Shape dragged incorrectly. Wrong shape Y coordinate");
        });

        it('should drag rect shape', function() {
            fireEvent("mousemove", 24, 524, chart);
            fireEvent("mousedown", 24, 524, chart);
            fireEvent("mousemove", 30, 530, chart);
            fireEvent("mousemove", 404, 524, chart);
            fireEvent("mouseup", 410, 524, chart);
            expect(chart.shapes.get(11).props.x).equal(50, "Shape dragged incorrectly. Wrong shape X coordinate");
            expect(chart.shapes.get(11).props.y).equal(0, "Shape dragged incorrectly. Wrong shape Y coordinate");
        });

        it("should don't change porps of dragged shape, calling setProps", function() {
            fireEvent("mousemove", 20, 20, chart);
            fireEvent("mousedown", 20, 20, chart);
            fireEvent("mousemove", 30, 30, chart);
            fireEvent("mousemove", 400, 300, chart);

            chart.shapes.get(1).setProps({x: 0, y: 0});

            expect(chart.shapes.get(1).props.x).not.equal(0, "Wrong shape X coordinate");
            expect(chart.shapes.get(1).props.y).not.equal(0, "Wrong shape X coordinate");

            fireEvent("mouseup", 400, 300, chart);
            expect(chart.shapes.get(1).props.x).equal(50, "Wrong shape X coordinate");
            expect(chart.shapes.get(1).props.y).equal(50, "Wrong shape Y coordinate");
        });

        it("should don't change props of dragged shape, calling addBubbles", function() {
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mousemove", 410, 310, chart);
            fireEvent("mousemove", 20, 20, chart);

            chart.addBubbles([{id: 1, x: 80, y: 80}]);

            expect(chart.shapes.get(1).props.x).not.equal(80, "Wrong shape X coordinate");
            expect(chart.shapes.get(1).props.y).not.equal(80, "Wrong shape X coordinate");

            fireEvent("mouseup", 20, 20, chart);
            expect(chart.shapes.get(1).props.x).equal(0, "Wrong shape X coordinate");
            expect(chart.shapes.get(1).props.y).equal(100, "Wrong shape Y coordinate");
        });

        it("should remove shape from selection after shapes was removed", function() {
            expect(chart.selector.selection.length).equal(1, "Nothing was selected");
            chart.shapes.remove(chart.selector.selection[0]);
            expect(chart.selector.selection.length).equal(0, "Selection was not cleared");
        });

        it("should clear selection after shapes was cleared", function() {
            chart.addBubbles([{id: 1, x: 50, y: 50, size: 20}]);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);
            expect(chart.selector.selection.length).equal(1, "Nothing was selected");
            chart.shapes.clear();
            expect(chart.selector.selection.length).equal(0, "Selection was not cleared");
        });

        it("should select rectangle", function(){
            chart.addRects([{id: 11, x: 40, y: 40, x2: 60, y2: 60}]);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);

            expect(chart.selector.selection.length).equal(1, "Rect was not selected");
            expect(chart.selector.selection[0]).to.exists;
            expect(chart.selector.selection[0].props.id).equal(11, "Wrong shape id");
        });

        it("should select line", function(){
            chart.shapes.clear();
            chart.addLines([{id: 11, x: 40, y: 40, x2: 60, y2: 60}]);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);

            expect(chart.selector.selection.length).equal(1, "Line was not selected");
            expect(chart.selector.selection[0]).to.exists;
            expect(chart.selector.selection[0].props.id).equal(11, "Wrong shape id");
        });

        it("should select line by clicking in the range of line selection threshold", function(){
            chart.selector.deselect();
            fireEvent("mousemove", 405, 300, chart);
            fireEvent("mousedown", 405, 300, chart);
            fireEvent("mouseup", 405, 300, chart);

            expect(chart.selector.selection.length).equal(1, "Line was not selected");
            expect(chart.selector.selection[0]).to.exists;
            expect(chart.selector.selection[0].props.id).equal(11, "Wrong shape id");
        });

        it("should don't select line by clicking out the range of line selection threshold", function(){
            chart.selector.deselect();
            fireEvent("mousemove", 406, 300, chart);
            fireEvent("mousedown", 406, 300, chart);
            fireEvent("mouseup", 406, 300, chart);

            expect(chart.selector.selection.length).equal(1, "Line was not selected");
            expect(chart.selector.selection[0]).to.exists;
            expect(chart.selector.selection[0].props.id).equal(11, "Wrong shape id");
        });

        it("should don't select line with increased selection threshold", function(){
            cl.Line.HOVER_THRESHOLD = 100;
            chart.selector.deselect();
            fireEvent("mousemove", 410, 300, chart);
            fireEvent("mousedown", 410, 300, chart);
            fireEvent("mouseup", 410, 300, chart);

            expect(chart.selector.selection.length).equal(1, "Line was not selected");
            expect(chart.selector.selection[0]).to.exists;
            expect(chart.selector.selection[0].props.id).equal(11, "Wrong shape id");
            cl.Line.HOVER_THRESHOLD = 25;
        });

        it("should hover shapes depending on shape size", function(){
            chart.shapes.clear();
            chart.addBubbles([{id: 1, x: 50, y: 50, size: 20}, {id: 2, x: 50, y: 50, size: 30},{id: 3, x: 50, y: 50, size: 40}]);
            chart.addRects([{id: 4, x: 10, y: 10, x2: 90, y2: 90}]);
            chart.addLines([{id: 5, x: 30, y: 50, x2: 80, y2: 50}]);

            fireEvent("mousemove", 400, 303, chart);
            expect(chart.selector.hover).to.exists;
            expect(chart.selector.hover.props.id).equal(5, "Wrong shape hovered. Should be a line");

            fireEvent("mousemove", 400, 315, chart);
            expect(chart.selector.hover).to.exists;
            expect(chart.selector.hover.props.id).equal(1, "Wrong shape hovered. Should be a smallest bubble");

            fireEvent("mousemove", 400, 325, chart);
            expect(chart.selector.hover).to.exists;
            expect(chart.selector.hover.props.id).equal(2, "Wrong shape hovered. Should be a middle bubble");

            fireEvent("mousemove", 400, 335, chart);
            expect(chart.selector.hover).to.exists;
            expect(chart.selector.hover.props.id).equal(3, "Wrong shape hovered. Should be a bigger bubble");

            fireEvent("mousemove", 400, 345, chart);
            expect(chart.selector.hover).to.exists;
            expect(chart.selector.hover.props.id).equal(4, "Wrong shape hovered. Should be a rectangle");

            chart.shapes.clear();
        });

        it("should support custom hover", function(done){
            chart.addBubbles([{id: 1, x: 50, y: 50, size: 20, hover:{
                color: "yellow",
                border: 20,
                opacity: 1
            }}]);
            fireEvent("mousemove", 400, 300, chart);

            setTimeout(function(){
                try {
                    var pixel = chart.screen.ctx.getImageData(400, 300 - 22, 1, 1).data;
                    expect(pixel).to.deep.equal({"0": 255, "1": 255, "2": 0, "3": 255}, "Wrong color of top shape");
                }
                catch (e) {
                    done(e);
                }
                chart.shapes.options.zIndexUsage = false;
                done();
            }, 100);
        });

        it('should disable drag', function() {
            chart.selector.disableDrag();
            expect(chart.selector.options.draggable).to.be.false;
        });

        it('should disable multiselect', function() {
            chart.selector.disableMultiselect();
            expect(chart.selector.options.selection.multiple).to.be.false;
        });
    });

}