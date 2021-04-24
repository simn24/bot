const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {
  message.channel.bulkDelete(1, true)

  const user = message.mentions.users.first()
  const reason =
    args.splice(1).join(" ") || "Raison non spécifié par le modérateur"

    try {
      await user.send(
        new MessageEmbed()
          .setColor("#dc143c")
          .setTitle("**__Sanction__**")
          .setDescription(
            `*Vous avez été sanctionné sur **${message.guild.name}***\n\n**Sanction Appliqué** : Kick\n**Raison** : ${reason}`
          )
          .setTimestamp()
      )
    } catch (err) {}

  await message.guild.member(user).kick(reason)

  message.channel.send(
    new MessageEmbed()
      .setAuthor(`${user.username} (${user.id})`)
      .setColor("#ffa500")
      .setDescription(
        `**Serveur** : ${message.guild.name}\n**Action** : Kick\n**Raison** : ${reason}`
      )
      .setThumbnail(user.avatarURL())
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL())
  )
}

module.exports.help = {
  name: "kick",
  aliases: ["expel", "expulser"],
  category: "Moderation",
  description: "Kick un utilisateur",
  cooldown: 5,
  usage: "<@​​utilisateur> <raison>",
  isUserAdmin: true,
  permissions: true,
  args: true,
}