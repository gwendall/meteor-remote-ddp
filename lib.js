RemoteDDP = {};

if (typeof Accounts !== 'undefined') {
  throw new Error("remote-ddp is loaded after accounts-base. Make remote-ddp load before " +
    "accounts-base by placing it earlier in your .meteor/packages file.");
}

/**
 * Monkey-patch everything that we can think of with the new connection.
 *
 * @returns {Connection} - The DDP connection.
 */
RemoteDDP.monkeyPatch = function() {

  // If accounts-base is loaded, then we told it to use our URL and it created a connection
  // that we should use.
  var connection;
  if (typeof Accounts === 'undefined') {
    connection = DDP.connect(Meteor.settings.public.remoteDdpUrl);
  } else {
    connection = Accounts.connection;
  }

  // Replace base connection.
  Meteor.connection = connection;

  // Patch methods.
  var methods = ["subscribe", "call", "apply", "methods", "status", "reconnect", "disconnect", "onReconnect"];
  methods.forEach(function(method) {
    Meteor[method] = function() {
      return connection[method].apply(connection, arguments);
    };
  });

  return connection;
}
