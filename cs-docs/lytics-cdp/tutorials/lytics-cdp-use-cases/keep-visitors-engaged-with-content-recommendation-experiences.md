---
title: "Keep Visitors Engaged with Content Recommendation Experiences"
description: "Keep Visitors Engaged with Content Recommendation Experiences"
url: /lytics/keep-visitors-engaged-with-content-recommendation-experiences
---

# Keep Visitors Engaged with Content Recommendation Experiences

## Keep Visitors Engaged with Content Recommendation Experiences

Lytics [content recommendations](/reference/content-recommendation) are a powerful tool for personalization. They enable you to engage your visitors with the most relevant content based on their interests. Lytics web personalize Experiences support content recommendations natively, but with [API overrides](/docs/lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides) or the [Pathfora SDK](https://lytics.github.io/pathforadocs/), you can further customize the look and feel of recommendations in your widget.

In this guide, you will build a recommendation modal to reel users back in when they are thinking about leaving your website. You'll learn how to customize such a widget with custom CSS and additional display fields such as the name of the author and the publication date.

![Content Recommendation Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8df2fca665b87dd9/2f842100c2fd959e22216f54/img-0173.jpg)

You can download the complete JavaScript configuration, CSS, and API override command for this example from the [GitHub examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/content-rec).

### JavaScript Configuration

Start with a basic message modal configuration. The goal of this Experience is to entice users to stay on your website, so you may want to use the [`showOnExitIntent` display condition](https://lytics.github.io/pathforadocs/display_conditions/#showonexitintent) to only show the modal when the user is about to leave the page.

```
var contentRecWidget = window.pathfora.Message({
    id: "content-rec-widget",
    layout: "modal",
    className: "content-rec-widget",
    headline: "Wait! Before you go...",
    msg: "... We think you may like this. Maybe check it out before you leave.",
    okShow: false,
    cancelShow: false,
    displayConditions: {
      showOnExitIntent: true
    }
  });

  window.pathfora.initializeWidgets([contentRecWidget]);
```

![Modal with no Recommendations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame5bd2b2df9a74238/b6948d645ef551233ce78362/img-0174.jpg)

Before you proceed, you will need to create a content collection. See the documentation on [content collections](/docs/lytics/content-collections) to learn how to build a collection and the documentation on [using content collections for recommendations](/reference/content-recommendation) for instructions on how to get the ID of the collection, which you will need in the next step. The collection in this example contains blog posts that have been published within the last year.

Now to set up the recommendations in the config. Add the [recommend](https://lytics.github.io/pathforadocs/content_recommend/#recommend) and [variant](https://lytics.github.io/pathforadocs/layouts/modal/#variant) settings to your config. Then add the collection ID and set the `visited` setting to `false`. This setting ensures that Lytics recommendations only return content that the user has not already visited.

```
var contentRecWidget = window.pathfora.Message({
    // widget configuration
    variant: 3,
    recommend: {
      visited: false,
      collection: "{your_collection_id}"
    }
  });
```

![Basic Recommendation Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama2264a57d145e414/7cc5326734ac9d7490cf24f5/img-0175.jpg)

Now you will have a basic modal with content recommendations displaying on exit intent. Since the example displays blog content, you may also want to show the date that the article was published and the author name. To do so, you can add the `display` object to your configuration.

```
var contentRecWidget = window.pathfora.Message({
    // widget configuration
    variant: 3,
    recommend: {
      visited: false,
      collection: "{your_collection_id}",
      display: {
        date: true,
        author: true
      }
    }
  });
```

You can even add some additional settings to style the date, and extend the amount of text shown in the article description.

```
var contentRecWidget = window.pathfora.Message({
    // widget configuration
    variant: 3,
    recommend: {
      visited: false,
      collection: "{your_collection_id}",
      display: {
        date: true,
        author: true,
        dateOptions: { 
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        },
        descriptionLimit: 220
      }
    }
  });
```

![Unstyled Content Recommendation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am99da8dc54b4f27af/d775dbd54b0aa8fbd8d462d1/img-0176.jpg)

Check out the [Pathfora content recommendations documentation](https://lytics.github.io/pathforadocs/content_recommend/) to see the full list of settings you can apply to customize your content recommendation widget.

### Styling the Recommendation Modal

In this example, we will make some small adjustments to soften the look of the content recommendations. You can download the styles for this example from [GitHub](https://github.com/lytics/pathforajs-examples/tree/master/examples/content-rec).

![Content Recommendation Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambeb6d2d1b0754263/c4a15d7b5e6f549e648762cb/img-0177.jpg)

When writing your own custom styles, remember that different users will see a different pieces of content based on interests. Be careful when adjusting the size of things like the image in relation to the text. Images from different articles may be of a different size, and text descriptions may vary in length if not controlled by the `descriptionLimit` setting.

Be sure to test your modal with multiple different content items. You can do this by adding the [`shuffle` setting](https://lytics.github.io/pathforadocs/content_recommend/#recommend) to your config, which will change the content every time you see the modal. You may also want to ensure that all content in your collection has similar image sizes if you do want to adjust its styles in the modal.

![Content Recommendation Modal Alternate Content](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8df2fca665b87dd9/2f842100c2fd959e22216f54/img-0173.jpg)

### Define the Lytics Audience

The example widget in this guide will be targeted at users in the [Likely to Reengage characteristic](https://learn.lytics.com/understanding/faq#what-are-characteristics). Remember to update your config with the audience slug you wish to serve the widget to.

Alternatively, you may build your widget as a [web personalize Experience](/documentation/product/features/experiences/experience-editor/providers-and-tactics#lytics) in the Lytics UI with the **Recommend Content** tactic and apply the `recommend.display` setting with an API override. See the [Github Repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/content-rec) for the exact override command.
