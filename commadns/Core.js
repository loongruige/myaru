module.exports = [{
  name: "ping",
  code: `$title[Pong!]
  $description[\`\`\`yaml
Bot ping : $pingms
DB ping  : $dbpingms\`\`\`]
  $footer[$getVar[botver]] $color[$getVar[color]]`
},
{
  name: "help",
  code: `$TITLE[Myaru] $DESCRIPTION[Hello, I am the bot that made Windows regret living by just coding me. [Join this server](https://discord.gg/TPw3gcm9XU)
  \`\`\`yaml
These comma:nds might be helpful.
m.help      : Come on, you know.
m.commands  : See all of $commandsCount commands.
m.freenitro : Free nitro generator!\`\`\`]
  $footer[$getVar[botver]] $color[$getVar[color]]`
},
{
  name: "commands",
  code: `
$title[Commands]
$description[I currently have **$commandsCount** commands.
\`\`\`yaml
m.commands core  : Show core commands
m.commands mod   : Show moderation commands
m.commands auto  : Show autopost commands
m.commands music : Show music commands
m.commands nsfw  : no
m.commands img   : Image releated commands
m.commands info  : Soon TM\`\`\`]
$footer[$getVar[botver]]$color[$getVar[color]]
$onlyIf[$message==;]
`
},
{
  name: "commands",
  code:`
$if[$message==core]
$title[Core commands list]
$description[\`\`\`yaml
m.help     : In case you want to see some words
m.commands : Do you need to know what this does?
m.discord  : Get an invite link for our support server.
m.thank    : Thank Nirlep, one of the developers
m.pet      : Thank Windows, one of the devs\`\`\`]
$footer[$getVar[botver]] $color[$getVar[color]]
$elseif[$message==mod]
$title[Moderation commands list]
$description[\`\`\`yaml
m.kick    : Bored? Kick people on your server!
m.ban     : Bored AGAIN? BAN THEM!
m.antialt : Enable/Disable antialt.
m.uuuuh   : idk what to add :vay:\`\`\`]
$footer[$getVar[botver]] $color[$getVar[color]]
$endelseif
$elseif[$message==auto]
$title[Autopost commands list]
$description[Totally original idea! ||Inspired by [EpicBot](https://epic-bot.com)||\`\`\`yaml
m.autopost image   : Enable auto image posting
m.autopost message : Enable auto message sending
m.autopost show    : Show autopost config\`\`\`]
$footer[$getVar[botver]] $color[$getVar[color]]
$endelseif
$else
That category doesn't exist.
$endif
$onlyIf[$message!=;]
`
},
{
  name: "freenitro",
  code: `
$title[Free nitro!]
$description[Generating...]
$footer[$getVar[botver]] $color[$getVar[color]]  
$editin[3s;{title:Free nitro!}{description:Here's your code#COLON#\n[https://discord.gift/YTGKBR3Xf8P8nYZd](https://discord.gg/TPw3gcm9XU)}{footer:$getVar[botver]}{color:$getvar[color]}]
`
}]