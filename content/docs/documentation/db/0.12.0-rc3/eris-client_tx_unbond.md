---

layout: single
type: docs
title: "Documentation | Blockchain Client | eris-client tx unbond"

---

# eris-client tx unbond

Eris-Client Tx Unbond --Addr <Address> --Height <Block_height>

## Usage

```bash
eris-client tx unbond
```

## Synopsis

eris-client tx unbond --addr <address> --height <block_height>


## Options

```bash
  -a, --addr string     specify an address
  -n, --height string   specify a height to unbond at
```

## Options inherited from parent commands

```bash
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

