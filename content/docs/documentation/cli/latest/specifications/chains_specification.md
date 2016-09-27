---

layout: single
type: docs
title: "Documentation | Command Line Interface | Chains Specification"

---

# Chains Specification

Chains are defined in **chain definition files**. These reside on the host in `~/.eris/chains`.

Chain definition files may be formatted in any of the following formats:

* `json`
* `toml` (default)
* `yaml`

eris will marshal the following fields from chain definition files:

```go
type ChainDefinition struct {
	// name of the chain
	Name string `json:"name" yaml:"name" toml:"name"`
	// chain_id of the chain is in definitions/chain/.go

	// type of the chain
	ChainType string `mapstructure:"chain_type" json:"chain_type" yaml:"chain_type" toml:"chain_type"`

	// same fields as in the Service Struct/Service Specification
	Service      *Service      `json:"service,omitempty" yaml:"service,omitempty" toml:"service,omitempty"`
	Chain        *Chain        `json:"chain,omitempty" yaml:"chain,omitempty" toml:"chain,omitempty"`
	Dependencies *Dependencies `json:"dependencies,omitempty" yaml:"dependencies,omitempty" toml:"dependencies,omitempty"`
	Maintainer   *Maintainer   `json:"maintainer,omitempty" yaml:"maintainer,omitempty" toml:"maintainer,omitempty"`
	Location     *Location     `json:"location,omitempty" yaml:"location,omitempty" toml:"location,omitempty"`
	Machine      *Machine      `json:"machine,omitempty" yaml:"machine,omitempty" toml:"machine,omitempty"`
	Operations   *Operation
}
```


## Commands

* [eris](/docs/documentation/cli/0.12.0-rc3/eris/)

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

