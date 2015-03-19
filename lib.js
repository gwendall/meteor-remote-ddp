RemoteDDP = function(url) {
  var connection = DDP.connect(url);
  Meteor.connection = connection;
  Accounts.connection = connection;
  Meteor.users = new Mongo.Collection("users", { connection: connection });
  var methods = ["subscribe", "call", "apply", "methods", "status", "reconnect", "disconnect", "onReconnect"];
  methods.forEach(function(method) {
    Meteor[method] = function() {
      return connection[method].apply(connection, arguments);
    };
  });
}
