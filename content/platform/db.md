---

type:   docs
layout: single
index_file: ""
title:      "Platform | Blockchain Client"
excerpt:    "The Ecosystem Application Platform | db"
aliases:
    - /components/erisdb/
menu:
  platform:
    weight: 10

---

## Introduction

`eris:db` is Monax's blockchain node.

It is a controllable (permissionable), smart contract-enabled, proof-of-stake based blockchain design. `eris:db` can be configured to work with a wide variety of individual blockchain networks. As such, it was, and continues to be, the first blockchain node designed from the ground up to be a multi-network blockchain node.

Developers who use an `eris:db` blockchain node along with the `eris` platform to manage their blockchains are able to benefit from having an access control layer through the use of smart contracts and our permission layer.

`eris:db` was designed for deployment in a variety of contexts, from internal enterprise deployments, to federated enterprise deployments, to more decentralized and public deployments. From deployments which require the use of tokens of value, to those that only require the utility of a blockchain but not monetized tokenization. A single `eris:db` client is all that is required in order to participate in all of these blockchains.

With one `eris:db` client, commercial entities will be able to control an innumerable amount of blockchains, each purpose built to solve a particular enterprise challenge.

### Consensus

`eris:db` uses the Tendermint consensus engine, a deposit based proof of stake protocol which is much more environmentally friendly, decentralisable, speedy, and final than proof of work.

### Interface

