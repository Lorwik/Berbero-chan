module.exports = {
  Admins: ["UserID", "UserID"], //Administradores del bot
  ExpressServer: true, //Si desea que el sitio web funcione o no
  DefaultPrefix: process.env.Prefix || ">", //Prefijo predeterminado, los administradores del servidor pueden cambiar el prefijo
  Port: 3000, //Qué sitio web del puerto se alojará
  SupportServer: "https://discord.gg/sbySMS7m3v", //Enlace del servidor de soporte
  Token:
    process.env.Token ||
    "Njc5MDM3MDE5ODM3NTYyOTA4.XkrggQ.yWpvwFPS5VdgvCXye4kimYSQUC4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "679037019837562908", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Lorwik is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://0.0.0.0", //El sitio web donde está alojado incluye http o https || Usa "0.0.0.0" si usas Heroku || No incluya /api/devolución de llamada. Solo la URL del sitio web. Es decir. "https://foo.bar"
  // Si obtiene una autenticación no válida, asegúrese de que en la página del desarrollador de Discord establezca la URL de autenticación en algo como: https://example.com/api/callback.

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Desarrollado por LwK", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "losingtime.dpaste.org", //- The host name or IP of the lavalink server.
    port: 2124, // The port that lavalink is listening to. This must be a number!
    pass: "SleepingOnTrains", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID:
      process.env.Spotify_ClientID || "760f9bdf6a6a498ea2709a03c5fe17ab", //Spotify Client ID
    ClientSecret:
      process.env.Spotify_ClientSecret || "cb04d14e003a4a44a6529bd76ad695b9", //Spotify Client Secret
  },
};
