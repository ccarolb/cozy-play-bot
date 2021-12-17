
const { SessionsClient } = require('dialogflow');
const dialogflow = require('dialogflow');
const configs = require('./cozy-play-bot.json')

const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }
})