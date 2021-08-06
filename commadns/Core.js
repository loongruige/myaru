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
m.help     : Come on, you know.
m.commands : See all of $commandsCount commands.\`\`\`]
  $footer[$getVar[botver]] $color[$getVar[color]]`
}]