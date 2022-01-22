module.exports.send_error = async (client, owner, error) => {
 try{
  client.users.cache.get(owner).send({ embeds: [{
    "title": "Error",
    "description": `${error}`,
    "color": "#dd0000"
  }]
 })
} catch (err) {
 console.log("[SEND_ERROR] -- Owner con dm cerrado o id incorrecto");
}

  return;
}
