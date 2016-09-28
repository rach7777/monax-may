---

layout: single
type: docs
title: "Documentation | Blockchain Client | eris-client tx rebond"

---

# eris-client tx rebond

Eris-Client Tx Rebond --Addr <Address> --Height <Block_height>

## Usage

```bash
eris-client tx rebond
```

## Synopsis

eris-client tx rebond --addr <address> --height <block_height>


## Options

```bash
  -a, --addr string     specify an address
  -n, --height string   specify a height to unbond at
```

## Options inherited from parent commands

```bash
  -b, --broadcast          broadcast the transaction to the blockchain (default true)
      --chain-id string    specify the chainID (default respects $CHAIN_ID)
  -d, --debug              debug level output; the most output available for eris-client; if it is too chatty use verbose flag; default respects $ERIS_CLIENT_DEBUG
      --node-addr string   set the eris-db node rpc server address (default respects $ERIS_CLIENT_NODE_ADDRESS) (default "tcp://127.0.0.1:46657")
      --nonce string       specify the nonce to use for the transaction (should equal the sender account's nonce + 1)
      --pubkey string      specify the public key to sign with (defaults to $ERIS_CLIENT_PUBLIC_KEY)
      --sign-addr string   set eris-keys daemon address (default respects $ERIS_CLIENT_SIGN_ADDRESS) (default "http://127.0.0.1:4767")
  -v, --verbose            verbose output; more output than no output flags; less output than debug level; default respects $ERIS_CLIENT_VERBOSE
  -w, --wait               wait for the transaction to be committed in a block
```



## See Also
* [eris-client tx](