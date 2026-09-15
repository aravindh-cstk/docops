---
title: "Lookalike Models: Convert single purchasers to multi-purchasers"
description: "Once you’ve acquired customers, a good way to increase sales and revenue without increasing advertising cost significantly is to target customers that are…"
url: /lytics/lookalike-models-convert-single-purchasers-to-multi-purchasers
uid: blt8f1fe7e7ee3625ae
---

# Lookalike Models: Convert single purchasers to multi-purchasers

## Lookalike Models: Convert single purchasers to multi-purchasers

Once you’ve acquired customers, a good way to increase sales and revenue without increasing advertising cost significantly is to target customers that are most likely to return for a second or third purchase. Reaching out to these customers with the appropriate messaging can be the first step in creating loyalty and improving retention.

### Define Source and Target Audiences

Begin building a Lookalike Model by selecting your [source and target audiences](/docs/lytics/building-lookalike-models#basic-configuration). The desired outcome for the **target audience** in this case is "multi-purchasers." The **source audience** will be "single purchasers" who have shown that they are likely to convert and become repeat purchasers.

### Build Lookalike Model

In the Lytics UI, go to the **Laboratory** section and click **Create New Model** at the top right. On the configuration page, you'll select the source and target audiences that you previously defined.\\ ![lookalike-model-configuration-single-multi-purchasers](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amed55ffefb63efed4/2a3f8f4a83da52231844968c/lookalike-model-configuration-single-multi-purchasers.png)

By default, the **Auto Tune** option is turned off. If you’re not getting enough performance out of your models, try Auto Tune, which will select the default parameters for you. Select **Model Training Only** if you're in an exploratory phase and not ready to target users based on this model's predictions. Learn more about the configuration options in our [Model Builder](/docs/lytics/building-lookalike-models) documentation.

Depending on the sizes of your source and target audiences, your Lookalike Model may take a few minutes up to a few hours to build. On your [Model Dashboard](/docs/lytics/evaluating-lookalike-models), you'll see a "Building" status until the model is complete.

### Create Predictive Audience

Once your model is built, view the [Model Summary](/docs/lytics/evaluating-lookalike-models) to determine if it's ready for use in your campaign. You must **Activate** a Lookalike Model before creating a Predictive Audience, which will evaluate users and write the model's prediction scores to user profiles. This process can take up to three days for large audiences.

![lookalike-model-summary-single-multi-purchasers.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amac605b602d576d7c/0f1191728a155bd3ae10a31a/lookalike-model-summary-single-multi-purchasers.png.png)

On the summary page, click **Create Predictive Audience** in the Model Usage section, which will open the audience builder pre-populated with your model's predictions. The default model decision threshold of 0.5 is used, but you can [adjust the decision threshold](/docs/lytics/improving-lookalike-models) as needed to reach more users or be more accurate to only target users who are most likely to make additional purchases.

![lookalike-single-to-multi-purchaser](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0c20debd22e37c56/17183b18f3292a63f01dd105/lookalike-single-to-multi-purchaser.png)

### Next Steps

After creating a Predictive Audience of single purchasers most likely to become multi-purchasers, you may want to target these users with discounts, loyalty programs, referral programs, or emails to drive sales.
