---
title: "Mixpanel"
description: "Mixpanel"
url: /lytics/mixpanel
---

# Mixpanel

## Mixpanel

## Overview

Mixpanel is an analytics platform for mobile and web. It helps businesses understand how their users behave and use their products by tracking actions that people take rather than page views. With Lytics, you can import customer profiles and events collected in Mixpanel in order to build custom segments.

### How to Import Data from Mixpanel into Lytics:

1.  Navigate to the Mixpanel integration in the integrations section of Lytics. ![Mixpanel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9126494164b2951f/bdba0bce0ad8d2935dd6ce39/img-0215.png)

1.  Connect Mixpanel to Lytics by entering your API Key and Secret. (You will only do this once.) ![api](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3821dc63df03740a/26125b233234be9f7a614f55/img-0216.png) These can be found in your Mixpanel admin under _Account_ -> _Projects_. ![account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambe713a16f5d1765e/92601ebc6f2a1b554acbea07/img-0217.png)

1.  After you have connected your Mixpanel account to Lytics, you can start importing data. Select _Import Data_ under Actions. ![import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amad973ede395b8ede/d19921b9a93997da048dfbea/img-0218.png)

1.  After you have selected your account, you can begin your import by simply selecting _Start Import_. When you start the import, we will bring in all of your user profiles and events. We will import new events and profiles once a day going forward.

**NOTE:** Since the majority of your data will be custom fields, our team will need to do a little bit of work to process the data. In order to speed this up, please contact our [Customer Success](mailto:support@lytics.com) team and let them know that you would like to import your custom Mixpanel data.

![import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amedcdbc2bb333e11b/65d3dbb0126978304e362748/img-0219.png)

Advanced Options: This field is not required

-   Filter: If you don't want to pull in all events, you can specify events to import. To learn more about this parameter, you can see the [Mixpanel documentation](https://mixpanel.com/docs/api-documentation/exporting-raw-data-you-inserted-into-mixpanel).

### How to Export Data from Lytics into Mixpanel

To export an audience, leverage the Lytics [JavaScript](/docs/developers/sdks/lytics/web/lytics-javascript-tag) tag.

With the JavaScript callback function, you can pass audience membership from Lytics to the Mixpanel tag using the appropriate field set up to accept Lytics audience data.
