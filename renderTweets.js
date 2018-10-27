
function renderTweets(tweets) {
    var html = `<div class="text-center mt-5">`
    tweets.forEach(tweet => {
        var varified = "";
        if (tweet.user.isVerified) {
            varified = `<img style="height: 20px; padding-bottom: 3px;" src="twitter.png" />`
        }
        html += `
        <div style="border: 1px solid grey; width: 600px; margin: 0 auto 5px; padding: 20px; text-align: left;">
            <div style="display: flex;">
                <img style="display: block; width: 50px; height: 50px;" src="${tweet.user.profilePic}.jpg" />
                <div style="margin-left: 8px;">
                    <span style="font-weight: bold; font-size: 18px;">${tweet.user.username}</span> 
                    ${varified}
                    <br />
                    <span>${tweet.user.handle}</span>
                </div>
            </div>
            <div style="font-size: 28px;">
                ${tweet.text}
            </div>
            <hr />
            <div>
                <div style="display: inline-block; margin-right: 25px;">
                    <img style = "height: 20px; padding-bottom: 3px;" src="comment.png" /> ${tweet.likes}
                </div>
                <div style="display: inline-block; margin-right: 25px;">
                    <img style = "height: 25px; padding-bottom: 2px; color: 8E9AA3" src="retweet.svg" /> ${tweet.likes}
                </div>
                <div style="display: inline-block; margin-right: 25px;">
                    <img style = "height: 20px; padding-bottom: 2px;" src="heart.svg" /> ${tweet.likes}
                </div>
                <div style="display: inline-block; margin-right: 25px;">
                    <img style = "height: 20px; padding-bottom: 4px;" src="mail.png" />
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