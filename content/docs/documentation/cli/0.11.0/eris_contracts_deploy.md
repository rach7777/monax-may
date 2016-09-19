---

layout: single
title:      "Documentation | eris:cli | eris contracts deploy"

---

# eris contracts deploy

Deploy a package of smart contracts to a chain.

## Synopsis

Deploy a package of smart contracts to a chain.

Deployments can be structured using three different
deploy types.

1. epm - epm apps can be deployed to tendermint style blockchains simply.
2. embark - embark apps can be deployed to an ethereum style blockchain simply.
3. truffle - HELP WANTED!
4. pyepm - IF THIS IS STILL A THING, HELP WANTED!
5. manual - a simple gulp task can be given to the deployer.

```bash
eris contracts deploy
```

## Options

```
  -b, --abi-path string         path to the abi directory EPM should use when saving ABIs after the compile process (EPM only) (default "./abi")
  -a, --address string          default address to use; operates the same way as the [account] job, only before the epm file is ran (EPM only)
  -y, --amount string           default amount to use (EPM only) (default "9999")
  -c, --chain string            chain to be used for deployment
  -l, --compiler string         <ip:port> of compiler which EPM should use (EPM only) (default "https://compilers.eris.industries:9090")
  -p, --contracts-path string   path to the contracts EPM should use (EPM only) (default "./contracts")
  -i, --dir string              root directory of app (will use $pwd by default)
  -w, --fee string              default fee to use (EPM only) (default "1234")
  -f, --file string             path to package file which EPM should use (EPM only) (default "./epm.yaml")
  -g, --gas string              default gas to use; can be overridden for any single job (EPM only) (default "1111111111")
  -o, --output string           results output type (EPM only)
  -r, --rm                      remove containers after stopping (default true)
  -x, --rm-data                 remove artifacts from host (default true)
  -s, --services value          comma separated list of services to start (default [])
  -e, --set value               default sets to use; operates the same way as the [set] jobs, only before the epm file is ran (and after default address (EPM only) (default [])
  -u, --summary                 output a table summarizing epm jobs (EPM only) (default true)
  -k, --task string             gulp task to be ran (overrides package.json; forces --type manual)
  -t, --type string             app type paradigm to be used for deployment (overrides package.) (default "mint")
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -n, --num int          container number (default 1)
  -v, --verbose          verbose output
```

## See Also

* [eris contracts](/docs/documentation/cli/0.11.0/eris_contracts/)	 - Deploy, Test, and Manage Your Smart Contracts.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.0/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.0/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.0/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.0/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.0/services_specification/)

