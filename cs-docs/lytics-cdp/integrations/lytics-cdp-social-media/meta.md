---
title: "Meta"
description: "Meta Ads Manager is a powerful ad management tool that is designed for advertisers of any experience level. Using Meta Ads Manager, you can run ads on…"
url: /lytics/meta
uid: blt3afa3c7154e76c46
---

# Meta

## Meta

## Overview

[Meta Ads Manager](https://www.facebook.com/business/ads) is a powerful ad management tool that is designed for advertisers of any experience level. Using Meta Ads Manager, you can run ads on Facebook, Instagram, or Messenger.

Connect Meta Ads with Lytics to access predictive user audiences in your Meta Ads Manager. You can use your rich, behavioral-driven audiences as the target for your ads, or build lookalikes off of these audiences to reach more users who are likely to engage with your brand.

Using the [Lytics Canvas](/docs/lytics/goals#goal-canvas-audiences), you can manage the cross-channel customer lifecycle and use Meta ad sets as your advertising touchpoint.

## Authorization

If you have not already done so, you will need to set up a Meta Ads Manager account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Meta** from the list of providers.
2.  Select the method for authorization. You may authorize in one of two ways, and both methods work with every Meta job type described below:
    -   [Meta User](#meta-user)
    -   [Business Manager System User](#business-manager-system-user) (recommended)

**Note:** Regardless of authorization type, before you can build a custom audience in Meta, you must agree to the [Meta Custom Audience Terms of Service](https://www.facebook.com/ads/manage/customaudiences/tos.php).

### Meta User

Authorizing as a Meta user walks you through an OAuth process that grants access to the ad accounts tied to that particular Facebook user. OAuth is fast and simple to set up, but it is less durable over time: the authorization is invalidated if that user changes their password, leaves the organization, or triggers any other event that revokes their access.

1.  You will be prompted to login to Facebook and grant permissions. You will then need to enter a description for your authorization.\\

![Screenshot_from_2018-12-03_16-36-39.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6e866482912212a5/acb071d8b2108d9f901312a6/Screenshot_from_2018-12-03_16-36-39.png)

1.  Enter a **Label** to identify your authorization.
2.  (Optional) Enter a **Description** for further context on your authorization.
3.  Complete the configuration steps needed for your authorization.
4.  Click **Save Authorization**.

### Business Manager System User

A Business Manager system user is not tied to a specific person, so it is more reliable long-term than user OAuth and stays valid until it is revoked in the Business Manager settings. This is the **recommended authorization** method.

Before creating a system user, your Meta Business Manager must:

-   Have an admin user.
-   Own a Meta app. You should claim the app and associate it with a business via API or in Business Manager. To see your apps, visit the [Meta Apps page](https://developers.facebook.com/apps). Please note that the app must not be listed as "in development", since in-development apps are not meant for [production or live advertising](https://developers.facebook.com/docs/marketing-api/access/#limits). Your app must also be associated with the Ads Account ID you want to send audiences to. This can be configured under [Advanced Settings](https://www.facebook.com/business/help/303269370149084) for your App.

Once you satisfy these requirements, complete the following steps to set up your authorization:

1.  Go to [Business Settings](https://business.facebook.com/settings) in Meta. Under **Users** click **System Users**, then click **Add** to create a new System User.
2.  Give a name to the system user and select _Employee_ as the role, then click **Create System User**.\\

![image-e190dc0e.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0569a98ad3838b2d/f77b0185f9a80d0177168351/image-e190dc0e.png)

1.  Assign Ad Accounts to the System User by selecting **Add Assets**. Then select the Ad Accounts, choose the Ad Account that you would like to push Lytics Audiences to, and then assign it **Admin Access - Manage Ad Account**\\

![image-a4d7570b.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8901c10631d42d15/033aaf6e59a59c0baaab3585/image-a4d7570b.png)

1.  Next you'll need to generate a token that will be entered into Lytics to make API calls with. To start this, select **Generate New Token**.
2.  Select _your_ company's Meta developer app\\

![image-63143633.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2cca7f871da74182/200c94ddcdabf55c26ab823f/image-63143633.png)\\ and make sure that **ads\\\_management** is checked.\\ ![image-0c84b1bb.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7ae4e9fdbdce6826/1be827966e3ebd594edc2516/image-0c84b1bb.png)\\ Then click on **Generate Token**

1.  The generated token will be only shown once. Copy it, and keep it handy for authorizing in Lytics.
2.  Enter a **Label** to identify your authorization.
3.  (Optional) Enter a **Description** for further context on your authorization.
4.  Enter the **Access Token** you created in step six.
5.  Click **Save Authorization**.

## Export Audiences

Sync your Lytics audiences with Meta custom audience lists to target those users in the Meta Ads platform.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration.
-   **Frequency**: Batch Integration that updates continuously as users enter and exit the audience.
-   **Resulting data**: A [Meta custom audience](https://www.facebook.com/business/help/170456843145568?id=2469097953376494) populated with users from the Lytics audience selected.

This integration utilizes the [Meta Marketing APIs](https://developers.facebook.com/docs/marketing-api/) to send user data. Once the export is started the job will:

1.  [Create an audience in Meta Ads](https://developers.facebook.com/docs/marketing-api/audiences-api/) called Lytics {Audience Name} if an existing audience was not specified.
2.  Scan the Lytics audience and hash the selected user identifiers, i.e. email or phone or name and location, which will then be sent to Meta to be [added to the newly created audience](https://developers.facebook.com/docs/marketing-api/reference/custom-audience/users#Updating) or an existing one.
3.  The export will run continuously. As users enter or exit the Lytics audience, they are added to a queue. Lytics flushes that queue to Meta as soon as it reaches 10,000 users, and otherwise every few minutes, whichever happens first. Users will be [added](https://developers.facebook.com/docs/marketing-api/reference/custom-audience/users#Updating) or [removed from the audience](https://developers.facebook.com/docs/marketing-api/reference/custom-audience/users#Deleting) appropriately. On audiences with little activity, the job sleeps between flushes and wakes when new changes arrive, so updates may be spaced further apart.

### Fields

Lytics can export the following fields to Meta. The Lytics field names below are examples — you choose which field feeds each Meta field with the **Email Field**, **SHA256 Email**, and **Field Mapping** inputs during [configuration](#configuration).

| Lytics User Field | Description | Meta Field | Type |
| --- | --- | --- | --- |
| email | Email Address | EMAIL | string |
| first\\\_name | First Name | FN | string |
| last\\\_name | Last Name | LN | string |
| gender | Gender | GEN | string |
| city | City | CT | string |
| state | State | ST | string |
| zipcode | Zip Code | ZIP | string |
| country | Country Code | COUNTRY | string |
| phone | Phone Number | PHONE | string |
| mobile\\\_advertiser\\\_id | Mobile Advertiser ID | MADID | string |
| external\\\_id | External Identifier | EXTERN\\\_ID | string |
| lifetime\\\_value | User's lifetime value | LOOKALIKE\\\_VALUE | number |

Most of these fields also have a **Hashed** option in the **Field Mapping** dropdown (for example **Last Name Hashed**). Choose the hashed option only when the Lytics field already holds a value [hashed to Meta's specification](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences#hash); otherwise Lytics hashes the value for you before sending it.

### Configuration

Follow these steps to set up an Export Audiences job for Meta. If you are new to creating export jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Meta** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select your **Meta Ads Account ID**.\\

**Note:** If it says you "must accept Custom Audiences Terms" next to the Ads Account ID, copy and paste the following URL into your browser: https://business.facebook.com/ads/manage/customaudiences/tos/?act=YOUR\_ADS\_ACCOUNT\_ID. Replace YOUR\_ADS\_ACCOUNT\_ID with the account id you wish to use. There you can accept the Meta Ads Custom Audience terms and conditions, and then refresh this list in the Lytics App.

1.  From the **Audience** input, choose the audience of users to export to Meta.
2.  From the **Email Field** input, select the field that contains the users' email addresses.
3.  If emails in your account are stored as SHA256 hashes, then from the **SHA256 Email** input, select the field that contains the SHA256 hash of the user emails. Use this field instead of, or in conjunction with, the Email Field above.
4.  Using the **Field Mapping** input, map the Lytics field on the left to a Meta field on the right for a greater matching resolution. Lytics fields that are mapped to **Hashed** Meta fields are assumed to be already [hashed appropriately for Meta API](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences#hash) within Lytics.\\

**Note:** The **Lifetime Value** Meta field specifies the field that contains the lifetime value of this user. The Lytics field mapped to the **Lifetime Value** Meta field should contain a positive numeric value. If this field is mapped the Meta audience will be created as a [value based lookalike audience](https://www.facebook.com/business/help/917879191754763?id=401668390442328). In order to use Lifetime Value audiences in Meta, special terms must be accepted at https://www.facebook.com/customaudiences/value\_based/tos/?act=YOUR\_ADS\_ACCOUNT\_ID (you will need to replace YOUR\_ADS\_ACCOUNT\_ID with your ads account ID) before creating a value-based audience.

1.  Check the **Existing Users** checkbox to add users who already exist in the selected Lytics audience during the first batch sync.
2.  From the **Audience Source** input, select whether data was collected directly from customers, directly from partners, or from both.
3.  Optionally add an alternate **Audience Name** and **Audience Description** to identify the audience in Meta. If left empty the default name specified above will be used.
4.  Optionally add an **Opt-out Link** to be used for the audience in Meta.
5.  Optionally select an **Existing Meta Audience** to add users to. If not specified, a new custom audience will be created.
6.  (Optional) From the **Duplicate Exports** input, select up to 50 additional audiences to send to Meta with the same configuration. Each additional audience will be sent as its own job in Lytics.
7.  Click **Complete**.

The custom audience should appear immediately in Meta Ads. When you begin syncing audiences, it may take some time for them to process within Meta.

### Audience Sizes in Meta

Immediately after export, in the Meta UI you will see a size of **Below 1000** and under this you may see the word **Populating**. Even if the audience is much larger than 1000 users, Meta will always say _Below 1000_ if it is _Populating_. Meta says about this state:

> _Audience Is Populating_
> 
> _We're finding people who fit your audience criteria. You can start running ads with this audience right away, but be aware that your audience size will increase as the audience is populated._

![facebook populating](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0c675c9e3d62cd1a/132f25078ff35f0959507913/facebook_populating.png)

This process may take a number of days to complete.

If the exported audience has a lot of activity, such as an audience that has users enter/exit every hour, then the Meta status may _always_ say "Populating" since the job is continually sending new data to Meta. If you would like to see the current size of the audience in the Meta UI, the only way is to pause the job in Lytics on the [Job Summary](/docs/lytics/destinations#job-summary) page for that job.

Once you've seen the audience size and want to continue adding users, you can unpause the job on the same page by clicking **Resume**. After resuming, the audience size may go back into the "Populating" and "Below 1000" state.

In addition to the size shown, in the Meta UI, you can click through to the audience and see the **Custom audience updated** messages on the History tab to see the batches of users that were sent to Meta.

## Export Audiences (Web Traffic)

Target people who visit your website using the Meta Pixel. Create audience definitions powered by Lytics that can be used as custom website audiences or lookalike audiences in Meta Ads.

### Integration Details

-   **Implementation Type**: Server-side Integration and Client-side Integrations.
-   **Implementation Technique**: JavaScript Tag Integration and REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: A [Meta website custom audience](https://www.facebook.com/business/help/610516375684216?id=2469097953376494) populated with users who have visited your website and meet the criteria of your Lytics audience.

The client-side part of this integration uses the Lytics [JavaScript Tag](/docs/lytics/lytics-javascript-tag) and [Meta Pixel](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) to sync users who are members of API-enabled Lytics audiences — audiences with **Access: Enable for Personalization** turned on in the [audience builder](/docs/lytics/audiences#audience-details). Because membership is evaluated in the browser, this integration can sync anonymous users, whereas the [Export Audiences](#export-audiences) integration can only sync known users.

Once a user visits a page of your website where both tags are installed, the following will happen:

1.  The Lytics tag will check for the existence of the Meta Pixel.
2.  If found, the Lytics tag will retrieve a list of API-enabled audiences the current user is a member of.
3.  The Lytics tag will send this audience list to Meta via a [standard tracking event](https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking#standard-events) using the Meta Pixel.

**Note:** The Lytics tag only sends a user to Meta when that user visits your site, so the Meta audience will usually be smaller than the audience size shown in Lytics — members who have not returned to your site since the audience was created have never been sent. To compare like with like, build an audience that also requires a recent visit (for example, web\_visitor with a last-visit rule inside the last 30 days) and check that size against Meta.

The server-side workflow of this integration uses the [Meta Marketing API](https://developers.facebook.com/docs/marketing-api/audiences-api/websites) to create custom website audiences in Meta that are populated by the users synced through the client-side integration. After running the job:

1.  Lytics will [create Meta Website Custom Audience definitions](https://developers.facebook.com/docs/marketing-api/audiences-api/websites) in Meta Ads for the Lytics audiences selected in [Setting up the Job](#setting-up-the-job).
2.  If no audiences were selected, all API-enabled audiences for the account will be automatically created in Meta. The job will run continuously, checking every five minutes for new API-enabled audiences created in Lytics. If a new audience is found, a matching audience will be created in Meta.

### Fields

Lytics does not send any fields to Meta as part of this integration beyond the event field necessary for recording audience membership. The job only creates audience definitions in Meta Ads that can be used for targeting.

### Configuration

Follow these steps to set up and configure the job to create Meta website custom audience definitions in the Lytics platform.

#### Setting up the JavaScript Tags

1.  If you haven't done so already, add the Meta Pixel to your website. See Meta documentation for assistance [adding the Meta Pixel](https://www.facebook.com/business/m/pixel-set-up-step-1#step-1) and [adding the Meta Pixel using Google Tag Manager](https://www.facebook.com/business/help/1021909254506499).
2.  Also ensure that the [Lytics JavaScript tag](/docs/lytics/lytics-javascript-tag) has been installed. This integration needs both tags present to work properly.
3.  Once you have added the tag and pixel to your site, turn on **Access: Enable for Personalization** in the [audience builder](/docs/lytics/audiences#audience-details) for each Lytics audience you would like to target. This is what makes an audience API-enabled so the tag can read its membership.
4.  You can verify that Meta is receiving Lytics audience membership via events. Use the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension to help verify this:\\

![facebook-pixel-helper-2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd91167cb7f6ffe89/1e994dfb56acf3c090c41b15/facebook-pixel-helper-2.png)

1.  Proceed with the job steps below to make this user data available for targeting in Meta.

#### Setting up the Job

1.  Select **Meta** from the list of providers.
2.  Select the **Export Audiences (Web Traffic)** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Meta Ads Account ID** input, select the account ID for this custom audience.\\

**Note:** If it says you "must accept Custom Audiences Terms" next to the Ads Account ID, copy and paste the following URL into your browser: https://business.facebook.com/ads/manage/customaudiences/tos/?act=YOUR\_ADS\_ACCOUNT\_ID. Replace YOUR\_ADS\_ACCOUNT\_ID with the account id you wish to use. There you can accept the Meta Ads Custom Audience terms and conditions, and then refresh this list in the Lytics App.

1.  From the **Pixel** input, select the [Meta Pixel](https://developers.facebook.com/docs/meta-pixel/using-the-pixel) that the website custom audiences should be based on. This must be the same pixel you installed on your site.
2.  From the **Audiences** input, select the audiences to create in Meta. Selecting an audience here also makes it API-enabled in Lytics if it isn't already. If you select none, Lytics creates a Meta website custom audience for every API-enabled ("public") audience in the account and keeps watching for new ones.
3.  Click **Start Export**.

You should now see the website custom audiences in Meta Ads. They may already be populated if your audience was API-enabled before you ran the job, or they may need time to populate as users visit your website. You can also build a lookalike audience with Lytics and Meta based on these users.

### Job Status and Metrics

The Lytics job for this integration only creates audience _definitions_ in Meta Ads. Audience membership is sent from the visitor's browser by the Lytics tag and Meta Pixel. Keep the following in mind when [monitoring this job](/docs/lytics/monitoring-a-job):

-   **The Added metric counts audience definitions, not users.** On the job's **Metrics** tab, **Added** is the number of Meta website custom audiences that Lytics created. It is not a count of users synced to Meta.
-   **A status of Completed is expected when you select specific audiences.** If you chose audiences in step 8 of [Setting up the Job](#setting-up-the-job), the job creates those definitions and then finishes. The client-side half of the integration keeps working for as long as the Lytics tag and Meta Pixel remain installed on your site; it does not depend on the Lytics job still running. If you left **Audiences** empty, the job stays running instead, checking every five minutes for new API-enabled audiences to create in Meta.
-   **Client-side sends are not reported back to Lytics.** Membership events go directly from the browser to Meta, so Lytics has no record of them. Unlike the batch [Export Audiences](#export-audiences) job, you will not see **Custom audience updated** entries on the audience's **History** tab in Meta Ads as new users are matched into the audience.

To confirm that membership is reaching Meta, use the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) as described in [Setting up the JavaScript Tags](#setting-up-the-javascript-tags), review the events in Meta Events Manager, or watch the audience size in Meta Ads.

## Export Audiences (Conversion API)

Send Lytics Audience events to the [Meta Conversion API](https://www.facebook.com/business/help/2041148702652965?id=818859032317965) to improve your ad campaign performance.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: API Integration - Audience Trigger Integration.
-   **Frequency**: Batch Integration that is continuously pushed every five minutes.
-   **Resulting data**: [Meta server events](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event) populated with Lytics user field values for the users in the selected Lytics audiences.

This integration uses the [Meta Conversion API](https://developers.facebook.com/docs/marketing-api/conversions-api/using-the-api) to send events for your Lytics audiences. Once the job is started, it will:

1.  Scan the selected Lytics audiences and build a Meta server event payload for each user. The payload includes the mapped user data parameters, any custom data parameters you mapped, and — if enabled — the user's membership in the selected Lytics audiences. Lytics then sends the payload to Meta.
2.  The export will run continuously. As users enter or exit the Lytics audience, they will be added to a queue. The queue will be sent to Meta every five minutes or until the queue reaches 1,000 users, whichever happens first.

### Fields

You can send Lytics user fields to Meta's Conversion API as [custom data parameters](https://developers.facebook.com/docs/meta-pixel/reference#object-properties). You can also send the Lytics audience membership to Meta. An example of the payload that is sent to Meta Conversion API is:

```
[
    {
        "action_source": "email",
        "custom_data":
        {
            "content_ids":
            [
                "123456"
            ],
            "content_name": "product name",
            "currency": "USD",
            "lytics_audience_slug_1": true,
            "lytics_audience_slug_2": false,
            "lytics_audience_slug_3": true,
            "num_items": 10,
            "value": 123,
            "lytics_field_1": "field_value_1",
            "lytics_field_2": "field_value_2"
        },
        "event_id": "sample-event-id",
        "event_name": "Purchase",
        "event_source_url": "https://www.some-website.com",
        "event_time": 1654729272,
        "user_data":
        {
            "em": "e43763399e5318f14cd7473c4902a6b319343d577ec8283898a5edf9dbc6d711"
        }
    }
]
```

### Configuration

Follow these steps to set up and configure an Export Audiences to Conversion API job for Meta. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Meta** from the list of providers.
2.  Select the **Export Audiences to Conversion API** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the **Audiences** to export to Meta Conversion API.
7.  From the **Meta Ads Account ID** input, select your Meta Ads Account. **Note:** If it says you "must accept Custom Audiences Terms" next to the Ads Account ID, copy and paste the following URL into your browser: https://business.facebook.com/ads/manage/customaudiences/tos/?act=YOUR\_ADS\_ACCOUNT\_ID. Replace YOUR\_ADS\_ACCOUNT\_ID with the account ID you wish to use. There you can accept the Meta Ads Custom Audience terms and conditions, and then refresh this list in the Lytics App.
8.  From the **Pixel** input, select your [Meta Pixel](https://developers.facebook.com/docs/meta-pixel/using-the-pixel) to link the Lytics audience(s) events.
9.  In the **Event Type** textbox, enter the event type. You can select one of Meta's [standard events](https://developers.facebook.com/docs/meta-pixel/reference#standard-events) or type your own custom event name. If not provided, events are sent with the name **Lytics Audiences**.
10.  (Optional) From the **Event ID** input, select the Lytics user field that has Meta's [Event Id field](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#event-id) which will be used for event de-duplication process.
11.  (Optional) From the **Event Timestamp** input, select the Lytics user profile field that contains the time when the actual event occurred. If not provided, Lytics uses the time at which the event is sent.
12.  From the **Action Source** input, select the action source where the conversion occurred. If not provided, events are sent with **other** as the action source.
13.  From the **User Data Parameters Mapping** input, map Lytics fields to Meta's user data parameters. At least one user field must be mapped. Lytics hashes the field if Meta [requires it](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#formatting-the-user-data-parameters).
14.  (Optional) From the **Custom Parameters Mapping** input, map Lytics fields to Meta's custom data parameters. **Note:** For the **Purchase** event type, the currency and value parameters must be mapped.
15.  (Optional) From **Additional Custom Data**, select any additional Lytics user fields to send to Meta as custom data parameters.
16.  (Optional) Using the **Currency Code** dropdown, specify a currency code if you did not map one above. Required if the _Purchase_ event type was selected.
17.  (Optional) Select the **Send Lytics Audience Membership** checkbox to send audience membership for the selected Lytics audiences.
18.  (Optional) From **Fields to Trigger**, select up to 75 user fields to trigger user change events. For any user in the exported audience, if any of the selected field values change, then the user will be sent to the Meta Conversion API.
19.  (Optional) From **Audience Trigger Events**, select which type of audience trigger events to send to the Meta Conversion API.
20.  (Optional) Select the **Existing Users** checkbox to send the users who already exist in the selected Lytics audiences.
21.  Click **Start Export**.

## Experiences

Lytics [Experiences](/docs/lytics/experiences) support Meta Ad sets that can be run as stand-alone ad campaigns or as a part of your cross-channel customer life-cycle. Using the Lytics Canvas, you can activate Meta ads with Lytics audiences to re-engage and entice users to convert.

### Experience Import

Like all Experience enabled providers, you can [import Experiences](/docs/lytics/experiences#out-of-the-box-integration-experiences) from Meta to Lytics. During the import process, you will be asked to select an authorization. See [Authorization](#authorization) above for more information.

Before you can import, you will also need to select your Meta Ads Account ID since the authorization you select may be associated with multiple ad manager accounts.

Once you've selected an ad manager account, you can import eligible ad sets as Lytics Experiences.

![import Experiences](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9d088bb534825a1e/b7f1ad7ab1758ee741294d20/Screenshot_from_2020-01-14_11-38-15.png)

### Tactics

During the Experience import process, tactics are determined by the **Optimization Goal** set during the creation of your ad set in Meta.

![Facebook Tactics](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ameca118540c86084c/0aa5770dc350f6f7a227cdbc/optimization-goals.png)

Meta Experiences in Lytics support the following tactics:

-   **Ad Recall Lift** - Optimize for people more likely to remember seeing your ads.
-   **App Installs** - Optimize for people more likely to install your app.
-   **App Downloads** - Optimize for app downloads.
-   **Brand Awareness** - Optimize to reach the most number of users who are likely to spend at least a minimum amount of time on the image or video.
-   **Engaged Users** - Optimize for people more likely to take a particular action in your app.
-   **Event Responses** - Optimize for people more likely to attend your event.
-   **Impressions** - Show the ads as many times as possible.
-   **Landing Page Views** - Optimize for page views.
-   **Lead Generation** - Optimize for people more likely to fill out a lead generation form.
-   **Link Clicks** - Optimize for people more likely to click on the link of the ad.
-   **Offer Claims** - Optimize for people more likely to claim the offer.
-   **Offsite Conversions** - Optimize for people more likely to make a conversion on the site.
-   **Page Engagement** - Optimize for people more likely to engage with your page.
-   **Page Likes** - Optimize for people more likely to like your page.
-   **Post Engagement** - Optimize for people more likely to engage with your post.
-   **Reach** - Optimize to reach the most unique users each day.
-   **Social Impressions** - Increase the number of impressions with social context, i.e. with the names of one or more of the user's friends attached to the ad who have already liked the page or installed the app.
-   **Video Views** - Optimize for people more likely to watch videos.

### Configuration

After importing a Meta Experience you can configure it for activation. All tactics for Meta have the same three configuration steps within the [Experience Editor](/docs/lytics/experiences#experience-editor):

1.  **Target** - select the target audience for your Experience.
2.  **Configure Meta** - set up how the audience for your Experience will be exported. There are two different methods for syncing audiences to Meta based on the type of audience.\\

![Screenshot_from_2020-01-23_11-18-36.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0799bb5fa302869a/d96c36468007cc677bad77c5/Screenshot_from_2020-01-23_11-18-36.png)

-   For an audience of anonymous users, select **Create Web Traffic Audiences**. Activating this type of Experience will create a new [website custom audience](https://www.facebook.com/business/help/610516375684216?id=2469097953376494) in Meta, and users will be dynamically synced to the audience when they visit your website.
-   For an audience of known users (users with an email identifier), select **Export Audiences**. Activating this type of Experience will sync users to a [custom audience from a customer list](https://www.facebook.com/business/help/744354708981227?id=2469097953376494) in Meta.

The configuration step will generally function the same as the respective workflow chosen, but without the **Audience** selection, as that is configured by the Target step in the Experience editor.

1.  **Configure Delivery** - choose to turn the Delivery Optimization feature on or off. Turning on Delivery Optimization means that known users will not be synced to a Meta audience immediately, but instead will wait to sync individual users based on the time that they are most likely to respond to an ad. Depending on the cost metric for your ad, Delivery Optimization may help you save ad spend and see a higher conversion rate.

Once you've finished configuring the Experience, you can save and activate it.

### Activation

For all Meta Experiences, activating simply pushes users to an audience within Meta. As mentioned in the configuration step, a Meta Experience functions similarly to the [Export Audiences](#export-audiences) workflow. However, there are additional steps necessary to use your new audience with the ad set you imported.

1.  In your Meta ads manager account, edit the ad set that you activated in Lytics.
2.  In the **Audience** Section, select the custom audience that was created when you activated the Experience in Lytics.\\

![facebook-audiences.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am91ead546a52f1b43/fa7863ab98962406bbb23770/facebook-audiences.png)

1.  When you're ready to publish the ad set, click the **Publish** button and your ad will be delivered to users in your audience.\\

![facebook-publish.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame81782ee7fbb7446/85b4a99db453ae4abc3c28d4/facebook-publish.png)

**Note:** It may take some time for audiences to process and be ready to use in an ad set. See [Audience Sizes in Meta](#audience-sizes-in-meta) for further information.

### Metrics

There is a workflow that runs in the background to collect aggregate metrics for your Meta Experience metrics. This metrics workflow runs hourly and uses the [Meta Insights API](https://developers.facebook.com/docs/marketing-api/insights/) to query for conversions and reach.

![Facebook Experience with metrics](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambd6abcd0726ed2e3/50a2c9cfaa64f30b09c27f14/Screenshot_from_2020-01-14_13-53-48.png)

Currently, only conversion events have user attribution for Meta Experiences, and some [additional setup](#conversion-tracking) is necessary to make this work for your ad set. Once configured, a user field in Lytics records the click events from an ad set. Impressions cannot be tracked at the user level — the Meta Insights API only returns an aggregate number for those.

Lytics metrics are recorded using the following [fields](https://developers.facebook.com/docs/marketing-api/insights/parameters#fields) to query against the Meta Insights API:

-   **Reach**: reach The number of people who saw your ads at least once. Reach is different from impressions, which may include multiple views of your ads by the same people. This metric is estimated.
-   **Converted**: unique\_clicks The number of people who performed a click (all). This metric is estimated.
-   **Conversion Rate**: unique\_ctr The percentage of people who saw your ad and performed a unique click (all). This metric is estimated.

#### Conversion Tracking

As mentioned above, Lytics brings in the conversion count for a Meta Experience directly from the Meta API. You can also begin to track click-throughs by [adding custom UTM parameters](/docs/lytics/experiences#utm-tracking). Follow these steps to configure these custom parameters using Lytics, and you may also refer to the [Meta documentation](https://www.facebook.com/business/help/1016122818401732) for URL parameters.

1.  While editing your ad in Meta, locate the **Tracking** section, and under **URL Parameters** click on **Build a URL Parameter**.
2.  It is recommended you fill out the default campaign UTM tracking variables, as Lytics will automatically capture these query parameters when users visit your website.
3.  Under **Custom Parameters** create the following new parameters:
    1.  **Parameter Name:** utm\_lytics\_experience **Value:** {{adset.id}}

This dynamic value will be populated with the ID of the ad set so that Lytics will recognize which Experience the user clicked on.

1.  **Parameter Name:** utm\_lytics\_source **Value:** meta

![Build Facebook URL Parameters](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame8fda205c20d195f/1a918f35d44ac54884aafd59/Screen_Shot_2020-02-28_at_3.46.07_PM.png)

1.  Click **Apply** to save the changes to your URL parameters.
2.  Click **Publish** to save the changes to your ad.

After you've added these parameters and users begin clicking on your ad, you should see values populating the [UTM conversions user field](/docs/lytics/experiences#user-field) in Lytics.
