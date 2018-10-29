
function renderMovies(movies) {
    var html = `<div class="text-center mt-5">`

    movies.forEach(card => {
        html += `
        <div style="display: flex; background-color:#B7B7B7; margin: 0 auto 10px; width: 490px; padding: 20px; border-radius: 2%; justify-content: space-between;">
            <img style="display: block; height: 250px; width: 180px;" src="${card.poster}" />
            <div style="display: block; height: 250px; width: 250px; background-color: #DCDCDC; border-radius: 10px; text-align: left; padding: 10px;">
                <h3 style="margin: 0;">${card.title}</h3>
                <span style="font-weight: bold;">${card.year}</span>
                <h3 style="margin: 10px 0 0; font-size: 24px;">IMDB:</h3>
                <span style="font-size: 24px;">${card.imdbRating} / 10</span>
                <h2 style="margin: 10px 0 0; font-size: 24px;">Rotten Tomatoes:</h2>
                <span style="font-size: 24px;">${card.rottenTomatoesRating * 100}%</span>
            </div>
        </div>
        `
    });

    html += `</div>`
    return html;
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}