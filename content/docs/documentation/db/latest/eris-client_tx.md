---

layout: single
type: docs
title: "Documentation | Blockchain Client | eris-client tx"

---

# eris-client tx

Eris-Client Tx Formulates And Signs A Transaction To A Chain

## Usage

```bash
eris-client tx
```

## Synopsis

eris-client tx formulates and signs a transaction to a chain.



## Options

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



# Subcommands

* [eris-client tx bond](/docs/documentation/db/0.12.0-rc3/eris-client_tx_bond/) - eris-client tx bond --pubkey <pubkey> --amt <amt> --unbond-to <address>
* [eris-client tx call](/docs/documentation/db/0.12.0-rc3/eris-client_tx_call/) - eris-client tx call --amt <amt> --fee <fee> --gas <gas> --to <contract addr> --data <data>
* [eris-client tx name](/docs/documentation/db/0.12.0-rc3/eris-client_tx_name/) - eris-client tx name --amt <amt> --name <name> --data <data>
* [eris-client tx permission](/docs/documentation/db/0.12.0-rc3/eris-client_tx_permission/) - eris-client tx perm <function name> <args ...>
* [eris-client tx rebond](/docs/documentation/db/0.12.0-rc3/eris-client_tx_rebond/) - eris-client tx rebond --addr <address> --height <block_height>
* [eris-client tx send](/docs/documentation/db/0.12.0-rc3/eris-client_tx_send/) - eris-client tx send --amt <amt> --to <addr>
* [eris-client tx unbond](/docs/documentation/db/0.12.0-rc3/eris-client_tx_unbond/) - eris-client tx unbond --addr <address> --height <block_height>


## See Also

* [eris-client](/docs/documentation/db/0.12.0-rc3/eris-client/) - Eris-client interacts with a running Eris chain.






# Specifications

* [Api](/docs/documentation/db/0.12.0-rc3/specifications/api/)

