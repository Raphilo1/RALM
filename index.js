const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "a!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
member.guild.channels.cache.find(channel => channel.id === "810921582356070420").send(member.displayName + "est arrivé ! \nNous sommes maintenant **" + member.guild.memberCount + "** sur le serveur !");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    
    if(message.content == "Bonjour a tous. Les recrutements commence. Cliquez sur le petit ordinateur ci-dessous pour postuler (ATTENTION 🚧: le petit ordinateur ci-dessous n'apparaitra pas immédiatement). ") {
       message.react("💻");
    }

    if(message.content == " Rapha - Admin du serveur. Bonjour a tous les recrutement pour les super-modo commence. Cliquez sur le petit ordinateur ci-dessous pour postuler (ATTENTION 🚧 le petit ordinateur ci-dessous n'apparaitra pas immédiatement).") {
        message.react("💻");
     }



    if(message.content == prefix + "minecraft"){
    message.channel.send("**" + message.author.username + "** a dit qu'il voulait jouer a Minecraft.");
    }
  
    if(message.content == prefix + "bot ralm"){ 

        message.channel.send("Qui y a t il **" + message.author.username + "**.");
    }

    if(message.content == prefix + "stat"){
        message.channel.send("**" + message.author.username + "** qui a pour identifiant: " + message.author.id + " a posté un message.");
    }

    if(message.content == prefix + "gouter"){
        message.channel.send("**" + message.author.username + "** a dit qu'il avait envie de faire le gouter.");
    }

    if(message.content == prefix + "Rapha"){
        message.channel.send("**" + "Rapha" + "** est un super BG.");
    }

    if(message.content == prefix + "LoLo"){
        message.channel.send("**" + "VIVE LES BANANES" + "**");
    }
});


Client.login(process.env.TOKEN);