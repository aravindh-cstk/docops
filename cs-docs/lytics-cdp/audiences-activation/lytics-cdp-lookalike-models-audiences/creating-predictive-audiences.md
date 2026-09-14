---
title: "Creating Lookalike Audiences"
description: "Once your Lookalike Model is built and users are scored (ensure the Model Training Only option is unchecked, or press Activate in the top left of the…"
url: /lytics/creating-predictive-audiences
---

# Creating Lookalike Audiences

## Creating Lookalike Audiences

Once your Lookalike Model is built and users are scored (ensure the **Model Training Only** option is unchecked, or press **Activate** in the top left of the **Model Summary** page), you can begin creating Lookalike Audiences with varying decision thresholds or percentiles based on model predictions.

To create a new Audience, click the **Create New Lookalike Audience** button on the modal page. This opens a dialog where you can choose between the Quick Editor and the Advanced Editor. When setting up the new Audience, you will use either the Lookalike Model Predictions field or the Lookalike Model Percentiles field (explained further below).

Model predictions are expressed as probabilities on a 0-1 scale, with values closer to 0 indicating a low likelihood of resembling users in the target audience, and values closer to 1 signifying a higher likelihood.

You can adjust the threshold as you like or add additional rules before saving the audience. See [Improving Lookalike Models](/docs/lytics/improving-lookalike-models#adjusting-the-decision-threshold) for tips on adjusting the **Decision Threshold**. Any audiences built using the audience prediction score for your model will display in the model usage module.

![a778b27446a59225b873bdf28d41adf6363c3d63eddb257ca6c5d47fa2a596f9-Screenshot_2025-01-17_at_1.51.21_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6d39e1278ec46014/08025c3b490b79e2789c0081/a778b27446a59225b873bdf28d41adf6363c3d63eddb257ca6c5d47fa2a596f9-Screenshot_2025-01-17_at_1.51.21_PM.png)



### Using Lookalike Model Percentiles

Another option to build a Predictive Audience is by using the Lookalike Model Percentiles field. Similar to the Lookalike Model Predictions field, the Lookalike Models are keys for the Lookalike Model Percentiles field.

![c2c0abc1504126afab717c614bf8105a1d24ec4e6bf72587d0eb3bec416cb5c5-Screenshot_2025-01-17_at_1.52.58_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0b7b72490c1abd31/052018fc1eee1b07214da20c/c2c0abc1504126afab717c614bf8105a1d24ec4e6bf72587d0eb3bec416cb5c5-Screenshot_2025-01-17_at_1.52.58_PM.png)

The percentile for a model represents the value at which a percentage of the predictions fall below. For example, the 80th percentile represents the prediction score at which 80% of all other scores fall below, or more simply put; the top 20% of users. Percentiles help account for the shape of a model's prediction distribution, as it can sometimes be hard to determine who the best users are based solely on the prediction scores, if the distribution is skewed is any direction.
