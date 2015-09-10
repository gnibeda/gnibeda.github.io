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

        it('should add bubbles', function(){
            var bubbles = [{id: 30, x: 10, y: 20, size: 4, color: "#AAFFAA", opacity: 0.4}, {id: 31, x: 20, y: 30, size: 6, color: "#EEFFAA", opacity: 0.8}];
            chart.addBubbles(bubbles);
        });

        it('should remove all', function(){
            chart.shapes.clear();
            expect(chart.shapes.count).equal(0, "Shapes was not cleared");

            var bubbles = [{id: 30, x: 10, y: 20, size: 4, color: "#AAFFAA", opacity: 0.4}, {id: 31, x: 20, y: 30, size: 6, color: "#EEFFAA", opacity: 0.8}];
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
            shape1.setProps({x: 1, y: 1, size: 1});
            expect(shape1.props.x).equal(1, "property x doesn't match");
            expect(shape1.props.y).equal(1, "property y doesn't match");
            expect(shape1.props.size).equal(1, "property size doesn't match");
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
            var changed = shape1.calcAnimProps({x: 1, y: 2, size: 3});
            assert.ok(changed, "Wrong result of calcAnimProps");
            assert.ok(shape1.animProps, "animProps not exists");
            expect(shape1.animProps.x).equal(undefined, "animProps has X, but shouldn't");
            expect(shape1.animProps.y).equal(2, "no y in animProps");
            expect(shape1.animProps.size).equal(3, "no size in animProps");
        });

        it('should update props using add', function(){
            var bubbles = [{id: 30, x: 1, y: 2, size: 4}, {id: 33, x: 20, y: 30, size: 6, color: "#EEFFAA", opacity: 0.8}];
            chart.addBubbles(bubbles);
            expect(chart.shapes.shapes.length).equal(3, "Wrong shapes number");
            var b = chart.shapes.get(30);
            expect(b.props.x).equal(1, "property x doesn't match");
            expect(b.props.y).equal(2, "property y doesn't match");
            expect(b.props.size).equal(4, "property size doesn't match");
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
            console.log(shape1.getProps());
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
            chart.shapes.add([{id: 33, x: 0, y: 0, size: 10}], true, 5000);

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
            shape1.setProps({x: 10, y: 20, size: 5}, true, 300);
            setTimeout(function(){
                var p = shape1.getProps();
                expect(p.x).equal(10, "x doesn't match");
                expect(p.y).equal(20, "y doesn't match");
                expect(p.size).equal(5, "size doesn't match");
                total++;
                done();
            }, 600);
        });

        it('should complete all animations', function(done) {
            setInterval(function() { if (total === 4) done(); }, 100);
        })

        it('should remove shapes', function() {
            chart.shapes.remove(chart.shapes.get(30));
            chart.shapes.remove(chart.shapes.get(31));
            expect(chart.shapes.shapes.length).equal(0, "Some shapes not deleted");
        });
    });
}
