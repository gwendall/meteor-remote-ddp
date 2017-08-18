// Monkey patch the accounts-base package so that it uses the right connection URL from the
// beginning. This object is sent to the client. This is needed because a connection is made
// at package load time to attempt a "resume" login. Without this, that attempt gets sent to
// this server's connection, instead of the remote connection.
if (Meteor.settings &&
    Meteor.settings.public &&
    Meteor.settings.public.remoteDdpUrl) {
  __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = Meteor.settings.public.remoteDdpUrl;
} else {
  throw new Error("remote-ddp: Meteor.settings.public.remoteDdpUrl is missing.");
}
