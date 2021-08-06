const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env["nirlepcute"], //Discord Bot Token
prefix: "m/" //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands
bot.loadCommands('./commands')
const vars = require('./variables/vars.js')

bot.onBanAdd()
bot.onBanRemove()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onChannelUpdate()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onJoined()
bot.onLeave()
bot.onMessageUpdate()
bot.onMessageDelete()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onRoleUpdate()
bot.onVoiceStateUpdate()

bot.variables(variables)

bot.readyCommand({
    channel: "",
    code: `$log[Ready.
Ping: $pingms
Server count: $serverCount
All members : $allMembersCount]`
})

bot.status({
  text: "Getting rewritten"
})

bot.variables(vars)