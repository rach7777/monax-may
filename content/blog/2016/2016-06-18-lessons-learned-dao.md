---
author: Monax
categories:
- programming
comments: true
date: 2016-06-18T00:00:00Z
excerpt: Core Solidity developer explains what not to do when creating a DAO
meta: true
published: true
tags:
- solidity
- DAO
- theDAO
- smart-contracts
- ethereum
thumbnail: 2016-06-18-doug-dao.png
title: Lessons on Preparation for Disaster from the DAO
# url: /blog/2016/06/18/lessons-learned-dao/
slug: lessons-learned-dao
aliases:
  - /2016/06/18/fact-patterns-dao-legal-engineering

---

Much has been written about the fall of the DAO in the past 24 hours and there has been a lot of talk of what happened and what didn't happen that should have happened. I'm not going to talk about how it happened. There are many colorful and wonderful pieces explaining the attack, one of which I recommend reading for this particular instance is [Peter Vessenes's](http://vessenes.com/deconstructing-thedao-attack-a-brief-code-tour/)
(And seriously subscribe to that blog if you're developing smart contracts because that dude comes up with amazing and critical stuff that every solidity programmer should be made aware of).

I am instead writing today to talk about how the DAO should have been written instead to prevent not only this security flaw, but any other security flaws inherent in it. As one of the core developers of the Solidity programming language itself, I also will be discussing some ideas from the team and the Ethereum community to prevent problems like the Reentry attack from occurring on a scale like this again.

### Back to Basics
Be very careful with how you write your code, and always test it first, and thoroughly. Unlike normal code, once this bugs up, it's there permanently, unless you put in the ability to destroy the contract. The problem that caused this whole spat was one line of code. That's right. ONE. LINE. OF. CODE.

Here is the code that destroyed the DAO.

```javascript
function payOut(address _recipient, uint _amount) returns (bool) {
        if (msg.sender != owner || msg.value > 0 || (payOwnerOnly && _recipient != owner))
            throw;
        if (_recipient.call.value(_amount)()) {
            PayOut(_recipient, _amount);
            return true;
        } else {
            return false;
        }
    }
```
and

```javascript
if (!rewardAccount.payOut(_account, reward))
    throw;
paidOut[_account] += reward;
return true;
```

note where the reward is added enabling someone to recursively drain the DAO with multiple calls. This is accidentally mitigated by using msg.sender.send(), but the slock.it team decided to use call here...a much lower level function that does not put a gas stipend down, enabling a user to call with as much gas as they need from a contract to recursively call the paidOut function. But really, all of this is solved if the line containing:

```paidOut[_account] += reward;```

is simply moved above the payOut function. Crazy I know. Key takeaways from this:

>> **1. Make sure you're careful where you place your sends.**
>> **2. Don't trust and interact with unknown contracts. If you can't predict what it will do it's very hard to design for it.**

But what about security faults we don't know about yet? What do we do about those. The answer to this question is two fold. It revolves around modular design and smart decentralized decision making.

### Modular Contract Development

The Ethereum community has recently been evoking a trusted hero of my time when it comes to this tragedy: Captain Hindsight.

{{< image_blog "2016-06-18-captainHindSight.jpg" >}}

With his trusty companions Shoulda, Coulda and Woulda, he swiftly points out that the DAO is far too complex and should have been made with easier and simpler code as well as in a more modular fashion. This would have made the code easier to update as well as audit. Drawing from lessons in the Five Types Model, let's explore the usage of a DOUG or a Decentralized Organization Upgrade Guy.

Using a DOUG, we would be able to dynamically include more and even reduce the number of contracts, so long as we kept it around a handful of core modules. This would make the code very updateable and easily so. Here's a small example of how it might be designed.

``` javascript
contract DOUG_Of_Da_DAO {
    // our core modules live here, mapped to a string for ease of update
    mapping(string => address) coreModules;
    // this is all the dependencies required of our core module.
    // Note that you could combine this with the above to create a triple mapping,
    // but for ease of documentation I am separating it.
    mapping(address => mapping(string => address)) moduleDependencies;

    function updateCoreModule(string moduleName, address moduleAddress) {
        coreModules[moduleName] = moduleAddress;
    }

    function updateDependencyModule(string coreModuleName, string dependencyModuleName, address dependencyModuleAddress) {
        moduleDependencies[coreModules[coreModuleName]][dependencyModuleName] = dependencyModuleAddress;
    }

}
```

You may be asking "What's to stop someone from maliciously updating the DAO then to whatever they want it to be". I have purposely left that out of here so that I can tie this into my next bit...starting now.

### Executive Action

One of the reasons why the United States and many other democratic institutions have an executive branch is for the reason that democracy overall moves far too slowly to respond in moments of crisis.
Seeing this is also why it becomes so tragic for the DAO, because the DAO team had been made aware of the bug and had actually gone in and FIXED their code.
However because there was no executive to decidedly update their code immediately (would have required a vote, which takes quite a sum of time to gather), the attacker was able to jump on the opportunity.

`(Side Note: if you ever see a bug that critical, don't leave it out in the public eye as a white hat, please report it privately if you can. Resort to public disclosure as a last resort if the developer is being an arrogant tool).`

All forms of security etiquette aside, had the DAO given a group of democratically elected devs executive ability selected in round robin fashion to update the addresses of certain portions of the code in situations like these, this likely would have never happened and been fixed immediately. Let's go back to our DOUG:

``` javascript
contract DOUG_Of_Da_DAO {
    // our core modules live here, mapped to a string for ease of update
    mapping(string => address) coreModules;
    // this is all the dependencies required of our core module.
    // Note that you could combine this with the above to create a triple mapping,
    // but for ease of documentation I am separating it.
    mapping(address => mapping(string => address)) moduleDependencies;

    function updateCoreModule(string moduleName, address moduleAddress) {
        coreModules[moduleName] = moduleAddress;
    }

    function updateDependencyModule(string coreModuleName, string dependencyModuleName, address dependencyModuleAddress) {
        moduleDependencies[coreModules[coreModuleName]][dependencyModuleName] = dependencyModuleAddress;
    }

}
```

Suppose we wanted to implement a decentralized security executive. We need to have it created from a vote weighed by the DAOs stakeholders, and we also need to make sure that the security executive cannot maliciously take over the DAO and keep them in power. While we won't go into all of the necessary things (stake deposits that suicide should they make a decision the community dislikes).

The following is an example of what we would want then in a very centralized fashion. Keep in mind you could get creative with this and make it so that the decision to update is controlled by an odd number of people so that there will always be a resounding yes or no agreement, complete with incentives to make sure that the security people vote. That said it's a little complex for our purposes, so we'll stick with the current way to show a framework for how to do this.

``` javascript

contract balanceSheet {
    mapping(address => uint) public balances;
    function getBalance() returns (uint balance) {
        balance = balances[msg.sender];
    }
}

contract securityVote { //holds long term information that will likely not need to change immediately
    //list of modules that security executives are not allowed to update
    address[] blacklist;
    //the current head honcho
    address public currentSecurityExecutive;
    balanceSheet users;
    struct voteNextExec { //could be done with some form of iterable mapping, but this was easier for our purposes
        mapping(address => bool) initialized;
        mapping(address => uint) index;
        mapping(address => bool) voted;
        uint totalCandidates;
        address[] execs;
        uint[] voteWeight;
    }
    voteNextExec vote;
    //time limit to vote in an exec
    uint constant timeLimit = 1 weeks;
    //two key modules that security execs should not be able to update,
    //this current module, and the balance sheet of all user tokens.
    //we will trust the creator in the interim to be a decent security executive but then leave it to the voters.
    function securityVote(address balanceSheetAddr) {
        blacklist.push(balanceSheetAddr);
        blacklist.push(address(this));
        currentSecurityExecutive = msg.sender;
        users = balanceSheet(balanceSheetAddr);
    }

    function voteForSecurityExec(address desired) {
        if (vote.voted[msg.sender]) //if already voted, kick them out
            throw;
        if (vote.initialized[desired]) { //add more to balance
            vote.voted[msg.sender] = true;
            vote.voteWeight[vote.index[desired]] += users.getBalance();
        }
        else { //initialize new candidate
            vote.voted[msg.sender] = true;
            vote.index[desired] = vote.totalCandidates++;
            vote.execs[vote.totalCandidates] = desired;
            vote.voteWeight[vote.index[desired]] = users.getBalance();
        }
    }
}

contract DOUG_Of_Da_DAO {

    address currentSecurityExecutive;
    securityVote currentSecurityConsensus;

    function DOUG_Of_Da_DAO(address securityAddr) {
        currentSecurityConsensus = securityVote(securityAddr);
    }

    modifier currentSecurityGuy() { //only our security guy can update contracts
        if (currentSecurityConsensus.currentSecurityExecutive() != msg.sender)
            throw;
        _
    }
    // our core modules live here, mapped to a string for ease of update
    mapping(string => address) coreModules;
    // this is all the dependencies required of our core module.
    // Note that you could combine this with the above to create a triple mapping,
    // but for ease of documentation I am separating it.
    mapping(address => mapping(string => address)) moduleDependencies;

    function updateCoreModule(string moduleName, address moduleAddress) currentSecurityGuy() {
        coreModules[moduleName] = moduleAddress;
    }

    function updateDependencyModule(string coreModuleName, string dependencyModuleName, address dependencyModuleAddress) currentSecurityGuy() {
        moduleDependencies[coreModules[coreModuleName]][dependencyModuleName] = dependencyModuleAddress;
    }

}
```

### What Solidity Is Doing About This

Currently we are talking about ways to minimize reentrancy attack. There is an issue up in the Solidity github that discusses a suggestion from [Micah Zoltu](https://github.com/ethereum/solidity/issues/662) to add a default boolean in all external calls that prevents recursive calls. For people who know what they're doing and want recursive calls, the default mechanism could be overridden by people who know what they are doing with a universal modifier named "reentrant".

Beyond that, Christian and I are working tirelessly to bring you new features for Solidity as well as better documentation of best practices whenever you are coding smart contracts. We hope that this will be the beginning of NASA like documentation of attacks and what and what not to do whenever coding in Solidity.
