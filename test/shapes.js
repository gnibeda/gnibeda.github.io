function testShapes() {
    'use strict';

    describe("cl.Shape ", function() {
        var chart, shape;

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
        var total4 = 0;
        var total5 = 0;

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
            var bubbles = [{id: 30, x: 10, y: 20, size: 40, border: 20, color: "#AAFFAA", opacity: 0.4}, {id: 31, x: 20, y: 30, size: 60, color: "#EEFFAA", opacity: 0.8}];
            chart.addBubbles(bubbles);
        });

        it('should return bubble type as "bubble"', function(){
            expect(chart.shapes.get(30).type).equal("bubble", "Wrong bubble type");
        });

        it('should add rects', function(){
            var rects = [{id: 40, x: 10, y: 20, x2: 20, y2: 30, border: 20, color: "#AAFFAA", opacity: 0.4}, {id: 41, x: 20, y: 30, x2: 40, y2: 50, color: "#EEFFAA", opacity: 0.8}];
            chart.addRects(rects);
        });

        it('should return rect type as "rect"', function(){
            expect(chart.shapes.get(40).type).equal("rect", "Wrong bubble type");
        });

        it('should add lines', function(){
            var lines = [{id: 80, x: 80, y: 80, x2: 90, y2: 90, color: "#AAFFAA", opacity: 0.4}];
            chart.addLines(lines);
        });

        it('should return line type as "line"', function(){
            expect(chart.shapes.get(80).type).equal("line", "Wrong bubble type");
        });

        it('should add poly line', function(){
            chart.addPolyLines({ id: 90, border: 10, color: "black", closed: true, lineJoin: "round", points: [0, 0, 90, 10, 80, 90, 70, 20]});
        });

        it('should return poly line type as "polyline"', function(){
            expect(chart.shapes.get(90).type).equal("polyline", "Wrong bubble type");
        });

        it('should add poly', function(){
            chart.addPolys({ id: 100, border: 10, color: "black", lineJoin: "round", points: [0, 0, 90, 10, 80, 90, 70, 20]});
        });

        it('should return poly line type as "poly"', function(){
            expect(chart.shapes.get(100).type).equal("poly", "Wrong bubble type");
        });

        it('should add centroid', function(){
            chart.addCentroids({id: 110, x: 100, y: 100, size: 4});
        });

        it('should return centroid type as "centroid"', function(){
            expect(chart.shapes.get(110).type).equal("centroid", "Wrong bubble type");
        });

        it('should add shapes by class', function(){
            chart.add({id: 120, x: 100, y: 100, size: 4}, cl.Bubble);
        });

        it('should return new id', function(){
            expect(chart.shapes.getNewId()).equal(121, "Wrong new id");
        });

        it('should get pixel area of bubble', function(){
            var a = Math.floor(chart.shapes.get(30).getPixelArea());
            // Area = (radius + border / 2)^2 * PI
            expect(a).equal(Math.floor((40 + 20 / 2) * (40 + 20 / 2) * Math.PI), "Wrong bubble area");
        });

        it('should get pixel area of rect', function(){
            var a = Math.floor(chart.shapes.get(40).getPixelArea());
            expect(a).equal(9116, "Wrong rect area");
        });

        it('should get pixel area of line', function(){
            var a = Math.floor(chart.shapes.get(80).getPixelArea());
            expect(a).equal(14, "Wrong rect area");
        });

        it('should get pixel area of poly line', function(){
            var a = Math.floor(chart.shapes.get(90).getPixelArea());
            expect(a).equal(314, "Wrong rect area");
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
                    var p = {r: pixel[0], g: pixel[1], b: pixel[2]};
                    expect(p).to.deep.equal({r: 0, g: 128, b: 0}, "Wrong color of top shape");
                    pixel = chart.screen.ctx.getImageData(450, 350 + 25, 1, 1).data;
                    p = {r: pixel[0], g: pixel[1], b: pixel[2]};
                    expect(p).to.deep.equal({r: 0, g: 0, b: 255}, "Wrong color of middle shape");
                    pixel = chart.screen.ctx.getImageData(450, 350 + 45, 1, 1).data;
                    p = {r: pixel[0], g: pixel[1], b: pixel[2]};
                    expect(p).to.deep.equal({r: 255, g: 0, b: 0}, "Wrong color of bottom shape");
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
            var bubbles = [{id: 30, x: 1, y: 2, size: 40}, {id: 33, x: 20, y: 30, size: 60, color: "blue", opacity: 0.8}];
            chart.addBubbles(bubbles);
            expect(chart.shapes.count).equal(3, "Wrong shapes number");
            var b = chart.shapes.get(30);
            expect(b.props.x).equal(1, "property x doesn't match");
            expect(b.props.y).equal(2, "property y doesn't match");
            expect(b.props.size).equal(40, "property size doesn't match");
        });

        it("should not changed if added with same props", function(){
            var changed = chart.shapes.get(33).calcAnimProps({id: 33, x: 20, y: 30, size: 60, color: "blue", opacity: 0.8});
            expect(changed).to.be.false;
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
                for (var i = 0; i < chart.shapes.count; i++) if (chart.shapes.items[i].isAnimating) found = true;
                assert.ok(!found, "Some shapes are not in static");
                total++;
                done();
            }, 400)
        });

        it('should remove during animation', function(done){
            chart.shapes.add([{id: 33, x: 0, y: 0, size: 10}], cl.Bubble, true, 5000);

            setTimeout(function(){
                chart.shapes.remove(chart.shapes.get(33));

                expect(chart.shapes.count).equal(2, "Shape not deleted");
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
            expect(chart.shapes.count).equal(0, "Some shapes not deleted");
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

        it('should render centers after enabling', function(done) {
            var bubbles = [{id: 30, x: 10, y: 20, size: 40, color: "#AAFFAA", opacity: 0.4}, {id: 31, x: 20, y: 30, size: 60, color: "#EEFFAA", opacity: 0.8}];
            chart.addBubbles(bubbles);

            var calls = 0;
            var oldFunc = chart.shapes.static.drawCircle;
            chart.shapes.static.drawCircle = function(x, y, r) {
                oldFunc.call(chart.shapes.static, x, y, r);
                calls++;
            };

            chart.shapes.showCenters();
            setTimeout(function() {
                chart.shapes.static.drawCircle = oldFunc;
                try {
                    expect(calls).equal(chart.shapes.count, "Wrong centers count");
                } catch (e) { done(e) }
                done();
            }, 100);
        });

        it("should don't render centers after disabling", function(done) {
            var calls = 0;
            var oldFunc = chart.shapes.static.drawCircle;
            chart.shapes.static.drawCircle = function(x, y, r) {
                oldFunc(x, y, r);
                calls++;
            };

            chart.shapes.hideCenters();
            setTimeout(function() {
                chart.shapes.static.drawCircle = oldFunc;
                try {
                    expect(calls).equal(0, "Wrong centers count");
                } catch (e) { done(e) }
                done();
            }, 100);
        });


        it('should animate poly line points', function(done) {
            chart.shapes.clear();
            chart.shapes.add({
                id: -22, border: 6, color: "green", opacity: 0.8, closed: true, lineJoin: "round",
                points: [0, 0, 90, 10, 80, 90, 70, 20]
            }, cl.PolyLine);
            shape1 = chart.shapes.get(-22);

            this.timeout(5000);
            var int = setInterval(function() {
                if (total4 !== 0) return;
                clearInterval(int);
                shape1.setProps({ points: [10, 10, 30, 80, 40, 40, 20, 90] }, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p[0]).equal(10, "Wrong 1 point X coordinate");
                    expect(p[1]).equal(10, "Wrong 1 point Y coordinate");
                    expect(p[2]).equal(30, "Wrong 2 point X coordinate");
                    expect(p[3]).equal(80, "Wrong 2 point Y coordinate");
                    expect(p[4]).equal(40, "Wrong 3 point X coordinate");
                    expect(p[5]).equal(40, "Wrong 3 point Y coordinate");
                    expect(p[6]).equal(20, "Wrong 4 point X coordinate");
                    expect(p[7]).equal(90, "Wrong 4 point Y coordinate");
                    total4++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly line "closed" property to false', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total4 !== 1) return;
                clearInterval(int);
                shape1.setProps({ closed: false }, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps();
                    expect(p.closed).to.be.false;
                    total4++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly line "closed" property to true', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total4 !== 2) return;
                clearInterval(int);
                shape1.setProps({ closed: true }, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps();
                    expect(p.closed).to.be.true;
                    total4++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly line points with new points added ', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total4 !== 3) return;
                clearInterval(int);
                shape1.setProps({points: [0, 0, 90, 10, 80, 90, 70, 20, 100, 40, 70, 90]}, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p.length).equal(12, "Wrong point count");
                    expect(p[8]).equal(100, "Wrong 5 point X coordinate");
                    expect(p[9]).equal(40, "Wrong 5 point Y coordinate");
                    expect(p[10]).equal(70, "Wrong 6 point X coordinate");
                    expect(p[11]).equal(90, "Wrong 6 point Y coordinate");
                    total4++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly line points with old points removed', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total4 !== 4) return;
                clearInterval(int);
                shape1.setProps({points: [80, 80, 10, 80, 50, 10]}, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p.length).equal(6, "Wrong point count");
                    expect(p[0]).equal(80, "Wrong 1 point X coordinate");
                    expect(p[1]).equal(80, "Wrong 1 point Y coordinate");
                    expect(p[2]).equal(10, "Wrong 2 point X coordinate");
                    expect(p[3]).equal(80, "Wrong 2 point Y coordinate");
                    expect(p[4]).equal(50, "Wrong 3 point X coordinate");
                    expect(p[5]).equal(10, "Wrong 3 point Y coordinate");
                    total4++;
                    done();
                }, 600);
            }, 100);
        });

        it('should set poly line points to end position after stopAnimation', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total4 !== 5) return;
                clearInterval(int);
                shape1.setProps({points: [10, 10, 10, 50, 90, 10]}, true, 2000);
                setTimeout(function() { shape1.stopAnimation(); }, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p.length).equal(6, "Wrong point count");
                    expect(p[0]).equal(10, "Wrong 1 point X coordinate");
                    expect(p[1]).equal(10, "Wrong 1 point Y coordinate");
                    expect(p[2]).equal(10, "Wrong 2 point X coordinate");
                    expect(p[3]).equal(50, "Wrong 2 point Y coordinate");
                    expect(p[4]).equal(90, "Wrong 3 point X coordinate");
                    expect(p[5]).equal(10, "Wrong 3 point Y coordinate");
                    total4++;
                    done();
                }, 600);
            }, 100);
        });

        it('should complete all poly line animations', function(done) {
            this.timeout(10000);
            var int = setInterval(function() {
                if (total4 === 6) {
                    clearInterval(int);
                    chart.shapes.remove(shape1);
                    done();
                }
            }, 100);
        });

        it('should animate poly line points', function(done) {
            chart.shapes.clear();
            chart.shapes.add({
                id: -22, border: 6, color: "green", opacity: 0.8, closed: true, lineJoin: "round",
                points: [0, 0, 90, 10, 80, 90, 70, 20]
            }, cl.Poly);
            shape1 = chart.shapes.get(-22);

            this.timeout(5000);
            var int = setInterval(function() {
                if (total5 !== 0) return;
                clearInterval(int);
                shape1.setProps({ points: [10, 10, 30, 80, 40, 40, 20, 90] }, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p[0]).equal(10, "Wrong 1 point X coordinate");
                    expect(p[1]).equal(10, "Wrong 1 point Y coordinate");
                    expect(p[2]).equal(30, "Wrong 2 point X coordinate");
                    expect(p[3]).equal(80, "Wrong 2 point Y coordinate");
                    expect(p[4]).equal(40, "Wrong 3 point X coordinate");
                    expect(p[5]).equal(40, "Wrong 3 point Y coordinate");
                    expect(p[6]).equal(20, "Wrong 4 point X coordinate");
                    expect(p[7]).equal(90, "Wrong 4 point Y coordinate");
                    total5++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly points with new points added ', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total5 !== 1) return;
                clearInterval(int);
                shape1.setProps({points: [0, 0, 90, 10, 80, 90, 70, 20, 100, 40, 70, 90]}, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p.length).equal(12, "Wrong point count");
                    expect(p[8]).equal(100, "Wrong 5 point X coordinate");
                    expect(p[9]).equal(40, "Wrong 5 point Y coordinate");
                    expect(p[10]).equal(70, "Wrong 6 point X coordinate");
                    expect(p[11]).equal(90, "Wrong 6 point Y coordinate");
                    total5++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly points with old points removed', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total5 !== 2) return;
                clearInterval(int);
                shape1.setProps({points: [80, 80, 10, 80, 50, 10]}, true, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p.length).equal(6, "Wrong point count");
                    expect(p[0]).equal(80, "Wrong 1 point X coordinate");
                    expect(p[1]).equal(80, "Wrong 1 point Y coordinate");
                    expect(p[2]).equal(10, "Wrong 2 point X coordinate");
                    expect(p[3]).equal(80, "Wrong 2 point Y coordinate");
                    expect(p[4]).equal(50, "Wrong 3 point X coordinate");
                    expect(p[5]).equal(10, "Wrong 3 point Y coordinate");
                    total5++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly color', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total5 !== 3) return;
                clearInterval(int);
                shape1.setProps({ color: "red" }, true, 300);
                setTimeout(function () {
                    expect(shape1.props.color).equal("#ff0000", "Wrong color");
                    total5++;
                    done();
                }, 600);
            }, 100);
        });

        it('should animate poly border color', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total5 !== 4) return;
                clearInterval(int);
                shape1.setProps({ borderColor: "blue", border: 30 }, true, 300);
                setTimeout(function () {
                    expect(shape1.props.borderColor).equal("#0000ff", "Wrong border color");
                    expect(shape1.props.border).equal(30, "Wrong border size");
                    total5++;
                    done();
                }, 600);
            }, 100);
        });

        it('should set poly points to end position after stopAnimation', function(done) {
            this.timeout(5000);
            var int = setInterval(function() {
                if (total5 !== 5) return;
                clearInterval(int);
                shape1.setProps({points: [10, 10, 10, 50, 90, 10]}, true, 2000);
                setTimeout(function() { shape1.stopAnimation(); }, 300);
                setTimeout(function () {
                    var p = shape1.getProps().points;
                    expect(p.length).equal(6, "Wrong point count");
                    expect(p[0]).equal(10, "Wrong 1 point X coordinate");
                    expect(p[1]).equal(10, "Wrong 1 point Y coordinate");
                    expect(p[2]).equal(10, "Wrong 2 point X coordinate");
                    expect(p[3]).equal(50, "Wrong 2 point Y coordinate");
                    expect(p[4]).equal(90, "Wrong 3 point X coordinate");
                    expect(p[5]).equal(10, "Wrong 3 point Y coordinate");
                    total5++;
                    done();
                }, 600);
            }, 100);
        });

        it('should complete all poly animations', function(done) {
            this.timeout(10000);
            var int = setInterval(function() {
                if (total5 === 6) {
                    clearInterval(int);
                    chart.shapes.remove(shape1);
                    done();
                }
            }, 100);
        });

    });
}
