---
title: "Profile Stitching Best Practices"
description: "This guide gives context on Lytics user profiles and helps illustrate the most common ways to combine or stitch profiles based on shared identifiers…"
url: /lytics/stitching-user-profiles
---

# Profile Stitching Best Practices

## Profile Stitching Best Practices

## Stitching User Profiles

This guide gives context on Lytics user profiles and helps illustrate the most common ways to combine or **stitch** profiles based on shared identifiers. While it is geared for marketers, you will likely need a developer on your team to implement some of these tactics.

### The problem

> “How do I know that an anonymous user browsing my website is the same user that just opened my email?”
> 
> “How can I make sure I am not over-marketing to the same user because I can’t tell who they are across all my data sources and tools?”
> 
> “How do I achieve 1:1 personalization without a single source of truth for my users?”

### How Lytics helps

Lytics aims to solve these problems by creating a holistic customer view through data unification. Lytics is based on user profiles - meaning any and all data ingested needs to be tied to a user. A user profile is generated and defined by an **identifier**:

-   For **anonymous users**, this identifier can be the Lytics cookie placed after you install the Lytics JavaScript tag.
-   For **known users**, this is most commonly an email, but can also be various forms of user IDs across your data sources.

Richer profiles that include attributes from various data sources allow marketers to run their campaigns more efficiently, resulting in better targeting and remarketing, personalization, cost per action (CPA), among other results. Therefore, profile stitching early on in your journey with Lytics will be important and impactful for your success with the platform.

But how does Lytics actually stitch your Customer Relationship Management (CRM) users, to your web browsers, to your email subscribers? The answer is through common identifiers shared between tools.

### Common identifiers

A common identifier is used by Lytics to create a user profile, but it’s one that also exists in another source. Some examples include:

> User 1: Imported from email tool  
> \\ Identifier: email address ()
> 
> User 2: Imported from CRM  
> \\ Identifier: email address (), user ID (0101010)
> 
> User 3: Imported from data warehouse  
> \\ Identifier: user ID (0101010)

All of these users will merge into one profile in Lytics because they share identifiers. This will happen automatically as soon as these data points are imported. The import is the **merge event**.

### Merging events

But how would you merge an anonymous profile that ONLY has a cookie ID with a profile that has a known identifier like email? This is one of the most common use cases for Lytics users, and one that will set you up for success.

To do this, you’ll need to identify or create potential merge events. Again, more details can be found in the Profiles and Identity Resolution document, but here we’ll provide examples of common scenarios that you may consider when planning your strategy.

#### Lytics Modal Experiences

You can build Email Capture Modal Experiences directly in Lytics that prompt users to sign up for an e-newsletter, or receive a coupon, for example. As soon as a user fills in their email, Lytics will tie the anonymous cookie profile to the email they submitted.

If their email was already in our system under a different profile, Lytics will merge the two profiles into one. For information on building email capture Experiences, see the Experience Editor documentation.

#### On-site events: forms

Any of your website forms where a user submits an email are great places to create a merge event of a Lytics cookie to email. By using the jstag.send() event or setting up a Google Tag Manager Trigger, Lytics can attach an email to an anonymous profile. Some types of commonly used forms include:

-   User log-in
-   Any sign-ups (events, newsletters)
-   Registrations / warranties (products)
-   Gated content (webinars, whitepapers)

Note that you can submit other data using this method. For example, if users fill in their name, profession, address, etc. in the form, you can send this as well and Lytics will append it to their profile.

> Tip: You can also send Lytics a form name and timestamp using this method, which could be helpful if you’d like to retarget people who submitted certain forms, during a certain time period.

Keep in mind this will only work for forms living on your website. For forms populated in an iframe or hosted in a different way, you may need to use the Lytics pixel or an API call to capture this information.

See the document [Onboarding Web Data](/docs/lytics/onboarding-web-data) for more information on using the JavaScript tag and other methods.

#### Email click-through identifier

Many email service providers (ESPs) have a unique user ID within their system, separate from email. It's encouraged to pass this identifier, hashed email, or any other non-PII identifier as a query string parameter within links you include in any email communication. If you are familiar with UTM parameters, this is similar.

Once you set this up in your ESP, Lytics can associate this additional identifier as another merge rule. So moving forward, whenever a user clicks on an email link that drives them to your website with the Lytics tag, Lytics will be able to stitch the email to a cookie.

Examples:

-   domain.com/news/article\_name?<your\_esp\_identifier\_or\_hashed\_email\_name>=<value>
-   domain.com/news/article\_name?esp\_id=2ncihj894y2jnjknfjsd

### Tracking growth

Next, you can create an audience in Lytics to track the growth of profiles that have stitched a cookie to an email. An example of what this could look like in the Lytics audience builder is shown below:\\ ![stitching guide img 2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am823062a16fce0f8c/3305bbf6812444734179b503/stitching_guide_img_2.png)

On the Audience Summary page, you can view how your audience of unknown to known users has grown over time.

![unknown-known-audience-summary](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am056602773df087fc/25e8d4b962bc16f8b5e32ac1/unknown-known-audience-summary.png)
