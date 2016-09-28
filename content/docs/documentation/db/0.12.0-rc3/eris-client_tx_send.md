---

layout: single
type: docs
title: "Documentation | Blockchain Client | eris-client tx send"

---

# eris-client tx send

Eris-Client Tx Send --Amt <Amt> --To <Addr>

## Usage

```bash
eris-client tx send
```

## Synopsis

eris-client tx send --amt <amt> --to <addr>


## Options

```bash
  -a, --amt string   specify an amount
  -t, --to string    specify an address to send to
```

## Options inherited from parent commands

```bash
  --addr string        specify the account address (for which the public key can be found at eris-keys) (default respects $ERIS_CLIENT_ADDRESS)
  -b, --broadcast          broadcast the transaction to the blockchain (default true)
      --chain-id string    specify the chainID (default respects $CHAIN_ID)
      --node-addr string   set the eris-db node rpc server address (default respects $ERIS_CLIENT_NODE_ADDRESS) (default "tcp://127.0.0.1:46657")
      --nonce string       specify the nonce to use for the transaction (should equal the sender account's nonce + 1)
      --pubkey string      specify the public key to sign with (defaults to $ERIS_CLIENT_PUBLIC_KEY)
      --sign-addr string   set eris-keys daemon address (default respects $ERIS_CLIENT_SIGN_ADDRESS) (default "http://127.0.0.1:4767")
  -w, --wait               wait for the transaction to be committed in a block
```



## See Also

* [eris-client tx](/docs/documentation/db/0.12.0-rc3/eris-client_tx/) - eris-client tx formulates and signs a transaction to a chain






# Specifications

* [Api](/docs/documentation/db/0.12.0-rc3/specifications/api/)

