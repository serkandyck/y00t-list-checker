const axios = require("axios")
const { EmbedBuilder, WebhookClient } = require('discord.js');

const wallet = "walletaddress"
const discordId = "discorduserid"


function checky00ts() {

    axios.get(`https://api.degods.com/scholarships/application/status?solPubkey=${wallet}`)
    .then(function (response) {
        if (response.data.status != 0) {

            const webhookClient = new WebhookClient({ url: "https://discord.com/api/webhooks" });
            
            const embed = new EmbedBuilder()
                .setTitle('y00ts list status')
                .setDescription(`STATUS: ${response.data.status}`)
                .setColor(0x26ff00);
            
            webhookClient.send({
                content: `<@${discordId}>`,
                username: 'Y00TS',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png',
                embeds: [embed],
            });
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

setInterval(checky00ts, 60000);