---
title: "Getting Started"
description: "Getting Started"
url: /lytics/getting-started-1
---

# Getting Started

## Getting Started

## Why Use Lookalike Models?

To demonstrate how Lookalike Models can bring your marketing team's segmentation strategy to the next level, we've outlined how you could segment users by hand compared to how a Lookalike Model would accomplish this task. For our example use case, the goal is to identify users who are likely to buy a travel package for the summer.

**How a marketer may create segmentation rules by hand:**

1.  Users buy travel packages months in advance, so identify users who are visiting in winter and spring.
2.  Users who receive promotions are more likely to buy expensive items.
3.  Users who have already bought a package are likely to buy it again.

Targeting users that match these three rules will certainly improve the efficacy of a campaign, but why stop at these? Are there more factors that can be used to refine this group of users?

**How Lytics Lookalike Models would do it instead:**

1.  What do users who have bought travel packages in the past "look like" (i.e., what features do they have in common)?
2.  Analyze all the information known about these users who have bought travel packages.
3.  Determine which features are significant and which values of these features are significant (e.g., visiting the website is important, specifically three to five times).
4.  Analyze all the information known about users who have not bought travel packages.
5.  Determine which users share common features with past summer travel package purchasers.
6.  Take the most similar users to use in targeting.

The key difference here is that a marketer may use a handful of criteria using logical heuristics to define a segment of users while Lookalike Models will look at _hundreds_ of factors including potential non-obvious, impactful criteria to define an audience of users for the same purpose.

## Choosing Your Source & Target Audiences

In traditional supervised machine learning, we collect samples of data with one field represented as the Target. This is what we look to model or "classify". Some examples of real-world classifiers are predicting whether an email is spam or not, predicting if the weather tomorrow will be cloudy or sunny, classifying a news article as happy or sad, or classifying an image as a dog or not a dog. We do this same thing in Lytics' Lookalike Modeling but you get to choose what the target we want to predict is. This works by providing two audiences: a **Target** and **Source**.

### Target

The target audience is the group of users you want to model and predict, i.e. the users you want to find more of. Most of the time this audience will represent users that have done something favorable that is worth repeating by finding more users highly likely to repeat this favorable event. For example, users who provided their email on a newsletter signup, high LTV users, users who purchased a product, etc. Getting the target audience in order is step #1 before creating the model. This audience defines the basis of the model or the model's objective. Aside from "positive" events, you can also model users you might want to suppress like users who have churned. If the data is in Lytics, you can model it.

### Source

The source audience is the group of users to find lookalikes for, i.e. the users you want to target in campaigns after creating the model. For example, if we chose users with email as the target, then targeting unknown users would make sense as the source. You could also make the source audience users who have viewed a certain line of products, users who have been active within the last 90 days, etc. The source should be adjacent to the target. More information on choosing the right source and target audiences can be found [here](/docs/lytics/improving-lookalike-models).

## Automated Machine Learning

Once a Source and Target audience are chosen, Lytics handles all the heavy lifting of building, optimizing, and deploying the model. For each model, Lytics automates the (1) feature selection, (2) model training and validation, and (3) scalable real-time prediction, which allows you to spend less time wrangling data to build models, and more time to create better experiences for your customers.

### Feature Selection

Feature selection is the process of identifying which features (or fields) to include in a machine-learning model. While all user profile data is accessible for use in building Lookalike Models, manually identifying which features to include can be a tedious and time-consuming process if there are hundreds or thousands of fields. Lytics provides an option called **Auto-Tune** which uses intelligent feature engineering to select the most predictive features across all the available features.

### Model Training

When training models, Lytics utilizes three model types: _Random Forests_, _Gradient Boosting Machines_, and _Logistic Regression_. Under the hood, Lytics trains dozens of models using different parameters and hyper-parameters to optimize the model-building process.

### Real-Time Prediction

Lytics Lookalike Models update user scores in real-time, so you can start targeting users immediately once the model is building, but also as their behavior changes or new users are added. Rather than using a static list, Predictive Audiences built from Lookalike Models provide a dynamic pool of users that will respond best when they are ready for ads or other marketing messages. You can also adjust your targeting criteria to make the best tradeoffs between reach and accuracy to maximize your marketing budgets.

## Getting Started

To create your first Lookalike Model, please refer to the [Building Lookalike Models](/docs/lytics/building-lookalike-models) document. You may also choose to use the [Lytics Lookalike Model API](https://docs.lytics.com/reference/segmentml-model-fetch) to create a model. An example of creating a Model via the API is provided below.

```
export LIOKEY={YOUR API KEY}
export SOURCE_ID={YOUR SOURCE ID}
export TARGET_ID={YOUR TARGET ID}

echo '{
    "source": "$SOURCE_ID",
    "target": "$TARGET_ID",
    "name": "My Lookalike Model",
    "config": {
        "auto_tune": true,
        "build_only": true,
        "collect": 5000,
        "re_run": true,
        "use_content": true,
        "use_scores": true
    }
}' | http POST "https://api.lytics.io/api/ml" key==$LIOKEY
```

For a more detailed step-by-step walkthrough of creating, analyzing, and deploying the model to export the best users to BigQuery check out this [python notebook](https://colab.research.google.com/drive/1pULreGdOr2o6whiyUA_mBwm6JPQcoxbm#scrollTo=ivcat9-1_Xvh)

For more detailed documentation on the API go [here](https://docs.lytics.com/reference/segmentml-model-fetch)

For guidance on navigating Lookalike Modeling in the UI, and more detailed tips and information, continue to the next page.
