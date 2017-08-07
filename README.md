```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com.
```

Meteor Remote DDP
=================

When building apps with decoupled client-code and server-code (say mobile apps, for example), your client tries to connect to its own DDP server by default. And performs all the Meteor methods (Meteor.call, Meteor.subscribe, etc.) to this endpoint.  
This package just allows you to specify a remote DDP server for all of that.

Installation
------------

``` sh
meteor add gwendall:remote-ddp
```

How-to
----------

**RemoteDDP(url)**  
``` javascript
RemoteDDP("http://localhost:5000");
// You can now call any Meteor method (call, subscribe, etc.) and it will all point to this server
```

Notes
-----  
- Does not work in Cordova. To access a different server, use the --mobile-server flag instead.
- Inspired by @jamgold's [solution](https://github.com/meteor/meteor/issues/3852#issuecomment-78699162).

To do
-----  
- Implement patch for OAUTH login (right now, accounts-facebook, accounts-twitter, etc point to client's server by default)  
- Maybe monkey-patch Mongo.Collection so that it automatically picks the new Meteor.connection
