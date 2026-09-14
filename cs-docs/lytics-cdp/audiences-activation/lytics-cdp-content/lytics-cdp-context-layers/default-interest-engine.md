---
title: "Standard Context Layer"
description: "The Standard Context Layer works by analyzing web-data collected via the Lytics Javascript Tag. Out-of-the box, Lytics ingests and keeps track of all new…"
url: /lytics/default-interest-engine
---

# Standard Context Layer

## Standard Context Layer

![2bd8427399db047e9f15bdec61d5a29030b0e073cad1bd7e166d07db4d89bd13-Screenshot_2025-04-21_at_4.58.34_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am339fd0ed4bc94a1a/9153eaacb0a3a0da0750db0d/2bd8427399db047e9f15bdec61d5a29030b0e073cad1bd7e166d07db4d89bd13-Screenshot_2025-04-21_at_4.58.34_PM.png)

The Standard Context Layer works by analyzing web-data collected via the Lytics Javascript Tag. Out-of-the box, Lytics ingests and keeps track of all new URLs that we receive. For each URL, we use a variety of NLP (Natural Language Processing) tools to extract **Topics**. For more information about the Topic Enrichment process, please refer to the [Enrichment](/docs/lytics/enrichment) documentation.

The Header displays information about how the Standard Context Layer is configured. Though these values are uneditable, additional customization can be achieved with **Custom Context Layers**. For the Standard Context Layer, web-pages are saved in the content table with a unique identifier known as a hashedurl(simply a hash function applied to a parsed URL). For items in the content table, Topics (or features) are saved in the global field. On the user side, we keep track of the URLs a user has browsed in the hashedurls field, and we output Topics that a user has interacted with to the lytics\_content field.

![a6f8281-Screenshot_2024-02-08_at_12.43.30_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amec5c7c2828ee6464/08bab893d1fdc8f3e61f495e/a6f8281-Screenshot_2024-02-08_at_12.43.30_PM.png)

The UI for Standard Context Layer shows the Summary, Topics, and Affinities. In the Summary section, we display a **Topic Taxonomy** - a force-directed graph that maps how Topics interact with each other. The table next to the Taxonomy displays statistics about your Users, and Topics. Expanding the rows in the table will display sample items and users and the associated Topics.

![7a95866-Screenshot_2024-02-08_at_10.46.35_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am95cb60e49e70846b/b19aaaa8e79f091091e2fc88/7a95866-Screenshot_2024-02-08_at_10.46.35_AM.png)

#### Topics & Affinities

[Topics & Affinities](/docs/lytics/affinities) can be viewed under their respective tabs. The Topics view shows all of the Topics associated with the Standard Context Layer. Clicking on a Topic will present more information a specific Topic. Similarly, the Affinities tab displays all the Affinities associated with the Standard Context Layer.



#### Using the Standard Context Layer

Since the Standard Context Layer is designed to work quickly out-of-the-box for new accounts, you can quickly take advantage of all of the offerings provided.

-   Interest-based user segmentation. Leverage Topics (via the lytics\_content field) and Affinities (via the lytics\_rollup field) to create powerful interest-based audiences.
-   Recommendations. As Lytics gathers all information about your webpages through the Javascript tag, Lytics can power dynamic Recommendations based on user interests.
-   Export to other tools! The NLP-based Topics and user interests (saved in the lytics\_content field) provide powerful insights that can be useful in downstream dashboard and analysis tools. This data can also be exported to email tools for powerful email personalization.
