
function renderTweets(tweets) {
    var html = `<div class="text-center mt-5">`
    tweets.forEach(tweet => {
        html += `
        <div style="border: 1px solid grey; width: 400px; margin: 0 auto 5px; padding: 20px;">
            <div style="text-align: left">
                <img style="width: 50px; height: 50px;" src="${tweet.user.profilePic}.jpg" />
                <div style="display: inline-block;">
                    <span>${tweet.user.username}</span> <br />
                    <span>${tweet.user.handle}</span>
                </div>
            </div>
        </div>
        
        
        
        `




    });
    html += `</div>`
    return html;
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "icon"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "icon"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "icon"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}