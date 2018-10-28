const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.login('process.env.TOKEN');

client.on('message', msg => {
  if (msg.content === '>commandes') {
    msg.channel.send('**Voici la liste de commande:**');
    msg.channel.send('**Info**');
    msg.channel.send('```>invites```');
    msg.channel.send('```>help```');
    msg.channel.send('```>developpement```');
    msg.channel.send('```>support```');
    msg.channel.send('**Image**');
    msg.channel.send('```>avatar```');
    msg.channel.send('**Modération**');
    msg.channel.send('```>kick```');
    msg.channel.send('```>ban```');
    msg.channel.send('**LuluBot ©. Créé par Sy#5871**');
  }
});

client.on('message', msg => {
  if (msg.content === '>invites') {
    msg.channel.send('**https://discordapp.com/oauth2/authorize?client_id=503185379982311424&scope=bot&permissions=2146958847**');
  }
});

client.on('message', message => {
  if (message.content === '>avatar') {
    message.channel.send(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('>kick')) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**⚠ Erreur: Vous n'êtes pas autorisé à utiliser la commande.**");

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick({
          reason: 'Pas de raison donné',
        }).then(() => {
          message.channel.send(`**${member.user.tag} a été kicker par ${message.author.tag} pour: ${reason}**`)
        }).catch(err => {
          message.channel.send('**⚠ Erreur: Est-ce que le bot à les permissions requise? ou à t\'ilun rôle plus élevé que le tiens? Vérifiez et réesayez!**');
          console.error(err);
        });
      } else {
        message.channel.send('**⚠ Erreur SyntaxError: Unexpected command**');
      }
    } else {
      message.channel.send('**⚠ Erreur Vous devez mentionner la personne pour affectuer cette commande!**');
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('>ban')) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**⚠ Erreur: Vous n'êtes pas autorisé à utiliser la commande.**");

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Raison optionelle',
        }).then(() => {
          message.channel.send(`**${member.user.tag} a été bannis par ${message.author.tag} pour: ${reason}**`);
        }).catch(err => {
          message.channel.send('**⚠ Erreur: Est-ce que le bot à les permissions requise? ou à t\'ilun rôle plus élevé que le tiens? Vérifiez et réesayez!**');
          console.error(err);
        });
      } else {
        message.channel.send('**⚠ Erreur: SyntaxError: Unexpected command**');
      }
    } else {
      message.channel.send('**⚠Erreur: Vous devez mentionner la personne pour affectuer cette commande!**');
    }
  }
});

client.on('message', msg => {
  if (msg.content === '>help kick') {
    msg.channel.send('**Commande : kick.**');
    msg.channel.send('```Description : Kicker un utilisateur.**');
    msg.channel.send('```Usage >kick @utilisateur.**');
    msg.channel.send('**Example >kick Lulubot.**');
    msg.channel.send('```LuluBot ©. Créé par Sy#5871```');
  }
});

client.on('message', msg => {
  if (msg.content === '>help ban') {
    msg.channel.send('**Commande : ban.**');
    msg.channel.send('**Description : Bannir un utilisateur.**');
    msg.channel.send('**Usage >ban @utilisateur.**');
    msg.channel.send('**Example >ban LuluBot.**');
    msg.channel.send('**LuluBot ©. Créé par Sy#5871**');
  }
});

client.on('message', msg => {
  if (msg.content === '>developpement') {
    msg.channel.send('** 📌 Equipe de Développement 📌 : **');
    msg.channel.send('** 🔧 Chef de projet :**');
    msg.channel.send('Sy#5871 (Codeur)');
    msg.channel.send('**💎 Membre du staff :**');
    msg.channel.send('Sy#5871 | 🚀Louloubox33#5124');
    msg.channel.send('**🔗 Recrutement :**');
    msg.channel.send('Pour toute demande de recrutement merci de vous diriger sur le serveur support ou par message privé ( Sy#5871 )');
    msg.channel.send('**LuluBot ©. Créé par Sy#5871**');
  }
});

client.on('message', msg => {
  if (msg.content === '>support') {
    msg.channel.send('**Voici le lien d\'invitation pour rejoindre le serveur officiel de Sy: https://discord.gg/WGZrvp5**');
    msg.channel.send('**Voici le lien d\'invitation pour rejoindre le serveur officiel de Louloubox33: https://discord.gg/uS9f7vC**');
  }
});
