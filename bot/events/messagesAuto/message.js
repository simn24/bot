// Ping text !-------------------- \\

module.exports = (client, message) => {

  if (message.content === 'ping') return message.channel.send('Pong !');

 // Salut text !------------------ \\

if (message.content === 'Salut' || message.content === 'Bonjour' && message.author.client) return message.channel.send('yo');
}
