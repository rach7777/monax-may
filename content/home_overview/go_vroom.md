---

title: "Three Step Install Process"
icon: "install"
weight: 30

---

## Step 1: Install

Install the complete Eris platform in seconds.

```irc
$ go get github.com/eris-ltd/eris-cli/cmd/eris
$ eris init
```

## Step 2: Roll

Deploy your own custom [blockchain](https://docs.erisindustries.com/explainers/blockchains/) in seconds or easily connect to an existing one to develop sophisticated financial or legal applications.

```javascript
{
  "chain_id": "8344F45F69A0A0CD2DB3473B9E436E449693FA7C",
  "accounts": [
    {
      "address": "FECEE6FF5CD166D8A2423143D8DBE27C7FC6CB1B",
      "amount": 2251799813685248,
      "name": "samplechain_admin",
      "permissions": {
        "base": {
          "perms": 16383,
          "set": 16383
```

## Step 3: Build

Build and run your application using [smart contract](https://docs.erisindustries.com/explainers/smart_contracts/) templates and a simple, web-based user interface.

```javascript
contract Users {
    // Here we store the names. Make it public to
    // automatically generate an accessor function named
    // 'users' that takes a fixed-length string as an arg
    mapping (bytes32 => address) public users;

    // Register the provided name with the caller address.
    // We don't want them to register "" as their name.
    function register(bytes32 name) {
        if(users[name] == 0 && name != ""){
            users[name] = msg.sender;
        }
    }
}
```