---

type:   docs
layout: single
title:      "Explainer | Dual Integration"
excerpt:    "Putting the Contracts in Smart Contracts"
aliases:
    - /components/erislegal/
index_file: ""
menu:
  explainer:
    weight: 13

---

# Putting The Contracts in Smart Contracts

Smart contracts for industrial application are useful for automating many data-driven commercial relationships. Industrial smart contract applications must work in existing legal frameworks where those frameworks already exist, removing a degree of uncertainty in enforcement. In order to bridge the gap between existing electronic contracts law and blockchain smart contracts, Monax offers *dual integration*.

Dual integration is the process of integrating a specific legal contract (which can be built with any contract building system) into a specific smart contract running on a distributed data store such as Monax. This allows parties to use established dispute resolution processes in the jurisdiction(s) of choice while also using a smart contract as the primary mechanism for administering the data-driven interaction that attends to the agreement between the parties.

# Dual integration enables legal enforceability of smart contracts

The rationale behind dual integration is simple: smart contracts are necessarily limited because they are at core just scripts that function in a distributed data store. The pure code of a smart contract has a limited ability to "reach" outside the context of the data store to incorporate a legally-binding contractual understanding. Smart contracts are capable of being structured in a manner which would automatically administer a data-driven interaction and ensure harmony of the data set and legal framework in which the smart contracts reside (if they have permissions to do so). However, judges are unlikely, for the foreseeable future, to be able easily to resolve disputes stemming from smart contracts solely on the basis of their coded parameters (meaning without an integrated legal contract) without simply applying the commercial defaults for the agreement in the jurisdiction -- an end that is unlikely to reflect the intention of the parties to the agreement in question. Because of the limited reach and enforceability of smart contracts, we highly encourage all smart contract systems developers to utilize dual integration of some kind.

# Basic dual integration:

Deploy a smart contract

Reference the chainId and contractAddress of the deployed smart contract in the final draft of the real world contract.

Finalize the real world contract and find its digital fingerprint.

Send a transaction logging the checksum of the real world contract into the storage of the smart contract.


That's it. If those steps are followed then there will be a cryptographically-certain dual integration via incorporation by cross reference.


Once the dual integration process is finished the result will be a smart contract which references a specific fingerprint of a real world contract (this is called the hash of a file, or sometimes it is called the checksum of a file) and a real world contract which integrates the specific fingerprint of a smart contract (this utilizes the chainID of the distributed data store which the smart contract runs on as well as the contractAddress of the specific smart contract). This circular reference ensures -- to a cryptographic certainty -- that the specific file which contains the real world contract and the specific smart contract both properly reference one another.)

There will be multiple ways to achieve dual integration in smart contract systems. More complex smart contract iterations will involve law and code working in tandem to effect contractual intent. 

Monax has created a FOSS dual integration tool to get smart contract builders going. 