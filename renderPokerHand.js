
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    var html = `<div class="text-center mt-5">`;
    pokerHand.forEach(card => {
        html += `<img src="cards/${card.value}${card.suit}.png" style="width: 100px; margin: 0 2px;" />`
    });
    html += `</div>`
    return html;
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}