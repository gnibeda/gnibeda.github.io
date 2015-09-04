function chartTest() {
    'use strict';

    describe("cl.Chart", function () {

        var chart = null;

        before(function(){
            chart = new cl.Chart({
                element: document.getElementById("test"),
                preloader: document.getElementById("preloader")
            });
        });

        it('should produce error when creating without options', function () {
            expect(function(){new cl.Chart();}).to.throw('No element specified in options');
        });

        it('should create instance', function () {
            should.exist(chart, "Chart was not created");
        });

        it('should auto set dimensions depending on parent container size', function () {
            chart.width.should.equal(900, "Wrong width");
            chart.height.should.equal(700, "Wrong height");
        });

        it('should set chart size', function () {
            chart.resize(800, 600);
            chart.width.should.equal(800, "Wrong width");
            chart.height.should.equal(600, "Wrong height");
        });

        it('should show preloader in center of chart', function () {
            chart.showPreloader();

            var x = chart.preloader.offsetLeft;
            var y = chart.preloader.offsetTop;
            var cx = chart.element.offsetLeft;
            var cy = chart.element.offsetTop;

            expect(x).equal(Math.floor(cx + chart.width / 2 - chart.preloader.offsetWidth / 2), "X coordinate of preloader is wrong");
            expect(y).equal(Math.floor(cy + chart.height / 2 - chart.preloader.offsetHeight / 2), "Y coordinate of preloader is wrong");
        });

        it('should hide preloader', function () {
            chart.hidePreloader();

            expect(chart.preloader.classList.contains("cl-preloader-hidden")).equal(true, "No 'cl-preloader-hidden' class on hidden preloader");
        });

        it('should redraw', function(){
            chart.redraw();
        });

        it('should set background image from url', function(done){
            chart.setBackground("http://google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");

            var time = 0;
            var interval = setInterval(function() {
                time += 10;
                if (chart.background.isLoaded) {
                    clearInterval(interval);
                    done();
                }
                if (time > 2000) {
                    assert.ok(false, "Image was not loaded");
                    clearInterval(interval);
                    done();
                }
            }, 10);
        });

        it('should return background', function(){
           assert.ok(chart.getBackground());
        });


        it('should change background fit and make apply', function(){
            chart.getBackground().setFit(cl.Background.FIT_FILL).apply();
        });

        it('should', function(){
        });

        after(function() {
            chart.destroy();
        });

    });

}
