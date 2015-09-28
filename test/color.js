function colorTest() {

    describe('cl.Color', function () {
        var msg = "Wrong color component";

        it('shold convert from name to hex', function () {
            var c;
            c = cl.Color.fromString("darkslategray");
            expect(c).equal('#2f4f4f', "Wring color");
        });

        it('shold convert from color name to rgb', function () {
            var c;

            c = cl.Color.toRGB("red");
            expect(c.r).equal(255, msg);
            expect(c.g).equal(0, msg);
            expect(c.b).equal(0, msg);

            c = cl.Color.toRGB("green");
            expect(c.r).equal(0, msg);
            expect(c.g).equal(128, msg);
            expect(c.b).equal(0, msg);

            c = cl.Color.toRGB("blue");
            expect(c.r).equal(0, msg);
            expect(c.g).equal(0, msg);
            expect(c.b).equal(255, msg);

            c = cl.Color.toRGB("white");
            expect(c.r).equal(255, msg);
            expect(c.g).equal(255, msg);
            expect(c.b).equal(255, msg);

            c = cl.Color.toRGB("darkmagenta");
            expect(c.r).equal(139, msg);
            expect(c.g).equal(0, msg);
            expect(c.b).equal(139, msg);
        });

        it('shold convert from color to rgb', function () {
            var c;

            c = cl.Color.toRGB("#FF80FF");
            expect(c.r).equal(255, msg);
            expect(c.g).equal(128, msg);
            expect(c.b).equal(255, msg);

            c = cl.Color.toRGB("#faf");
            expect(c.r).equal(255, msg);
            expect(c.g).equal(170, msg);
            expect(c.b).equal(255, msg);
        });

        it('shold convert from rgb to hex', function () {
            var c;

            c = cl.Color.toHex(255, 0, 0);
            expect(c).equal("#ff0000", "Wrong color");

            c = cl.Color.toHex(0, 128, 0);
            expect(c).equal("#008000", "Wrong color");

            c = cl.Color.toHex(128, 128, 255);
            expect(c).equal("#8080ff", "Wrong color");
        });

        it('should convert from rgb string to hex', function () {
            var c;
            c = cl.Color.toRGB("rgb(255,128,128)");
            expect(c).to.deep.equal({ r: 255, g: 128, b: 128}, "Wrong color");
        });

        it('should convert from rgba string to hex', function () {
            var c;
            c = cl.Color.toRGB("rgba(255,128,128, 0.4)");
            expect(c).to.deep.equal({ r: 255, g: 128, b: 128}, "Wrong color");
        });

    });
}