RemoteDDP = function(url) {

  var connection = DDP.connect(url);

  // Replace base connections
  Meteor.connection = connection;
  Accounts.connection = connection;

  // Patch methods
  var methods = ["subscribe", "call", "apply", "methods", "status", "reconnect", "disconnect", "onReconnect"];
  methods.forEach(function(method) {
    Meteor[method] = function() {
      return connection[method].apply(connection, arguments);
    };
  });

  // Reset the users collection
  Meteor.users = new Mongo.Collection("users", { connection: connection });

  // Return the connection
  return connection;

}
