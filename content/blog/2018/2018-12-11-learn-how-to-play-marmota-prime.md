---

# Pretty normal stuff
date:      2018-12-11T00:00:00Z
title:     "How to Play Marmota Prime"
author:    "Rachel Davidson, Senior Marketing Associate"

# excerpt is used for the text below the title when we share and also is the summary of the post on https://monax.io/blog
excerpt:   "Learn how to play Marmota Prime."

# this image should be stored in /content/blog/images/YEAR/. It will appear as a thumbnail on any listings,
# as well as at the top of the post itself
thumbnail: marmota_prime_logo.png

# check the categories on the existing blog. should only have ONE
categories:
  - monax

# tags should be meaningful for your blog. if you want this article to show on a 'use case' page, you can use
# the following TAGS -  'fleetleasing' 'contentcreators' 'lawyers' or 'corporate'
tags:
  - legal products
  - agreements network
  - monax

# if this post is part of a series, uncomment the information below. The 'article series' box
# will only display if there is more than one article in the series. 'id', 'number' and 'about' all must be present.
# 'id' is used to identify the series. It's not displayed to the user.
# series:
#   id: active-agreement-samples
#   number: 1
#   about: "This is a series of posts where the marmots will be outlining how the Monax Platform and the Agreements Network can be used in harmony to create the legal products of the future."

# set draft to 'false' when you're ready to publish
draft: false

# used when using the shortcode utm_link in a blog post to another
# the campaign generally should match the category above
utm:
  source: "website"
  medium: "blog"
  campaign: "monax"

---

<!-- In general the filename below should match thumbnail category above -->
{{< image_blog "marmota_prime_logo.png" >}}

<!-- if this article is part of a series, related articles will automatically appear here -->
{{< blog_series >}}

<!-- Content markdown here - first title on page is auto generated from title in frontmatter -->
## About the Game

- Marmota Prime is a daily, free blockchain-based guessing game designed to showcase the tools we’ve been building here at MonaxHQ.

- Contestants compete in daily rounds to guess the mean temperature of a designated world city in a 24 hour time window each day. 

- The chosen city each day will be revealed in a tweet by @marmotaprime at 12:00pm UTC / 07:00am ET after which contestants can then cast their guess for the daily round. 

- Your participation in Marmota Prime will help some kids who could use a smile. 


- Contestants earn varying points for guessing correctly or close to the actual result during each daily game, but also for other behavior, e.g. inviting others to join the game and upon the invitees placing predictions.

- Contestants earn points daily, which will accumulate to produce a weekly winner. We have decided that the prizes will be a donation in kind to a selection of kids’ charities - for games played pre-christmas the winners will be given a chouce of causes and Monax will make the donations on their behalf. For games played after Christmas we will be making a donation of cuddly marmot toys (why of course!) to kids hospitals near our offices in Edinburgh and New York (the winner of each round gets to choose which city they would like the toys to go to). 

