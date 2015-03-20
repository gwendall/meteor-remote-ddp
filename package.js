Package.describe({
  name: "gwendall:remote-ddp",
  summary: "Get your client point to any DDP server",
  git: "https://github.com/gwendall/meteor-remote-ddp.git",
  version: "0.1.0"
});

Package.onUse(function (api, where) {

  api.use([
    "mongo@1.1.0",
    "underscore@1.0.3",
    "accounts-base@1.2.0"
  ], "client");

  api.addFiles([
    "lib.js",
  ], "client");

  api.export("RemoteDDP", "client");

});
