---
title: "Google Marketing: Analytics, DV360, CM360"
description: "You can sync Lytics audiences to Google Analytics and Google Display & Video (DV360) in the Google Marketing Platform."
url: /lytics/google-marketing-overview
---

# Google Marketing: Analytics, DV360, CM360

## Google Marketing: Analytics, DV360, CM360

## Overview

You can sync Lytics audiences to Google Analytics and Google Display & Video (DV360) in the Google Marketing Platform.

[Google Analytics](https://marketingplatform.google.com/about/analytics/) is a web analytics service that is part of the Google Marketing Platform. Connect your Google Analytics account to Lytics to run more targeted marketing campaigns based on how your prospects, customers, and other Lytics audiences engage with your website.

Lytics can pass all public audiences as a Custom Dimension to Google Analytics out-of-the-box. This allows for global filters based on Lytics audiences to be applied to reports, custom views and nearly every aspect of your existing Google Analytics account.

[Google DV360](https://marketingplatform.google.com/about/resources/display-and-video-360-product-overview/) enables marketers to manage their reservation, programmatic, and programmatic guaranteed campaigns across display, video, TV, audio, and other channels, all in one place. The Google DV360 Export in combination with the latest version of the Lytics [JavaScript](/docs/lytics/lytics-javascript-tag) tag can be used to sync Lytics audiences to DV360.

[The Google Analytics Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4) for Google Analytics 4 allows users to augment their automatic collection via gtag, Tag Manager, and Google Analytics for Firebase. [Export Lytics event streams](#google-marketing-ga4-measurement-protocol-event-export) or [audiences](#google-marketing-ga4-measurement-protocol-audience-export) via GA4 Measurement Protocol to tie online to offline behavior, or to send events to Google Analytics that happen outside user-interaction (e.g. offline conversions).

## Authorization

Passing Lytics audiences to Google Analytics requires that the Lytics JavaScript tag be installed on your site. Also, keep in mind that any Lytics audience you would like to access in Google Analytics must be [API enabled](/docs/lytics/audiences#building-audiences-configuration-options), which Lytics also refers to as "public audiences". This will ensure the JavaScript tag can pass the audience membership to Google Analytics.

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Google Marketing** from the list of providers.
2.  Select the method for authorization. Note that different methods may support different job types. Google Marketing supports the following authorization methods:
    -   [Google Sign-In](#google-signin) for Google Analytics Exports
    -   [GA4 Measurement Protocol API Secret](#ga4-measurement-protocol-api-secret) for GA4 Measurement Protocol Exports
    -   [DV360 Delegated Auth](#dv360_delegated_auth) for Google DV360 Exports
    -   [Google CM360 Sign-In](#google-cm360-sign-in) for Google CM360 Conversion Export.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Complete the configuration steps needed for your authorization. These steps will vary by method.
6.  Click **Save Authorization**.

### Google Sign-In

1.  Click Google Sign-in to initiate the authorization flow.
2.  Log in to the Google account you want to authorize and follow Google's instructions.

### GA4 Measurement Protocol API Secret

To authorize with a GA4 Measurement Protocol API Secret you will need an API secret created in Google Analytics. Your GA4 **API Secret** can be found in the Google Analytics UI under **Admin > Data Streams > choose your stream > Measurement Protocol > Create**. See the GA4 [documentation](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events) for more information

1.  In the **Label** text box, enter a name for the authorization
2.  (optional) In the **Description** text box, enter a description for this authorization
3.  In the **API Secret** text box, enter your API Secret credential.

### DV360 Delegated Auth

The Google DV360 export workflow does not require an authorization, as authorization is delegated to the Lytics DMP Google Ads account. In order to export to DV360 successfully, you will need to link your DV360 advertiser account with the Lytics DMP account. This is done in Google DV360 via the process described [here](https://support.google.com/displayvideo/answer/9649053?hl=en).

The Google DV360 export workflow requires the DV360 tag sync to be enabled in the Lytics account settings first. This [configuration](/docs/lytics/javascript-tag-config#client-side-integrations) can be found under **Account > JavaScript Tag**.

### Google CM360 Sign-In

1.  Click Google Sign-in to initiate the authorization flow.
2.  Log in to the Google account you want to authorize and follow Google's instructions.

## Google Analytics 4 (GA4)

GA4, which was first released into beta in 2019, has replaced Universal Analytics (UA) as the default version for Google Analytics installations. GA4 offers a great deal of flexibility and power over its predecessor. The following document outlines the preferred method for enriching GA4 with an individual's profile information, such as audience membership and Lytics user ID.

There are a variety of robust use cases enabled by this integration, most notably the ability to filter GA4 dashboards by Lytics Audiences as well as distribute those audiences efficiently across the Google ecosystem from GA4 directly. Lastly, web properties are complicated by nature. The following recommended approach aims to focus on ease of installation while also preventing a limitation of the power of GA4. Please note that it is always recommended that you consult with your technical teams or partners before proceeding.

### Integration Details

-   **Implementation Type**: Server-side Integration (optional) and Client-side Integrations.
-   **Implementation Technique**: JavaScript Tag Integration.
-   **Frequency**: Real-time Integration
-   **Resulting data**: Audiences and/or User IDs in Google Analytics.

If leveraging the workflow to configure new Dimensions on your behalf. Alternatively, custom user-scoped dimensions can be configured manually. Passing the audience membership data or IDs will leverage the profile request API within our JavaScript tag along with the GA4 [set user\\\_properties](https://developers.google.com/analytics/devguides/collection/ga4/reference/config#user_properties) API.

#### Step 1: Creating Dimensions

To attribute onsite events such as page views or purchases, you must first define new Custom User Scoped Dimensions to store the set of audiences and/or User ID depending on preference. This can be done through our server-to-server integration, in which we'll create two properties: Lytics User ID (ly\_user\_id\_dim) and Lytics Audiences (ly\_segments\_dim). Alternatively, because we'll pass the data to Google via JavaScript, you can create whatever dimensions you want by following [Google's documentation](https://support.google.com/analytics/answer/10075209#zippy=%2Cin-this-article). If taking the manual approach, just be sure to use the user scope option during creation. For details on our server-to-server integration please view our [Google Analytics: Setup Custom Dimensions](/docs/lytics/google-marketing-overview#google-analytics-setup-custom-dimensions) instructions.\\ ![GA4 Dimensions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am47fef21ca4ded717/08c5bfe8e35399adf9c7fd40/ga4-dimensions.png)

#### Step 2: Enabling Lytics Audiences

Once the necessary dimensions exist within your preferred Google Analytics account, you'll need to ensure all audiences you would like to send to GA4 are flagged as [API Enabled](/docs/lytics/audiences#building-audiences-configuration-options) from the Audience edit area of Lytics. This feature ensures no data is ever shared or passed to another tool without your explicit instructions to do so.

#### Step 3: Configuring GA4

Finally, leveraging the profile listener feature of our JavaScript tag, we'll get details of the current visitor and pass those along to GA4 via your new dimensions. Since there are a nearly infinite number of ways sites can be configured and constructed, it is always best to consult your technical team on this step. Here we'll outline the most common approach assuming that GA4 tag installation default instructions were followed.

##### Installing GA4

A typical installation of GA4 is completed by installing a few lines of JavaScript on your site. Typically in the header or footer.

```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D2LPRHX5G4"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'YOUR-PROPERTY-ID');
</script>
```

##### Setting User Properties

This will also need to be modified to include the setting of your custom dimensions as well as optionally altering how the initial pageview event is fired. The following example shows ultimately how we'll be sending data to GA4.

```
gtag('set', 'user_properties', {
    'ly_segments_dim': 'one,two,three',
    'ly_user_id_dim': 'myid123'
});
```

##### Getting Profile Data

To pass the current user's audience information as well as optional user ID, you'll first need to retrieve the profile via our personalization API. Luckily the Lytics tag makes this simple using our [entityready listener](/docs/lytics/lytics-javascript-tag#user-attributes--audience-membership). The Lytics tag will call the desired function once it has identified the user and accessed their profile. Using the information returned, we'll send the user properties as outlined above.

```
<script type="text/javascript">
  var myCallbackFunction = function(profile){
      // do something here with the profile
      console.log(profile.data.user.segments);
  }

  jstag.call('entityReady', myCallbackFunction); // register the listener
</script>
```

##### Full Example

We'll alter the default listener example to verify we did receive audience membership data and then pass that along to GA4 as our lytics\_segments\_dim dimensions or whatever you named it during the manual creation process.

```
<!-- Start Send Lytics Audiences to GA4 -->
<script type="text/javascript">
    var handleGA4UserProperties = function(profile){
        if (window.gtag) {
            // ensure we have segments to send to prevent javascript errors
            if(typeof profile != "undefined" && typeof profile.data != "undefined" && typeof profile.data.user != "undefined" && typeof profile.data.user.segments != "undefined") {
                // send the audience membership to GA4 as a user property
                gtag('set', 'user_properties', {
                    'ly_segments_dim': profile.data.user.segments.filter(segment => !segment.startsWith("orc_experience_")).join(",")
                });
            };
        } else {
            // log a warning if the profile can't be accessed
            console.warn('unable to set audience membership in GA4');
        }
    }

    jstag.call('entityReady', handleGA4UserProperties); // register the entityReady listener
</script>
<!-- End Send Lytics Audiences to GA4 -->
```

In this case, we also log a warning to the console when a set of audience memberships are unavailable for debugging purposes. For demonstration purposes, a full HTML example of loading the GA4 tag, Lytics tag, and listener function might look like the following:

```
<html>
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D2LPRHX5G4"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'YOUR-GA4-PROPERTY-ID');
        </script>
    </head>
    <body>
        Lytics GA4 Demonstration

        <!-- Start Lytics Tracking Tag Version 3 -->
        <script type="text/javascript">
            !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();
            // Define config and initialize Lytics tracking tag.
            // - The setup below will disable the automatic sending of Page Analysis Information (to prevent duplicative sends, as this same information will be included in the jstag.pageView() call below, by default)
            jstag.init({
            src: 'https://c.lytics.io/api/tag/YOUR-LYTICS-ACCOUNT-ID/latest.min.js',
            pageAnalysis: {
                dataLayerPull: {
                disabled: true
                }
            }
            });

            // You may need to send a page view, depending on your use-case
            jstag.pageView();
        </script>

        <script type="text/javascript">
            var handleGA4UserProperties = function(profile){
                if (window.gtag) {
                    // ensure we have segments to send to prevent javascript errors
                    if(typeof profile != "undefined" && typeof profile.data != "undefined" && typeof profile.data.user != "undefined" && typeof profile.data.user.segments != "undefined") {
                        // send the audience membership to GA4 as a user property
                        gtag('set', 'user_properties', {
                            'ly_segments_dim': profile.data.user.segments.filter(segment => !segment.startsWith("orc_experience_")).join(",")
                        });
                    };
                } else {
                    // log a warning if the profile can't be accessed
                    console.warn('unable to set audience membership in GA4');
                }
            }

            jstag.call('entityReady', handleGA4UserProperties); // register the entityReady listener
        </script>
    </body>
</html>
```

##### Additional Considerations

At this point, you should successfully pass audience membership to GA4 for each user. Given the flexibility of GA4, there are a variety of configuration options. That said, there are a couple of common points that are worth considering.

1.  The load order of tags is essential. For this to work correctly, you'll want to load tags in this order:
    1.  GA4
    2.  Lytics Tag
    3.  Lytics Listener
2.  It may be desired that the GA4 default pageView tag is delayed until the profile information has been set. This ensures all events are associated with the user but could impact the efficiency of tracking page views. This is only recommended for advanced users with a firm understanding of JavaScript. In this case, you would disable the default page view as [described here](https://support.google.com/analytics/answer/11403294?hl=en#zippy=%2Cglobal-site-tag-websites) and then fire it manually following the setting of the user properties in our example.
3.  It may be desired to send an event to GA4 noting when the properties are set. This can be done following the entityready function and the user properties being set. For more information on the various ways to configure events, consult [Google's documentation](https://support.google.com/analytics/answer/9322688?hl=en\&ref_topic=9756175).
4.  When testing your integration, Google supports a [debug](https://support.google.com/analytics/answer/7201382?hl=en\&ref_topic=9756175) setting in their tag configuration settings. These settings allow access to a debug view where you can see the events stream in real-time to confirm proper behavior.

#### Step 4: Add GA4 Audience

The final step of this integration is to follow [Google's recommended approach](https://support.google.com/analytics/answer/9267572?hl=en#zippy=%2Cin-this-article) for building an audience inside of GA4 using custom dimensions. When prompted which dimension to use, you'll want to select the ly\_segments\_dim or whatever custom parameter you created and then match based on the value of your audience or a regex match. When passing the audiences to GA4, Lytics converts them to a string separated by commas as Google does not accept arrays. As such, the dimension value will look similar to audience1,audience2,audience3.\\ ![GA4 Audience Creation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am41dfc2119244be6a/070b92c63eb44e795bee1f8c/ga4-audience1.png)



#### Advanced Configuration Options (push specific audiences to GA4)

GA4 limits the length of any user property to 36 characters. This can be restrictive if you're surfacing a large number of audiences via the Personalization API. While it requires additional development effort to selectively send audiences to GA4 or to customize how Lytics properties are synced, we recommend the following approach.

```
(function () {
  // define a list of approved audience slugs to push to GA4
  // leaving this array empty will push all audiences to GA4
  // e.g. const approvedKeys = [];
  const approvedKeys = ['anonymous_profiles', 'smt_power', 'not_a_match'];

  // Ensure both jstag and gtag are available before proceeding
  if (typeof jstag !== 'undefined' && typeof jstag.call === 'function' && typeof gtag === 'function') {
    jstag.call('entityReady', function (profile) {
      try {
        // get the audiences the current visitor is a member of
        const visitorSegments = profile?.data?.user?.segments || [];

        // find the approved keys that match one of the visitor segments and build a new matched array
        const matchedSegments = approvedKeys.filter((key) => visitorSegments.includes(key));

        // if the matched array is not empty, call the track event
        if (matchedSegments.length > 0) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'set_lytics_audiences',
            audiences: matchedSegments.join(','),
          });
        } else if (approvedKeys.length === 0) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'set_lytics_audiences',
            audiences: visitorSegments.join(','),
          });
        }
      } catch (error) {
        console.warn('audiences check failed:', error);
      }
    });
  } else {
    console.warn('jstag or gtag not available on this page.');
  }
})();
```

## Google DV360: Cookie Matching Export

Combining this export job with the latest version of the Lytics JavaScript Tag allows you to create powerful audiences for targeting in Google DV360.

**Note:** Due to a Google requirement beginning March 1, 2024, the User Consent Confirmed checkbox must be selected for the DV360 Export Audiences workflow to run successfully.

### Integration Details

-   **Implementation Type**: Server-side Integration and Client-side Integrations.
-   **Implementation Technique**: JavaScript Tag Integration, REST API Integration, Audience Trigger Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: A Lytics audience is synced to Google DV360. The name will be equal to the audience slug in Lytics.

The client-side part of this integration uses the Lytics [JavaScript](/docs/lytics/lytics-javascript-tag) tag (Version 3) and Google DV360 cookie sync to sync visitors to your website. Once a user visits a page of your website where the tag is installed and the DV360 plugin is enabled, the following will happen:

1.  The user's browser will send an event to Lytics with the user's cookie ID.
2.  The user's browser will send a request to the DV360 cookie sync endpoint with Lytics' Google Network ID and the user's Lytics cookie ID in base64 encoding.
3.  Google DV360 will map the Lytics cookie ID to a cookie ID in their system.

When an export job is created in Lytics, it will do the following:

1.  Create a list in Google DV360 corresponding to the Lytics audience being exported via the Google DV360 proprietary API. The name of the list will be equal to the Audience slug in Lytics. If a DV360 list with that name already exists, the job will use the pre-existing list.
2.  Scan the Lytics audience for current members.
3.  For every audience member, the job will check its Lytics profile for the dv360\_id\_ts field, which indicates when the the user was last synced by the client-side cookie sync. If the timestamp does not exist or is older than 90 days, the user will be ignored.
4.  For users with a valid dv360\_id\_ts field, the job will send the user's Lytics cookie ID to Google DV360. Google DV360 will use the match table in their system from the cookie sync to find the user's DV360 ID and add it to the audience.
5.  The job will listen continually for enter and exit events. Users will be added and removed from the audience in Google DV360 via the process described above as they enter or exit the Lytics audience.

### Fields

By default, Lytics exports the following fields to Google Marketing DV360.

| Lytics User Field | Description | Google Marketing Field | Type |
| --- | --- | --- | --- |
| \\\_uid | Web Cookie Id(current) | Google DV360 ID | string |

### Configuration

Follow these steps to set up and configure an export job for Google Marketing in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Marketing: Analytics & DV360** from the list of providers.
2.  Select the **DV360: Cookie Matching Export** job type from the list.
3.  For the Authorization, select **DV360 does not need require authorization**. To use the DV360 export, an authorization is not necessary in Lytics, but before starting an export, your DV360 account must first be linked with Lytics through the process described here: .
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  In the **Advertiser ID** text box, enter your DV360 Advertiser ID.
7.  (Optional) From the **DV360 List** input, select which Google DV360 list to append to. If left empty, a new list will be created.
8.  In **Audience** Select the Lytics audience to export.
9.  Select the **Existing Users** checkbox to add users who already exist in the selected Lytics audience.
10.  Select **User Consent Confirmed** to confirm that you have obtained all necessary consent to export users in this audience to Google DV360. This is a Google requirement beginning March 1, 2024, and if this checkbox is not selected after this date, the job will fail. For more information, see
11.  Click **Complete** to start job.

## Google DV360: Customer Match Export

Export your Lytics audiences to Google DV360 Customer Match to reach and re-engage with your customers across Google Search, Google Shopping, Gmail, and YouTube. Learn more about [Google DV360 Customer Match](https://support.google.com/displayvideo/answer/9539301?hl=en). Refine your targeting efforts using Lytics audiences containing rich information on user behavior and content affinities across channels. This workflow targets audiences within Google Display & Video 360 (DV360), which is part of Google’s programmatic advertising platform. DV360 allows you to manage and run display, video, audio, and even native advertising campaigns across the web.

### Integration Details

-   **Implementation Type**: Server-side Integration .
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: A Lytics audience is synced to a Google DV360 Customer Match audience.

This integration utilizes the Google Audience Partner API.

When an export job is created in Lytics, it will do the following:

1.  A [CrmBasedUserList](https://developers.google.com/google-ads/api/reference/rpc/v10/CrmBasedUserListInfo) is created with the name: _Lytics \\{Audience Name}_. If a list with that name already exists, the list will be named: _Lytics \\{Audience Name} \\{Timestamp}_.
2.  As users enter the Lytics audience, if the selected identifier exists on the user, the user is added to the Google DV360 Customer Match audience with the consent status specified. When users exit the audience the identifiers will be removed from the Google DV360 Customer Match audience.
3.  Updates are sent to Google DV360 in batches of 10000 or every 10 minutes, whichever is first.

**Starting on March 6, 2024 if consent is missing for European Economic Area (EEA) users, then the consent value is determined as not consented. Data from unconsented EEA users won't be processed and cannot be used for ad personalization using Customer Match. See Google's [FAQs](https://support.google.com/google-ads/answer/14310715) and [updates to consent mode](https://support.google.com/tagmanager/answer/13695607) for more details.**

### Fields

Lytics can export the following fields to Google DV360. You can customize the Lytics source fields as part of the job [configuration](#configuration).

| Lytics User Field | Description | Google DV360 Field | Type |
| --- | --- | --- | --- |
| email | Email | Email | string |
| idfa | Current IDFA | Mobile Device ID | string |
| android\\\_id | Android ID | Mobile Device ID | string |
| first\\\_name | First Name | First Name | string |
| last\\\_name | Last Name | Last Name | string |
| phone | Phone Number | Phone | string |
| country\\\_code | Country Code | Country | string |
| zip\\\_code | Zip | Zip | string |

### Configuration

Follow these steps to set up and configure an export job for Google Marketing: Analytics & DV360 in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Marketing: Analytics & DV360** from the list of providers.
2.  Select the export **job type** from the list.
3.  For the Authorization, select **DV360 does not need require authorization**. To use the DV360 export, an authorization is not necessary in Lytics, but before starting an export, your DV360 account must first be linked with Lytics through the process described here: .
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.
7.  In the **Advertiser ID** text box, enter your DV360 Advertiser ID.
8.  (optional) From the **DV360 List** input, select an existing Google DV360 list to append to. If left empty, a new list will be created..
9.  From the **Ad User Data Consent** input, select the consent status for sending user data to Google for advertising purposes. Different consent groups should be sent through separate jobs to the same list.
10.  From the **Personalization Consent** input, select consent status for ad personalization. Different consent groups should be sent through separate jobs to the same list.
11.  From the **Email Field** input, select which field contains the user's email. Values may be plain or already SHA256-hashed; plain emails are hashed before being sent to Google.
12.  (optional) From the **Mobile ID** input, select to match on mobile ID field instead of email.
13.  (optional) In the **Mobile App ID** text box, if Mobile ID is entered, enter the Mobile App ID for the mobile application from which the data was collected to Google DV360 API.
14.  (optional) From the **Phone Number** input, select which field contains the user's phone number. Values may be plain or already SHA256-hashed; plain numbers are hashed before being sent to Google.
15.  (optional) From the **First Name** input, select which field contains the user's first name. To match by name, country code and ZIP Code must be provided.
16.  (optional) From the **Last Name** input, select which field contains the user's last name.
17.  (optional) From the **Country Code** input, select which field contains the user's two letter country code.
18.  (optional) From the **ZIP Code** input, select which field contains the user's ZIP code.
19.  Click **Complete** to start job.

## Google Marketing: GA4: Measurement Protocol Event Export

The Google Analytics Measurement Protocol for Google Analytics 4 allows users to augment their automatic collection via gtag, Tag Manager, and Google Analytics for Firebase. Export Lytics event streams via GA4 Measurement Protocol to tie online to offline behavior, or to send events to Google Analytics that happen outside user-interaction (e.g. offline conversions).

-   [Integration Details](#integration-details-1)
-   [Fields](#fields-1)
-   [Configuration](#configuration-2)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**:\\

[REST API](/docs/lytics/integrated-marketing-tools#apis)\\ [Audience triggers](/docs/lytics/integrated-marketing-tools#audience-triggers)

-   **Frequency**: [Real-time](/docs/lytics/integrated-marketing-tools#real-time)
-   **Resulting data**: configured **Engagement Time Field** and **Session ID Field** values and any configured additional parameters are exported to GA4

When an export is created, events from the selected streams will be exported via HTTP to Google Analytics, starting from the first event ever received on the stream and continuing in chronological order. Thereafter, events will be sent as received in near real time (note that a small processing delay is expected between when events are received by Lytics and when they are triggered for export in this workflow). Events are formatted using the fields and inputs selected in the job configuration. For more information on GA4 Measurement Protocol payload formatting see the [GA4 documentation](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=firebase#required_parameters)

The configuration options and fields sent as identifiers depend on the **GA4 Version** selected in step 8 of the configuration options below. The **Client ID** and **Measurement ID** fields are required for exports selecting **gtag.js**, while **Firebase App ID** and **App Instance ID** are required for those that select **Firebase**.

For both versions, additional fields choice can be included in the **Export Scalar Fields** selector, which will be sent as event parameters, included in the param property of the [request](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=firebase#required_parameters)

Like the client side sync, Lytics sends two user properties: one with an array of Lytics segments that the user belongs to, and another with the **User ID Field** selected in the job configuration. The job configuration allows you to select the names of these properties, but by default they are set to ly\_segments\_dim and ly\_user\_id\_dim, respectively.

### Fields

According to the GA4 documentation, **engagement\\\_time\\\_msec** and **session\\\_id** parameters are recommended for inclusion on each event sent, in order for events to be included in reports like [Realtime](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=firebase#recommended_parameters_for_reports). These two fields therefore have dedicated selectors in the job configuration in steps 12 and 14.

Additional parameters of your choice can be included using the **Export Scalar Fields** input.

The **name** property in the outgoing payload can be configured using the **Event Name Field**. If none is selected, the name of the stream will be used.

### Configuration

Follow these steps to set up and configure an export job for Google Marketing in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Marketing** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Complete the configuration steps for your job.

![ga4 event export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1c9737997d03279a/0ab7261c7bec9bd76fe10c0d/Screenshot_from_2023-04-21_14-24-57.png)

1.  From the **Data Streams to Export** input, select choose data to export, a stream is a single source/type of data (you may choose more than one). If none are selected, all streams are exported.
2.  From the **GA4 Version** input, select either **gtag.js** or **Firebase**
3.  (optional) In the **Client ID** text box, enter the unique identifier for a client. This is a required field for gtag.js.
4.  (optional) In the **Measurement ID** text box, enter the measurement ID associated with a stream. This is a required field for gstag.js and can be found in the Google Analytics UI under Admin > Data Streams > choose your stream > Measurement ID.
5.  (optional) In the **Firebase App ID** text box, enter the Firebase App ID. This is a required field for Firebase and can be found in the Google Analytics UI under Project Settings > General > Your Apps > App ID.
6.  (optional) From the **Engagement Time Field** input, select the field that contains the user's engagement time in milliseconds.
7.  (optional) From the **User ID Field** input, select a unique identifier for the user.
8.  (optional) In the **User Dimension** input, enter the custom dimension in your GA4 account that holds unique IDs from Lytics in your GA4 account. The field selected for **User ID Field** above will be sent as the value. If none is provided, the default is ly\_user\_id\_dim.
9.  (optional) From the **Session ID Field** input, select the field that contains the user's session ID.
10.  (optional) From the **App Instance ID Field** input, select the field that contains the user's app instance ID.
11.  (optional) In the **Event Name Field** text box, enter the field that contains the event name. If none is provided, the default with be the name of the stream.
12.  (optional) In the **Segment Dimension** input, enter the custom dimension in your GA4 account that contains Lytics Audiences for users in your GA4 account. If none is provided, the default is ly\_segments\_dim.
13.  (optional) From the **Export Scalar Fields** input, select additional user fields to send as event parameters in the payload to Google Analytics.
14.  Click the **Complete** button to start the job.

## Google Marketing: GA4: Measurement Protocol Audience Export

The Google Analytics Measurement Protocol for Google Analytics 4 allows users to augment their automatic collection via gtag, Tag Manager, and Google Analytics for Firebase. Export Lytics audiences via GA4 Measurement Protocol to tie online to offline behavior, or to send events to Google Analytics that happen outside user-interaction (e.g. offline conversions).

-   [Integration Details](#integration-details-2)
-   [Fields](#fields-2)
-   [Configuration](#configuration-3)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations)
-   **Implementation Technique**:\\

[REST API](/docs/lytics/integrated-marketing-tools#apis),\\ [Audience triggers](/docs/lytics/integrated-marketing-tools#audience-triggers)

-   **Frequency**: [Real-time](/docs/lytics/integrated-marketing-tools#real-time)
-   **Resulting data**: configured **Engagement Time Field** and **Session ID Field** values and any configured additional parameters are exported to GA4

When an export is created, users will be exported via HTTP to Google Analytics as they enter or exit the selected audience in real time, starting with enter events for all current members of the audience. Events are formatted using the fields and inputs selected in the job configuration. For more information on GA4 Measurement Protocol payload formatting see the [GA4 documentation](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=firebase#required_parameters)

The configuration options and fields sent as identifiers depend on the **GA4 Version** selected in step 8 of the configuration options below. The **Client ID** and **Measurement ID** fields are required for exports selecting **gtag.js**, while **Firebase App ID** and **App Instance ID** are required for those that select **Firebase**.

For both versions, up to 25 additional fields of your choice can be included in the **Export Scalar Fields** selector, which will be included in the param property of the [request](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=firebase#required_parameters)

### Fields

According to the GA4 documentation, **engagement\\\_time\\\_msec** and **session\\\_id** parameters are recommended for inclusion on each event sent, in order for events to be included in reports like [Realtime](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=firebase#recommended_parameters_for_reports). These two fields therefore have dedicated selectors in the job configuration in steps 12 and 14.

Up to 25 additional parameters of your choice can be included using the **Export Scalar Fields** input.

The **name** property in the outgoing payload will be set using the following convention, depending on whether the user is entering or exiting the audience: {enter|exit}\_{audience\_slug}

### Configuration

Follow these steps to set up and configure an export job for Google Marketing in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Marketing: Analytics & DV360** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Complete the configuration steps for your job.
8.  From the **GA4 Version** input, select either **gtag.js** or **Firebase**
9.  (optional) In the **Client ID** text box, enter the unique identifier for a client. This is a required field for gtag.js.
10.  (optional) In the **Measurement ID** text box, enter the measurement ID associated with a stream. This is a required field for gstag.js and can be found in the Google Analytics UI under Admin > Data Streams > choose your stream > Measurement ID.
11.  (optional) In the **Firebase App ID** text box, enter the Firebase App ID. This is a required field for Firebase and can be found in the Google Analytics UI under Project Settings > General > Your Apps > App ID.
12.  (optional) From the **Engagement Time Field** input, select the field that contains the user's engagement time in milliseconds.
13.  (optional) From the **User ID Field** input, select a unique identifier for the user.
14.  (optional) From the **Session ID Field** input, select the field that contains the user's session ID.
15.  (optional) From the **App Instance ID Field** input, select the field that contains the user's app instance ID.
16.  (optional) From the **Export Scalar Fields** input, select additional user fields to send as properties in the payload to Google Analytics. Up to 25 may be selected.
17.  Click the **Complete** button to start the job.

## Google CM360: Offline and Enhanced Conversion \\[Beta]

Export Lytics audience user data to Google CM360 to update the existing conversions or introduce new ones to help improve your campaign performance.

**This is a beta export job. Please reach out to Lytics if you see any issues with this export job.**

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration, Audience Trigger Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: A Lytics audience is sent to Google CM360.

This export job utilizes Google CM360 API to upload or enhance the conversions. Please refer to this Google [documentation](https://developers.google.com/doubleclick-advertisers/guides/conversions_overview) for information on CM360 API.

When an export job is created in Lytics, it will do the following:

1.  Scan the Lytics audiences for current members.
2.  As users enter/exit the Lytics audience, if the selected identifier exists on the user, the user is added to a queue.
3.  The queue is sent to Google CM360 every minute or whenever the queue size reaches 100 users.

### Fields

You can send Lytics user fields to the Google CM360 API. The job constructs the payload according to the configuration. Below is the sample of payload:

-   For enhancing existing conversions, please refer this [documentation](https://developers.google.com/doubleclick-advertisers/guides/conversions_ec) for more information about enhanced conversion payload:

```
{
    "conversions":
    [
        {
            "floodlightActivityId": "1234",
            "floodlightConfigurationId": "5678",
            "mobileDeviceId": "abcdef-Zd234-enter-badfw3r0",
            "ordinal": "e6dfd9841eff3c54b0faeeeb78c045cda5d075e51485364e020629b62d3d527a",
            "quantity": "100",
            "timestampMicros": "1728305141710597",
            "userIdentifiers":
            [
                {
                    "addressInfo":
                    {
                        "city": "test city 0",
                        "hashedFirstName": "07406ec6cda871138c089fbf59cedc447221d721028f0f11108d05d7eb3fb5b5",
                        "hashedLastName": "7887853e0bbe960ca2aed684b8629ee7effac3d2c4668e83e3a3e9ef7ecbd784",
                        "hashedStreetAddress": "53774c8b2e26273a38ad65cd61bf0dff923a1586c895ec5ba22e515a0b162d28",
                        "postalCode": "97201",
                        "state": "OR"
                    },
                    "hashedEmail": "e6dfd9841eff3c54b0faeeeb78c045cda5d075e51485364e020629b62d3d527a"
                }
            ],
            "value": 10
        },
        {
            "floodlightActivityId": "1234",
            "floodlightConfigurationId": "5678",
            "mobileDeviceId": "abcdef-Zd234-enter-badfw3r1",
            "ordinal": "c00898d294219fc4eaa66872544818b32b667b33b1aac52fc648a6057b88de51",
            "quantity": "10",
            "timestampMicros": "1728305141710597",
            "userIdentifiers":
            [
                {
                    "addressInfo":
                    {
                        "city": "test city 1",
                        "hashedFirstName": "e534039844896b71c6d35000a851eb2328a0dee7d841a8a54f27f05200e74f9c",
                        "hashedLastName": "135a41b58096bcf7ecc425f35e8b8c677b9167a0cf89f1ac950eb921aef14879",
                        "hashedStreetAddress": "f949d9e58dc62f08377bb8b52b22773840f3f2b6b251b6cc83e43b58b9e6d928",
                        "postalCode": "97201",
                        "state": "OR"
                    },
                    "hashedEmail": "c00898d294219fc4eaa66872544818b32b667b33b1aac52fc648a6057b88de51"
                }
            ],
            "value": 10
        }
    ],
    "kind": "dfareporting#conversionsBatchUpdateRequest"
}
```

-   For inserting conversion, please refer this [documentation](https://developers.google.com/doubleclick-advertisers/guides/conversions_upload) for more information about uploading conversion payload

```
{
    "conversions":
    [
        {
            "floodlightActivityId": "1234",
            "floodlightConfigurationId": "5678",
            "mobileDeviceId": "abcdef-Zd234-enter-badfw3r0",
            "ordinal": "e6dfd9841eff3c54b0faeeeb78c045cda5d075e51485364e020629b62d3d527a",
            "quantity": "100",
            "timestampMicros": "1728305491059466",
            "userIdentifiers":
            [
                {
                    "addressInfo":
                    {
                        "city": "test city 0",
                        "hashedFirstName": "07406ec6cda871138c089fbf59cedc447221d721028f0f11108d05d7eb3fb5b5",
                        "hashedLastName": "7887853e0bbe960ca2aed684b8629ee7effac3d2c4668e83e3a3e9ef7ecbd784",
                        "hashedStreetAddress": "53774c8b2e26273a38ad65cd61bf0dff923a1586c895ec5ba22e515a0b162d28",
                        "postalCode": "97201",
                        "state": "OR"
                    },
                    "hashedEmail": "e6dfd9841eff3c54b0faeeeb78c045cda5d075e51485364e020629b62d3d527a"
                }
            ],
            "value": 10
        },
        {
            "floodlightActivityId": "1234",
            "floodlightConfigurationId": "5678",
            "mobileDeviceId": "abcdef-Zd234-enter-badfw3r1",
            "ordinal": "c00898d294219fc4eaa66872544818b32b667b33b1aac52fc648a6057b88de51",
            "quantity": "100",
            "timestampMicros": "1728305491059466",
            "userIdentifiers":
            [
                {
                    "addressInfo":
                    {
                        "city": "test city 1",
                        "hashedFirstName": "e534039844896b71c6d35000a851eb2328a0dee7d841a8a54f27f05200e74f9c",
                        "hashedLastName": "135a41b58096bcf7ecc425f35e8b8c677b9167a0cf89f1ac950eb921aef14879",
                        "hashedStreetAddress": "f949d9e58dc62f08377bb8b52b22773840f3f2b6b251b6cc83e43b58b9e6d928",
                        "postalCode": "97201",
                        "state": "OR"
                    },
                    "hashedEmail": "c00898d294219fc4eaa66872544818b32b667b33b1aac52fc648a6057b88de51"
                }
            ],
            "value": 10
        }
    ],
    "kind": "dfareporting#conversionsBatchInsertRequest"
}
```

### Configuration

Follow these steps to set up and configure a conversion export job for Google Marketing in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Marketing: Analytics & DV360** from the list of providers.
2.  Select the export **Google CM360: Offline and Enhanced Conversion\\\[Beta\]** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the Lytics audiences to export.
7.  Select **Enhanced Conversion** to enhance the existing conversion. Leave it unchecked in order to upload new offline conversions.
8.  From the **User Profile** input, select your Google CM360 User Profile ID.
9.  From the **Event Identifier Mapping** input, map the Identifier fields from Lytics to Google CM360 event identifier by selecting the Lytics field on the left, and its CM360 destination on the right. You can only send one identifier to CM360.
10.  In the **Floodlight Configuration ID** field, enter the Floodlight Configuration ID for the conversion events.
11.  In the **Floodlight Activity ID** field, enter the Floodlight Activity ID for the conversion events.
12.  In the **Ordinal ID** input, select the Lytics user field that contains the conversion event ordinal ID which is used as a deduplication key in Google CM360.
13.  From the **Conversion Timestamp** input, select the Lytics user field that contains the conversion event timestamp. If not given, the events will be sent with the current timestamp. Please note that events cannot be older than 28 days, and events with older conversion dates will be dropped.
14.  From the **Conversion Value** input, select the Lytics user field that contains the conversion event value. If not given, the value will be set to 0.
15.  From the **Conversion Quantity** input, select the Lytics user field that contains the conversion event quantity. If not given, the value will be set to 0.
16.  From the **User Identifier Mapping** input, map the User PII fields from Lytics to Google CM360 fields by selecting the Lytics field on the left, and its CM360 destination on the right. All these fields, if not already hashed, will be hashed using SHA256 before sending to Google CM360.
17.  Select the **Existing Users** checkbox to immediately push users who currently exist in the selected Lytics audience. Deselecting will only push users as they enter or leave the audience.
18.  Click the **Complete** button to start the job.
