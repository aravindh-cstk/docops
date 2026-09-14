---
title: "Lookalike Models: Determine which subscribers are likely to churn"
description: "Retaining customers is more important now than ever, and for businesses that have a subscription model, reaching out to users who are risk of churning is…"
url: /lytics/lookalike-models-determine-which-subscribers-are-likely-to-churn
---

# Lookalike Models: Determine which subscribers are likely to churn

## Lookalike Models: Determine which subscribers are likely to churn

Retaining customers is more important now than ever, and for businesses that have a subscription model, reaching out to users who are risk of churning is an effective way to improve retention and customer engagement.

### Define Source and Target Audiences

The first step to building a Lookalike Model is selecting your [source and target audiences](/docs/lytics/building-lookalike-models#basic-configuration). The **target audience** in this case includes subscribers who are at risk of churning. You can define this based on the users' last engagement time or some some other measure of engagement. The **source audience** will include current subscribers, which you can define using subscription field(s) from your imported data.

### Build Lookalike Model

In the Lytics UI, head to the **Laboratory** section and click **Create New Model** at the top right. On the configuration page, you'll select the source and target audiences that you previously defined.\\ ![lookalike-model-configuration-subscribers-churn-risk](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am261d06af10ea0bc8/bf0eca6b7e7b31f34c6650b1/lookalike-model-configuration-subscribers-churn-risk.png)

By default, the **Auto Tune** option is turned off. If you’re not getting enough performance out of your models, try Auto Tune, which will select the default parameters for you. Select **Model Training Only** if you're in an exploratory phase and not ready to target users based on this model's predictions. Learn more about the configuration options in our [Model Builder](/docs/lytics/building-lookalike-models) documentation.

Depending on the sizes of your source and target audiences, your Lookalike Model may take a few minutes up to a few hours to build. On your [Model Dashboard](/docs/lytics/evaluating-lookalike-models), you'll see a "Building" status until the model is complete.

### Create Predictive Audience

Once your model is built, view the [Model Summary](/docs/lytics/evaluating-lookalike-models) to determine if it's ready for use in your targeting. You must **Activate** a Lookalike Model before creating a Predictive Audience, which will evaluate users and write the model's prediction scores to user profiles. This process can take up to three days for large audiences.\\ ![lookalike-model-summary-subscribers-churn-risk](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9c423fc67c7221fa/b23bc3c13dd0485001d94641/lookalike-model-summary-subscribers-churn-risk.png)

On the summary page, click **Create Predictive Audience** in the Model Usage section, which will open the audience builder pre-populated with your model's predictions. The default model decision threshold of 0.5 is used, but you can [adjust the decision threshold](/docs/lytics/evaluating-lookalike-models) as needed to reach more users or be more accurate to only target users who are most likely to churn.

![lookalike-subscriber-churn](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambd2413360c2031c8/a8d8ac6b08e3485d5aa8ec73/lookalike-subscriber-churn.png)

### Next Steps

After creating a Predictive Audience, you may want to target this audience with emails to help them re-engage with your brand. For more information, check out our playbook on [retaining customers](/docs/lytics/lookalike-models-determine-which-subscribers-are-likely-to-churn).
