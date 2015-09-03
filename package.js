Package.describe({
  name: "budgie:remote-ddp",
  summary: "Make your client seamlessly connect to a different server",
  git: "https://github.com/budgie/meteor-remote-ddp.git",
  version: "0.1.0",
});

Package.onUse(function(api) {

  api.use([
    "ddp",
    "mongo@1.1.0",
    "underscore@1.0.3",
  ], "client");

  api.addFiles([
    "lib.js",
  ], "client");

  api.addFiles([
    "server.js",
  ], "server");

  api.export("RemoteDDP", "client");

});
