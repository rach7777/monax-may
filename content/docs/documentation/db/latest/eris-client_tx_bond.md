---

layout: single
type: docs
title: "Documentation | Blockchain Client | eris-client tx bond"

---

# eris-client tx bond

Eris-Client Tx Bond --Pubkey <Pubkey> --Amt <Amt> --Unbond-To <Address>

## Usage

```bash
eris-client tx bond
```

## Synopsis

eris-client tx bond --pubkey <pubkey> --amt <amt> --unbond-to <address>


## Options

```bash
  -a, --amt string   specify an amount
  -t, --to string    specify an address to unbond to
```

## Options inherited from parent commands

```bash
  --addr string        specify the account address (for which the public key can be found at eris-keys) (default respects $ERIS_CLIENT_ADDRESS)
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