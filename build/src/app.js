// TODO: add line segment class
// TODO: add poly class
// TODO: add hints
(function () {
    'use strict';

    window.onload = init;

    function init() {

        var chart = new cl.Chart({
            element: document.getElementById("testDiv"),
            "preloader": null,
            "selector": {
                "draggable": false,
                "hover": {"enabled": true, "width": 1, "color": "#000000", "opacity": 0.5, "showHand": true},
                "selection": {
                    enabled: true,
                    multiple: true,
                    rect: { enabled: true }
                }
            },
            "xAxis": {
                "name": "Sentiment score",
                "min": -10,
                "max": 110,
                "margin": {"start": 50, "end": 0},
                "ticks": {
                    "big": {"align": "center", "interval": 10, "first": false, "last": false},
                    "small": {"align": "center", "interval": 5, "first": false, "last": false, "opacity": 0}
                },
                "title": {"offset": 10},
                "labels": {
                    "big": {
                        "size": 10,
                        "align": "bottom",
                        "font": "Arial",
                        "color": "#000000",
                        "style": "",
                        "opacity": 1,
                        "after": "%"
                    },
                    "small": {
                        "size": 8,
                        "align": "bottom",
                        "font": "Arial",
                        "color": "#000000",
                        "style": "",
                        "opacity": 0,
                        "after": "%"
                    }
                },
                "style": {"arrowSize": 0},
                "offset": -10
            },
            "yAxis": {
                "name": "Visibility score",
                "min": -10,
                "max": 110,
                "margin": {"start": 50, "end": 0},
                "ticks": {
                    "big": {"align": "center", "interval": 10, "first": false, "last": false},
                    "small": {"align": "center", "interval": 5, "first": false, "last": false, "opacity": 0}
                },
                "title": {"offset": 20},
                "labels": {
                    "big": {
                        "size": 10,
                        "align": "bottom",
                        "font": "Arial",
                        "color": "#000000",
                        "style": "",
                        "opacity": 1,
                        "after": "%"
                    },
                    "small": {
                        "size": 8,
                        "align": "bottom",
                        "font": "Arial",
                        "color": "#000000",
                        "style": "",
                        "opacity": 0,
                        "after": "%"
                    }
                },
                "style": {"arrowSize": 0},
                "offset": -10
            },
            "shapes": {"links": {"width": 0.2, "color": "#000000", "opacity": 1}}
        });

        window.ch = chart;

        var bubbles = [];
        var i;

        bubbles = [
            {id: 1, x: 10, y: 10, size: 20},
            {id: 2, x: 80, y: 10, size: 20, lineDash: [2, 2] },
            {id: 3, x: 50, y: 50, size: 40, hover: {
                color: "green",
                border: 10,
                animation: 3000
            }}
        ];

        chart.addBubbles(bubbles);
        chart.shapes.add({
            id: -22, border: 6, color: "green", opacity: 0.8, closed: true, lineJoin: "round",
            points: [0, 0, 90, 10, 80, 90, 70, 20]
        }, cl.PolyLine);

        chart.addEventListener(cl.Event.click, function(e){
            console.log("clicked", e.target);
        });

        chart.addEventListener(cl.Event.doubleClick, function(e){
            console.log("double clicked", e.target);
        });
        /*
        chart.addEventListener(cl.Event.mouseUp, function(e){
            console.log(2, e.target);
        });*/

        ch.selector.enableDrag();
        //ch.selector.enableMultiselect();
    }
})();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addBubbless1000() {
    var bubbles = [];
    var i;
    for (i = 0; i < 1000; i++) bubbles.push({
        id: i + 4,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 10,
        opacity: 0.3,
        links: []
    });
    ch.addBubbles(bubbles);
}

function animate100() {
    var bubbles = [];
    var i, l;
    for (i = 0; i < 100; i++) {
        if (!ch.shapes.get(i + 4)) continue;
        bubbles.push({
            id: i + 4,
            x: ch.shapes.get(i+4).props.x + (Math.random() - Math.random()) * 10,
            y: ch.shapes.get(i+4).props.y + (Math.random() - Math.random()) * 10,
            size: 4 + Math.random() * 20,
            color: getRandomColor(),
            opacity: 0.5 + Math.random() * 0.5
        });
    }
    for (i = 0; i < bubbles.length; i++) {
        if (bubbles[i].x < 0) bubbles[i].x = 0;
        if (bubbles[i].y < 0) bubbles[i].y = 0;
        if (bubbles[i].x > 100) bubbles[i].x = 100;
        if (bubbles[i].y > 100) bubbles[i].y = 100;
    }
    ch.addBubbles(bubbles, true);
}

/*
setInterval(function() {
    ch.shapes.get(-3).setProps({x: 50 + Math.random() * 30, y: 50 + Math.random() * 30}, true);
}, 500);
*/
function addLinks() {
    var i;
    for (i = 0; i < ch.shapes.count; i++) if (Math.random() < 0.01) {
        for (var k = 0; k < 1 + Math.ceil(Math.random() * 10); k++) ch.shapes.shapes[i].link([Math.floor(Math.random() * ch.shapes.count - 1)]);
    }
}

function enableDrag() {
    ch.selector.enableDrag();
}

function enableMultiselect() {
    ch.selector.enableMultiselect();
}


function addPolyLine() {
    var count = 3 + Math.floor(Math.random() * 4);
    var points = [];
    for (var i = 0; i < count; i++) {
        points.push(Math.random() * 100);
        points.push(Math.random() * 100);
    }
    ch.shapes.add({ id: -22, closed: true, color: getRandomColor(), border: 1 + Math.random() * 10, points: points}, cl.PolyLine, true);
}

function changePolyStyle() {
    var line = ch.shapes.get(-22);
    if (!line) return;
    var t;
    switch (line.props.lineJoin) {
        case undefined:case "bevel": t = "miter"; break;
        case "miter": t = "round"; break;
        case "round": t = "bevel"; break;
    }
    ch.shapes.add({ id: -22, lineJoin: t }, cl.PolyLine);
}

function toggleClose() {
    var line = ch.shapes.get(-22);
    if (!line) return;
    line.stopAnimation();
    ch.shapes.add({ id: -22, closed: !line.props.closed }, cl.PolyLine, true);
}

function addAllLinks() {
    for (i = 0; i < ch.shapes.count; i++) for (j = 0; j < ch.shapes.count; j++) if (i !== j) ch.shapes.shapes[i].link([ch.shapes.shapes[j].props.id]);
}


function buildGraph() {
    var fns = [
        function(a) {
            a = a / 10;
            return a * a;
        },
        function(a) {
            a = a / 10;
            return 100 / (a + 1);
        },
        function(a) {
            a = a / 10;
            return 10 + (1 + Math.sin(a)) * 40;
        }
    ];
    var points = [];
    buildGraph.cur = (buildGraph.cur || 0) + 1;
    if (buildGraph.cur == 3) buildGraph.cur = 0;
    var fn = fns[buildGraph.cur];
    for (var i = 0; i < 104; i += 2) {
        var x = i;
        var y = fn(x);
        points.push(x);
        points.push(y);
    }
    ch.shapes.add([{id: -22, closed: false, points: points, border: 3, color: getRandomColor(), border: 1 + Math.random() * 10, opacity: 0.8 }], cl.PolyLine, true);
}





function mul(x, next) {
    if (!next) mul.total = 1;
    mul.total *= x;
    var f = function(p){
        return mul(p, true);
    };
    f.toString = function() {
            return parseInt(mul.total);
    };
    return f;
}



Function.prototype.mybind = function(ctx) {
    var t = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        t.apply(ctx, args);
    };
};



