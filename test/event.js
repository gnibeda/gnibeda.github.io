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
            var fired = false;
            var found = false;
            chart.addEventListener(cl.Event.click, onClick);
            fireEvent("click", 400, 300, chart);

            function onClick(e) {
                chart.removeEventListener(cl.Event.click, onClick);
                fired = true;
                found = e.target !== undefined && e.target.props !== undefined && e.target.props.id === 1;
                try {
                    expect(e.x).equal(50, "Wrong x coordinate");
                    expect(e.y).equal(50, "Wrong y coordinate");
                    assert.ok(found, "Shape was not clicked");
                    done();
                } catch(err) { done(err); }
            }

            setTimeout(function() {
                try {
                    assert.ok(fired, "Event was not fired");
                    done();
                } catch(err) { done(err); }
            }, 50);
        });

        it('should return shape in double click event', function(done) {
            var fired = false;
            var found = false;
            chart.addEventListener(cl.Event.doubleClick, onClick);
            fireEvent("dblclick", 400, 300, chart);

            function onClick(e) {
                chart.removeEventListener(cl.Event.doubleClick, onClick);
                fired = true;
                found = e.target !== undefined && e.target.props !== undefined && e.target.props.id === 1;
                try {
                    expect(e.x).equal(50, "Wrong x coordinate");
                    expect(e.y).equal(50, "Wrong y coordinate");
                    assert.ok(found, "Shape was not clicked");
                    done();
                } catch(err) { done(err); }
            }

            setTimeout(function() {
                try {
                    assert.ok(fired, "Event was not fired");
                    done();
                } catch(err) { done(err); }
            }, 50);
        });

        it('should return shape, in shapeover event', function(done) {
            var fired = false;
            chart.addEventListener(cl.Event.shapeOver, onOver);

            fireEvent("mousemove", 400, 300, chart);

            function onOver(e) {
                chart.removeEventListener(cl.Event.shapeOver, onOver);
                fired = true;
                var found = e.target !== undefined && e.target.props !== undefined && e.target.props.id === 1;
                try {
                    assert.ok(found, "Shape was not found");
                    done();
                } catch(err) { done(err); }
            }

            setTimeout(function() {
                try {
                    assert.ok(fired, "Event was not fired");
                    done();
                } catch(err) { done(err); }
            }, 50);
        });

        it('should return shape, in shapeout event', function(done) {
            var fired = false;
            chart.addEventListener(cl.Event.shapeOut, onOut);

            fireEvent("mousemove", 40, 300, chart);

            function onOut(e) {
                chart.removeEventListener(cl.Event.shapeOut, onOut);
                fired = true;
                var found = e.target !== undefined && e.target.props !== undefined && e.target.props.id === 1;
                try {
                    assert.ok(found, "Shape was not found");
                    done();
                } catch(err) { done(err); }
            }

            setTimeout(function() {
                try {
                    assert.ok(fired, "Event was not fired");
                    done();
                } catch(err) { done(err); }
            }, 50);
        });

        it("should don't fire twise shape over event", function(done) {
            var fired = false;
            var count = 0;
            chart.addEventListener(cl.Event.shapeOver, onOver);

            fireEvent("mousemove", 400, 300, chart);
            fireEvent("mousemove", 400, 300, chart);

            function onOver(e) {
                fired = true;
                count++;
            }

            setTimeout(function() {
                chart.removeEventListener(cl.Event.shapeOver, onOver);
                try {
                    expect(count).equal(1, "Event was fired twice");

                    done();
                } catch(err) { done(err); }
            }, 50);
        });



        it('should fire mouse down event', function(done) {
            var fired = false;
            chart.addEventListener(cl.Event.mouseDown, onEvent);

            fireEvent("mousedown", 400, 300, chart);

            function onEvent(e) {
                chart.removeEventListener(cl.Event.mouseDown, onEvent);
                fired = true;
                try {
                    expect(e.x).equal(50, "Wrong x coordinate");
                    expect(e.y).equal(50, "Wrong y coordinate");
                    done();
                } catch(err) { done(err); }
            }

            setTimeout(function() {
                try {
                    assert.ok(fired, "Event was not fired");
                    done();
                } catch(err) { done(err); }
            }, 50);
        });

        it('should fire mouse up event', function(done) {
            var fired = false;
            chart.addEventListener(cl.Event.mouseUp, onEvent);

            fireEvent("mouseup", 400, 300, chart);

            function onEvent(e) {
                chart.removeEventListener(cl.Event.mouseUp, onEvent);
                fired = true;
                try {
                    expect(e.x).equal(50, "Wrong x coordinate");
                    expect(e.y).equal(50, "Wrong y coordinate");
                    done();
                } catch(err) { done(err); }
            }

            setTimeout(function() {
                try {
                    assert.ok(fired, "Event was not fired");
                    done();
                } catch(err) { done(err); }
            }, 50);
        });

        it('should fire mouse move event', function(done) {
            var fired = false;
            chart.addEventListener(cl.Event.mouseMove, onEvent);

            fireEvent("mousemove", 400, 300, chart);

            function onEvent(e) {
                chart.removeEventListener(cl.Event.mouseMove, onEvent);
                fired = true;
                try {
                    expect(e.x).equal(50, "Wrong x coordinate");
                    expect(e.y).equal(50, "Wrong y coordinate");
                    done();
                } catch(err) { done(err); }
            }

            setTimeout(function() {
                try {
                    assert.ok(fired, "Event was not fired");
                    done();
                } catch(err) { done(err); }
            }, 50);
        });

    })
}
