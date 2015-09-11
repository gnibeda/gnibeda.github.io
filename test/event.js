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

        it('should return shape in click event', function() {
            var ev;
            function onClick(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.click, onClick);
            }

            chart.addEventListener(cl.Event.click, onClick);
            fireEvent("click", 400, 300, chart);

            assert.ok(ev, "Event was not fired");
            var found = ev.target !== undefined && ev.target.props !== undefined && ev.target.props.id === 1;
            assert.ok(found, "Shape was not found");
            expect(ev.x).equal(50, "Wrong x coordinate");
            expect(ev.y).equal(50, "Wrong y coordinate");
        });

        it('should return shape in double click event', function() {
            var ev;
            function onClick(e) {
                ev = cl.Utils.merge({}, e);
                chart.removeEventListener(cl.Event.doubleClick, onClick);
            }

            chart.addEventListener(cl.Event.doubleClick, onClick);
            fireEvent("dblclick", 400, 300, chart);

            assert.ok(ev, "Event not fired");
            var found = ev.target !== undefined && ev.target.props !== undefined && ev.target.props.id === 1;
            assert.ok(found, "Shape was not found");
            expect(ev.x).equal(50, "Wrong x coordinate");
            expect(ev.y).equal(50, "Wrong y coordinate");
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

    })
}
