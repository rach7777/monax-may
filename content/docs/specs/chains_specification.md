---

type:   docs
layout: single
title: "Specifications | Chains Specification"

---

## Chains Specification

<div class="note">
	<em>Note: As of 2017, our product has been renamed from Eris to Monax. This documentation refers to an earlier version of the software prior to this name change (<= 0.16). Later versions of this documentation (=> 0.17) will change the <code>eris</code> command and <code>~/.eris</code> directory to <code>monax</code> and <code>~/.monax</code> respectively.</em>
</div>

Chains are defined in **chain definition files**. These reside on the host in `~/.eris/chains`.

Chain definition files may be formatted in any of the following formats:

* `json`
* `toml` (default)
* `yaml`

eris will marshal the following fields from chain definition files:

{{ insert_definition "chain_definition.go" "ChainDefinition" }}


## [<i class="fa fa-chevron-circle-left" aria-hidden="true"></i> All Specifications](/docs/specs/)
