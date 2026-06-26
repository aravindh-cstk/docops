---
title: "[Data & Insights] - Lookalike Models and Audiences"
description: Overview of Lytics Lookalike Models and how to use them to build propensity models and predictive (lookalike) audiences.
url: https://www.contentstack.com/docs/data-and-insights/lookalike-models-and-audiences
product: Lytics
doc_type: overview
audience:
  - marketers
  - developers
version: current
last_updated: 2026-03-25
---

# [Data & Insights] - Lookalike Models and Audiences

This page explains what Lytics Lookalike Models are, how they work at a high level, and the kinds of marketing use cases they support. It’s intended for marketers and teams who want to use machine learning-driven propensity modeling and predictive audiences, and is most useful when you’re deciding how to apply Lookalike Models to acquisition, retention, or churn-related initiatives.

## Lookalike Models and Audiences

Lytics' Lookalike Models allow marketers to leverage Machine Learning to easily create powerful **propensity models** and **lookalike audiences**. Powered by modern machine learning techniques and our comprehensive model-building pipeline, Lytics' Lookalike Models make it easy for marketers to incorporate predictive data into their marketing initiatives with minimal effort.

Lytics' Lookalike Models are **propensity models** that can be used to predict the likelihood that a user/customer will perform a certain action. These models can be used to identify repeat customers, users likely to churn, etc. By leveraging the predictions outputted by Lytics' Lookalike Models, you can create Lookalike Audiences to accelerate your marketing use cases.

## Machine Learning at Your Fingertips

Creating a Lookalike Model is as simple as selecting a **Target** and **Source** audience, to drive users from the source to the target (think [unknown --> known], [1-time purchaser --> repeat purchaser], etc). Once configured, Lytics will train a model based on the data accessible on user profiles, and output meaningful insights and predictions to help you grow your target audience.

Some common use cases for Lookalike Models include:
- **Unknown to Known**: among my unknown users, find users who are likely to sign up for an email
- **Expand Reach**: among my users who’ve purchased one item, find users who are likely to become repeat purchasers
- **Churn Prevention**: find customers who are at risk of churning

## Built by Data Scientists, for Marketers

Lytics' Lookalike Models incorporate modern techniques to ensure your models outperform traditional marketing methods. When building models, Lytics applies feature-reduction techniques and trains a set of Random Forests and Logistic Regression models, followed by a suite of model-tuning and cross-validation to determine the best configuration and hyper-parameters.

Unlike traditional statistical modeling approaches, Lytics Lookalike Models update user scores in real-time, so you can start targeting users not only when the model is built, but also as their behavior changes or new users are added. This means that a prediction for a user will update after every event (ie: page click, email open) which helps ensure that you are targeting the best users. Rather than using a static list, predictive Audiences (Lookalike Audiences) built from Lookalike Models provide a dynamic pool of users that will respond best when they are ready for ads or other marketing messages. You can also adjust your targeting criteria to make the best tradeoffs between reach and accuracy to maximize your marketing budgets.

Lytics also provides robust APIs for Lookalike Models, so your engineering team can quickly create and test models via the Lytics API.

## Resources

- [Getting Started](https://docs.lytics.com/docs/getting-started-1)
- [Building Lookalike Models](https://docs.lytics.com/docs/building-lookalike-models)
- [Evaluating Lookalike Models](https://docs.lytics.com/docs/evaluating-lookalike-models)
- [Creating Predictive Audiences](https://docs.lytics.com/docs/creating-predictive-audiences)
- [Improving your Lookalike Models](https://docs.lytics.com/docs/improving-lookalike-models)
- [Python Notebook](https://colab.research.google.com/drive/1pULreGdOr2o6whiyUA_mBwm6JPQcoxbm#scrollTo=A6_Wu1x-speD)

## Common questions

**How do Lookalike Models relate to Lookalike Audiences?**  
Lookalike Models output predictions (propensity scores), and those predictions can be used to create Lookalike Audiences for targeting.

**What do I need to configure to create a Lookalike Model?**  
You select a **Target** and **Source** audience, and Lytics trains a model using data accessible on user profiles.

**Do Lookalike Model scores update over time?**  
Yes—user scores update in real-time, and a prediction for a user will update after every event (ie: page click, email open).

**Where can I find next steps for implementation details?**  
Use the links in the **Resources** section, such as *Building Lookalike Models*, *Evaluating Lookalike Models*, and *Creating Predictive Audiences*.