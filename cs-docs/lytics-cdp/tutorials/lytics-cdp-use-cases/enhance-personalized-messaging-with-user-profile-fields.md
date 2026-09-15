---
title: "Enhance Personalized Messaging with User Profile Fields"
description: "Enhance Personalized Messaging with User Profile Fields"
url: /lytics/enhance-personalized-messaging-with-user-profile-fields
uid: blt5825c2c70458411e
---

# Enhance Personalized Messaging with User Profile Fields

## Enhance Personalized Messaging with User Profile Fields

Targeting Lytics audiences with web Experiences allows you to achieve a level of personalized messaging to a group of users based on their common behaviors or interests. However, you can further personalize your Experiences at a one-to-one level by including specific user profile fields in the messaging for your widgets.

In this guide, you will create a bar widget containing a coupon code unique to the user using [entity field templates](https://lytics.github.io/pathforadocs/customization/entity_fields/). This code must be a field on the Lytics user profile to display it in the widget.

![Bar with Coupon Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8967ec0a82aafd71/eca2a50464ae250354b370d5/img-0077.jpg)

This technique can be used to include any user field inline within a widget in the headline, message, or CTA link of an experience. Another common example may be to greet the user by their first and/or last name if the data is available in Lytics.

You can download the complete JavaScript configuration and [API override](/docs/lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides) command for this example from the [Github examples repository](https://github.com/lytics/pathforajs-examples/tree/master/examples/entity-template). User field templates are also natively supported by [web personalize Experiences](/documentation/product/features/experiences/overview) in the Lytics UI.

### Javascript Configuration

Begin with a generic widget configuration containing a static coupon code in the message field.

```
var entityTemplateWidget = window.pathfora.Message({
  id: "entity-template-widget",
  layout: "bar",
  position: "bottom-fixed",
  className: "entity-template-widget",
  msg: "Use code <strong>FREE2019</strong> for free shipping on your next purchase!",
  okMessage: "Get Free Shipping!",
  cancelShow: false
});

window.pathfora.initializeWidgets([entityTemplateWidget]);
```

This config will generate a bar widget with a CTA. You can use the [`confirmAction` callback](https://lytics.github.io/pathforadocs/callbacks/#confirmaction) to redirect the user to a checkout page with the static coupon code applied via a query parameter.

```
var entityTemplateWidget = window.pathfora.Message({
  // widget configuration
  confirmAction: {
    callback: function () {
      window.location.href = "https://yourwebsite.com/checkout?code=FREE2019";
    }
  }
});
```

![Coupon Applied](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8f8512cd2d67325e/bf939b7cce223625e6cb5d8e/img-0078.jpg)

To customize this coupon code per user, you can access a field by the field name (in this example, `offer_code`) from the current user's Lytics profile using the bracket notation.

Fields that you wish to use in the template of your widget must be [surfaced](/documentation/product/features/user-profiles/user-profiles/surfacing-user-fields) first.

```
var entityTemplateWidget = window.pathfora.Message({
  id: "entity-template-widget",
  layout: "bar",
  position: "bottom-fixed",
  className: "entity-template-widget",
  msg: "Use code <strong>{{offer_code}}</strong> for free shipping on your next purchase!",
  okMessage: "Get Free Shipping!",
  cancelShow: false,
  confirmAction: {
    callback: function () {
      window.location.href = "https://yourwebsite.com/checkout?code={{offer_code}}";
    }
  }
});

window.pathfora.initializeWidgets([entityTemplateWidget]);
```

![Bar with Coupon Code](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8967ec0a82aafd71/eca2a50464ae250354b370d5/img-0077.jpg)

You may use this bracket notation in the [Choose URL](/documentation/product/features/experiences/experience-editor/choose-url) step of the Experience editor. So there is no need to make API overrides for this use case.

You may be wondering, what happens when the current user does not have the field `offer_code` on their profile? There are a couple ways to handle this:

1.  Simply [ensure that the targeting audience](#define-the-lytics-audience) requires that the field in question exist.

1.  You can define a [fallback value](https://lytics.github.io/pathforadocs/customization/entity_fields/#defining-a-fallback-default-value). This is a default static value to be shown if `offer_code` does not exist on the user profile, use the following notation: `{{offer_code | FREE2019}}`

1.  Alternately, you may set the display condition [`showOnMissingFields`](https://lytics.github.io/pathforadocs/display_conditions/#showonmissingfields) via the JavaScript configuration if you are using the SDK, or via an [API override](/docs/lytics/unlock-additional-web-personalization-features-with-lytics-api-overrides) if you are using the Lytics UI.

### Testing the Personalized Widget

Testing widgets that contain user profile fields can be tricky. If you are using the Pathfora SDK, it may help to use the [`pathfora.customData` object](https://lytics.github.io/pathforadocs/customization/entity_fields/) to simulate the user field data during the development process.

```
window.pathfora.customData = {
  "offer_code": "FREE2984712312"
};
```

Alternatively, add the `offer_code` field to your current profile by sending an API request to the data stream which contains the raw data for the field with the appropriate identifier (usually `_uid`).

You can use the `jstag.getid()` function in the developer console of your website which has the Lytics JStag loaded to get your `_uid`.

Here is an example API call to add the `offer_code` field via the `default` stream.

```
curl -XGET http://c.lytics.io/c/{lytics_account_id}/default?offer_code=FREE324234234&_uid=={uid_here}
```

This example makes a request to the Lytics collector API for your account. If `offer_code` is mapped in the LQL for the stream `default`, and `_uid` is a unique identifier for the stream, it should add the value `FREE324234234` to the user profile. Once you see it show up in your user profile in the Lytics UI, refresh your website to ensure that the widget is populated with the new field value.

![Enity Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am019ed932fe657c60/9d39b766ad8822c8e3f04a1e/img-0079.jpg)

### Define the Lytics Audience

The example widget in this guide will be targeted at an audience of high LTV customers who have the user profile field `offer_code`. Remember to [update your config with the audience ID](https://lytics.github.io/pathforadocs/targeting/) you wish to serve the widget to if you are using the Pathfora SDK.
