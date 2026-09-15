---
title: "Topics"
description: "To view Topics in your account, click on the Standard Context Layer and select the Topics tab."
url: /lytics/topics
uid: blt4ca29df1e0c07139
---

# Topics

## Topics

## Viewing Topics

To view **Topics** in your account, click on the **Standard** Context Layer and select the **Topics** tab.

![34fc4c46ddda77eb89842147563b4f9ca306d9ba66d58c2af11addc8caf45078-Screenshot_2024-10-03_at_11.54.43_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4b5cb879d52bcf81/2b81bb54d8e722c6cf41f4f6/34fc4c46ddda77eb89842147563b4f9ca306d9ba66d58c2af11addc8caf45078-Screenshot_2024-10-03_at_11.54.43_AM.png)

The table above displays the top 500 **Topics** associated with the **Standard** Context Layer. Each row indicates the number of documents tied to that Topic, as well as the number of users who have a Topic-score for it.

For the **Standard** Context Layer, Topics are generated using Lytics' Natural Language Processing (NLP) tools, as well as meta-tags from webpages. To learn more about how Topics are enriched, visit our [Enrichment](/docs/lytics/enrichment)documentation.

### Blocking Topics

In some cases, Lytics' NLP tools may identify irrelevant Topics. To address this, you can block unwanted Topics by selecting the checkbox next to each one. Once blocked, the Topic will appear in the Blocked Topics table and will no longer show up on user profiles or in documents.

![f7c772e4be1eaa1de1e075dbff4bc9a2dbcc32b7e4e06aa72b963048a10847e1-Screenshot_2024-10-03_at_12.02.45_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am822e047bdf33ead3/c59ef3778af2803ef5faf8d7/f7c772e4be1eaa1de1e075dbff4bc9a2dbcc32b7e4e06aa72b963048a10847e1-Screenshot_2024-10-03_at_12.02.45_PM.png)

## Topic Summary

When you click on a **Topic** in the Topics table, you’ll be taken to the Topic Summary page, which provides detailed insights about the selected Topic.

-   Header: Displays the number of documents associated with the Topic, the number of users with a score for the Topic, and the average level of Affinity across all users.
-   Chart: Visualizes the distribution of Topic scores across your user base.
-   \+ New Audience: This button lets you create a new Audience based on this specific Topic by redirecting you to the Audience Builder.
-   Recent Content: Lists documents associated with the Topic. Clicking on a document will take you to its detailed page.

![fec710b3d4bdbc81da859d3081154e2e7e1b85f547d636ecc07563ebf9a17fca-Screenshot_2024-10-03_at_12.03.58_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am61de70b2b781e7ff/f263717e6c0eacdbff522f66/fec710b3d4bdbc81da859d3081154e2e7e1b85f547d636ecc07563ebf9a17fca-Screenshot_2024-10-03_at_12.03.58_PM.png)

### Content Map and Related Topics

The Topic Summary page also displays **Related Topics**, which are identified based on their frequent co-occurrence with the selected Topic. These related Topics appear in the bottom-right corner of the page and are also visible in the Content Map view.

The [Topic Taxonomy](/docs/lytics/topic-taxonomy) (or Content Map) is built by analyzing documents and the Topics they contain, revealing patterns of co-occurrence and Topic prevalence. You can use the slider at the bottom of the Content Map to highlight strong connections—Topics that frequently appear together. In the example below, we can see that the **Furniture** topic is highlighted, as well as each of its related Topics (such as _House_, and _Faux Fur Bean Bag_).

![5e61f2d81a155d2979efc52ebfb3ce828d3e15e567375896326900585cbe389a-Screenshot_2024-10-03_at_12.08.51_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0e4cd00490f17ad5/cfd9e4e3a53674dc2536f3ab/5e61f2d81a155d2979efc52ebfb3ce828d3e15e567375896326900585cbe389a-Screenshot_2024-10-03_at_12.08.51_PM.png)

### Segmentation With Topics

When you click the \+ New Audience button, you’ll be redirected to the Audience Builder. The Topic score distribution chart can help you decide on an appropriate threshold when creating segments.

![ae5564222358f1929f119d909ab18267838f1afe2db6c99fed7ad5c71bf13cba-Screenshot_2024-10-03_at_12.11.18_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am49c30e8968830ab5/1c8961282eb90895cb613812/ae5564222358f1929f119d909ab18267838f1afe2db6c99fed7ad5c71bf13cba-Screenshot_2024-10-03_at_12.11.18_PM.png)

To include all users who have shown any interest in a Topic, use the Exists operator.
