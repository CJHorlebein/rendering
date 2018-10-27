
function renderNametags(nametags) {
    var html = `<div class="text-center mt-5">`;
    nametags.forEach(element => {
        html += `
            <div style="margin: 0 auto; width: 200px; margin-bottom: 5px;">
                <div style="background-color: blue; border: 1px solid grey; padding: 5px 0;">
                    <span style="color: white; font-size: 18px; font-weight: bold;">Hello, my name is:</span>
                </div>
                <div style="background-color: white; padding: 20px 0 30px; border: 1px solid grey;">
                    ${element}
                </div>
            </div>
            `
    });
    html+= `</div>`
    return html;

}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}