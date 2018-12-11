---

# Pretty normal stuff
date:      2018-12-11T00:00:00Z
title:     "How to Play Marmota Prime"
author:    "Rachel Davidson, Senior Marketing Associate"

# excerpt is used for the text below the title when we share and also is the summary of the post on https://monax.io/blog
excerpt:   "Learn how to play Marmota Prime."

# this image should be stored in /content/blog/images/YEAR/. It will appear as a thumbnail on any listings,
# as well as at the top of the post itself
thumbnail: game_screenshot.png

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
{{< image_blog "game_screenshot.png" >}}

<!-- if this article is part of a series, related articles will automatically appear here -->
{{< blog_series >}}

<!-- Content markdown here - first title on page is auto generated from title in frontmatter -->
## About the Game

- Marmota Prime is a daily, free blockchain-based guessing game designed to showcase the tools we’ve been building here at MonaxHQ.

- Players compete in daily rounds to guess the mean temperature of a designated world city in a 24 hour time window each day. 

- The chosen city each day will be revealed in a tweet by @marmotaprime at 12:00pm UTC / 07:00am ET after which players can then cast their guess for the daily round. 

- Your participation in Marmota Prime will help some kids who could use a smile. 


- Players earn varying points for guessing correctly or close to the actual result during each daily game, but also for other behavior, e.g. inviting others to join the game and upon the invitees placing predictions.

- Players earn points daily, which will accumulate to produce a weekly winner. We have decided that the prizes will be a donation in kind to a selection of kids’ charities - for games played pre-christmas the winners will be given a chouce of causes and Monax will make the donations on their behalf. For games played after Christmas we will be making a donation of cuddly marmot toys (why of course!) to kids hospitals near our offices in Edinburgh and New York (the winner of each round gets to choose which city they would like the toys to go to). 

- At the resolution of each round, the [Wolfram Alpha](https://www.wolframalpha.com) API is used as an oracle to  retrieve the actual mean temperature and the result and prediction data, both recorded on a blockchain backend, are used to determine how points are distributed among the participants.

## Legal Agreements

The game is backed and operated by legal agreements on the Agreements Network:

- The Terms of Service (ToS) each player accepts when signing up for the game is recorded as an Active Agreements signed by Monax and the player.
 
- Each game is represented as a legal Active Agreements binding Monax to perform the calculations based on the defined game rules and fulfill obligations to the winners of the different rounds. This agreement further contains a process configuration which supports the execution of the game by controlling its timeline, thus being part of the legal agreement as much as the data itself.

## Sign-up

The unregistered player arrives on the game website and decides to participate in the daily game. The player can use a “Register” button or click on a button to enter a prediction for the current game. The player is then informed that they needs to register and is redirected to the registration page. Signing up via email/password results in an activation email. Social login is also an option. In either case the user needs to accept the Terms of Service (ToS) represented as Active Agreement between the user and Monax. In case of an activation email, clicking the link in the email opens a success screen and a link to “proceed to the game”. Social media login leads directly to the game landing page after confirming the setup.

## Gameplay

The player arrives on the game site and logs in. Upon choosing to place a prediction, the player is transitioned to a screen where they are presented with the current challenge: to enter a mean temperature for a designated city and time window. Afterwards, the player is directed back to the game landing page where they can see the information about the running game as well as the prediction placed by the player.
After a game concludes, the player will be notified to check back and/or if they have won. The notification also informs the player about any points earned in this round and invites to check the the player’s position in the weekly / total ranking.


## Game Rules

- A daily game challenge consists of a 24hr window during which predictions can be entered.

- One prediction per user per game.

- The prediction is about the mean temperature of a given city for a 24hr period in the future, e.g. “Predict the mean temperature in Sidney, Australia, during the time period 3 pm, Dec. 24th - 3pm, Dec. 25th.”

- This prediction period starts during a game period, but does not 100% match the game period. This creates a situation of higher uncertainty for predictions placed at the beginning of a game window which will be rewarded with a higher point weight. A linear weight function is applied that decreases points earned the later a prediction is placed in the game challenge. (Example below)

- A rounded down gaussian function is used to distribute points for participants that are close to the actual temperature determined by the oracle
There may be weekly and final winners with an equal amount of points. To resolve a tie, the player with the lowest number of predictions is favored, i.e. two players having an equal amount of points, but one having participated in less games than the other, the player with less games wins.

- If the number of played games is also equal, then the player who placed predictions earlier is favored to break the tie.

## Example Game:

- Game is posted on Dec. 24th 12:00 pm noon. Predictions can be placed until Dec. 25th 12:00 pm noon.

- Challenge: “Predict the mean temperature in Sidney, Australia, for the time period Dec. 24th 5 pm - Dec. 25th 5 pm”
 
{{< image_blog "game_one.png" >}}

- Point weights for predictions placed during the game period. The weights serve the purpose of rewarding early prediction that deal with higher uncertainty. The later in the game a prediction is placed, the easier it is to predict, because the prediction period has already started and a mean temperature has started to emerge.

{{< image_blog "game_two.png" >}}

Points earned for prediction correctness:

- 100% correct = 100 points
Any deviation from the actual result is determined by a Gaussian distribution (bell curve) with a standard deviation of 2.5 degrees.

Prediction examples:

{{< image_blog "game_three.png" >}}

**Actual Result determined from Wolfram Alpha oracle after the prediction window ends: 75 degrees**

Points after this game is resolved:

- Formula: Points from Gaussian distribution * weight when prediction was placed

{{< image_blog "game_four.png" >}}

## Architecture / Technical Specifications

- Timer/CRON job starts a (daily or otherwise scheduled) game
- Starting a new game consists of:
- Picking a city and prediction period from the list of predetermined cities
- Creating an agreement from an archetype and populating it with parameters
- Monax (Org) signs the agreement 
- Starting the formation and execution processes for the active agreement.

The agreement and process do not actively calculate the winner, but they control the timeline of a game and record all evidence that allows the verification of the correct function of the game logic that determines the points for participants.

## Predictions Specification

- Each prediction is entered via a REST API and recorded as a JSON object in a HOARD file.
- The hash of this file is updated in the agreement on the blockchain.
- After placing a prediction, the user is given a link agreement where they can verify that the HOARD file reference is updated.
- The user also receives a link to the HOARD file (via the agreement) to verify that the prediction is recorded correctly.
- The HOARD file by default is encrypted, but the API provides access to this file for users who already have placed a predict

{{< image_blog "game_five.png" >}}

## Agreement Specification

Agreement Parameters:

- Operator : Signatory (Monax)
- Round Start: Timestamp
- Round End: Timestamp
- Mean Temperature Start : Timestamp
- Mean Temperature End: Timestamp
- Location: String
- Predictions Hash : string (Hoard file reference)
- Predictions Access Key: string
- Result Temperature : Number (stores Wolfram result)

## Process Specification

{{< image_blog "game_six.png" >}}

Explanation:

- While the game is open, the supporting legal process is stopped in the “Close Game Period” activity. Only in this state is it possible to update the file hash referencing the entered predictions. I.e. when Monax as the operator completes this task, the reference to the file containing all the predictions for the game can no longer be changed.
- A “Wait for Prediction Period Close” activity will further block the process to wait until the end of the prediction window is reached.
The “Query Prediction Result” activity invokes the Wolfram Alpha oracle to retrieve and store the actual answer to the predictions.
Finally, the “Trigger Result Calculations” activity sends out an event that kicks of the calculation of how points are to be distributed based on the predictions and the result recorded in the process.

Any questions, please email contact@monax.io - HAVE FUN!