const { GuildMember, MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

  message.channel.bulkDelete(1, true)   
    const user = message.mentions.members.first()
    const reason = (args.splice(1).join(' ') || 'Raison non spécifié par le modérateur');
      
    await user.send().then((channel) => {
      return channel.send(
        new MessageEmbed()
          .setColor("#dc143c")
          .setTitle("**__Sanction__**")
          .setDescription(
            `*Vous avez été sanctionné sur **${message.guild.name}***\n\n**Sanction Appliqué** : Ban\n**Raison** : ${reason}`
          )
          .setTimestamp()
      )
    }).catch()
      
    await user.ban({ days: 7, reason: `${reason}` })
      
      const banLogEmbed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.user.id})`)
        .setColor("#dc143c")
        .setDescription(`**Action** : Ban\n**Raison** : ${reason}`)
        .setThumbnail(user.user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());
      message.channel.send(banLogEmbed)
    
}
    
module.exports.help = {
  name: 'ban', // Défini le nom de la commande
  aliases: ['ban'], // Défini ces alias [Plus tard pour le s!help]
  category: 'Staff', // Défini sa catégorie [Plus tard pour le s!help]
  description: 'Ban un user', // Défini sa description [Plus tard pour le s!help]
  cooldown: 0, // Défini le cooldown de la commande (en secondes)
  usage: '<@utilisateur> <raison>', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
  isUserAdmin: true, // Vérifie si l'utilisateur visé a les permissions
  permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
  args: true // Vérifie si la commande a besoin d'arguments
}