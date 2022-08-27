module.exports = {
    app: {
        px: '-',
        token: 'OTg3NTE3Nzk2MTQzNDY0NDk4.G69thM.RF9WVN6nN8E3QfsCnRgIhuz8BjLHE674xcM0xo',
        playing: 'Sua mãe na minha cama'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
