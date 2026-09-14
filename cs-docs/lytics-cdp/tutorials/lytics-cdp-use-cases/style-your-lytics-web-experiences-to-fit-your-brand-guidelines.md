---
title: "Style your Lytics Web Experiences to Fit Your Brand Guidelines"
description: "Style your Lytics Web Experiences to Fit Your Brand Guidelines"
url: /lytics/style-your-lytics-web-experiences-to-fit-your-brand-guidelines
---

# Style your Lytics Web Experiences to Fit Your Brand Guidelines

## Style your Lytics Web Experiences to Fit Your Brand Guidelines

[Lytics web Experiences](/docs/lytics/experiences) are meant to provide a very simple way for marketers to spin up personalized content on their website. [The Experience editor](/docs/lytics/experiences) includes some very simple options for customizing the look and feel of your Experience. But if your website has specific style guides, you may prefer to make some CSS adjustments to the Experience.

In this guide, you will learn how to construct a global stylesheet to establish a base set of styles for any Lytics Web Experience that you add to your website. In addition, this guide will cover how to write more specific styles for a single unique widget, and how to troubleshoot common issues when writing CSS for a Lytics web Experience.

![Bar and Slideout Styles](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3346636e270ac10a/9461e043dc8f5fbe3fe37aef/img-0313.jpg)

You can download the completed CSS and a JavaScript configuration for testing this example from the [GitHub examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/custom-css).

### Defining a Global Stylesheet

If you are planning to implement many web Experiences on your site, you will want to establish a stylesheet that will lay out the foundation for common CSS rules among them. It may help to generate an Experience or Pathfora config of each layout, and think about what you want to augment for each. The example JavaScript configuration in this guide includes a slideout, bar, gate, and modal widget to test against.

![Slideout Bar Unstyled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amedbbb1c5427a685a/b7562a711f2fae3ed88acf27/img-0314.jpg)

![Gate Unstyled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am56dae9dbc44a05b9/4bc7160735968d417516da07/img-0315.jpg)

![Modal Unstyled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am597c01d735f0ead5/068671d4745eac05b1504827/img-0316.jpg)

