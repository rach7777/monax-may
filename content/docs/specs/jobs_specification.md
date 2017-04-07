---

type:   docs
layout: single
title: "Specifications | Jobs Specification"

---

## Jobs Specification

<div class="note">
	<em>Note: As of 2017, our product has been renamed from Eris to Monax. This documentation refers to an earlier version of the software prior to this name change (<= 0.16). Later versions of this documentation (=> 0.17) will change the <code>eris</code> command and <code>~/.eris</code> directory to <code>monax</code> and <code>~/.monax</code> respectively.</em>
</div>

Jobs are defined in **job definition files**.

Jobs definition files are formatted in `yaml` and default file is `epm.yaml`.

Examples of job definition files are available in the [jobs fixtures directory](https://github.com/monax/cli/tree/master/tests/jobs_fixtures).

Each job will perform its required action and then it will save the result of its job in a variable which can be utilized by jobs later in the sequence using jobs' [variable specification](/docs/specs/variable_specification).

## Job Types

Jobs are performed as sequentially based on the order they are given in the jobs definition file. By default, `monax pkgs do` will perform the entire sequence of jobs which has been outlined in a given jobs file.

**Note:** This page is currently under construction, stay tuned! Refer to the `epm.yaml` of the various jobs fixtures noted above.


## [<i class="fa fa-chevron-circle-left" aria-hidden="true"></i> All Specifications](/docs/specs/)
