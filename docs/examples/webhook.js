'use strict';

/**
 * Send a message using a webhook
 */

// Import the discord.js module
const Discord = require('discord.js');
/*
 * Create a new webhook
 * The Webbooks ID and token can be found in the URL, when you request that URL, or in the response body.
 *{"type": 1, "id": "721134399860506724", "name": "Flat.io", "avatar": "e9346a05214a784b4c6c226d0ff98784", "channel_id": "718952870145294406", "guild_id": "666355045759189012", "token": "x5xloCDRBKht0_ZPwowV4HNS1oMf20DNwXdjNdRFLWOFAfS7nV3-lWQ5t657ooA_vUSh"}
 *                                     ^^^^^^^^^^  ^^^^^^^^^^^^ 
 *                                     Webhook ID  Webhook Token
 */
const hook = new Discord.WebhookClient('21134399860506724', 'x5xloCDRBKht0_ZPwowV4HNS1oMf20DNwXdjNdRFLWOFAfS7nV3-lWQ5t657ooA_vUSh');

// Send a message using the webhook
hook.send('I am now alive!');
