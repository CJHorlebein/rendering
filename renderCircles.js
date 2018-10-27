
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 

    var html = `<div class="text-center mt-5">`
    circles.forEach(circle => {
        html += `
                <div style="margin: 0 auto 8px;
                height: ${circle.radius * 2}px;
                width: ${circle.radius * 2}px;
                border-radius : ${circle.radius}px;
                background-color: ${circle.color};
                "></div>
                `
    });
    html += `</div`
    return html;
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