module.exports = [{
  name: "ping",
  code: `$title[Pong!]
  $description[\`\`\`yaml
Bot ping : $pingms
DB ping  : $dbpingms\`\`\`]
  $footer[$getVar[botver]] $color[$getVar[color]]`
}]