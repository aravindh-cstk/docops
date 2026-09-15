---
title: "Lookalike Models: Convert anonymous users to known users"
description: "Converting unknown users to known users is a key starting point for many marketing campaigns. Collecting data from your users enables you to personalize…"
url: /lytics/lookalike-models-convert-anonymous-users-to-known-users
uid: blt25f6d87ccc5bf6ba
---

# Lookalike Models: Convert anonymous users to known users

## Lookalike Models: Convert anonymous users to known users

Converting unknown users to known users is a key starting point for many marketing campaigns. Collecting data from your users enables you to personalize their experience with your brand or website. Building a Predictive Audience can help you intelligently target anonymous users who are most likely to convert to customers.

### Define Source and Target Audiences

The first step to building a Lookalike Model is selecting your [source and target audiences](/docs/lytics/building-lookalike-models#basic-configuration). As a marketer, this starts by understanding your desired outcome for the **target audience**, in this case, "known users". You can create this target audience in Lytics for users with identifying field(s) such as has\_email.

The **source audience** is the group that you want to find similar users from, focusing on those who've shown signals they are likely to convert. For this example, the source audience is "anonymous users," which you can define as users who are missing an identifying field such as email, contact\_id, customer\_id, uids, etc.

### Build Lookalike Model

In the Lytics UI, head to the **Laboratory** section and click **Create New Model** at the top right. On the configuration page, you'll select the source and target audiences that you previously defined.\\ ![lookalike-model-configuration-anonymous-known](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd4f28d685d1f886d/6f7410d8b859a20d6a803c20/lookalike-model-configuration-anonymous-known.png)

By default, the **Auto Tune** option is turned off. If you’re not getting enough performance out of your models, try Auto Tune, which will select the default parameters for you. Select **Model Training Only** if you're in an exploratory phase and not ready to target users based on this model's predictions. Learn more about the configuration options in our [Model Builder](/docs/lytics/building-lookalike-models) documentation.

Depending on the sizes of your source and target audiences, your Lookalike Model may take a few minutes up to a few hours to build. On your [Model Dashboard](/docs/lytics/building-lookalike-models), you'll see a "Building" status until the model is complete.

### Create Predictive Audience

Once your model is built, view the [Model Summary](/docs/lytics/evaluating-lookalike-models) to determine if it's ready for use in your campaign. You must **Activate** a Lookalike Model before creating a Predictive Audience, which will evaluate users and write the model's prediction scores to user profiles. This process can take up to three days for large audiences.

![lookalike-model-summary-anonymous-known](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6232b5e3718877c3/5b1bc7ec3ebb9cebad9e6f01/lookalike-model-summary-anonymous-known.png)

On the summary page, click **Create Predictive Audience** in the Model Usage section, which will open the audience builder pre-populated with your model's predictions. The default model decision threshold of 0.5 is used, but you can [adjust the decision threshold](/docs/lytics/improving-lookalike-models) as needed to reach more users or be more accurate.

![lookalike-anonymous-to-known-predictive-audience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am96c792a7e5ef86d6/e1544f6529fc5aaa9887fcce/lookalike-anonymous-to-known-predictive-audience.png)

### Next Steps

After creating a Predictive Audience from anonymous users most likely to convert to known users, you may want to offer personalized discounts or free trials to this audience to help convert them to customers. Learn more about how to [acquire new customers](/docs/lytics/lookalike-models-convert-single-purchasers-to-multi-purchasers) using Lytics.