`eris:db` comes with a range of interfaces from CLI tooling to RPCs. See our [comprehensive documentation](https://github.com/monax/eris-db/blob/master/README.md) for more.

### Virtual Machine

`eris:db` comes with a built-to-specification Ethereum Virtual Machine. It runs any contract which has been compiled with the `eris:compilers` or any of Ethereum's compilers.

### Permission Layer

Permissioning your blockchains is more than simply running them behind a gated VPN if one is running `eris:db`.

`eris:db` comes with a [capabilities-based, evolvable permissioning layer](https://github.com/monax/eris-db/blob/master/README.md) - the first of its kind on the market, and by far, still the most sophisticated.

## Comparisons

<div>
  <ul class="nav nav-tabs nav-justified" role="tablist" id="competitionTabs">
    <li role="presentation" class="active"><a href="#geth" aria-controls="geth" role="tab" data-toggle="tab">eris:db v. geth</a></li>
    <li role="presentation"><a href="#strato" aria-controls="strato" role="tab" data-toggle="tab">eris:db v. strato</a></li>
    <li role="presentation"><a href="#btcd" aria-controls="btcd" role="tab" data-toggle="tab">eris:db v. btcd</a></li>
    <li role="presentation"><a href="#ripple" aria-controls="ripple" role="tab" data-toggle="tab">eris:db v. ripple</a></li>
    <li role="presentation"><a href="#dah" aria-controls="dah" role="tab" data-toggle="tab">eris:db v. hyperledger</a></li>
    <li role="presentation"><a href="#chain" aria-controls="chain" role="tab" data-toggle="tab">eris:db v. chain.com</a></li>
  </ul>
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane fade in active" id="geth">
      <div class="table-responsive">
        <table class="table table-hover">
          <tr>
            <th></th>
            <th>eris:db</th>
            <th>geth (by EthDev)</th>
          </tr>
          <tr>
            <td>Consensus</td>
            <td>Tendermint Consensus Engine<br />Deposit based Proof of Stake<br />PBFT Algorithm </td>
            <td>Ethereum’s Consensus Engine<br />Proof of Work</td>
          </tr>
          <tr>
            <td>Interfaces to Client</td>
            <td>Websockets JSON-RPC<br />HTTPS JSON-RPC<br />Command line tooling</td>
            <td>HTTPS JSON-RPC<br />Js Console<br />Command line tooling</td>
          </tr>
          <tr>
            <td>Key Types</td>
            <td>ECDSA ed22519 curve (same as PGP, SSH, SSL, etc.)</td>
            <td>ECDSA secp2k1 curve (same as Bitcoin, etc.)</td>
          </tr>
          <tr>
            <td>Virtual Machine</td>
            <td>Built to Specification EVM</td>
            <td>Built to Specification EVM</td>
          </tr>
          <tr>
            <td>Permission Layer</td>
            <td><a href="https://github.com/monax/eris-db/blob/master/README.md">Yes</a></td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Works with Monax</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Free and Open Source?</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
      </div>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="strato">
      <div class="table-responsive">
        <table class="table table-hover">
          <tr>
            <th></th>
            <th>eris:db</th>
            <th>strato (by BlockApps/Consensys)</th>
          </tr>
          <tr>
            <td>Consensus</td>
            <td>Tendermint Consensus Engine<br />Deposit based Proof of Stake<br />PBFT Algorithm </td>
            <td>Ethereum’s Consensus Engine<br />Proof of Work</td>
          </tr>
          <tr>
            <td>Interfaces to Client</td>
            <td>Websockets JSON-RPC<br />HTTPS JSON-RPC<br />Command line tooling</td>
            <td>WebApp Interface<br />?</td>
          </tr>
          <tr>
            <td>Key Types</td>
            <td>ECDSA ed22519 curve (same as PGP, SSH, SSL, etc.)</td>
            <td>ECDSA secp2k1 curve (same as Bitcoin, etc.)</td>
          </tr>
          <tr>
            <td>Virtual Machine</td>
            <td>Built to Specification EVM</td>
            <td>Built to Specification EVM</td>
          </tr>
          <tr>
            <td>Permission Layer</td>
            <td><a href="https://github.com/monax/eris-db/blob/master/README.md">Yes</a></td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Works with Monax</td>
            <td>Yes</td>
            <td>not yet</td>
          </tr>
          <tr>
            <td>Free and Open Source?</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
      </div>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="btcd">
      <div class="table-responsive">
        <table class="table table-hover">
          <tr>
            <th></th>
            <th>eris:db</th>
            <th>btcd (Bitcoin’s Go Client)</th>
          </tr>
          <tr>
            <td>Consensus</td>
            <td>Tendermint Consensus Engine<br />Deposit based Proof of Stake<br />PBFT Algorithm </td>
            <td>Bitcoin's Consensus Engine<br />Proof of Work</td>
          </tr>
          <tr>
            <td>Interfaces to Client</td>
            <td>Websockets JSON-RPC<br />HTTPS JSON-RPC<br />Command line tooling</td>
            <td>HTTPS JSON-RPC</td>
          </tr>
          <tr>
            <td>Key Types</td>
            <td>ECDSA ed22519 curve (same as PGP, SSH, SSL, etc.)</td>
            <td>ECDSA secp2k1 curve (same as Bitcoin, etc.)</td>
          </tr>
          <tr>
            <td>Virtual Machine</td>
            <td>Built to Specification EVM</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Permission Layer</td>
            <td><a href="https://github.com/monax/eris-db/blob/master/README.md">Yes</a></td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Works with Monax</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Free and Open Source?</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
      </div>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="ripple">
      <div class="table-responsive">
        <table class="table table-hover">
          <tr>
            <th></th>
            <th>eris:db</th>
            <th>ripple</th>
          </tr>
          <tr>
            <td>Consensus</td>
            <td>Tendermint Consensus Engine<br />Deposit based Proof of Stake<br />PBFT Algorithm </td>
            <td>Ripple’s Consensus Engine</td>
          </tr>
          <tr>
            <td>Interfaces to Client</td>
            <td>Websockets JSON-RPC<br />HTTPS JSON-RPC<br />Command line tooling</td>
            <td>WebSocket API<br />HTTP/S JSON-RPC<br />Command line tooling</td>
          </tr>
          <tr>
            <td>Key Types</td>
            <td>ECDSA ed22519 curve (same as PGP, SSH, SSL, etc.)</td>
            <td>ECDSA secp2k1 curve (same as Bitcoin, etc.)</td>
          </tr>
          <tr>
            <td>Virtual Machine</td>
            <td>Built to Specification EVM</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Permission Layer</td>
            <td><a href="https://github.com/monax/eris-db/blob/master/README.md">Yes</a></td>
            <td>Ripple Gateway Permissioning</td>
          </tr>
          <tr>
            <td>Works with Monax</td>
            <td>Yes</td>
            <td>not yet</td>
          </tr>
          <tr>
            <td>Free and Open Source?</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
      </div>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="dah">
      <div class="table-responsive">
        <table class="table table-hover">
          <tr>
            <th></th>
            <th>eris:db</th>
            <th>hyperledger (by DAH)</th>
          </tr>
          <tr>
            <td>Consensus</td>
            <td>Tendermint Consensus Engine<br />Deposit based Proof of Stake<br />PBFT Algorithm </td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Interfaces to Client</td>
            <td>Websockets JSON-RPC<br />HTTPS JSON-RPC<br />Command line tooling</td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Key Types</td>
            <td>ECDSA ed22519 curve (same as PGP, SSH, SSL, etc.)</td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Virtual Machine</td>
            <td>Built to Specification EVM</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Permission Layer</td>
            <td><a href="https://github.com/monax/eris-db/blob/master/README.md">Yes</a></td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Works with Monax</td>
            <td>Yes</td>
            <td>not yet</td>
          </tr>
          <tr>
            <td>Free and Open Source?</td>
            <td>Yes</td>
            <td>unclear</td>
          </tr>
        </table>
      </div>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="chain">
      <div class="table-responsive">
        <table class="table table-hover">
          <tr>
            <th></th>
            <th>eris:db</th>
            <th>chain (by Chain.com)</th>
          </tr>
          <tr>
            <td>Consensus</td>
            <td>Tendermint Consensus Engine<br />Deposit based Proof of Stake<br />PBFT Algorithm </td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Interfaces to Client</td>
            <td>Websockets JSON-RPC<br />HTTPS JSON-RPC<br />Command line tooling</td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Key Types</td>
            <td>ECDSA ed22519 curve (same as PGP, SSH, SSL, etc.)</td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Virtual Machine</td>
            <td>Built to Specification EVM</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Permission Layer</td>
            <td><a href="https://github.com/monax/eris-db/blob/master/README.md">Yes</a></td>
            <td>unclear</td>
          </tr>
          <tr>
            <td>Works with Monax</td>
            <td>Yes</td>
            <td>not yet</td>
          </tr>
          <tr>
            <td>Free and Open Source?</td>
            <td>Yes</td>
            <td>unclear</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</div>

