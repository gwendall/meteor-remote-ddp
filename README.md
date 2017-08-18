```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

Meteor Remote DDP
=================

When building apps with decoupled client-code and server-code (say mobile apps, for example), your client connects via DDP to its own server by default. 

This package allows you to specify a remote DDP server for Accounts, subscriptions and Meteor methods.

This package is quite brittle. It relies heavily on private APIs and monkey patching.

Installation
------------

```
git clone https://github.com/BudgieInWA/meteor-remote-ddp.git packages/meteor-ddp
meteor add budgie:remote-ddp
```

If you use accounts-base, or any dependant package, you must edit `.meteor/packages` to move `budgie:remote-ddp` above any such packages.

Usage
-----

Add the remote to your settings JSON file:

``` json
{
  "public": {
    "remoteDdpUrl": "http://localhost:5000"
  }
}
```

In your client code, before doing anything that uses DDP, initialise RemoteDDP:

``` javascript
RemoteDDP.monkeyPatch();
```

Launch Meteor using your settings file:

``` sh
meteor --settings settings.json
```

Notes
-----  

- Based on [gwendall:remote-ddp](https://github.com/gwendall/meteor-remote-ddp).
- Does not work in Cordova. To access a different server, use the --mobile-server flag instead.
- I don't know about Mongo.Collection support.

To Do
-----  

- Publish to atmosphere?
