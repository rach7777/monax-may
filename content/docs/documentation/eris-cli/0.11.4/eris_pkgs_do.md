---

layout:     documentation
title:      "Documentation | eris:cli | eris pkgs do"

---

# eris pkgs do

Deploy or test a package of smart contracts to a chain.

## Synopsis

Deploy or test a package of smart contracts to a chain.

eris pkgs do will perform the required functionality included
in a package definition file.

```bash
eris pkgs do
```

## Options

```
  -b, --abi-path string         path to the abi directory EPM should use when saving ABIs after the compile process (default "./abi")
  -a, --address string          default address to use; operates the same way as the [account] job, only before the epm file is ran
  -y, --amount string           default amount to use (default "9999")
  -c, --chain string            chain to be used for deployment
  -l, --compiler string         <ip:port> of compiler which EPM should use (default "https://compilers.eris.industries:10114")
  -p, --contracts-path string   path to the contracts EPM should use (default "./contracts")
  -i, --dir string              root directory of app (will use $pwd by default)
  -w, --fee string              default fee to use (default "1234")
  -f, --file string             path to package file which EPM should use (default "./epm.yaml")
  -g, --gas string              default gas to use; can be overridden for any single job (default "1111111111")
  -o, --output string           results output type
  -r, --rm                      remove containers after stopping (default true)
  -x, --rm-data                 remove artifacts from host (default true)
  -s, --services value          comma separated list of services to start (default [])
  -e, --set value               default sets to use; operates the same way as the [set] jobs, only before the epm file is ran (and after default address (default [])
  -u, --summary                 output a table summarizing epm jobs (default true)
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris pkgs](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/eris_pkgs/)	 - Deploy, Test, and Manage Your Smart Contract Packages.

## Specifications

* [Actions Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/actions_specification/)
* [Chains Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/chains_specification/)
* [Contracts Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/contracts_specification/)
* [Motivation](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/motivation/)
* [Services Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/services_specification/)

