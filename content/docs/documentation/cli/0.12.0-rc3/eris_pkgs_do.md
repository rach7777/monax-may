---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris pkgs do"

---

# eris pkgs do

Deploy Or Test A Package Of Smart Contracts To A Chain

## Usage

```bash
eris pkgs do
```

## Synopsis

deploy or test a package of smart contracts to a chain

[eris pkgs do] will perform the required functionality included
in a package definition file


## Options

```bash
  -b, --abi-path string         path to the abi directory Eris PM should use when saving ABIs after the compile process (default "./abi")
  -a, --address string          default address to use; operates the same way as the [account] job, only before the epm file is ran
  -y, --amount string           default amount to use (default "9999")
  -c, --chain string            chain to be used for deployment
      --chain-port string       chain rpc port (default "46657")
  -l, --compiler string         IP:PORT of compiler which Eris PM should use (default "https://compilers.eris.industries:10120")
  -p, --contracts-path string   path to the contracts Eris PM should use (default "./contracts")
  -i, --dir string              root directory of app (will use $pwd by default)
  -w, --fee string              default fee to use (default "1234")
  -f, --file string             path to package file which Eris PM should use (default "./epm.yaml")
  -g, --gas string              default gas to use; can be overridden for any single job (default "1111111111")
      --keys-port string        port for keys server (default "4767")
  -z, --local-compiler          use a local compiler service; overwrites anything added to compilers flag
  -o, --output string           results output type
  -t, --overwrite               overwrite jobs of the same name (default true)
  -r, --rm                      remove containers after stopping (default true)
  -x, --rm-data                 remove artifacts from host (default true)
  -s, --services value          comma separated list of services to start (default [])
  -e, --set value               default sets to use; operates the same way as the [set] jobs, only before the epm file is ran (and after default address (default [])
  -u, --summary                 output a table summarizing epm jobs (default true)
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris pkgs](/docs/documentation/cli/0.12.0-rc3/eris_pkgs/) - deploy, test, and manage your smart contract packages




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

