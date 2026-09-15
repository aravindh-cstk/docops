---
title: "Decision Engine"
description: "How Lytics ranks and optimizes experience delivery using Bayesian machine learning."
url: /lytics/decision-engine
uid: blt1a2bc16bd1ef9c9e
---

# Decision Engine

## Decision Engine

How Lytics ranks and optimizes experience delivery using Bayesian machine learning.

## Overview

The Lytics Decision Engine is a probabilistic recommendation system that determines which [Experiences](/docs/lytics/experiences) to deliver to each user and when. It uses Bayesian machine learning to rank experiences by predicted conversion probability, balancing exploration of new experiences with exploitation of known high-performers.

The Decision Engine powers several features:

-   **Experience Ranking**: Determines which experience a user is most likely to engage with.
-   **Delivery Optimization**: Predicts the optimal time to deliver a message to each individual user.
-   **Attribution**: Assigns conversion credit across multi-touch journeys.

## Experience Ranking

When a user is eligible for multiple experiences, the Decision Engine ranks them by predicted conversion probability using a Bayesian Bandit algorithm.

### How It Works

1.  **Prior Initialization**: Each experience starts with a Beta-Binomial prior distribution representing initial uncertainty about its conversion rate.
2.  **Outcome Tracking**: As users receive impressions and convert (or don't), the system records outcomes for each experience.
3.  **Posterior Calculation**: For a given user, the engine combines multiple sources of information:
    -   **Tag-level priors**: Conversion rates for experiences sharing the same tags.
    -   **Field-level priors**: Conversion rates conditioned on user attributes (e.g., behavioral scores, engagement levels).
    -   **Generic prior**: A baseline prior for experiences with limited data.
4.  **Probabilistic Ranking**: The engine draws random samples from each experience's posterior distribution and ranks by sample value. This naturally balances exploration and exploitation -- experiences with more uncertainty have wider distributions and occasionally rank highly even with lower average conversion rates.

### Orchestrated vs. Standalone Experiences

Experiences are categorized into two types for ranking purposes:

-   **Orchestrated**: Experiences that are part of a multi-stage journey (Goal). These are ranked separately and take priority.
-   **Standalone (Orphan)**: Independent experiences not part of a journey. These are ranked after orchestrated experiences.

This separation prevents journey-based experiences from being displaced by standalone campaigns and ensures users progress through their intended journey stages.

## Delivery Optimization

Delivery Optimization predicts the best time to send a message to each individual user. It uses historical interaction patterns to determine when a user is most likely to engage.

**Note:** Delivery Optimization is configured per-experience in the [Experience Editor](/docs/lytics/experiences). See the Configure Delivery step for details on enabling it.

### Decision Scores

The Decision Engine computes several scores for each user, keyed by interaction stream (e.g., email, web, SMS):

#### Needs Message Score

A value between 0 and 1 indicating how urgently a user should receive a message on a given channel.

The score increases as time since the user's last interaction grows, and is suppressed if the system predicts the user will interact again soon on their own. This prevents over-messaging users who are already actively engaged.

**Formula**:

-   **Points** accumulate proportional to how long it's been since the user's last interaction, relative to their typical inter-arrival window.
-   **Penalty** reduces the score if the predicted next organic interaction is imminent.

#### Next Event Prediction

Predicts when a user is likely to next interact with your brand on a given channel. The prediction includes:

-   **Lower bound**: Earliest expected interaction time
-   **Mid**: Most likely interaction time
-   **Upper bound**: Latest expected interaction time

These predictions are based on Bayesian models of the user's historical inter-arrival times (Poisson and Exponential process models).

#### Optimal Delivery Time

Two additional scores identify the best time to reach a user:

-   **Deliver Hour** (0-23): The hour of day when the user is most active on a given channel.
-   **Deliver Day** (0-6): The day of week when the user is most active.

These are computed by analyzing the distribution of the user's historical interactions across hours and days.

## Attribution Models

When experiences are part of a multi-stage journey, the Decision Engine uses attribution models to assign conversion credit across the experiences a user has encountered. This informs future ranking decisions.

| Model | Description |
| --- | --- |
| **Time Decay** | Assigns more credit to experiences closer in time to the conversion. Uses exponential decay with a 7-day half-life. This is the default model. |
| **Last Touch** | Assigns full credit to the experience immediately preceding the conversion. |
| **Linear** | Distributes credit equally across all experiences in the journey stage. |
| **None** | Uses direct experience-level metrics without cross-experience attribution. Used for standalone experiences. |

## Experience Prioritization

In addition to the algorithmic ranking from the Bayesian Bandit, experiences can be manually prioritized. Prioritization rules define tiers and ordering that the Decision Engine respects when ranking candidates.

Experience candidates are filtered based on:

-   **Vehicle**: The delivery channel (web, email, ads, etc.)
-   **Target Segment**: The audience the experience is aimed at
-   **URL/Page matching**: For web experiences, which pages the experience appears on
-   **Schedule**: Date ranges and activation status

## How Scores Are Used

Decision scores are computed and stored on each user profile. They can be used in:

-   **Workflow stages**: To control when users are exported to downstream tools.
-   **Audience definitions**: To create segments based on engagement urgency (e.g., users with a high needs\\\_message score).
-   **API queries**: To retrieve real-time scoring for individual users.

The scores are available as user profile fields:

| Field | Type | Description |
| --- | --- | --- |
| ly\_needs\_message | map\\\[string\]float64 | Needs message score by stream |
| ly\_next\_event | map\\\[string\]time | Predicted next event by stream |
