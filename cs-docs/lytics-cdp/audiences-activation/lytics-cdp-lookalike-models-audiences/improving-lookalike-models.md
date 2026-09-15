---
title: "Improving Lookalike Models"
description: "Building effective Lookalike Models can be an iterative process. To help with these iterations, Lytics provides diagnostic messages that identify ways to…"
url: /lytics/improving-lookalike-models
uid: blt4444f66320b1c539
---

# Improving Lookalike Models

## Improving Lookalike Models

## Interpreting Model Messages

Building effective Lookalike Models can be an iterative process. To help with these iterations, Lytics provides diagnostic messages that identify ways to improve your model performance.

In general, these model messages can help you both select the best source and target audiences for your model and create the best predictive Audience from your model.

### Selecting the Right Source and Target Audience

Most of the time, Lookalike Models are built to drive users toward conversion. This flow should be reflected in how you consider selecting the right source and target audiences to build your model.

-   **Source Audience**: the group of users to reach with your marketing messages, such as “unknown users.”
-   **Target Audience**: the group of users that represents the desired outcome for users in the source audience, such as “users with email addresses.”

When defining your source and target audiences, try selecting audiences that are at adjacent stages in your customer lifecycle, rather than at divergent ends of your funnel (like Brand New Visitors and Multi-purchase Premium Customers). The diagram below represents audience similarity on a spectrum of model performance.

![Lytics Lookalike Models Audience Selection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaa210ce4a7426fa5/60cef8dabc322c3e86d90910/Lytics_Lookalike_Models_Audience_Selection.png)

Consider the following examples of audiences with different levels of similarity.

-   **Overlapping Audiences** (Bad)
    -   _audience multi-year subscriber_ → _audience with high loyalty_
    -   _unknown audience_ → _audience with no purchases_
-   **Divergent Audiences** (Bad)
    -   _unknown audience_ → _audience with newsletter signup and single purchase_
    -   _anonymous audience_ → _audience with multiple purchases_
-   **Adjacent Audiences** (Good)
    -   _unknown audience_ → _audience with email_
    -   _known audience of single purchases_ → _known audience with multiple purchases_

If you’ve selected divergent or overlapping audiences in your model, you will see diagnostic messages to guide you to select audiences that are more adjacent.

### Adjusting the Decision Threshold

Most Predictive Audiences are built by identifying users in the source audience who have a high model score. This "high score" is called the **Decision Threshold**, and in most cases is around 0.5. To adjust the reach of the audience you’re building, you might consider using a different decision threshold.

-   Use a lower decision threshold to reach more users in the source audience.
-   Use a higher decision threshold to be more accurate but reach less users in the source audience.

Diagnostic messages may suggest creating audiences using different decision thresholds, but you are always free to make the decision threshold whatever makes the most sense to generate a Predictive Audience of the right size.

### Improving Unhealthy Models

Most of the time, diagnostic messages for unhealthy models will suggest building a model with different source or target audiences. Occasionally, you might see a diagnostic message suggesting that a model should be built with different features.

> _The model could not find sufficient signal in the features provided. Try either using Auto Tune or providing additional features._

In these cases, the underlying model didn't have enough of a signal in the data provided to be able to predict target behavior.

Imagine that you're an online retailer trying to build Lookalike Models for multi-purchasers, but you build a model that doesn't have any purchase data. Or you want to build an email churn model, but you don't have any email data in your model. In these cases, regardless of how your source and target audiences are constructed, your model would be missing the underlying signal required to make a successful model.

You could either manually select additional fields to include in the Model Builder, or you can use the **Auto Tune** option on the model to have the machine attempt to automatically identify the best field candidates to include in the model.

## Accuracy vs. Reach

All Lookalike Models try to balance a trade-off between accuracy and reach, which are two of the most important indicators of how your model will perform.

-   **Accuracy**: the precision of a Lookalike Model’s predictions.
-   **Reach**: the relative size of a Lookalike Model’s addressable audience.

As a general principle, you cannot optimize for both accuracy and reach. Deciding which one to focus on will depend on your marketing use case.

### Optimize for Accuracy

Optimizing your Lookalike Model for accuracy is typically used for targeting later stages of your funnel. This enables you to be more precise, with the trade-off of reaching fewer users. By identifying users who are most likely to convert, you can optimize their high-touch experiences to drive engagement, improve conversion rates, and increase customer lifetime value.

![High Accuracy ML Model Screenshot](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf4879c86626731cf/b423bc99bdc681be93dc94c9/Screen_Shot_2022-03-17_at_10.34.41_AM.png)

In the example above, the model has a high accuracy score of 9 and a low reach score of 1. The shape of the model predictions graph has little overlap between the source and target audience, which indicates less similarity between the users of those audiences. However, for the select users that fall into the area of overlap, they have a higher likelihood of converting.

### Optimize for Reach

Optimizing your Lookalike Model for reach is most applicable for targeting users in earlier stages of your funnel. This will allow you to reach more users, with the trade-off of being less precise. You can think of this as "casting an intelligently wide net". By identifying users who are least likely to convert, you can focus your marketing resources on the users who _are_ likely to convert, improving conversion rates and maximizing your budget spend.

![High Reach ML Model Screenshot](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am68b15779dddb152f/97185fe362ab5912493694a7/Screen_Shot_2022-03-17_at_9.48.41_AM.png)

In the example above, the model has a low accuracy score of 2 and a high reach score of 8. The shape of the model predictions graph has a good amount of overlap between the source and target audience, which indicates more similarity between the users of those audiences. Therefore, you will be able to reach more users in the source audience, but they have a lower likelihood of converting compared to a model with higher accuracy.

### Balancing the trade-off

When balancing the trade-off between accuracy and reach, consider the sum of accuracy and reach to determine a model’s fitness to be used. See the table below for a quick estimation of your model's fitness to be used.

| Accuracy + Reach | Model Strength |
| --- | --- |
| 0-7 | Poor |
| 8-9 | Fair |
| 10 | Good |
| 11+ | Excellent |



In the first two screenshots shared, each model had a sum score of 10 for accuracy and reach (9 and 1, 2 and 8 respectively). Therefore, both models would be considered "good" but they are optimized for different use cases. For a comparison, see the model below that has a moderate accuracy score of 5 and a moderate reach score of 5.
