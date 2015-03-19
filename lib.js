RemoteDDP = function(url) {
  Meteor.connection = DDP.connect(url);
  Accounts.connection = Meteor.connection;
  Meteor.users = new Mongo.Collection("users", { connection: Meteor.connection });
  var methods = ["subscribe", "call", "apply", "methods", "status", "reconnect", "disconnect", "onReconnect"];
  methods.forEach(function(method) {
    Meteor[method] = function() {
      return Meteor.connection[method].apply(Meteor.connection, arguments);
    };
  });
}
