const Discord = require('discord.js');

const computer_engineering_role = '732631222622224437';
const software_engineering_role = '732631288040915006';
const computer_science_role = '732631354864566353';
const electrical_engineering_role = '748600139077386380';

const bot = new Discord.Client();



bot.on('message',(message) => {

    if (message.content == '!role ceg')
    {
        message.member.roles.add(computer_engineering_role);
        message.reply('You now have the computer engineering role');
    }
    else if (message.content === '!role seg')
    {
        message.member.roles.add(software_engineering_role);
        message.reply('You now have the software engineering role');
    }
    else if (message.content === '!role cs')
    {
        message.member.roles.add(computer_science_role);
        message.reply('You now have the computer science role');
    }
    else if (message.content === '!role ee')
    {
        message.member.roles.add(electrical_engineering_role);
        message.reply('You now have the electrical engineering role');
    }

});

bot.login('');
