const YouTube = require('youtube-node')
const config = require('./yt-config.json')

const youtube = new YouTube()
youtube.setKey(config.key);

function searchVideoURL(message, queryText) {

    return new Promise((resolve, reject) => {
        youtube.search(`Relaxing games ${queryText}`, 3, function (error, result) {
            if (!error) {

                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);

                resolve(`${message}, ${youtubeLinks.join(', ')}`)
                console.log(JSON.stringify(result, null, 2))

            } else {
                console.log("Deu erro")
            }
        })
    })
}

module.exports.searchVideoURL = searchVideoURL;