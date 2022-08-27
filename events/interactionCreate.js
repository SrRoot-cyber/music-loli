module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Nenhuma música tocando no momento... tentar novamente?❌`, ephemeral: true, components: [] });

            int.member.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Enviei-te o título da música por mensagens privadas ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Não foi possível enviar uma mensagem privada... tentar novamente? ❌`, ephemeral: true, components: [] });
            });
        }
    }
};