---
title: "Personalize the Messaging of your Website Based on Audience"
description: "Personalize the Messaging of your Website Based on Audience"
url: /lytics/personalize-the-messaging-of-your-website-based-on-audience
uid: blt5e7b55c2e8626980
---

# Personalize the Messaging of your Website Based on Audience

## Personalize the Messaging of your Website Based on Audience

Lytics [web Experiences](/docs/lytics/experiences) are a great way to quickly spin up a modal or slideout on your website with personalized messaging. For a deeper personalized experience, you can take it a step further by tailoring inline elements on your web page towards different Lytics audiences using the [Pathfora SDK](https://lytics.github.io/pathforadocs/).

In this guide, you will learn how to implement [inline content modularization](https://lytics.github.io/pathforadocs/toggle/) which will show and hide different pieces of content on your website based on a user's audience membership. This example will provide content for following audiences: high momentum users, first time visitors, and users who have recently abandoned their cart during checkout.

![Inline Content Modularization diagram](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb1015d1c2248b697/044aecd847bd83a1cf67788e/img-0241.jpg)

You can download the complete HTML code for this example from the [Github examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/inline-content-mod). This example could also be implemented using Pathfora widgets with the [inline layout](https://lytics.github.io/pathforadocs/layouts/inline/). An example JavaScript configuration is included should you wish to try the alternate implementation. However, this guide will focus on the HTML solution, as it is often the preferred method given that the development process is very similar to adding a new section to your website, and there is no pre-defined structure of the content that may be displayed.

### Defining your Audiences and Content

In this example you will use three audiences to determine what content should be shown in a section to the right of the main hero for the website. This is a small scale example, but as you can imagine this technique could be applied to multiple, major parts of your website to completely customize the site for your users.

Before your team does any design or copy writing it may help to determine which key Lytics audiences you would like to target. If your organization has the concept of "personas" you may want to think about how your website should communicate and look to each of these personas and then build or use existing audiences that represent these user archetypes. Regardless of the scale of your project, the audiences should inform the messaging.

Audiences used for inline content modularization must be [API Enabled](/docs/lytics/audiences) and have an API ID. You will need to know the IDs of your audiences for the next step.

Once you have finalized the audience definitions, designs, and copy for your inline personalized modules, simply start by building out the content as you normally would with HTML and CSS on your website. Start with the content to be displayed to a single audience. This is the HTML example of content displayed to first time visitors of the website:

```
<div class="feature-block">
  <div class="block-head">
    Thanks <span>for visiting</span>
  </div>
  <div class="block-inner">
    <img class="feature-image" src="assets/iphone.png" alt="iPhone">
    <p>Check out our new products. We provide the highest quality in everything from the newest smart phones to your favorite brand of shoes.</p>
    <a class="btn" href="shop.html">Shop Now</a>
  </div>
</div>
```

![First Visit Block](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambaf4ce96c5ccab88/bf3997e0453de4ad8bb749e9/img-0242.jpg)

Go ahead and build out all the code for each of your audiences. It may help to comment out the options that will be shown to different audiences as you go, so that you can simulate what an end user in each audience will see instead of viewing all personalized content options at once.

### Implementing Content Modularization

When all of your content is good to go it's time to apply the audiences. Consider the following definitions:

-   A **block** is a unit of content to be displayed to a single audience within a group.
-   A **group** may be made up of one or many content blocks, each with unique audiences. The end user will only be able to see one block on the webpage per group. Thus blocks within a group might need to be formatted similarly as they will take up the same space on the page.

In the example code, there is a single group which will control the content displayed to the right of the hero, and four blocks within that group: one for each audience, and a fourth block to be displayed to users who are not a member of any of the audiences associated with the other blocks in the group. These concepts map to code with the following `data-` attributes:

-   `data-pftrigger` - The ID of the audience you wish to display the block to. Each unique value for this attribute defines the element as different block within the group.
-   `data-pfgroup` - A string name unique to the group which differentiates it from other personalization groups defined on the page. This name should be descriptive regarding a commonality between its content blocks such as placement on the page.

Remember to check out the [Pathfora documentation](https://lytics.github.io/pathforadocs/toggle/#attributes) for more information on these attributes and additional code examples. Putting it all together, here's what the full content modularization example code looks like:

```
<!-- High Momentum block-->
<div class="feature-block" data-pfgroup="right_hero_feature" data-pftrigger="high_momentum">
  <div class="block-head">
    Get new coupons <span>every month</span>
  </div>
  <div class="block-inner">
    <img class="feature-image" src="assets/money.png" alt="Save Money">
    <p>Want to get monthly coupons for up to 30% off your order every month? Sign up below to subscribe to our coupon mailing list.</p>
    <a class="btn" href="signup.html">Sign Up</a>
  </div>
</div>

<!--First Time Visitors block-->
<div class="feature-block" data-pfgroup="right_hero_feature" data-pftrigger="first_time_visitor">
  <div class="block-head">
    Thanks <span>for visiting</span>
  </div>
  <div class="block-inner">
    <img class="feature-image" src="assets/iphone.png" alt="iPhone">
    <p>Check out our new products. We provide the highest quality in everything from the newest smart phones to your favorite brand of shoes.</p>
    <a class="btn" href="shop.html">Shop Now</a>
  </div>
</div>

<!--Cart Abandoners block-->
<div class="feature-block" data-pfgroup="right_hero_feature" data-pftrigger="cart_abandoners">
  <div class="block-head">
    Get your order with <span>free shipping</span>
  </div>
  <div class="block-inner">
    <img class="feature-image" src="assets/basket.png" alt="Shopping Basket">
    <p>Looks like you were interested in purchasing a product on our site recently. We'd like to offer you free shipping on your current order. You're welcome!</p>
    <a class="btn" href="checkout.html">Apply Discount</a>
  </div>
</div>

<!--Default block-->
<div data-pfgroup="right_hero_feature" data-pftrigger="default">
  <!-- Default content here-->
</div>
```

Ordering of blocks does matter. For example, you may be wondering what would a user who has a high momentum score and has recently abandoned their cart would see using the example above? Pathfora will select the first item in the group that is applicable to the current user based on audience membership, thus the user would see the block targeted at high momentum users. If you wanted it to be possible for the user to see both content blocks at once you would need to define them in separate groups.

![High Momentum block](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7159ab985293992a/65e022f297ba0b719a5558c1/img-0243.jpg)

### Additional Notes

You may notice some flickering of elements when the page loads. This can happen if Pathfora library and is loaded after the DOM itself has loaded. To get around this, you can add the following line of CSS to your website:

```
[data-pftrigger], [data-pfrecommend]{ display: none; }
```

This ensures that all blocks are hidden upon page load, and once Pathfora has loaded it will set the proper display settings to show only the appropriate block for each group.