The stylesheet in this guide will be kept light, by simply adding a background image to all widgets and tweaking some colors and font styles and sizes of common widget elements. However as you can imagine, you can go even further to change any aspect of the widget including the size or positioning. For reference, the [Pathfora SDK documentation](https://lytics.github.io/pathforadocs/customization/css/#key-class-names) provides a robust list of all of the class names of elements used in Pathfora widgets.

Start by adding some general styles you would like to apply to all widgets. `pf-widget` is the class name applied to the highest level `div` element of all Pathfora widgets. `pf-widget-content` is the first child element. For slideouts, the `pf-widget-content` is essentially wraps the same area as `pf-widget`. However for modal and gate style widgets, `pf-widget` wraps the entire page with a background overlay while `pf-widget-content` contains the modal content itself.

```
.pf-widget .pf-widget-content {
  background: url("assets/subtle-background.jpg") no-repeat;
  background-size: cover;
  font-family: "Helvetica Neue", "Arial" sans-serif;
  color: #666;
  border-radius: 0px;
  box-shadow: 0 0px 7px 0px rgba(0,0,0,0.3);
}
```

![Bar Unstyled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambbf707de7dadd4a4/bbccdb3e033d49f03048a11e/img-0317.jpg)

There's a problem though, widgets with the bar layout don't have a `pf-widget-content` div. So you can adjust the selector for the above styles as follows:

```
.pf-widget-bar.pf-widget, .pf-widget .pf-widget-content
```

![Background Image](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama928aacb24684cd5/d1cece700cc0a383b6920865/img-0318.jpg)

Next apply some additional styles to the call to action buttons. `pf-widget-btn` is the class name used on all Pathfora buttons, however `pf-widget-ok` selects the first, primary CTA button.

```
.pf-widget .pf-widget-btn.pf-widget-ok {
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0);
  font-weight: normal;
  background-color: #5a88ca;
  border: 0;
  color: white;
  font-size: 16px;
}

.pf-widget .pf-widget-btn.pf-widget-ok:hover {
  background-color: #666;
}
```

Lastly add some styles to match the color of the headline with the widget text, and minimize the size of the the [widget footer text](https://lytics.github.io/pathforadocs/api/methods/#type-configuration-methods) when it is not being used.

```
.pf-widget .pf-widget-headline {
  color: #666;
}

.pf-widget .pf-widget-footer {
  height: 0;
  margin: 0;
}
```

![Bar and Slideout Styles](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3346636e270ac10a/9461e043dc8f5fbe3fe37aef/img-0313.jpg)

These styles will cover future widgets you wish to build on the website. As you are building your own stylesheet, if you run into issues, while testing your CSS please refer to the [troubleshooting section](#troubleshooting-and-selector-specificity).

### Widget Specific Styles

Using the Experience Editor or the Pathfora SDK, you can define a custom class name for your widget. With this class name, you can style specific elements that are unique to that widget. Always preface your selector with the `pf-widget` class name to ensure that you don't accidentally effect other elements on your website:

```
.pf-widget.your-custom-class
```

For a full in-depth example of specific widget styles, see the [image customization guide](/docs/lytics/customize-your-web-experiences-with-branded-images).

### Troubleshooting and Selector Specificity

A common problem when writing CSS for Pathfora widgets is providing the correct level of specificity when selecting the element to style. If you've ever written a line of CSS and expected to see the change applied but didn't - this section is for you. The default CSS that the Pathfora library ships with is deliberately specific so that it is careful to not effect any other part of your website.

The main side effect of this is that developers wishing to override the default styles must pay special attention to their selectors or employ the use of `!important` to override the default styles of the library.

Consider the following example using `!important`:

```
.custom-class .pf-content-unit h4 {
  font-weight: normal !important;
  font-style: italic;
}
```

The selector here is short and simple. However, because the the bold `font-weight` is embedded in a deeper selector in the Pathfora base styles, you have to override it with `!important`.

For reference, these is the relevant snippet of styles in the Pathfora CSS:

```
.pf-widget-variant-3 .pf-content-unit .pf-content-unit-meta h4 {
  font-weight: 500;
  margin: 0 0 5px;
  line-height: 1.4;
  color: #444;
}
```

Now consider how you would need to write this CSS without using `!important`:

```
.pf-widget.custom-class.pf-widget-variant-3 .pf-content-unit .pf-content-unit-meta h4 {
  font-weight: normal;
  font-style: italic;
}
```

This is a ridiculously long selector! However the advantage is you no longer need to know which styles need to be overwritten with `!important`.

Both techniques are valid and will result in the same changes to your widget. Feel free to use whatever method is easiest for you. Keep in mind if you are using SASS, LESS, or some other CSS pre-processor that allows for nested selectors, what would longer selectors may be easier to interpret.

If you're not a fan of `!important`, continue reading for an in-depth look at how to easily derive the required level of specificity for your selector.

#### Utilizing Chrome Developer Tools

The best way to determine how to override a default style is to look the conflicting style from the CSS of the library. You can access the style sheet in the [Pathfora GitHub repository](https://github.com/lytics/pathforajs) which is open source, but it may be easier to debug your CSS using the [Inspect Element](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/) feature in Google Chrome developer tools.

![Inspect Element](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2e806dd8f911ad19/09489f8d81afa3c7eafbc773/img-0319.jpg)

Locate the relevant element in your widget by clicking on it while in the element selection mode in developer tools. You may also find it by navigating through the HTML source under the `Elements` tab. Examine the `Styles` tab for that element to see where the conflicting style is. Once you've located it, copy the selector and paste it in to your style sheet for modification.

```
.pf-widget-variant-3 .pf-content-unit .pf-content-unit-meta h4
```

Then simply add the custom class of your widget accordingly to the selector:

```
.pf-widget.custom-class.pf-widget-variant-3 .pf-content-unit .pf-content-unit-meta h4
```

Add your rules, save your stylesheet, and test that the changes in the browser. Remember, you can always consult the [Lytics Support team](https://support.lytics.com/) for assistance when debugging CSS for your Web Personalize Experiences.
