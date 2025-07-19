const coords = {x:0, y:0};
const circles = document.querySelectorAll(".circle");

const colors = [
"rgb(255, 181, 107)",
"rgb(248, 157, 99)",
"rgb(239, 134, 94)",
"rgb(227, 110, 92)",
"rgb(213, 88, 92)",
"rgb(197, 65, 93)",
"rgb(178, 44, 94)",
"rgb(156, 21, 95)",
"rgb(131, 0, 96)",
"rgb(111, 0, 102)",
"rgb(72, 0, 95)",
"rgb(31, 0, 92)"
];

circles.forEach((circle,index) => {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
    circle.style.position = "absolute";
});

window.addEventListener("mousemove", e=>{
    coords.x = e.pageX;
    coords.y = e.pageY;

})

function animateCircles(){
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle,index)=>{
        circle.style.left = x-12+"px";
        circle.style.top = y-12+"px";

        circle.style.scale = (circles.length-index)/circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index+1] || circles[0];

        x +=(nextCircle.x - x) * 0.25;
        y +=(nextCircle.y - y)*0.25;
    })

    requestAnimationFrame(animateCircles);
}

animateCircles();