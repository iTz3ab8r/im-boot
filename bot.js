const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`EL JOKER™ §€RVÊR 👑 `,'https://www.twitch.tv/idk');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
 
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
 
  const args = message.content.split(" ").slice(1);
 
 var p = "$";
 
  if (command == "kick") {
  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');        
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك صلاحية للكيك**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يملك صلاحيات الكيك");
  const user = message.mentions.users.first();
  const reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص المراد طرده**");
if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني طرد هذا الشخص**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`تم طرد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**العضو اللي انطرد**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**العضو اللي قام بالطرد**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
   
  })
}
});
 
client.on('message', message => {
  if (message.author.boss) return;
  if (!message.content.startsWith(prefix)) return;
 
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
 
  const args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');        
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
  const user = message.mentions.users.first();
  const reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص اللي تريد تبنيده**");
  if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني تبنيد هذا الشخص**");
 
  message.guild.member(user).ban();
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`تم تبنيد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**العضو الي تبند:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**العضو اللي قام بتبنيده:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {
  if(message.content === ('$clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});



// Your Avatar URL!
client.on('message', message => {
    if (message.content === "$avatar") {
    message.reply(message.author.avatarURL); 
    }
});

client.on("message", message => {
      if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
    client.on('message', message => {
     if (message.content === "$id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Name Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "$";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});


const adminprefix = "$";
const devs = ['430860058591756289','516576049778130954'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    if (message.content.split(' ')[0] == '$bc')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   client.on("message", message => {
       var prefix = "%";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "b")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }

});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله تعالى وبركاته :heart:');
  }
});


client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('Welcome Back  :heartpulse: ');
  }
});


client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply(':heart:هلابيك ياعمري منورنا:heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'باي') {
    msg.reply(':heart: باي يا حب :heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'احا') {
    msg.reply(':rage:عيب انتا كبير:rage:');
  }
});

client.on('message', msg => {
  if (msg.content === 'خخ') {
    msg.reply(':rage:عيب انتا كبير:rage:');
  }
});


client.on('message', msg => {
  if (msg.content === 'نوب') {
    msg.reply('شبهك :innocent::joy:');
  }
});



client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("522576858743832577").send({ embed: stewart });
    }
});


client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        ch.send(`${user} تحذير هذا شخص مسوي نفسه اوف لاين ويكتب`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});

client.on('message',async msg => {//Alpha Codes
//Alpha Codes//Alpha Codes//Alpha Codes//Alpha Codes//Alpha Codes
  var prefix = "$";//Alpha Codes
//Alpha Codes
  if(msg.content.startsWith(prefix + "user")) {//Alpha Codes
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()//Alpha Codes
      time.setName(`Members : ? ? ${client.users.size} ? ?`);
 },1000);
  });//Alpha Codes
  }
 
});

client.on('message', message => {  
if (message.author.boss) return;
var prefix = "$";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
 
 ${message.author.tag} تمت معاقبتك بواسطة
 
[ ${reason} ] : السبب
 
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});

 client.on('message', msg => {
    if (msg.content.startsWith(`$warn`)) {
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[1]) return msg.reply('``اكتب السبب``')
      //غير اسم الروم او سوي روم بذا الاسم
      if (msg.guild.channels.find('name', 'warns')) {
        //اذا غيرت فوق غير هنا كمان
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك تنبيه : ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
})

client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith(prefix + 'report$')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          console.log('[report] Send By: ' + message.author.username)
      }
      });

    client.on("guildMemberAdd", function(member) {
  const channel = member.guild.channels.find("name", "?ê£ç??")
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(member.user.tag, member.user.avatarURL)
.setDescription('*** :heart:  ولكم نورت السيرفر يا قلبي نتمني لك الاستمتاع في السيرفر***')
.setThumbnail(member.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/503693641878077475/504221403017510912/download.jpg')
      if (!channel) return;
      channel.sendEmbed(embed);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:hearts:منور السيرفر:hearts:
:crown:اسمك:crown: : ${member}  
أنت العضو رقم: : ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('guildMemberRemove', Sal => { //By Salto7#4595
  var embed = new Discord.RichEmbed()
  .setAuthor(Sal.user.username, Sal.user.avatarURL)
  .setThumbnail(Sal.user.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/505491202871787521/509701858571321350/download.jpg') //هنا حط الصوره الي تبيها
  .setTitle('خرج عضو')
  .setDescription('الله معك مع السلامه')
  .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
  .addField('``تاق العضو``', Sal.user.discriminator, true)
  .addField('``تم الانشاء في``', Sal.user.createdAt, true)
  .addField(' ?? الان ',`**[ ${Sal.guild.memberCount} ]**`,true)
  .setColor('RED')
  .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
  var channel =Sal.guild.channels.find('name', '?ê£ç??') // هنا حط اسم الروم الي تبيه يكتب فيه
  if (!channel) return;
  channel.send({embed : embed});
  });


client.on('message', function(msg) {
    const prefix = '$'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('??** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('??** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('??**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('??**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('??**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('??**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('??**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('??**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('??**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
 
    if (message.content === "$cchat") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "$unchat") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }
 
 
 
});


client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").slice(1);
 
 
    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();
 
    if (!suggestchannel) {
        return message.reply("برجاء عمل منشن للروم")
    }
 
    if (!suggestmessage) {
        return message.reply("برجاء كتابة النص الكتابي الذي سيرسل للروم")
   
         
    }
     message.delete();
suggestchannel.send("@everyone || @here ");
    let embed = new Discord.RichEmbed()
        .addField("**تصويت عام للجميع**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("?").then(r => msg.react("?"))
    });
 
 
    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});


client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("هلا امرني   ");
    }
});


client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === '$ccolors') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('يتم انشاء 200 لون انتضر | ??')
    }else{
    message.channel.send('ما معاك البرمشن المطلوب |???')
    }
    }
    });
    
    client.on('message', message=>{
    if (message.content === '$ccolors'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 200; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    });


client.on("guildCreate", guild => {
    client.channels.get("522576917061173250").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
   
    client.on("guildDelete", guild => {
    client.channels.get("522576917061173250").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });


client.on('message', message => {
    if (message.content.startsWith("$bans")) {
     if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");


        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});
