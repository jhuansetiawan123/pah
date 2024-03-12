const fs = require('fs');

exports.run = {
   usage: ['santet', 'malvadinha', 'virtex', 'delay', 'sendtrol', 'sendbug' , 'crash', 'unlilag', 'fastlag', 'maleve', 'morbidus' , 'phantom', 'darkscar', 'ghastly', 'havocs', 'grimsoul' , 'dreadshade', 'vortex', 'norctur', 'deathbom', 'mortis' , 'vesper', 'thanatos', 'maladiva', 'carnage', 'sinistra' , 'stygian', 'veneum', '😈', '🌹', '💥' , '🤪', '🎩', '🗿', '⚰️', 'bug1', 'bug2', 'bug3', 'bug4', 'bug5', 'bug6', 'bug7', 'badass'],
   use: '628xxx | amount',
   category: 'bug',
   async: async (m, { client, text, isPrefix, Func, command }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, '628xxxx | 10'), m);
         client.sendReact(m.chat, '🕘', m);
         let [number, jumlah] = text.split('|');
         
         if (!number || !jumlah) return client.reply(m.chat, Func.example(isPrefix, command, '6285722222 | 10'), m);
         
         let p = (await client.onWhatsApp(number))[0] || {};
         
         if (!p.exists) return client.reply(m.chat, Func.texted('bold', '🚩 Number not registered on WhatsApp.'), m);
         
         if (p.jid == m.sender) return client.reply(m.chat, Func.texted('bold', '🚩 Can\'t send massage to yourself.'), m);
         
         const amount = parseInt(jumlah) || 1;

         if (!fs.existsSync(`./media/virtex/${command}.txt`)) {
            return client.reply(m.chat, Func.texted('bold', '🚩 File not found.'), m);
         }

         for (let i = 0; i < amount; i++) {
            await Func.delay(1500);
            client.reply(p.jid, fs.readFileSync(`./media/virtex/${command}.txt`, 'utf-8'));
         }

         m.reply(`✅ Successfully sent ${amount} bugs to @${p.jid.split`@`[0]}.`);
      } catch (e) {
         console.error(e);
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   murbug: true,
   cache: true,
   location: __filename,
};

