const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env["nirlepcute"], //Discord Bot Token
prefix: "m/" //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands
bot.loadCommands('./commands')
const vars = require('./variables')

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

//quick test

bot.command({
  name: "help",
  code: ` 
$title[Myaru ⏵ Help]
$description[Hey-ya! I'm **Myaru**, your ~~not~~ best bot friend! To view all my commands, please use the command \`m.commands\` to get a DM about the list of commands! Here's some commands to start anyways...
\`\`\`yaml
m.help   : Show this page? You already know this,
           come on!
m.ping   : Pong! Uh-oh... Replit why are you slowing me
           down again?..
m.stats  : Yeah the only thing matters is that you will
           see "Guild count= 1" all day...
m.login  : Bot owner command... Only Windows and Nirlep
           can use this.
m.logout : ^ The same?.. ^\`\`\`

Owners: <@478623992337530883> & <@558861606063308822>
Backup owner: <@679677267164921866>
]

$footer[$getVar[botver]]
$color[$getVar[accentColor]]
`
})

bot.command({
  name: "ping",
  code: `
$title[Myaru ⏵ Ping!]
$description[Pong? I guess yes, pong!
\`Latency: $pingms\`]   
$footer[$getVar[botver]] $color[$getvar[accentColor]]
$thumbnail[https://cdn.glitch.com/047b9a25-17f9-4d0e-8648-1f250bf96269%2F2859b7c99f56fe22827916c529ccac86%20(1).png?v=1625667548435]
`
})

bot.command({
  name: "stats",
  code: `
$title[Myaru ⏵ Stats]
$description[
\`\`\`yaml
Server  count       : $serverCount
User    count       : $allMembersCount
Command count       : $commandsCount
Commands used       : $getVar[commandUsed]
Commands used TODAY : $getVar[commandsTodayUse]
Latency             : $pingms
RAM usage           : $multi[$divide[$roundTenth[$ram;1];100];2000]%\`\`\`]
$footer[$getVar[botver]] $color[$getvar[accentColor]]
`
})
bot.loopCommand({
  channel: "862710353896013834",
  time: 60000,
  code: `
$if[$hour==23]
Resetted today's command use value.
$setVar[commandsTodayUse;0]
$onlyIf[$getVar[commandsTodayUse]!=0;]
$else
$endif
`
})


bot.command({
  name: "logout",
  code: `
Logged out!
$setGlobalUserVar[loggedIn;0]
$onlyIf[$getGlobalUserVar[loggedIn]==1;You have to be logged in to log out.]  
`
})

bot.command({
  name: "eval",
  code: `
$if[$getGlobalUserVar[loggedIn]==2]
Your account doesn't have permissions to execute this command.
$else
$eval[$message]
$endif
$onlyIf[$getGlobalUserVar[loggedIn]!=0;You have to be logged in to use this command!]  
`
})

bot.command({
  name: "commands",
  code: `
$title[Myaru ⏵ Commands!]
$description[Thank you for requesting my commands list!
[\`\`\`Core  Commands\`\`\`](https://myaruweb.glitch.me/#core)
[\`\`\`Image Commands\`\`\`](https://myaruweb.glitch.me/#image)]
$footer[$getVar[botver]] $color[$getvar[accentColor]]
$dm  
$onlyIf[$isUserDmEnabled==true;Your DM's aren't enabled! Please enable them so I can send a command list.]  
`
})

bot.loopCommand({
  every: 900000,
  executeOnStartup: true,
  channel: "862054890419388416",
  code: `
$if[$commandsCount<75]
$title[Deadline not reached!]
$description[\`\`\`yaml
Command count  : $commandsCount
Deadline       : 75
                 ---
Commands left  : $sub[75;$commandsCount]\`\`\`]
$footer[$getVar[botver]] $color[$getvar[accentColor]]
$else
<@478623992337530883>
DEADLINE REACHED WOOOOOOOOOOOOOO  
$endif
`
})

bot.command({
  name: "discord",
  code: `$title[Myaru » Discord]
	$description[I would be sooo happy if you'd join our **Discord** server!\n[\`\`\`yaml
       Click here to join!          \`\`\`](https://discord.gg/NWTVBr4JUv)]
	$color[$getVar[accentColor]]
	$footer[$getVar[botver]]`
})

bot.command({
  name: "$alwaysExecute",
  code: `
$setVar[commandsTodayUse;$sum[$getVar[commandsTodayUse];1]]
$setVar[commandUsed;$sum[$getVar[commandUsed];1]]
$onlyIf[$stringStartsWith[$message;m.]==true;]  
`
})

bot.command({
  name: "suggest",
  code: `
$title[Myaru ⏵ Suggestion]
$description[Your suggestion was successfully sent to the owners! <:vay:855020088482988052>]
$footer[$getVar[botver]] $color[$getvar[accentColor]]
$channelSendMessage[862406833473978419;{title:Myaru ⏵ New suggestion!}{description:\`\`\`yaml
Username   : $username
ID         : $authorID
Server     : $serverName / $guildID
Suggestion : $message\`\`\`}{footer:$getVar[botver]}{color:$getVar[accentColor]}]
$onlyIf[$message!=;Hey, what are you gonna suggest? Please use \`m.suggest <suggestion>\`]  
`
})

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