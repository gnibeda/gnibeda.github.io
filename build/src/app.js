(function () {
    'use strict';

    window.onload = init;

    function init() {
        var chart = new cl.Chart({
            element: document.getElementById("testDiv"),
            preloader: document.getElementById("preloader"),
            background: {
                url: "http://solidreach.solidopinion.com/images/radar11.png",
                fit: cl.Background.FIT_FILL
            },
            xAxis: {
                name: "X axis test",
                ticks: {
                    big: {
                        align: "center"
                    }
                },
                style: {
                    arrowSize: 0
                }
            },
            yAxis: {
                name: "Проверка",
                ticks: {
                    big: {
                        type: "dot",
                        size: 8,
                        align: "center",
                        opacity: 0.8,
                        color: "#FFAAAA"
                    },
                    small: {
                        type: "dot",
                        size: 4,
                        align: "center",
                        opacity: 0.7,
                        color: "#0000FF"
                    }
                },
                style: {
                    lineWidth: 2,
                    color: "#FF0000"
                },
                labels:{
                    color: "#009900",
                    colorSmall: "#0044FF"
                },
                title: {
                    color: "#0000FF",
                    style: "italic"
                }
            }
        });

        //chart.axis.add({name: "test", type: "y", min: -10, max: 10, offset: 50, grid: {width: 0}});

        document.body.addEventListener("click", function() {
            chart.xAxis
                .setOffset(50)
                .setMin(-40)
                .setTitleColor("red")
                .setTitleSize(18)
                .setTitleAlign("right")
                .apply();

            chart.resize(1290, chart.height);
            chart.xAxis.setOffset(50).apply();
        });
    }

})();