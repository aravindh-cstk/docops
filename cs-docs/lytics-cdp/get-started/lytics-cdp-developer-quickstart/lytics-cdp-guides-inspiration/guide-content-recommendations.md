---
title: "Content Recommendations"
description: "This document details the process of utilizing Lytics' real-time personalization engine to showcase content that resonates with a visitor's interests…"
url: /lytics/guide-content-recommendations
---

# Content Recommendations

## Content Recommendations

## TL;DR

This document details the process of utilizing Lytics' real-time personalization engine to showcase content that resonates with a visitor's interests. This can be implemented directly inline or through a pop-up modal on your website to boost engagement.

## Background

### How does Lytics make content recommendations?

Lytics Context Layers provide a sophisticated approach for businesses to gain and leverage insights into which content is most likely to resonate based on behavioral patterns. This is achieved through a detailed enrichment and affinity generation process in real-time. While full details are available in Lytics' comprehensive documentation, the core process can be distilled into four key steps:

-   **Tracking Interactions**: Monitoring visitor behavior in real-time to understand their engagement with the site.
-   **Content Analysis & Topic Extraction**: Using Google NLP and proprietary algorithms, Lytics automatically analyzes all the content on your website, translating it into a detailed topic graph.
-   **Interest Scoring**: Assigning scores to reflect a visitor's level of interest in different topics, updated dynamically as new interactions occur.
-   **Content Recommendation**: Suggesting content that aligns with the visitor's demonstrated interests, leveraging real-time insights for timely and relevant engagement.

This streamlined framework enables real-time personalization, enhancing user experience by continuously adapting to evolving visitor interests.

### Why is it important?

Relevant content for individual users boosts marketing effectiveness and ROI by increasing engagement and conversion rates. Personalized content meets users' interests, leading to better resource utilization and higher customer retention. This targeted strategy enhances sales opportunities and brand perception, directly improving return on investment.

## See it in action.

Lytics' real-time personalization engine lets you first identify the current web visitor, programmatically review their profile, and deliver one or more pieces of content based on their unique interests to maximize engagement.

![8627332-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am465201a89f1d21e2/cf011f5e7c566ea03142a138/8627332-image.png)

## Instructions

Below, you'll find a detailed guide on how to execute this use case. At the end, you'll find additional reading, which will help you learn how to extend and customize this use case further.

### Requirements

-   Have access to an active Lytics account.
    -   Lytics account must have had enough time to build the topic graph. Typically, 24 to 48 hours.
