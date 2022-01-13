const got = require('got');

module.exports.send_error = async (client, owner, error) => {

let body = await got("https://showcase.api.linx.twenty57.net/UnixTime/tounixtimestamp?datetime=now");
  
  client.users.cache.get(owner).send({ embeds: [{
    "title": "Error",
    "description": `${error}\nA las \`<t:${body["UnixTimeStamp"]}:t>\``,
    "color": "#dd0000"
  }]
 })

  return;
}