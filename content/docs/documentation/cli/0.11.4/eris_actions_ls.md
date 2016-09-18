---

layout:     documentation
title:      "Documentation | eris:cli | eris actions ls"

---

# eris actions ls

List known action definition files.

## Synopsis

List known action definition files.

The --json flag dumps the known definition file information 
in the JSON format.

The -f flag specifies an alternate format for the list, using the syntax
of Go text templates. The struct passed to the Go template is this

  type Definition struct {
    Name       string       // action name
    Definition string       // definition file name
  }


```bash
eris actions ls
```

## Options

```
      --format string   alternate format for columnized output
      --json            machine readable output
  -k, --known           list all the action definition files that exist
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris actions](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/eris_actions/)	 - Manage and perform structured actions.

## Specifications

* [Actions Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/actions_specification/)
* [Chains Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/chains_specification/)
* [Contracts Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/contracts_specification/)
* [Motivation](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/motivation/)
* [Services Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/services_specification/)

