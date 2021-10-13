$(function() {

    const colors = ["aqua", "chocolate", "blueviolet", "burlywood", "brown", "black", "cadetblue", "azure", "orange"];
    let circleRad = 50;
    let count = 0;
    let rate = 10;
    let speed = 250;


    let timer = null;

    $("#start").click(function() {
        if ($("[name=width]").val()) {
            circleRad = parseInt($("[name=width]").val());
        }
        if ($("[name=gamount]").val()) {
            rate = parseInt($("[name=gamount]").val());
        }
        if ($("[name = gInterval]").val()) {
            speed = $("[name=gInterval]").val();
        }
        if ($("[name = ncircle]").val()) {
            count = $("[name=ncircle]").val();
        }

        start();
    });

    function makeCircles() {

        let _span = $("<span>");

        const contWid = parseInt($("#circles").width());
        let offset = 0;
        let left = 0;

        for (let i = 0; i < count; i++) {
            
            if ((left + offset) > contWid) {
                offset += 30;
                left = 0;
            }

            //left = left + offset;
            left=Math.ceil(Math.random()*contWid/1.5);
            
            if ((top + offset) > contWid) {
                offset += 30;
                top = 0;
            }
    
            //left = left + offset;
            top=Math.ceil(Math.random()*contWid/1.5);
            const cr = $("<div>", {
                "class": "circle",
                "css": {
                    "left": left + "px",
                    "top": top + "px",
                    "background-color": getRandomColor(),
                    "border-radius": circleRad + "px",
                    "width": (circleRad * 2) + "px",
                    "height": (circleRad * 2) + "px"
                },
                "click": function() { this.remove() }
            });

            cr.hover(function() {
                this.css("opacity", "50%")
            }, function() {
                this.css("opacity", "100%")
            });

            _span.append(cr);

            left += 50;
            top+=30;
        }

        $("#circles").append(_span);
    }

    function start() {
        stop();

        $(".circle").remove();
        makeCircles(10);
        timer = setInterval(enlargeCircle, speed);
    }

    function stop() {
        clearInterval(timer);
    }

    function enlargeCircle() {
        const br = parseInt($(".circle").css("borderTopLeftRadius"));

        $(".circle").css({
            "height": (br * 2) + "px",
            "width": (br * 2) + "px",
            "border-radius": br + rate + "px",
        });
    }

    function getRandomColor() {
        const c = colors[Math.floor(Math.random() * colors.length)];
        console.log(c);
        return c;
    }

})