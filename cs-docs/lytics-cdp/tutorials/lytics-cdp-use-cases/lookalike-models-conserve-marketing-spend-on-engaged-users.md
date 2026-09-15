---
title: "Lookalike Models: Conserve marketing spend on engaged users"
description: "Determining which users to exclude from a campaign is equally as important as finding the users you want to target. If a user is already engaged with your…"
url: /lytics/lookalike-models-conserve-marketing-spend-on-engaged-users
uid: blt58e84c528a4cc9c6
---

# Lookalike Models: Conserve marketing spend on engaged users

## Lookalike Models: Conserve marketing spend on engaged users

Determining which users to exclude from a campaign is equally as important as finding the users you want to target. If a user is already engaged with your brand and likely to make a purchase soon, you can reduce marketing spend by suppressing those users from your campaign audiences.

### Define Source and Target Audiences

The first step to building a Lookalike Model is selecting your [source and target audiences](/docs/lytics/building-lookalike-models#basic-configuration). Start by defining the desired outcome for the **target audience**, in this case, engaged users with a pending order.

The **source audience** is the group that you want to find similar users from, focusing on those who've shown signals they are likely to convert. For this use case, you can use the prebuilt audience lytics\_deeply\_engaged or build your own audience based on your criteria for engagement.

### Build Lookalike Model

In the Lytics UI, navigate to the **Laboratory** section and click **Create New Model** at the top right. On the configuration page, you'll select the source and target audiences that you previously defined.\\ ![lookalike-model-configuration-engaged-users-pending-order](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am06186511f70bedea/d6a7c2fa9482626572e0dc90/lookalike-model-configuration-engaged-users-pending-order.png)

By default, the **Auto Tune** option is turned off. If you’re not getting enough performance out of your models, try Auto Tune, which will select the default parameters for you. Select **Model Training Only** if you're in an exploratory phase and not ready to target users based on this model's predictions. Learn more about the configuration options in our [Model Builder](/docs/lytics/building-lookalike-models) documentation.

Depending on the sizes of your source and target audiences, your Lookalike Model may take a few minutes up to a few hours to build. On your [Model Dashboard](/docs/lytics/evaluating-lookalike-models), you'll see a "Building" status until the model is complete.

### Create Predictive Audience

Once your model is built, view the [Model Summary](/docs/lytics/evaluating-lookalike-models) to determine if it's ready for use in your targeting. You must **Activate** a Lookalike Model before creating a Predictive Audience, which will evaluate users and write the model's prediction scores to user profiles. This process can take up to three days for large audiences.

![lookalike-model-summary-engaged-users-pending-order](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6ba305fbfa8949fb/5f5124c021016f4caa047b14/lookalike-model-summary-engaged-users-pending-order.png)

On the summary page, click **Create Predictive Audience** in the Model Usage section, which will open the audience builder pre-populated with your model's predictions. The default model decision threshold of 0.5 is used, but you can [adjust the decision threshold](/docs/lytics/improving-lookalike-models) as needed to reach more users or be more accurate and only target users who are most likely to make a purchaser without additional marketing.

![lookalike-deeply-engaged-pending-order](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5dabdf724c9e8b9d/8e9e82ee8d136cb31e518f2e/lookalike-deeply-engaged-pending-order.png)

### Next Steps

After creating an audience of users likely to make a purchase soon, you may want to add these users to a suppression list. Read more about [suppressing users from ad campaigns](/docs/lytics/lookalike-models-conserve-marketing-spend-on-engaged-users).
