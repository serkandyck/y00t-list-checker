const axios = require("axios")
const { EmbedBuilder, WebhookClient } = require('discord.js')

// thnx m6_SOL for response code https://twitter.com/m6_SOL/status/1565457692231192583

const wallet = "walletaddress"
const discordWebhookUrl = ""
const discordUserId = "discorduserid"


function checky00ts() {
    const webhookClient = new WebhookClient({ url: discordWebhookUrl })

    axios.get(`https://api.degods.com/scholarships/application/status?solPubkey=${wallet}`)
    .then(function (response) {
        switch(response.data.status) {
            case 1:
                // passed
                const embedPassed = new EmbedBuilder()
                .setTitle('y00ts aplication accepted !')
                .setColor(0x26ff00);

                webhookClient.send({
                    content: `<@${discordUserId}>`,
                    username: 'Y00TS',
                    avatarURL: 'https://i.imgur.com/AfFp7pu.png',
                    embeds: [embedPassed],
                });
                break;
            case 2:
                // didnt pass
                const embed = new EmbedBuilder()
                .setTitle('y00ts aplication rejected :(')
                .setColor(0x26ff00);

                webhookClient.send({
                    content: `<@${discordUserId}>`,
                    username: 'Y00TS',
                    avatarURL: 'https://i.imgur.com/AfFp7pu.png',
                    embeds: [embed],
                });
                break;
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

setInterval(checky00ts, 60000);