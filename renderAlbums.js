
function renderAlbums(albums) {
    var html = `<div class="text-center mt-5" style="width: 800px; margin: 0 auto;">`
    albums.forEach(label => { 
        html += `
                <h1>${albums[0].artist}</h1>
                <hr />
                `
        label.albums.forEach(album => {
            html += `
                <div style="margin-bottom: 5px; text-align: left;">
                    <div style="display: flex; align-items: flex-end; margin-bottom:5px;">
                        <div style="display: inline-block;">
                            <img style="height: 75px;" src="${album.albumCover}" />
                        </div>
                        <div style="display: inline-block; margin-left: 20px;">
                            <h3 style="">${album.title}</h3>
                        </div>
                        <hr />
                    </div>
                    <div style="margin-bottom: 50px;">
                `
            album.songs.forEach(song => {
                html += `
                        <hr />
                        <div style="display: flex; justify-content: space-between;">
                            <div style="display: inline-block;">
                                <img style="height: 20px; padding-bottom: 2px;" src="arrow.png" />
                                ${song.title}
                            </div>
                            <div style="display: inline-block;">
                                ${song.length}
                            </div>
                        </div>
                    `
            });
            html += `
                    <hr />
                    </div>
                </div>
                `
        });
    });
    html += `</div>`
    return html;
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}