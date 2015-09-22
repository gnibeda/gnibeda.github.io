function testShapes() {
    'use strict';

    describe("cl.Shape ", function() {
        var chart, shape;

        // TODO: Add test to display shapes centers
        before(function() {
            chart = new cl.Chart({ element: document.getElementById("test") });
        });

        after(function() {
            chart.destroy();
            chart = null;
        });

        it('should deny creation without parent', function(){
            expect(function(){new cl.Shape()}).to.throw("Can not create shape without 'parent' parameter");
        });

        it('should deny creation without id', function(){
            expect(function(){new cl.Shape(chart.shapes)}).to.throw("Can not create shape without 'id' parameter");
        });

        it('should create shape', function(){
            shape = new cl.Shape(chart.shapes, {id: 32});
        });

        it('should get shape id', function(){
            expect(shape.getId()).equal(32, "Wrong shape id");
        });

        it('should get props', function(){
            var props = shape.getProps();
            expect(props.id).equal(32, "Wrong id in props");
        });

        it('should destroy shape', function(){
            shape.destroy();
        });
    });


    describe("cl.ShapeManager", function() {
        var chart, shape1, shape2;
        var total = 0;
        var total2 = 0;
        var total3 = 0;

        before(function() {
            chart = new cl.Chart({ element: document.getElementById("test") });
        });

        after(function() {
            chart.destroy();
            chart = null;
        });

        it('should deny bubble creation without size', function(){
            expect(function(){new cl.Bubble(chart.shapes, {id: 33})}).to.throw("Can not create shape without 'size' parameter");
        });

        it('should deny rect creation without x2', function(){
            expect(function(){new cl.Rect(chart.shapes, {id: 33})}).to.throw("Can not create shape without 'x2' parameter");
        });

        it('should deny rect creation without y2', function(){
            expect(function(){new cl.Rect(chart.shapes, {id: 33, x2: 30})}).to.throw("Can not create shape without 'y2' parameter");
        });

        it('should deny add shape without id', function(){
            expect(function(){chart.addBubbles([{}])}).to.throw("Can not create shape without 'id' parameter");
        });

        it('should add bubbles', function(){
            var bubbles = [{id: 30, x: 10, y: 20, size: 40, color: "#AAFFAA", opacity: 0.4}, {id: 31, x: 20, y: 30, size: 60, color: "#EEFFAA", opacity: 0.8}];
            chart.addBubbles(bubbles);
        });

        it('should add rects', function(){
            var rects = [{id: 40, x: 10, y: 20, x2: 20, y2: 30, color: "#AAFFAA", opacity: 0.4}, {id: 41, x: 20, y: 30, x2: 40, y2: 50, color: "#EEFFAA", opacity: 0.8}];
            chart.addRects(rects);
        });

        it('should add lines', function(){
            var lines = [{id: 80, x: 80, y: 80, x2: 90, y2: 90, color: "#AAFFAA", opacity: 0.4}];
            chart.addRects(lines);
        });

        it('should add centroid', function(){
            var lines = [];
            chart.shapes.add({id: 100, x: 100, y: 100, size: 4}, cl.Centroid);
        });

        it('should deny add shape as different type', function(){
            var rects = [{id: 30, x: 10, y: 20, x2: 20, y2: 30}];
            expect(function(){chart.addRects(rects)}).to.throw("Can not add shape, because same shape with different type already exists");
        });

        it('should deny add shape without class', function(){
            var rects = [{id: 30, x: 10, y: 20, x2: 20, y2: 30}];
            expect(function(){chart.shapes.add(rects)}).to.throw("Shape class is not specified");
        });

        it('should support zIndex', function(done){
            chart.shapes.options.zIndexUsage = true;
            chart.shapes.clear();
            chart.addBubbles([
                {id: 1, x: 50, y: 50, size: 60, opacity: 1, color: "red", zIndex: 1},
                {id: 2, x: 50, y: 50, size: 20, opacity: 1, color: "green", zIndex: 3},
                {id: 3, x: 50, y: 50, size: 40, opacity: 1, color: "blue", zIndex: 2}
            ]);

            setTimeout(function(){
                try {
                    var pixel = chart.screen.ctx.getImageData(450, 350, 1, 1).data;
                    expect(pixel).to.deep.equal({"0": 0, "1": 128, "2": 0, "3": 255}, "Wrong color of top shape");
                    pixel = chart.screen.ctx.getImageData(450, 350 + 25, 1, 1).data;
                    expect(pixel).to.deep.equal({"0": 0, "1": 0, "2": 255, "3": 255}, "Wrong color of middle shape");
                    pixel = chart.screen.ctx.getImageData(450, 350 + 45, 1, 1).data;
                    expect(pixel).to.deep.equal({"0": 255, "1": 0, "2": 0, "3": 255}, "Wrong color of bottom shape");
                }
                catch (e) {
                    done(e);
                }
                chart.shapes.options.zIndexUsage = false;
                done();
            }, 200);
        });

        it('should remove all', function(){
            chart.shapes.clear();
            expect(chart.shapes.count).equal(0, "Shapes was not cleared");

            var bubbles = [{id: 30, x: 10, y: 20, size: 40, color: "#AAFFAA", opacity: 0.4}, {id: 31, x: 20, y: 30, size: 60, color: "#EEFFAA", opacity: 0.8}];
            chart.addBubbles(bubbles);
        });

        it('should get count', function(){
           expect(chart.shapes.count).equal(2, "Wrong shape count");
        });

        it('should find bubbles by id', function() {
            shape1 = chart.shapes.get(30);
            shape2 = chart.shapes.get(31);
            assert.ok(shape1, "Can't find bubble with id 30");
            assert.ok(shape2, "Can't find bubble with id 31");
        });

        it('should change bubble props', function(){
            shape1.setProps({x: 1, y: 1, size: 10});
            expect(shape1.props.x).equal(1, "property x doesn't match");
            expect(shape1.props.y).equal(1, "property y doesn't match");
            expect(shape1.props.size).equal(10, "property size doesn't match");
        });

        it("should don't link itself", function(){
            shape1.link([30]);
            expect(shape1.props.links.length).equal(0, "Wrong count of links ids");
        });

        it('should set links', function(){
            shape1.link([31, 777]);
            expect(shape1.props.links.length).equal(1, "Wrong count of links ids");
            expect(shape1.props.links[0]).equal(31, "Wrong links property");
        });


        it('should remove links', function(){
            shape1.unlink([31]);
            expect(shape1.props.links.length).equal(0, "Wrong count of links ids");

            shape1.link([31]);
            shape1.unlink([31]);
            expect(shape1.props.links.length).equal(0, "Wrong count of links ids");
        });

        it('should dont change id', function(){
            shape1.setProps({id: 10});
            expect(shape1.props.id).equal(30, "id doesn't match 30");
        });

        it('should dont change owner', function(){
            shape1.setProps({owner: null});
            assert.ok(shape1.props.owner, "Owner not found");
        });

        it('should have no owner in getProps', function(){
            var p = shape1.getProps();
            assert.ok(!p.owner, "Owner should not be exists in returned props");
        });

        it('should calc animProps', function(){
            var changed = shape1.calcAnimProps({x: 1, y: 2, size: 30});
            assert.ok(changed, "Wrong result of calcAnimProps");
            assert.ok(shape1.animProps, "animProps not exists");
            expect(shape1.animProps.x).equal(undefined, "animProps has X, but shouldn't");
            expect(shape1.animProps.y).equal(2, "no y in animProps");
            expect(shape1.animProps.size).equal(30, "no size in animProps");
        });

        it('should update props using add', function(){
            var bubbles = [{id: 30, x: 1, y: 2, size: 40}, {id: 33, x: 20, y: 30, size: 60, color: "#EEFFAA", opacity: 0.8}];
            chart.addBubbles(bubbles);
            expect(chart.shapes.shapes.length).equal(3, "Wrong shapes number");
            var b = chart.shapes.get(30);
            expect(b.props.x).equal(1, "property x doesn't match");
            expect(b.props.y).equal(2, "property y doesn't match");
            expect(b.props.size).equal(40, "property size doesn't match");
        });

        it('should limit animations when setProps was called', function() {
            cl.ShapeManager.MAX_ANIMATED_ITEMS = 1;
            shape1.setProps({x: 100, y: 100}, true, 5000);
            shape2.setProps({x: 100, y: 100}, true, 5000);

            var p1 = shape1.getProps();
            var p2 = shape2.getProps();
            // First should be animated
            expect(p1.x).not.equal(100, "First should be animated");
            expect(p1.y).not.equal(100, "First should be animated");
            // Second should change properties immediately
            expect(p2.x).equal(100, "Second should change properties immediately");
            expect(p2.y).equal(100, "Second should change properties immediately");

            expect(chart.shapes.animCount).equals(1, "Wrong count of animated shapes");
        });

        it('should limit animations when addBubbles was called', function() {
            cl.ShapeManager.MAX_ANIMATED_ITEMS = 1;
            var bubbles = [{id: 30, x: 40, y: 40}, {id: 31, x: 40, y: 40}];
            chart.addBubbles(bubbles, true, 5000);

            var p1 = shape1.getProps();
            var p2 = shape2.getProps();
            expect(p1.x).not.equal(40, "First should be animated");
            expect(p1.y).not.equal(40, "First should be animated");
            expect(p2.x).equal(40, "Second should change properties immediately");
            expect(p2.y).equal(40, "Second should change properties immediately");

            expect(chart.shapes.animCount).equals(1, "Wrong count of animated shapes");
        });

        it('should stop shape animation and have right props', function() {
            cl.ShapeManager.MAX_ANIMATED_ITEMS = 500;
            shape1.stopAnimation();
            var p = shape1.getProps();
            expect(p.x).equal(40, "x doesn't match");
            expect(p.y).equal(40, "y doesn't match");
            expect(chart.shapes.animCount).equals(0, "Wrong count of animated shapes");
        });

        it('should move non animated shapes in static', function(done) {
            shape1.stopAnimation();
            shape1.stopAnimation();
            setTimeout(function() {
                var found = false;
                for (var i = 0; i < chart.shapes.shapes.length; i++) if (chart.shapes.shapes[i].isAnimating) found = true;
                assert.ok(!found, "Some shapes are not in static");
                total++;
                done();
            }, 400)
        });

        it('should remove during animation', function(done){
            chart.shapes.add([{id: 33, x: 0, y: 0, size: 10}], cl.Bubble, true, 5000);

            setTimeout(function(){
                chart.shapes.remove(chart.shapes.get(33));

                expect(chart.shapes.shapes.length).equal(2, "Shape not deleted");
                expect(chart.shapes.animCount).equal(0, "Wrong animation count");

                total++;
                done();
            }, 400);
        });

        it('should animate color', function(done){
            shape2.setProps({color: "#334455"}, true, 300);
            expect(shape2.props.color).not.equal("#334455", "color doesn't match");
            setTimeout(function(){
                var p = shape2.getProps();
                expect(p.color).equal("#334455", "color doesn't match");
                total++;
                done();
            }, 600);
        });

        it('should animate props via setProps', function(done){
            shape1.setProps({x: 10, y: 20, size: 50}, true, 300);
            setTimeout(function(){
                var p = shape1.getProps();
                expect(p.x).equal(10, "x doesn't match");
                expect(p.y).equal(20, "y doesn't match");
                expect(p.size).equal(50, "size doesn't match");
                total++;
                done();
            }, 600);
        });

        it('should animate border color and size', function(done){
            shape1.setProps({borderColor: "green", border: 10}, true, 300);
            setTimeout(function(){
                var p = shape1.getProps();
                expect(p.borderColor).equal("#008000", "Border color doesn't match");
                expect(p.border).equal(10, "Border size doesn't match");
                total++;
                done();
            }, 600);
        });

        it('should complete all bubbles animations', function(done) {
            var int = setInterval(function() {
                if (total === 5) {
                    clearInterval(int);
                    done();
                }
            }, 100);
        });

        it('should remove shapes', function() {
            chart.shapes.remove(chart.shapes.get(30));
            chart.shapes.remove(chart.shapes.get(31));
            expect(chart.shapes.shapes.length).equal(0, "Some shapes not deleted");
        });

        it('should animate rectangle', function(done) {
            this.timeout(5000);
            var r = [{id: 10, x: 40, y: 40, x2: 60, y2: 60, color: "green", borderRadius: 3}];
            chart.addRects(r);
            shape1 = chart.shapes.get(10);
            shape1.setProps({x: 10, y: 10, x2: 90, y2: 90, borderRadius: 20}, true, 100);
            var d = done;
            setTimeout(function () {
                    var p = shape1.getProps();
                    expect(p.x).equal(10, "x doesn't match");
                    expect(p.y).equal(10, "y doesn't match");
                    expect(p.x2).equal(90, "x2 doesn't match");
                    expect(p.y2).equal(90, "y2 doesn't match");
                    expect(p.borderRadius).equal(20, "borderRadius doesn't match");
                    total2++;
                    done();
                }, 600);
        });

        it('should animate rectangle colors', function(done) {
            var int = setInterval(function() {
                if (total2 !== 1) return;
                clearInterval(int);

                shape1.setProps({color: "red", color2: "black", opacity: 1}, true, 100);
                setTimeout(function(){
                    var p = shape1.getProps();
                    expect(p.color).equal("#ff0000", "Color doesn't match");
                    expect(p.color2).equal("#000000", "Color2 doesn't match");
                    total2++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate rectangle border radius', function(done) {
            var int = setInterval(function() {
                if (total2 !== 2) return;
                clearInterval(int);

                shape1.setProps({ borderRadius: 50}, true, 300);
                setTimeout(function(){
                    var p = shape1.getProps();
                    expect(p.borderRadius).equal(50, "Border radius doesn't match");
                    total2++;
                    done();
                }, 600);
            }, 100);
        });

        it('should complete all rects animations', function(done) {
            this.timeout(10000);
            var int = setInterval(function() {
                if (total2 === 3) {
                    clearInterval(int);
                    chart.shapes.remove(shape1);
                    done();
                }
            }, 100);
        });

        it('should animate line', function(done) {
            this.timeout(5000);
            var r = [{id: 1, x: 40, y: 40, x2: 60, y2: 60, color: "red", border: 3}];
            chart.addLines(r);
            shape1 = chart.shapes.get(1);
            shape1.setProps({x: 90, y: 10, x2: 10, y2: 90}, true, 300);
            setTimeout(function () {
                var p = shape1.getProps();
                expect(p.x).equal(90, "x doesn't match");
                expect(p.y).equal(10, "y doesn't match");
                expect(p.x2).equal(10, "x2 doesn't match");
                expect(p.y2).equal(90, "y2 doesn't match");
                total3++;
                done();
            }, 600);
        });

        it('should animate line width', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total3 !== 1) return;
                clearInterval(int);
                shape1.setProps({border: 20}, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps();
                    expect(p.border).equal(20, "border doesn't match");
                    total3++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate line points', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total3 !== 2) return;
                clearInterval(int);
                shape1.setProps({size: 10, size2: 20}, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps();
                    expect(p.size).equal(10, "first point size doesn't match");
                    expect(p.size2).equal(20, "second point size doesn't match");
                    total3++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate line points colors', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total3 !== 3) return;
                clearInterval(int);
                shape1.setProps({pointColor: "green", pointColor2: "blue"}, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps();
                    expect(p.pointColor).equal("#008000", "first point color doesn't match");
                    expect(p.pointColor2).equal("#0000ff", "second point color doesn't match");
                    total3++;
                    done();
                }, 600);
            }, 100);
        });

        it('should complete all lines animations', function(done) {
            this.timeout(10000);
            var int = setInterval(function() {
                if (total3 === 4) {
                    clearInterval(int);
                    chart.shapes.remove(shape1);
                    done();
                }
            }, 100);
        });


    });
}
