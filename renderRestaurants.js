
function renderRestaurants(restaurants) {
    var html = `<div class="text-center mt-5">`
    restaurants.forEach(food => {
        var rate = "";
        for (var i = 0; i < food.priceRating; i++) {
            rate += "$";
        }

        html += `
        <div style="display: inline-block; background-color: #DFDFDF; border-radius: 5%; height: 100px; width: 150px; text-align: left; padding: 0px 5px;">
            <div style="font-size: 24px; font-weight: bold; line-height: 1.4;">${food.name}</div>
            <div style="color: #636363; font-weight: bold; font-size: 12px; line-height: 1;">${food.type}</div>
            <div style="color:#19C209; font-weight: bold; font-size: 24px; line-height: 1.2;">${rate}</div>
        </div>      
        `
    });

    html += `</div>`
    return html;
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}