-   Ability to add JavaScript to your website via tag manager or CMS.
-   Entry-level knowledge of JavaScript. (Don't worry; it is mostly "copy and paste" here.)

### Install Lytics Core SDK

Before executing this use case, your website must be properly configured with the core Lytics SDK (JavaScript tag). Please refer to our [installation documentation](/docs/lytics/lytics-javascript-tag) to confirm the tag is present before continuing.

### Interest Scores & Content Collections

Your content must be classified before Lytics can offer content recommendations or insights. Typically, this classification process takes 24 to 48 hours, though it may extend if your catalog is particularly large. To ensure the health of your content graph and context layers, there are a few key areas to focus on:

#### Verify Interest Scores on Profile

1.  Ensure the Lytics Developer Tools Chrome extension is installed and Enabled.
2.  Visit the domain(s) that have the Lytics JavaScript SDK installed.
3.  Open the Chrome extension and navigate to the **Profile** section at the bottom.
4.  From the **Summary** tab, you will see a section labeled **Interests**. Here, we will list any topics and their associated level for the user. If your user gets a message "No interests are available," proceed to the next step to ensure content has been classified.

#### Verify Content has Been Classified

**Note:** If you have not already verified the quality of classification and metadata, please refer to our [quickstart documentation](/docs/lytics/developer-quickstart#review-content-metadata).

1.  From the Lytics interface, navigate to **Decision Engine** from the product switcher at the top left.
2.  Using the left-hand menu, navigate to **Content** > **Collections**.
3.  From the list of collections, there is likely only one; look for **All Content** in the list and the rows **Size**. This refers to the number of documents classified; it should be greater than one and reflect your total catalog.

![e9be3fb-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaf8f99399c903f38/e4456014efcd1e0a643855b2/e9be3fb-image.png)

1.  For greater detail, you can also visit **Content** > **Web Classification**.
2.  At the top of that page will be a summary dashboard of all content that has been successfully classified and cataloged. Most notably, the **All Documents** count under the **URL Path** component.

![f7027d9-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd30adc276dc93ce5/9d9df214b94b261c780a0b20/f7027d9-image.png)

##### Troubleshooting Common Problems

-   I have no **lytics\\\_content\\\_enrich** stream. (coming soon)
-   My content is not showing up at all. (coming soon)
-   My content is being classified, but none of my documents have images. (coming soon)

#### Select a content collection.

We will use the default collection outlined below for this exercise, but you may also create a custom collection with a subset of your content to recommend.

| Collection | Description |
| --- | --- |
| all\\\_content | This collection contains all classified documents. It comes out of the box in all Lytics accounts. |

**Note:** Ready to go a step farther and build a custom collection of your content to ensure recommendations are selected from a more currated set of documents? Check out our full [documentation](/docs/lytics/content-collections).

### Activate Required Attributes & Segments

As an admin user of Lytics, you can [enable or disable any attributes](/docs/lytics/personalization-api#allowlist-fields-for-public-api) from being surfaced to the web via our JavaScript SDK. Depending on how your account has been configured, you may need to allow some of the required attributes for this particular use case.

Required Attributes:

| Segment | Description |
| --- | --- |
| all | We will use the out-of-the-box segment containing all your site's users for demonstration. We recommend using something more refined in production, such as new or high-value visitors. |

### Configure Web Experience

To execute this use case, we will demonstrate two examples. The first will be a single content recommendation in a popup style modal, while the second will leverage Pathfora to add a set of recommendations inline to your website.

#### Example 1: Content Recommendation Modal

![090e592-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6759b15de388ec19/7313e444d9bdb0310740856d/090e592-image.png)

```
jstag.on('pathfora.publish.done', function(topic, event){
  var module = new pathfora.Message({
    id: 'content-rec-sample',
    layout: 'slideout',
    theme: 'dark',
    headline: 'Yummy content!',
    msg: 'We suspect you are going to want to check this out.',
    recommend: {
      collection: 'all_content'
    },
    cancelShow: false,
    okShow: false,
    variant: 3
  });

  var modules = {
    target: [{
      segment: "all",
      widgets: [module]
    }]
  };

  pathfora.initializeWidgets(modules);
});
```

```
<script type="text/javascript">
  jstag.on('pathfora.publish.done', function(topic, event){
    var module = new pathfora.Message({
      id: 'content-rec-sample',
      layout: 'slideout',
      theme: 'dark',
      headline: 'Yummy content!',
      msg: 'We suspect you are going to want to check this out.',
      recommend: {
        collection: 'all_content'
      },
      cancelShow: false,
      okShow: false,
      variant: 3 // this variant shows the title and image for the recommendations
    });

    var modules = {
      target: [{
        segment: "all",
        widgets: [module]
      }]
    };

    pathfora.initializeWidgets(modules);
  });
</script>
```

#### Example 2: Inline Content Recommendation

In this example, we'll use a generic Drupal Block with pure HTML and CSS, but the same approach can be taken using WordPress or a third-party tag manager such as Google Tag Manager.

![cb30305-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am328b7b69a3092109/f7f300f4080cac15ff0b8b0c/cb30305-image.png)

```
<style>
    .rec-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .rec-item {
        box-sizing: border-box;
        flex: 1;
        padding: 10px;
    }

    .rec-title,
    .rec-description {
        font-size: 14px;
        margin-bottom: 5px;
        word-wrap: break-word;
    }

    .rec-description {
        font-size: 12px;
    }

    .rec-img {
        height: auto;
        margin-bottom: 5px;
        max-width: 100%;
    }
</style>
<div class="rec-container">
    <div class="rec-item" data-pfblock="lytics-recommend" data-pfrecommend="all_content">
        <div class="rec-title">
            <a data-pftype="URL"><strong data-pftype="title">Recommendation title loading...</strong></a>
        </div>
        <p>
            <img class="rec-img" alt="Recommendation related image">
        </p>
        <p class="rec-description" data-pftype="description">
            The recommendation description is loading...
        </p>
    </div>
    <div class="rec-item" data-pfblock="lytics-recommend" data-pfrecommend="all_content">
        <div class="rec-title">
            <a data-pftype="URL"><strong data-pftype="title">Recommendation title loading...</strong></a>
        </div>
        <p>
            <img class="rec-img" alt="Recommendation related image">
        </p>
        <p class="rec-description" data-pftype="description">
            The recommendation description is loading...
        </p>
    </div>
    <div class="rec-item" data-pfblock="lytics-recommend" data-pfrecommend="all_content">
        <div class="rec-title">
            <a data-pftype="URL"><strong data-pftype="title">Recommendation title loading...</strong></a>
        </div>
        <p>
            <img class="rec-img" alt="Recommendation related image">
        </p>
        <p class="rec-description" data-pftype="description">
            The recommendation description is loading...
        </p>
    </div>
</div>
```
