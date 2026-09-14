---
title: "Capture More Information from Qualified Leads"
description: "Converting a user from unknown to known is a key part of many marketing journeys. You can use Lytics web Experiences to capture user information. While…"
url: /lytics/capture-more-information-from-qualified-leads
---

# Capture More Information from Qualified Leads

## Capture More Information from Qualified Leads

Converting a user from unknown to known is a key part of many marketing journeys. You can use Lytics [web Experiences](https://dash.readme.com/project/lytics-cdp/v2.1/docs/lead-capture) to capture user information. While email is a great starting point, you may want to collect a bit more information from your user when they subscribe to your brand.

In this guide, you will learn how to create a widget with a custom form component. The example will offer users to subscribe to an newsletter email, and will include an email input field as well as list of checkboxes that can be used to select which topics to subscribe to.

![Custom Form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am50a97a3a2d1fec10/b263ea62f553f95438b0f2c8/custom-form.jpg)

You can download the complete JavaScript configuration, CSS, and [API override](/docs/lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides) command for this example from the [Github examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/custom-form).

Currently in the Lytics UI, you may only choose to include the following fields in your capture leads form:

-   Email (Email input)
-   Name (Text input)
-   Job Title (Text input)
-   Company (Text input)
-   Phone Number (Text input)
-   Message (Text area)
-   Country (Select box)

However, with the Pathfora SDK, or using API overrides, you can include any custom field of the following types:

-   Text input
-   Email input
-   Text area
-   Select box
-   Checkboxes
-   Radio buttons

### JavaScript Configuration

Begin with a configuration for a [form widget](https://lytics.github.io/pathforadocs/types/form/). Without defining any field customizations, Pathfora will default to using legacy form elements. However, you will be using [custom form elements](https://lytics.github.io/pathforadocs/customization/form/) in this guide.

```
var customFormWidget = window.pathfora.Form({
  id: "custom-form-widget",
  layout: "slideout",
  position: "bottom-left",
  className: "custom-form-widget",
  headline: "Sign up for our Newsletter",
  okMessage: "Subscribe"
});

window.pathfora.initializeWidgets([customFormWidget]);
```

This config will generate a simple slideout with a form containing some default fields.

![Legacy Form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amea61021d2feb6124/ce13109bcabe06ba8197fac5/legacy-form.jpg)

Once you have an idea of what form elements you want to include in your widget, you may use the [form builder drag and drop UI](https://lytics.github.io/pathforadocs/customization/form_builder/) provided in the Pathfora documentation to construct the form you wish to display. Each field can be marked as required and may have a label and name (used for as the primary key for tracking the field in Lytics and other external systems). Text fields may also include placeholder text, and for fields with multiple options you may define the display text and value of each option.

![Form Builder](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame57c9d410220ba85/6c0f5b80cc349793d284ff14/Screen_Shot_2019-07-03_at_1.12.50_AM.png)

Once you click **Save**, the builder will output the formElements field that you can simply copy and paste into your widget config. This UI is intended to help you save time when constructing configurations with custom forms.

![Form Builder Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0be2f2b9db79e36a/10164aead6b7701e6f5ceaa9/Screen_Shot_2019-07-03_at_1.17.42_AM.png)

```
var customFormWidget = window.pathfora.Form({
  // widget configuration
  formElements: [
    {
      "type": "text",
      "required": true,
      "label": "Email Address",
      "name": "email"
    },
    {
      "type": "checkbox-group",
      "required": true,
      "label": "Which feeds would you like to subscribe to?",
      "name": "subscription_feeds",
      "values": [
        {
          "label": "Beauty & Perfumes",
          "value": "beauty"
        },
        {
          "label": "Electronics",
          "value": "electronics"
        },
        {
          "label": "Fashion",
          "value": "fashion"
        }
      ]
    }
  ]
});
```

### Styling Tweaks

You may style the form using [custom CSS](/docs/lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides). The example in this guide applies some small CSS changes to adjust the size and spacing of elements within the widget.

Remember you can [download the code for this example](https://github.com/lytics/pathforajs-examples/tree/master/examples/custom-form) to get the complete JavaScript, CSS, and API override. This can act as a starting point for your own custom form widget

![Custom Form](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am50a97a3a2d1fec10/b263ea62f553f95438b0f2c8/custom-form.jpg)

Once you've tested and are happy with the look and feel of your form slideout, it's time for the most important step: defining the Lytics audience that should receive this experience.

### Defining the Lytics Audience

The example widget in this guide will be targeted at an audience of anonymous users with a [high intensity](/docs/lytics/behavioral-scores-1#intensity). Remember to [update your config with the audience slug](https://lytics.github.io/pathforadocs/targeting/) you wish to serve the widget to.

Alternatively, you may build your widget as a [web personalize Experience](/docs/lytics/experiences#lytics-experiences) with the **Capture Leads** tactic in the Lytics UI and apply the formElements setting with an API override.
