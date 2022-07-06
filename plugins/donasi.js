let handler = async m => m.reply(`
            .✵.GRUP SANS STORE.✵.

            https://chat.whatsapp.com/IduqgsNjuDZKhdDdmDsc7P
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler