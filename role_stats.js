//Role Stats
client.on("ready", function(){
  const interval = setInterval (function () {
    const channel = client.guilds.cache.get(config.id).channels.cache.get("") //channel id
    const role =  client.guilds.cache.get(config.id).roles.cache.find(role => role.id ===""); //role id
    channel.setName(`${role.name}: ${role.members.size || 0}`).catch(() => { })
  }, 1 * 15000); 
})
