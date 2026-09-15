---
title: "Surface Personalized Message"
description: "The Lytics Personalization Engine profiles real-time access to a comprehensive visitor profile. Before we jump into the weeds of how you can fully build…"
url: /lytics/developer-quickstart-4-personalized-message
uid: blt564fdf6d1e6ce4d1
---

# Surface Personalized Message

## Surface Personalized Message

The Lytics Personalization Engine profiles real-time access to a comprehensive visitor profile. Before we jump into the weeds of how you can fully build and leverage this profile, let's create our first experience.

## Surface a Simple Message

Lytics comes with our Personalization SDK called Pathfora. Pathfora allows you to easily surface simple lead capture and messaging modals or content directly inline. Full [documentation](https://lytics.github.io/pathforadocs/) for Pathfora is available, but initially, let's surface a welcome message to our **anonymous visitor** audience.

```
// jstag profiles a helper function to ensure that the Pathfora library
// has been loaded before triggering the experience.
jstag.on('pathfora.publish.done', function(topic, event){
  // here we initialize a new Pathfora "Message" experience
  var module = new pathfora.Message({
    id: 'sample-message-campaign', // this value will be collected along side all interactions and used in reporting
    layout: 'slideout', // for layout we'll use a small slide out
    position: 'bottom-left', // the model will enter and sit at the bottom left
    theme: 'dark', // css can be customized to brand but we'll use the default dark theme
    headline: 'Hello world!', // this will be the headline of our message
    msg: 'Congratulations on setting up your first targetted campaign using the Lytics Personalization Engine!', // the body of the message
  });

  var modules = {
    target: [{
      segment: "anonymous_profiles", // target only visitors with the anonymous_profile attribute
      widgets: [module]
    }]
  };

  pathfora.initializeWidgets(modules); // initialize the campaign
});
```

1.  Alter the Pathfora configuration to your liking.
2.  Install the Pathfora configuration onto your site via your preferred tag management method.
3.  Refresh the page and be greeted with your new welcome message targeted at anonymous visitors!

![441b7bb-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8be2ff099cf479cb/3b4e8923941eaeaffcb1e152/441b7bb-image.png)

Lytics and Pathfora provide a great deal of flexibility. If you are ready to dive deeper, please explore some of our other popular use cases:

-   Surface a Promotional Message to High Momentum Visitors (coming soon)
-   [Surface a Lead Capture form Only to Unknown Visitors](https://dash.readme.com/project/lytics-cdp/v2.1/docs/lead-capture-draft)
-   Surface Content Recommendations Based on Interests (coming soon)
-   Sync Profiles & Audiences to GA4 or Meta (coming soon)
-   Personalize Your Site Based on Behaviors and Stored Attributes (coming soon)
