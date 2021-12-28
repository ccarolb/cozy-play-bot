const YouTube = require('youtube-node')
const config = require('./yt-config.json')

const youtube = new YouTube()
youtube.setKey(config.key);

youtube.search('Relaxing games', 3, function (error, result) {
    if (!error) {
        console.log(JSON.stringify(result, null, 2))
    } else {
        console.log("Deu erro")
    }
})