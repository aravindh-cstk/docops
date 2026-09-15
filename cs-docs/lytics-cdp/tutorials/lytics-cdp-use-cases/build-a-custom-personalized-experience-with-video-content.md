---
title: "Build a Custom Personalized Experience With Video Content"
description: "Walks through building a Lytics Pathfora widget modal that embeds video content, including the onLoad callback JavaScript needed to insert and style a video element, so you can serve personalized video experiences to a targeted Lytics audience."
url: /lytics/build-a-custom-personalized-experience-with-video-content
uid: blt8f9e8ec16b7290ae
---

# Build a Custom Personalized Experience With Video Content

## Build a Custom Personalized Experience With Video Content

Video content is a great way to capture your users' attention. Serving your videos to a Lytics audience of users at who are likely to be interested in the content is sure to boost engagement.

In this guide, you will learn how to create a widget with a video component. While videos are not natively supported by the [Pathfora SDK](https://lytics.github.io/pathforadocs/) or [Lytics Experiences](https://docs.lytics.com/documentation/product/features/experiences/overview), you can utilize a callback function to load a video with JavaScript. This callback can be applied to an Experience built through the UI with an [API override](/docs/lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides).

![Video Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf1890e28dfa62144/65118ab607966b04f67a3435/img-0036.png)

Follow along with the video guide below or this written guide. You can download the complete JavaScript configuration, CSS, and API override command for this example from the [GitHub examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/video).



### Javascript Configuration

Begin with a generic widget configuration.

```
var videoWidget = window.pathfora.Message({
  id: "video-widget",
  layout: "modal",
  className: "video-widget",
  headline: "iPhone XR available now",
  msg: "Get yours, or a discount on all previous models today from <strong>MEGASTORE</strong>.",
  okShow: true,
  okMessage: "Shop iPhones",
  cancelShow: false,
});

window.pathfora.initializeWidgets([videoWidget]);
```

This config will generate a simple modal, with a headline, message and call to action.

![Simple Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am421f33016e7bd215/9f4fed2bb8785ebd1651cd08/img-0037.png)

To add a video to the modal, you can define an [onLoad callback function](http://lytics.github.io/pathforadocs/callbacks/#onload). This function is called just before the modal appears on the user's screen, and the variables passed to the function as arguments include the widget's DOM element, which you will append the video element to.

```
var videoWidget = window.pathfora.Message({
  // config settings ...
  onLoad: function (event, module) {
    // add the video element
  }
});
```

Start by creating a `div` element which will later contain your video element. You may want to add a class name such as `pf-widget-video` to style this div later. Next set the `innerHTML` of the div with the code for your video. Note that you'll need to escape quotes within the HTML when transforming it to a JavaScript string.

```
onLoad: function (event, module) {
  // create a div for the video
  var videoDiv = document.createElement("div");
  videoDiv.className = "pf-widget-video";

  // place the video in the div
  videoDiv.innerHTML = "<iframe src=\"https://www.youtube.com/embed/tG7vx7-3sl0\" frameborder=\"0\" allowfullscreen></iframe>";
}
```

Now that you have the video element within a `div`, simply insert the `div` into the widget. You can access the DOM node for the widget using the `widget` field on the second argument, in this case `module.widget`. From there you will want to select two elements with the class names:

-   `pf-widget-content` the main div that contains content of the widget.
-   `pf-widget-text` a child div of `pf-widget-content`, which contains the text content of a widget.

Using the [`insertBefore` function](https://www.w3schools.com/jsref/met_node_insertbefore.asp), you can insert the div containing your video into the main content div, before the text of the widget.

```
onLoad: function (event, module) {
  // create a div for the video
  var videoDiv = document.createElement("div");
  videoDiv.className = "pf-widget-video";

  // place the video in the div
  videoDiv.innerHTML = "<iframe src=\"https://www.youtube.com/embed/tG7vx7-3sl0\" frameborder=\"0\" allowfullscreen></iframe>";

  // append the div to the widget node
  var content = module.widget.querySelector(".pf-widget-content");
  var text = module.widget.querySelector(".pf-widget-text");
  content.insertBefore(videoDiv, text);
}
```

With this new config you should now have a modal with a video! But it could probably use CSS to make it look cohesive.

![Video Unstyled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0e2890689a1409f1/3cf07dcb3feecc3cc51b21dd/img-0038.png)

### Styling the Video Modal

With some additional CSS work, you can style the video to fit your modal. [Download the code for this example](https://github.com/lytics/pathforajs-examples/tree/master/examples/video) to see how you can style the video to be side by side with the text of your modal.

![Styled Video Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf1890e28dfa62144/65118ab607966b04f67a3435/img-0036.png)

Once you've tested and are happy with the look and feel of your video modal, it's time for the most important step: defining the Lytics audience that should receive this modal.

### Define the Lytics Audience

The example widget in this guide will be targeted at audience of users with a high [content affinity score](https://docs.lytics.com/understanding/product-docs/content-affinity-engine/user-level-topic-affinities) for iPhones, the product that the modal is promoting. Remember to [update your config with the audience slug](https://lytics.github.io/pathforadocs/targeting/) you wish to serve the widget to.

Alternatively, you may build your widget as a [web personalize Experience](https://docs.lytics.com/understanding/product-docs/orchestrate/experience-editor-providers-and-tactics#lytics) in the Lytics UI and apply the `onLoad` callback with an [API override](/docs/lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides).