- At the resolution of each round, the [Wolfram Alpha](https://www.wolframalpha.com) API is used as an oracle to  retrieve the actual mean temperature and the result and prediction data, both recorded on a blockchain backend, are used to determine how points are distributed among the participants.

## Legal Agreements

The game is backed and operated by legal agreements on the [Agreements Network](https://agreements.network):

- The *Terms of Service* (ToS) are an agreement that each contestant accepts when signing up for the game. This  is recorded as an Active Agreements signed by Monax and the contestant. It covers the terms and the duration of the game from its start till its conclusion on Groundhog Day 2019.
 
- Each game is represented as a legal Active Agreement binding Monax to perform the calculations based on the defined game rules and fulfill obligations to the winners of the different rounds. This agreement further contains a process configuration which supports the execution of the game by controlling its timeline, thus making the process configuration as much an intrinsic part of the legal agreement as the data itself.

## Sign-up

The unregistered contestant arrives on the game website and decides to participate in the daily game. The contestant can use a “Register” button or click on a button to enter a prediction for the current game. The contestant is then informed that they needs to register and is redirected to the registration page. Signing up via email/password results in an activation email. Social login is also an option. In either case the user needs to accept the Terms of Service (ToS) represented as Active Agreement between the user and Monax. In case of an activation email, clicking the link in the email opens a success screen and a link to “proceed to the game”. Social media login leads directly to the game landing page after confirming the setup.

## Gameplay

The contestant arrives on the game site and logs in. Upon choosing to place a prediction, the contestant is transitioned to a screen where they are presented with the current challenge: to enter a mean temperature for a designated city and time window. Afterwards, the contestant is directed back to the game landing page where they can see the information about the running game as well as the prediction placed by the contestant.
After a game concludes, the contestant will be notified to check back and/or if they have won. The notification also informs the contestant about any points earned in this round and invites to check the the contestant’s position in the weekly / total ranking.


## Game Rules

- A daily challenge (round) consists of a 24hr window during which predictions can be entered.

- One prediction per user per round!

- The prediction is about the mean temperature of a given city for a 24hr period in the future, e.g. “Predict the mean temperature in Sidney, Australia, during the time period 3 pm, Dec. 24th - 3pm, Dec. 25th.”

- This prediction period starts during a round window, but does not 100% match the round. This creates a situation of higher uncertainty for predictions placed at the beginning of a round which will be rewarded with a higher point weight. A linear weight function is applied that decreases points earned the later a prediction is placed in the game challenge. (see [Example](#game-example) below)

- A rounded down gaussian function is used to distribute points for participants that are close to the actual temperature determined by the oracle.<br/>
There may be weekly and final winners with an equal amount of points. To resolve a tie, the contestant with the lowest number of predictions is favored, i.e. two contestants having an equal amount of points, but one having participated in less games than the other, the contestant with less games wins.

- If the number of played games is also equal, then the contestant who placed the first prediction earlier than the other is favored as the winner to break the tie.

## <a name="game-example">Example Round</a>:

- A game round is posted on Dec. 24th 12:00 pm noon UTC. Predictions can be placed until Dec. 25th 11:50 am UTC.

- Challenge: “Predict the mean temperature in Sidney, Australia, for the time period Dec. 24th 3 pm UTC - Dec. 25th 3 pm UTC”
 
{{< image_blog "game_one.png" >}}

- Between *Round Start* and *Round End* predictions are allowed to be submitted. The points for a prediction are calculated by using a Gaussian normal distribution (bell curve) with a standard deviation of 2.5 degrees. The most points that can be achieved are 100 points.

- On top of the achieved points for a prediction a weight is applied that ranges from 100% to 5%. These weights serve the purpose of rewarding early predictions that deal with higher uncertainty. The later in the game a prediction is placed, the easier it is to predict the mean temperature, because the prediction period has already started and data is available for the calculation, so the points are weighted down.
The weight decreases linearly by 5% every hour for the 20 hours before the *Mean Temperature End* is reached. In our example, the following weights are applied on top of scored points, depending at what time the prediction was recorded:

  - 12:00 UTC - 19:00 UTC: 100%
  - 19:00 UTC - 20:00 UTC: 95%
  - 20:00 UTC - 21:00 UTC: 90%
  - 21:00 UTC - 22:00 UTC: 85%
  - 22:00 UTC - 23:00 UTC: 80%
  - ...
  - 10:00 UTC - 11:00 UTC: 25%
  - 11:00 UTC - 11:50 UTC: 20%

Prediction examples:

| Contestant | Prediction | Time of Prediction |
|:-----------|:----------:|:------------------:|
| Casey      |    75 F    |      12:30 UTC     |
| Silas      |    72 F    |      14:30 UTC     |
| Rachel     |    80 F    |      16:15 UTC     |
| Adam       |    78 F    |      18:20 UTC     |
| Sam        |    73 F    |      20:45 UTC     |
| Mel        |    75 F    |      22:05 UTC     |
| Ommi       |    76 F    |      22:55 UTC     |

**Actual Result determined from Wolfram Alpha oracle after the mean temperature window ends: 75 degrees**

Ranking after this game is resolved:

- Formula: Points from Gaussian distribution * weight when prediction was placed

| Contestant | Final Points |   Formula  |
|:-----------|:------------:|:-----------|
| Casey      |      100     | 100 * 100% |
| Mel        |      80      | 100 * 80%  |
| Ommi       |      55      | 69 * 80%   |
| Sam        |      37      | 42 * 90%   |
| Silas      |      23      | 23 * 100%  |
| Adam       |      23      | 23 * 100%  |
| Rachel     |       5      | 5 * 100%   |

## Architecture of the game rounds

We're making use of the power of the [Agreements Network](https://agreements.network) for the overall control and flow of each game round. For every round, a new location is picked and the following steps are performed:

- An Active Agreement is created from a template (containing parameters, the legal prose, and BPMN process diagrams)
- The agreement parameters are populated for the current round (see [Agreement Specification](#agreement_specification))
- The processes for the agreement are started (see [Process Specification](#process_specification))

The agreement and process do not actively calculate the winner, but they control the timeline of a game and record all evidence that allows the verification of the correct function of the game logic that determines the points for participants. They therefore provide everything needed to prove an orderly execution of the game as stated in the terms.

## <a name="process_specification">Process Specification</a>

{{< image_blog "game-process-diagram.png" >}}

Explanation:

- While the round is open to receive predictions, the supporting legal process is stopped in the “Accept Predictions and Sign” activity. Only in this state is it possible to update the file hash referencing the entered predictions. I.e. when Monax as the operator completes this task, the reference to the file containing all the predictions for the game can no longer be changed.<br/>
Adding predictions to the file not only records the data, but also serves as the action of consenting to the terms of this round. This is why this activity is taking place in the *Formation Process* of the agreement.
When the end of the round cutoff is reached, Monax (in the operator role) counter-signs the agreement and completes the task. This locks in the hash of the predictions file and guarantees the basis for any point calculations.

- A “Wait for Weather Data” activity in the *Execution Process* of the agreement will add a 5 minute wait time before calling the weather oracle in order to make sure data from the weather station is present.

- The “Query Prediction Result” activity invokes the Wolfram Alpha oracle by passing the required parameters (location and mean temperature start/end) to it. The value is retrieved asynchronously and stored in the agreement at which point the activity completes.

- Finally, the “End Round” activity sends out an event that kicks off the calculation and distribution of points based on the predictions file and the temperature result recorded in the process.

## Predictions Specification

- Each prediction is entered via a REST API and recorded as a JSON object in a file that is stored in a distributed, content-addressable storage system.
- The hash of this file is updated in the agreement on the blockchain.
- After placing a prediction, the user is given a link agreement where they can verify that the HOARD file reference is updated.
- The user also receives a link to download the predictions file to verify that the prediction is recorded correctly.

{{< image_blog "game_five.png" >}}

## <a name="agreement_specification">Agreement Specification</a>

Agreement Parameters:

- Operator : Signatory (Monax)
- Round Start: Timestamp
- Round End: Timestamp
- Mean Temperature Start : Timestamp
- Mean Temperature End: Timestamp
- Location: String
- Predictions File : String (file reference, hash and access key)
- Result Temperature : String (stores Wolfram result)


Any questions, please email contact@monax.io - HAVE FUN!