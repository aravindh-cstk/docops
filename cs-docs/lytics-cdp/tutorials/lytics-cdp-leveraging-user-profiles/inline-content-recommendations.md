---
title: "Inline Content Recommendations"
description: "Inline Content Recommendations"
url: /lytics/inline-content-recommendations
uid: blt35279cd38c1dc8f7
---

# Inline Content Recommendations

## Inline Content Recommendations

## Inline Content Recommendations

Learn how to add seamless content recommendations to your website fueled by Lytics' Content Affinity Engine; all it takes is an API request and a little HTML.

**Difficulty:** Beginner

**TLDR:** [Here's some docs instead](https://lytics.github.io/pathforadocs/inline_content/).

**Other resources:**

-   [A blog post - covering basically the same thing - with a live example!](https://www.lytics.com/blog/inline-content-recommendations)
-   [Lytics Segment API Docs](/docs/lytics/segment-api) (for segment creation API and SegmentQL)

### Prerequisites

-   [Lytics Javascript Tag](/docs/developers/sdks/lytics/web/lytics-javascript-tag) installed on your website.
-   [Pathfora SDK](https://lytics.github.io/pathforadocs/) installed on your website. If you're using Lytics for personalized modals, this is already done for you!
-   Content classified in your Lytics account (go to the content section of your Lytics account to check if we've classified your content).
-   A valid API token for your Lytics account ([learn about managing API tokens](/docs/lytics/access-tokens)). For ease of use we suggest adding as an environment variable in your command line:

```
export LIOKEY={API Token}
```

### 1\. Build a Content Collection

Before we go crazy adding recommendations to your website we should think about what kind of content we want to allow for recommendation. Lets create a dynamic set of content that will be the target pool of documents for this content recommendation block.

To do this, we can use the [Lytics Segment API](/docs/lytics/segment-api) create endpoint.

```
curl -s -XPOST "https://api.lytics.io/api/segment" 
  -H "Content-type: text/plain" 
  -H "Authorization: $LIOKEY" 
  -d '
FILTER AND (
  path CONTAINS "froyo/flavors"
)
FROM content
ALIAS froyo_content
' | jq '.'
```

In the command above, we made a POST request to create a new segment on the content table, or as we call it - a content collection. We used [Segment QL](/docs/lytics/lytics-query-language) to define the filter on the content in your account. In the example above, we're only accepting urls that contain the path `froyo/flavors`. Simple enough, right? If you've used the [Audience builder](/docs/lytics/audiences) you may notice that the logic for building a segment is essentially the same format.

Here's a more complex example:

```
FILTER AND (                    // AND operator on the following statements
  global CONTAINS "strawberry"  // require the topic strawberry
  global CONTAINS "vanilla"     // require the topic vanilla
  path CONTAINS "posts"         // url must contain the path "/posts/"
  published > now-30d           // require published in the last 30 days 
)
FROM content                    // entities from the content table
ALIAS strawberry_vanilla        // saved name of the collection
```

You're probably wondering where these field names are coming from! These are the standard fields used in our content table. Here's a list of relevant fields you might use in building a content collection:

| fieldname | type | description |
| --- | --- | --- |
| global | map\\\[string\]number | a map of topics for the document and their relevance scores |
| aspects | \\\[\]string | type of document: eg. article, profile, video, etc |
| primary\\\_video | string | url of the primary video featured in the document |
| primary\\\_image | string | url of the primary (usually meta image) - can be displayed in recommendation |
| language | string | language of the documents |
| wordct | int | word count for the document |
| author | string | name of the author of the document |
| product\\\_description | string | description of the product (if the document is of type product) |
| price | string | price of the product (if the document is of type product) |
| description | string | title of the document |
| long\\\_description | string | meta description of the document |
| url | string | url of the document |
| path | \\\[\]string | list of paths within the url of the document |
| published | date | date when the document was published |
| fetched | date | date when the document was fetched and enriched by Lytics |
| type | string | source channel of the document (eg. web, email, etc) |

Also if you have access to your queries in the Data tab of the Lytics UI you can see how the raw data from the `lytics_content_enrich` stream is parsed.

### 2\. Set up an inline recommendation

To add inline content recommendations to your website all we have to do is draft some simple HTML. Pathfora will look for appropriately named data attributes, and replace the contents of these elements with recommendations from our APIs.

First lets look at a simple, quick example, then we'll break down what these attributes mean:

```
<div data-pfblock="froyo_1" data-pfrecommend="froyo_content">
  <img data-pftype="image" alt="frozen yogurt recommendation">
  <h2 data-pftype="title"></h2>
  <p data-pftype="description"></p>
  <p><a data-pftype="url">Read More...</a>
</div>
```

Here's a quick rundown of the relevant data attributes:

| attribute name | value description |
| --- | --- |
| data-pfblock | a unique name for a single recommended document (there may be multiple documents per page) |
| data-pfrecommend | id or slug (saved name ALIAS) of the source content collection |
| data-pftype | field of the document to set as the contents of that element (ex. url, title, description, image, author, published) |

`image` data-pftype attributes will set the `src` value if applied to an `img` element (as with the example above) or if used on a `div` or some other type of element it will set the `background-image` to be the primary image from the document.

Similarly, the `url` data-pftype attribute will set the `href` value to the url of the document if applied to an `a` tag, but otheriwse will set the innerHTML of the element.

### Multiple Recommendations

You may have seen a section on blogs "If you liked this, you may also like..." with a list of three or more related articles. This is a common use case for content recommendations. We repeat the same HTML pattern to create multiple recommendations in a set, just remember to change the `data-pfblock` value. If we have multiple recommendations using the same content collection then we will ensure that the same piece of content is not shown twice on one page.

Here's a more in depth example, with a little CSS this can be easily styled to match your website:

```
<h1>Recommended Content</h1>

<!-- Recommendation 1 of 2 -->
<div class="rec-block" data-pfblock="froyo_1" data-pfrecommend="froyo_content">
  <div class="rec-img" data-pftype="image"></div>
  <h2 data-pftype="title"></h2>
  <p class="rec-info">by <span data-pftype="author"></span> on <span data-pftype="published"></span></p>
  <p data-pftype="description"></p>
  <p><a data-pftype="url">Read More...</a>
</div>

<!-- Recommendation 2 of 2 -->
<div class="rec-block" data-pfblock="froyo_2" data-pfrecommend="froyo_content">
  <div class="rec-img" data-pftype="image"></div>
  <h2 data-pftype="title"></h2>
  <p class="rec-info">by <span data-pftype="author"></span> on <span data-pftype="published"></span></p>
  <p data-pftype="description"></p>
  <p><a data-pftype="url">Read More...</a>
</div>
```

### Additional Notes

-   Our SDK may take a second to set the proper hide/show settings for inline elements. If you experience a "flicker" where elements are being rapidly shown then hidden and shown again you can add the following CSS line to your website to prevent this:

```
[data-pftrigger], [data-pfrecommend] { display: none; }
```

This exact CSS gets loaded by Pathfora, but adding it to your CSS ensures that elements are hidden as the document is loaded.

-   Since this is primarily a developer use case we don't provide any native reporting of inline recommendations at the moment, however it is super simple to link this up to send interaction data to Lytics or Google Analytics. Check out our [Lytics Javascript Tag documentation](/docs/developers/sdks/lytics/web/lytics-javascript-tag) for more.
-   If you'd like a "pre-baked" version of inline recommendations, we also have a version that's built from our personalize modules. You can find the documentation for this [here](https://lytics.github.io/pathforadocs/content_recommend/).
