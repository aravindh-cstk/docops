---
title: "Building Lookalike Models"
description: "The Lookalike Model Builder provides an interface to quickly build custom machine-learning models and predictive Lookalike Audiences based on your data…"
url: /lytics/building-lookalike-models
uid: blte310e74c49ae551d
---

# Building Lookalike Models

## Building Lookalike Models

The Lookalike Model Builder provides an interface to quickly build custom machine-learning models and predictive Lookalike Audiences based on your data. In the Lytics UI, the Model Builder is located under the **Lookalike Models** tab within the **Using Profiles** section.

To get started, click **Create New**

![3c493389955106cca703ede918080e2af27ef8a83a3339204b2aa70ef6cb48cd-Screenshot_2025-01-14_at_2.58.00_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf48c498e8a66f81d/84d5f8ffd67be2958e1f2472/3c493389955106cca703ede918080e2af27ef8a83a3339204b2aa70ef6cb48cd-Screenshot_2025-01-14_at_2.58.00_PM.png)

This opens up the Lookalike Model builder.

![27c8214-Screenshot_2023-07-28_at_12.36.18_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am00ee1ddbce4883e8/04fcd9e712984a499130b075/27c8214-Screenshot_2023-07-28_at_12.36.18_PM.png)

### Basic Configuration

For most use cases, building a model by setting the basic configuration parameters is sufficient. The only required parameters are the selection of a source and target audience, which are **very important for building a usable model**.

If you select audiences that are too dissimilar, the model may be unable to find lookalikes in the source audience. [Learn more about selecting the right audiences for your use case](/docs/lytics/improving-lookalike-models#selecting-the-right-source-and-target-audience). The size of each audience is also important.

**Warning:** When building a Lookalike Model, your source and target audience must have a minimum of 25 users and a maximum of 20 million users.

If your selected audience exceeds the maximum size, you can add filters to refine it. For example, if the source audience is “Unknown users” you could add a filter for “Active in the last 30 days” to ensure you aren’t targeting unknown users with stale cookie identifiers.

The basic model parameters are defined below.

| Parameter | Description | Example |
| --- | --- | --- |
| Source Audience | Select an existing audience as the source to find lookalikes from. | users\_who\_signed\_up\_for\_email |
| Target Audience | Select an existing audience as the target (users you want to find more of). | users\_who\_made\_an\_online\_purchase |
| Custom Model Name | If no custom model name is provided, the default name will be Source\_Segment\_Slugname::Target\_Segment\_Slugname. Cannot contain the characters: period, semicolon, forward slash, or back slash. | my\_model\_name |
| Auto Tune | Use an automated "intelligent" feature selection process and make a best attempt at building the healthiest model. | Checked |
| Model Training Only | Build a model without scoring users. Useful for testing and debugging purposes. | Checked |



### Advanced Configuration

For additional model configuration, select the **Advanced Options**.

![e120e54-Screenshot_2023-07-28_at_12.37.51_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am23332c756211c0b6/b50a94190bf1ab30629ed61e/e120e54-Screenshot_2023-07-28_at_12.37.51_PM.png)

For manually built models (without **Auto Tune**), one or more features must be selected for the model build, such as Use Scores, Use Content, Additional Fields.

| Parameter | Description | Example |
| --- | --- | --- |
| Use Scores | Leverage Lytics Behavioral Scores as features for the model. | Checked |
| Use Content | Leverage Lytics Content Affinity as features for the model. | Checked |
| Additional Fields | Select fields in the user schema as features for the model. | visit\_count |
| Blocked Fields | Select fields in the user schema to omit from the model. | email\_view |
| Continuously Re-train | Retrains the model every week with a new training sample. If this option is not selected, the model will never re-train. | Unchecked |
| Sample Size | The sample size of users for the model training set. Allowable range: 100 - 50000 users. | 5000 |
