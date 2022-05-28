const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
  name: "remove",
  description: `eliminar una cancion de la cola`,
  usage: "[number]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["rm"],

  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.players.get(message.guild.id);
    const song = player.queue.slice(args[0] - 1, 1);
    if (!player)
      return client.sendTime(
        message.channel,
        "❌ | **No se esta reproduciendo nada ahora...**"
      );
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **¡Debes estar en un canal de voz para utilizar el comando!**"
      );
    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return client.sendTime(
        message.channel,
        ":x: | **¡Debes estar en un canal de voz para utilizar el comando!**"
      );

    if (!player.queue || !player.queue.length || player.queue.length === 0)
      return message.channel.send("No hay nada en la cola para eliminar");
    let rm = new MessageEmbed()
      .setDescription(
        `✅ **|** Pista eliminada **\`${Number(args[0])}\`** de la cola!`
      )
      .setColor("GREEN");
    if (isNaN(args[0]))
      rm.setDescription(
        `**Uso - **${client.botconfig.prefix}\`elimina [track]\``
      );
    if (args[0] > player.queue.length)
      rm.setDescription(`La cola solo tiene ${player.queue.length} canciones!`);
    await message.channel.send(rm);
    player.queue.remove(Number(args[0]) - 1);
  },

  SlashCommand: {
    options: [
      {
        name: "track",
        value: "[track]",
        type: 4,
        required: true,
        description: "Eliminar una canción de la cola",
      },
    ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      let player = await client.Manager.get(interaction.guild_id);
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);
      const song = player.queue.slice(args[0] - 1, 1);
      if (!player)
        return client.sendTime(
          interaction,
          "❌ | **No se esta reproduciendo nada ahora...**"
        );
      if (!member.voice.channel)
        return client.sendTime(
          interaction,
          "❌ | **¡Debes estar en el mismo canal de voz que yo para usar este comando!**"
        );
      if (
        guild.me.voice.channel &&
        !guild.me.voice.channel.equals(member.voice.channel)
      )
        return client.sendTime(
          interaction,
          ":x: | **¡Debes estar en el mismo canal de voz que yo para usar este comando!**"
        );

      if (!player.queue || !player.queue.length || player.queue.length === 0)
        return client.sendTime(
          "❌ | **No se esta reproduciendo nada ahora...**"
        );
      let rm = new MessageEmbed()
        .setDescription(
          `✅ | **Removed track** \`${Number(args[0])}\` from the queue!`
        )
        .setColor("GREEN");
      if (isNaN(args[0]))
        rm.setDescription(`**Usage:** \`${GuildDB.prefix}remove [track]\``);
      if (args[0] > player.queue.length)
        rm.setDescription(`The queue has only ${player.queue.length} songs!`);
      await interaction.send(rm);
      player.queue.remove(Number(args[0]) - 1);
    },
  },
};
