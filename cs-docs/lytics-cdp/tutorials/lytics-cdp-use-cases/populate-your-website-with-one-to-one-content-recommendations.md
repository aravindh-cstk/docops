---
title: "Populate Your Website With One-to-One Content Recommendations"
description: "Populate Your Website With One-to-One Content Recommendations"
url: /lytics/populate-your-website-with-one-to-one-content-recommendations
uid: blt205402aae986270c
---

# Populate Your Website With One-to-One Content Recommendations

## Populate Your Website With One-to-One Content Recommendations

Content recommendations are a powerful tool to keep visitors engaged on your website. You can build an even deeper integration with Lytics content recommendations by embedding them directly onto your site.

In this guide, you will learn to implement [inline content recommendations](https://lytics.github.io/pathforadocs/inline_content/) using the Pathfora SDK.

![Inline Content Recommendation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am62d6fd60808e95f9/467c248f25a603c942f6ae09/img-0248.jpg)

You can download the complete HTML code for this example from the [Github examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/inline-content-rec).

### Build a Content Collection

Before you proceed, you will need to create a content collection. See the documentation on [content collections](/docs/lytics/content-collections) to learn how to build a collection. And the documentation on [using content collections for recommendations](/docs/lytics/recommendations) for instructions on how to get the ID of the collection, which you will need in the next step. The collection in this example contains product pages, so that the recommendation algorithm can recommend products to users based on their interests.

### Constructing The Recommendations

Start by thinking about how you want your content recommendations to look on the page. Check the [Pathfora documentation](https://lytics.github.io/pathforadocs/inline_content/) for the list of available fields that you may include in the presentation of your content. This example will include an image, title, description and a link to the product page.

![Inline Recommendation Block](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1dcfbb77b1d9b08e/85f663542b9024ba6ee644e4/img-0249.jpg)

Next determine how many recommendations you want to show on the page. Similar to [content modularization](/docs/lytics/personalize-the-messaging-of-your-website-based-on-audience), Pathfora uses the concept of groups and blocks, but this time in a slightly different context:

-   A **block** is a single unit of content (a single article, product, etc).
-   A **group** defines one or multiple blocks of content recommendations that pull recommendations from the same Lytics content collection. That is, the same content will not be repeated more than once in a group.

This example has four blocks in the group. These concepts map to the follow `data-` HTML attributes:

-   `data-pfblock` - A unique string name for a single recommendation block.
-   `data-pfrecommend` - The ID of the content collection. Blocks with the same `data-pfrecommend` value are considered part of the same group as they use the same content collection.

There is an additional attribute `data-pftype` which is applied to multiple elements within the block. This identifies what field Pathfora should use fill in the value of the element. See the [documentation](https://lytics.github.io/pathforadocs/inline_content/#attributes) for in in-depth breakdown of what fields are available and how they should be named.

Now consider this HTML example for a single recommendation block:

```
<li class="product" data-pfblock="product_rec_1" data-pfrecommend="{collection_id}">
  <img data-pftype="image" alt="product recommendation">
  <h4 data-pftype="title"></h4>
  <p data-pftype="description"></p>
  <a class="button" data-pftype="url">Buy<span class="icon"></span></a>
</li>
```

These appear to be empty elements, however once Pathfora makes the call to the Lytics content recommendation API it will fill in the elements accordingly. Setting the `src` attribute for the `img`, the `href` value for the `a` element, and the inner text of the title and description elements.

That's really all there is to it. You can repeat this code to include multiple blocks for multiple recommendations, and then style your recommendations accordingly.

```
<!-- Recommendations -->
<div class="recommendation-block">
  <div class="block-head">
    <img src="assets/offers-icon.png" alt="store icon">
    Recommended <span>just for you</span>
  </div>

  <ul class="block-inner">
    <!-- Product 1 -->
    <li class="product" data-pfblock="product_rec_1" data-pfrecommend="{collection_id}">
      <img data-pftype="image" alt="product recommendation">
      <h4 data-pftype="title"></h4>
      <p data-pftype="description"></p>
      <a class="button" data-pftype="url">Buy<span class="icon"></span></a>
    </li>

    <!-- Product 2 -->
    <li class="product" data-pfblock="product_rec_2" data-pfrecommend="{collection_id}">
      <img data-pftype="image" alt="product recommendation">
      <h4 data-pftype="title"></h4>
      <p data-pftype="description"></p>
      <a class="button" data-pftype="url">Buy<span class="icon"></span></a>
    </li>

    <!-- Product 3 -->
    <li class="product" data-pfblock="product_rec_3" data-pfrecommend="{collection_id}">
      <img data-pftype="image" alt="product recommendation">
      <h4 data-pftype="title"></h4>
      <p data-pftype="description"></p>
      <a class="button" data-pftype="url">Buy<span class="icon"></span></a>
    </li>

    <!-- Product 4 -->
    <li class="product" data-pfblock="product_rec_4" data-pfrecommend="{collection_id}">
      <img data-pftype="image" alt="product recommendation">
      <h4 data-pftype="title"></h4>
      <p data-pftype="description"></p>
      <a class="button" data-pftype="url">Buy<span class="icon"></span></a>
    </li>
  </ul>
</div>
```

![Inline Content Recommendation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am62d6fd60808e95f9/467c248f25a603c942f6ae09/img-0248.jpg)

Remember that the recommendation API will return different content for different users based on their affinities in Lytics. Be sure to test the style of your recommendation block with different pieces of content in your collection to ensure that it will work for content with or without an image, descriptions of varying size, etc. Or, you may choose to adjust your content collection accordingly.

### Additional Notes

As mentioned in the [content modularlization guide](/docs/lytics/personalize-the-messaging-of-your-website-based-on-audience), you may notice some flickering of elements when the page loads. This can happen if Pathfora library and subsequent requests it makes to the Lytics recommendation API is loaded after the DOM itself has loaded. To get around this, you can add the following line of CSS to your website:

```
[data-pftrigger], [data-pfrecommend]{ display: none; }
```

This ensures that all recommendation blocks are hidden upon page load, and once Pathfora has loaded it will populate the block with the content before showing it to the user.
