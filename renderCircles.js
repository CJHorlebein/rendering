
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    return `
        <div class="text-center mt-5">
            <div style="
            margin: 0 auto;
            height: ${circles[0].radius * 2}px;
            width: ${circles[0].radius * 2}px;
            border-radius : ${circles[0].radius}px;
            background-color: ${circles[0].color};
            "></div>
            <div style="
            margin: 0 auto;
            height: ${circles[1].radius * 2}px;
            width: ${circles[1].radius * 2}px;
            border-radius : ${circles[1].radius}px;
            background-color: ${circles[1].color};
            "></div>
            <div style="
            margin: 0 auto;
            height: ${circles[2].radius * 2}px;
            width: ${circles[2].radius * 2}px;
            border-radius : ${circles[2].radius}px;
            background-color: ${circles[2].color};
            "></div>
            <div style="
            margin: 0 auto;
            height: ${circles[3].radius * 2}px;
            width: ${circles[3].radius * 2}px;
            border-radius : ${circles[3].radius}px;
            background-color: ${circles[3].color};
            "></div>
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}