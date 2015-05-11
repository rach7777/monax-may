```javascript
// Note, this is an incomplete example. Do not copy and paste!
{
    // Doug is the smart contract which controls permissions
    "address" : "0000000000THISISDOUG",
    // Use this Genesis DOUG contract (or make your own)
    "doug" : "Genesis DOUG/gendoug-v3.111",
    // Add a genDoug chain permission module to a private chain
    "no-gendoug" : false,
    // turning any of these to `1` makes the action be available to
    // any one who can access the chain
    "public:commit" : 0,
    "public:create" : 0,
    "public:tx" : 0,
    // set the difficulty
    "difficulty" : 15,
    // set the target blocktime
    "blocktime" : 14,
    // set accounts which can interact with this chain giving
    // developers pinpoint control over the permissions
    "accounts": [
        {
            // use an established PKI for capabilities based perms
            "address": "0xbbbd0256041f7aed3ce278c56ee61492de96d001",
            "name": "devProcessingNodeABD",
            // give node a balance of junk tokens if you need to
            "balance": "0",
            "permissions": {
                "tx":0,
                "commit":1,
                "create":0,
                "doug":0
```