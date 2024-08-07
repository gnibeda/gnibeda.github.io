function testEvents() {
    describe("cl.EventManager", function() {
        var chart, shape;

        function tempListener(e) { }

        before(function() {
            chart = new cl.Chart({
                element: document.getElementById("test"),
                width: 800,
                height: 600
            });
            chart.addBubbles([{id: 1, x: 50, y: 50, size: 30}]);
        });

        after(function() {
            chart.destroy();
            chart = null;
        });

        it('should add event listeners', function() {
            chart.addEventListener(cl.Event.click, tempListener);
            chart.addEventListener(cl.Event.doubleClick, tempListener);
            chart.addEventListener(cl.Event.mouseDown, tempListener);
            chart.addEventListener(cl.Event.mouseUp, tempListener);
            chart.addEventListener(cl.Event.mouseMove, tempListener);
            chart.addEventListener(cl.Event.shapeOut, tempListener);
            chart.addEventListener(cl.Event.shapeOver, tempListener);
        });

        it('should remove event listeners', function() {
            chart.removeEventListener(cl.Event.click, tempListener);
            chart.removeEventListener(cl.Event.doubleClick, tempListener);
            chart.removeEventListener(cl.Event.mouseDown, tempListener);
            chart.removeEventListener(cl.Event.mouseUp, tempListener);
            chart.removeEventListener(cl.Event.mouseMove, tempListener);
            chart.removeEventListener(cl.Event.shapeOut, tempListener);
            chart.removeEventListener(cl.Event.shapeOver, tempListener);
        });

        it('should return shape in click event', function(done) {
            var ev;
            function onClick(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.click, onClick);
            }

            chart.addEventListener(cl.Event.click, onClick);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);


            setTimeout(function() {
                try {
                    assert.ok(ev, "Event was not fired");
                    var found = ev.target !== undefined && ev.target.props !== undefined && ev.target.props.id === 1;
                    assert.ok(found, "Shape was not found");
                    // TODO: wrong coordinates in firefox
                    expect(ev.x).equal(50, "Wrong x coordinate");
                    expect(ev.y).equal(50, "Wrong y coordinate");
                    done();
                } catch (e) { done(e); }

            }, 600);

        });

        it('should return shape in double click event', function() {
            var ev;
            function onClick(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.doubleClick, onClick);
            }

            chart.addEventListener(cl.Event.doubleClick, onClick);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined && ev.target.props !== undefined && ev.target.props.id === 1;
            assert.ok(found, "Shape was not found");
            expect(ev.x).equal(50, "Wrong x coordinate");
            expect(ev.y).equal(50, "Wrong y coordinate");
        });

        it("should don't fire click in doubleclick event", function(done) {
            var ev;
            function onClick(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.click, onClick);
            }

            chart.addEventListener(cl.Event.click, onClick);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);


            setTimeout(function() {
                try {
                    expect(ev).equal(undefined, "Click event was fired");
                    done();
                } catch (e) { done(e); }

            }, 600);

        });


        it('should return shape, in shapeover event', function() {
            var ev;
            function onOver(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.shapeOver, onOver);
            }
            chart.addEventListener(cl.Event.shapeOver, onOver);
            fireEvent("mousemove", 0, 0, chart);
            fireEvent("mousemove", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined && ev.target.props !== undefined && ev.target.props.id === 1;
            assert.ok(found, "Shape was not found");
        });

        it('should return shape, in shapeout event', function() {
            var ev;
            function onOut(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.shapeOut, onOut);
            }

            chart.addEventListener(cl.Event.shapeOut, onOut);
            fireEvent("mousemove", 0, 0, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined && ev.target.props !== undefined && ev.target.props.id === 1;
            assert.ok(found, "Shape was not found");
        });

        it("should don't fire twice shape over event", function() {
            var count = 0;
            function onOver(e) { count++; }

            chart.addEventListener(cl.Event.shapeOver, onOver);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousemove", 400, 300, chart);

            expect(count).equal(1, "Event was fired twice");
        });

        it('should fire mouse down event', function() {
            var ev;
            function onEvent(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.mouseDown, onEvent);
            }

            chart.addEventListener(cl.Event.mouseDown, onEvent);
            fireEvent("mousedown", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            expect(ev.x).equal(50, "Wrong x coordinate");
            expect(ev.y).equal(50, "Wrong y coordinate");
        });

        it('should fire mouse up event', function() {
            var ev;
            function onEvent(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.mouseUp, onEvent);
            }

            chart.addEventListener(cl.Event.mouseUp, onEvent);
            fireEvent("mouseup", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            expect(ev.x).equal(50, "Wrong x coordinate");
            expect(ev.y).equal(50, "Wrong y coordinate");
        });

        it('should fire mouse move event', function() {
            var ev;
            function onEvent(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.mouseMove, onEvent);
            }

            chart.addEventListener(cl.Event.mouseMove, onEvent);
            fireEvent("mousemove", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            expect(ev.x).equal(50, "Wrong x coordinate");
            expect(ev.y).equal(50, "Wrong y coordinate");
        });

        it('should fire event on deselect', function() {
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);
            expect(chart.selector.selection.length).equal(1, "Nothing was selected");
            var ev;
            function onDeselect(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.deselect, onDeselect);
            }

            chart.addEventListener(cl.Event.deselect, onDeselect);
            chart.selector.deselect();

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined && ev.target.length !== 0 && ev.target[0].props !== undefined && ev.target[0].props.id === 1;
            assert.ok(found, "Shape was not found");
        });

        it('should return shape in select event', function() {
            chart.selector.deselect();
            var ev;
            function onSelect(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.select, onSelect);
            }

            chart.addEventListener(cl.Event.select, onSelect);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined && ev.target.length !== 0 && ev.target[0].props !== undefined && ev.target[0].props.id === 1;
            assert.ok(found, "Shape was not found");
        });

        it('should return shape in deselect event', function() {
            var ev;
            function onDeselect(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.deselect, onDeselect);
            }

            chart.addEventListener(cl.Event.deselect, onDeselect);
            fireEvent("mousemove", 0, 0, chart);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mouseup", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined && ev.target.length !== 0 && ev.target[0].props !== undefined && ev.target[0].props.id === 1;
            assert.ok(found, "Shape was not found");
        });

        it('should return shapes after rectangular selection', function() {
            chart.selector.deselect();
            chart.selector.enableMultiselect();
            chart.addBubbles([{id: 2, x: 10, y: 50, size: 30}]);

            var ev;
            function onSelect(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.select, onSelect);
            }

            chart.addEventListener(cl.Event.select, onSelect);
            fireEvent("mousemove", 0, 300, chart);
            fireEvent("mousedown", 0, 300, chart);
            fireEvent("mousemove", 700, 310, chart);
            fireEvent("mouseup", 700, 310, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined;
            assert.ok(found, "Shape was not found");
            expect(ev.target.length).equal(2, "Wrong selected shapes count");
        });

        it('should return multiple shapes after rectangular deselection', function() {
            var ev;
            function onDeselect(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.deselect, onDeselect);
            }

            chart.addEventListener(cl.Event.deselect, onDeselect);
            fireEvent("mousemove", 0, 0, chart);
            fireEvent("mousedown", 0, 0, chart);
            fireEvent("mousemove", 40, 40, chart);
            fireEvent("mouseup", 40, 40, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined;
            assert.ok(found, "Shape was not found");
            expect(ev.target.length).equal(2, "Wrong selected shapes count");
        });

        it('should fire drag start event', function() {
            chart.selector.enableDrag();
            chart.shapes.clear();
            chart.addBubbles([{id: 11, x: 50, y: 50, size: 30}]);

            var ev;
            function onDragStart(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.dragStart, onDragStart);
            }

            chart.addEventListener(cl.Event.dragStart, onDragStart);
            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousedown", 400, 300, chart);
            fireEvent("mousemove", 404, 304, chart);
            fireEvent("mousemove", 100, 100, chart);
            assert.ok(ev, "Event not fired");
            expect(ev.target).to.exists;
            expect(ev.target.length).equal(1, "Wrong shape count");
            expect(ev.target[0].props.id).equal(11, "Wrong shape id");

            fireEvent("mouseup", 100, 100, chart);
        });

        it('should fire drag end event', function() {
            var ev;
            function onDragEnd(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.dragEnd, onDragEnd);
            }

            chart.addEventListener(cl.Event.dragStart, onDragEnd);
            fireEvent("mousemove", 100, 100, chart);
            fireEvent("mousedown", 100, 100, chart);
            fireEvent("mousemove", 104, 104, chart);
            fireEvent("mousemove", 300, 400, chart);
            fireEvent("mouseup", 300, 400, chart);

            assert.ok(ev, "Event not fired");
            expect(ev.target).to.exists;
            expect(ev.target.length).equal(1, "Wrong shape count");
            expect(ev.target[0].props.id).equal(11, "Wrong shape id");
        });


    })
}
