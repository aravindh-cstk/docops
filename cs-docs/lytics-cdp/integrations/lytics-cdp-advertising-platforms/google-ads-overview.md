---
title: "Google Ads"
description: "Google Ads is an online advertising service that allows businesses to promote their products and services on Google searches and across the web."
url: /lytics/google-ads-overview
---

# Google Ads

## Google Ads

## Overview

[Google Ads](https://ads.google.com/home/) is an online advertising service that allows businesses to promote their products and services on Google searches and across the web.

Integrating Lytics with Google Ads enables you to export Lytics audiences for remarketing lists. Using behavioral data and content affinities informed by all of your connected channels on Lytics, you can refine your targeting and improve your ad spend ROI.

## Authorization

If you haven't already done so, you will need to setup a Google Ads account before you begin the process described below.

**In order to use Google Ads Customer Match, the Google Ads account must be approved by Google. Please see the requirements for [Google Ads Customer Match eligibility](https://support.google.com/adspolicy/answer/6299717) for more information.**

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Google Ads** from the list of providers.
2.  Select the **Google Ads Sign-In** method for authorization.
3.  Log in to the Google account you wish to authorize and follow the steps per Google's directions.
4.  Enter a **Label** to identify your authorization.
5.  (Optional) Enter a **Description** for further context on your authorization.
6.  Click **Save Authorization**.

## Google Ads Customer List Export

Export your Lytics audiences to Google Ads Customer Match to reach and re-engage with your customers across Google Search, Google Shopping, Gmail, and YouTube. Learn more about [Google Ads Customer Match](https://support.google.com/google-ads/answer/6379332). Refine your targeting efforts using Lytics audiences containing rich information on user behavior and content affinities across channels. This workflow is primarily used for targeting audiences across Google Ads inventory, including Search, Shopping, Gmail, and YouTube. It is ideal for advertisers focused on paid search campaigns, shopping ads, or video ads directly within Google’s core ad system.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Real-time Integration.
-   **Resulting data**: Selected User Fields from Lytics are pushed to Google Ads Customer Match.

This integration utilizes the [Google Ads API](https://developers.google.cn/google-ads/api/docs/start).

1.  A [CrmBasedUserList](https://developers.google.com/google-ads/api/reference/rpc/v10/CrmBasedUserListInfo) is created.
2.  As users enter the Lytics audience, if the selected identifier exists on the user, the user is added to the Google Ads list with the consent status specified. When users exit the audience the identifiers will be removed from the Google Ads.
3.  Updates are sent to Google Ads in batches of 10000 or every 10 minutes, whichever is first.

**Starting on March 6, 2024 if consent is missing for European Economic Area (EEA) users, then the consent value is determined as not consented. Data from unconsented EEA users won't be processed and cannot be used for ad personalization using Customer Match. See Google's [FAQs](https://support.google.com/google-ads/answer/14310715) and [updates to consent mode](https://support.google.com/tagmanager/answer/13695607) for more details.**

### Fields

Lytics can export the following fields to Google Ads. You can customize the Lytics source fields as part of the job [configuration](#configuration).

| Lytics User Field | Description | Google Ads Field | Type |
| --- | --- | --- | --- |
| email | Email | Email | string |
| idfa | Current IDFA | Mobile Device ID | string |
| android\\\_id | Android ID | Mobile Device ID | string |
| first\\\_name | First Name | First Name | string |
| last\\\_name | Last Name | Last Name | string |
| phone | Phone Number | Phone | string |
| country\\\_code | Country Code | Country | string |
| zip\\\_code | Zip | Zip | string |
| user\\\_id | User ID | User ID | string |

### Configuration

Follow these steps to set up and configure an export of audiences in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Google Ads** from the list of providers.
2.  Select the **Google Ads Customer List** job type from the list.\\

There are four types of [Customer Match lists](https://support.google.com/google-ads/answer/6276125) in Google Ads: **Email**, **Mobile ID**, **User info**, and **User ID**. Select the ollow at least one of three export configurations below to match the type of list you would like to create in Google Ads:

-   [Match Email & User Info](#match-email)
-   [Match Mobile ID](#match-mobile-id)
-   [Match User ID](#match-user-id)

1.  Select the Authorization you would like to use or [create a new one](#authorization).
2.  Enter a **Label** to identify this job you are creating in Lytics.
3.  (Optional) Enter a **Description** for further context on your job.
4.  From the **Google Ads Account** input, select the main customer account to access Google Ads.
5.  From the **Google Ads List Account** input, select which Google customer account to create or has the desired customer match list.
6.  From the **Customer Match List** input, select the Google Ads customer match list to append to. If no list is selected, a new customer match list will be created.
7.  From the **Ad User Data Consent** input, select the consent status for sending user data to Google for advertising purposes. Different consent groups should be sent through separate jobs to the same list.
8.  From the **Personalization Consent** input, select consent status for ad personalization. Different consent groups should be sent through separate jobs to the same list.
9.  From the **Audience** input, select the Lytics audience to export to Google Ads remarketing list. Users will be updated as they enter or exit this audience.
10.  After configuring the type of user match export, click the **Complete** button to start the job.

**It can take up to 48 hours after users are successfully added to or removed from Google's customer match list for sizes to update.**

#### Match Email & User Info

To perform a customer match via **Email**, fill out the following fields:

-   From the **Email Field** input, select the Lytics field that contains the email address (or array of emails) of your users. Values may be plain or already SHA256-hashed; plain emails are hashed before being sent to Google.
-   From the **Phone Number** input, select the field that maps to the user's phone number. Values may be plain or already SHA256-hashed; plain numbers are hashed before being sent to Google.
-   From the **First Name** input, select the field that maps to the user's first name.
-   From the **Last Name** input, select the field that maps to the user's last name.
-   From the **Country Code** input, select the field that maps to the user's two letter country code.
-   From the **Zip Code** input, select the field that maps to the user's zip code.

**Name matching works with the location cues selected. All four fields (first name, last name, country, and zip) must be mapped and available for the user to get a match.**

**To improve your match rate, [Google recommends](https://support.google.com/google-ads/answer/10534785?hl=en) adding as many match keys (i.e. email, phone, etc) as possible. Users who upload two match keys see an average list size increase of 28% and advertisers who upload a third match key see an average list size increase of 35%.**

#### Match Mobile ID

To perform a customer match via **Mobile ID**, fill out the following field:

-   From the **Mobile ID** input, select the field that contains the mobile ID of your users. If Mobile ID is selected, it must be the _only_ field selected.

#### Match User ID

To perform a customer match via **User ID**, fill out the following fields:

-   From the **User ID** input, select the field that maps to your uploaded user ID.

## Enhanced Lead Conversion Export

[Enhanced conversions for leads](https://support.google.com/google-ads/answer/9888656?sjid=407273124539266588-NA#leads) uses first-party user-provided data from your website to measure sales and transactions that happen off your website. If you run lead-generation campaigns to drive offline sales, enhanced conversions for leads can help you understand the impact of your ad spend. This version of offline conversion tracking doesn’t require the use of the Google Click ID (GCLID). Instead, it uses user-provided data from your website leads to measure conversions. You may need your Google rep to enable this feature for your account. To use this integration you will need to set up some things in your Google Ads account, see [Google's documentation for\\ setup details](https://support.google.com/google-ads/answer/11021502?sjid=407273124539266588-NA).

-   [Integration Details](#integration-details)
-   [Fields](#fields)
-   [Configuration](#configuration)

### Authorization

Google Enhanced Leads Conversion Export supports the following authorization types:

-   [Google Ads OAuth](/docs/lytics/keys-authorizations)

### Integration Details

-   **Implementation Type**: [Server-side](/docs/lytics/integrated-marketing-tools#server-side-implementations) [Client-side](/docs/lytics/integrated-marketing-tools#client-side-integrations)
-   **Implementation Technique**: [REST API](/docs/lytics/integrated-marketing-tools#apis)

[Audience triggers](/docs/lytics/integrated-marketing-tools#audience-triggers)

-   **Frequency**: [Real-time](/docs/lytics/integrated-marketing-tools#real-time)
-   **Resulting data**: Tracking of offline lead conversions generated from an ad click

When a lead that was sourced from a Google ad converts the export will send their hashed PII (email or phone number) along with a transaction id (**Order ID**) for the conversion. Google then matches the PII to the click and attributes the conversion accordingly.

Steps/Pattern:

1.  User enters the audience after converting.
2.  The export receives an enter trigger for the user and [generates the conversion request](https://developers.google.com/google-ads/api/rest/reference/rest/v17/customers/uploadClickConversions)
3.  The export sends the update to google.

### Fields

By default, Lytics exports the following fields to Google Ads.

| Lytics User Field | Description | Google Ads Field | Type |
| --- | --- | --- | --- |
| email | Email Address | hashed email | string |
| phone | Phone Number | hashed phone number | string |
| cvt\\\_last\\\_time | Most Recent Conversion Time | conversionDateTime | time |
| cvt\\\_value | Most Recent Conversion Value | conversionValue | time |

### Configuration

Follow these steps to set up and configure an export job for Google Ads in the Lytics platform. If you are new to creating jobs in Lytics, see the [Jobs Dashboard](/docs/lytics/data-sources) documentation for more information.

1.  Select **Google Ads** from the list of providers.
2.  Select the export **job type** from the list.
3.  Select the Authorization you would like to use or [create a new one](/docs/lytics/keys-authorizations).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.

![c412ef6ecbc207417f325a57ee468e22b29eaa4116ec0ddf0ca62305a8b2be23-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3e6fdfa74a40dab6/8193e5e7f551ce717b5f9f4c/c412ef6ecbc207417f325a57ee468e22b29eaa4116ec0ddf0ca62305a8b2be23-image.png)

1.  Complete the configuration steps for your job.
2.  From the **Google Ads Account** input, select which Google Ads account to push conversions to.
3.  In the **Conversion Action** text box, enter the conversion action to use for the conversions. This is not the conversion action name, it is the ctid, and can be found in the URL of the conversion action.
4.  From the **Conversion Source** input, select who collected the data.
5.  From the **Conversion Environment** input, select where the conversion occurred.
6.  (Optional) From the **Hashed Email Field** input, select the user field that contains the user's email address. Either Hashed Email Address or Hashed Phone Number must be selected. If the email address is not already hashed, it will be hashed before being sent to Google.
7.  (Optional) From the **Hashed Phone Field** input, select the user field that contains the user's phone number. Either Hashed Email Address or Hashed Phone Number must be selected. If the phone number is not already hashed, it will be hashed before being sent to Google.
8.  (Optional) From the **Conversion Time Field** input, select the user field that contains the time the user converted.
9.  (Optional) From the **Google Click Identifier (gclid) Field** input, select the user field that contains the Google Click Identifier (gclid) of the conversion.
10.  (Optional) From the **Conversion Value Field** input, select the user field that contains the value of the conversion.
11.  In the **Currency Code** text box, enter enter the currency code for the conversion value (e.g. "USD").
12.  From the **Order ID Field** input, select the user field that contains the order ID of the conversion. This does not need to be an order id, but must be a unique value for each conversion.
13.  Click the **Start job** button to start the job.

## Experiences

Lytics [Experiences](/docs/lytics/experiences)support Google Ads that can be run as stand-alone ad campaigns or as a part of your cross-channel customer lifecycle. Using the Lytics Canvas, you can activate Google Ads with Lytics audiences to engage users and drive conversions.

### Experience Import

Like all Experience-enabled providers, you can [import Experiences](/docs/lytics/experiences#out-of-the-box-integration-experiences) from Google Ads to Lytics. During the import process, you will be asked to select an authorization. Read the [Google Ads authorization documentation](#authorization) for more information.

Before you can import, you will also need to select your Google Ads Client Customer ID since the authorization you select may be associated with multiple ad manager accounts.

![Google Ads Experience Auth step](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0aee29a0d133a390/b498bf35df9ddfc572641b65/Google_Ads_Experience_Auth_step.png)

Once you've selected an ad manager account, you can import eligible ad groups as Lytics Experiences.

![Google Ads Import Experience Step 2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2c639d5d075cf901/a6fdf84e6a1f9b97c8c38c0f/Experiences_2.png)

Once you have selected the checkboxes for the experiences you would like to import, click **Import Experiences** at the bottom.

### Tactics

On import, tactics are included in the label for the experience. On the Google Ads side, Lytics captures the field named [AdGroupType](https://developers.google.com/google-ads/api/reference/rpc/v10/AdGroupTypeEnum.AdGroupType).

Google Ads Experiences in Lytics support the following tactics:

-   **SEARCH\\\_STANDARD** - Default AdGroup type for Search Campaigns.
-   **SEARCH\\\_DYNAMIC\\\_ADS** - AdGroup type for Dynamic Search Ads campaigns.
-   **DISPLAY\\\_STANDARD** - Default AdGroup type for Display Campaigns.
-   **SHOPPING\\\_PRODUCT\\\_ADS** - Default AdGroup type for Shopping Campaigns serving standard products ads.
-   **SHOPPING\\\_SHOWCASE\\\_ADS** - AdGroups limited to serving Showcase/Merchant ads in shopping results.
-   **SHOPPING\\\_GOAL\\\_OPTIMIZED\\\_ADS** - AdGroup type for Smart Shopping Campaigns.
-   **UNKNOWN** - The AdGroup type is unknown.
-   **HOTEL\\\_ADS** - The default AdGroup type for Hotel campaigns.
-   **PROMOTED\\\_HOTEL\\\_ADS** - The AdGroup type for Promoted Hotel AdGroups.
-   **SHOPPING\\\_COMPARISON\\\_LISTING\\\_ADS** - The type for AdGroups in Shopping Comparison Listing campaigns.
-   **SHOPPING\\\_SMART\\\_ADS** - Type for AdGroups in Smart Shopping campaigns.
-   **SMART\\\_CAMPAIGN\\\_ADS** - The AdGroup type for Smart campaigns.
-   **UNSPECIFIED** - The type has not been specified.
-   **VIDEO\\\_BUMPER** - Short unskippable in-stream video ads.
-   **VIDEO\\\_EFFICIENT\\\_REACH** - Video efficient reach AdGroups.
-   **VIDEO\\\_NON\\\_SKIPPABLE\\\_IN\\\_STREAM** - Unskippable in-stream video ads.
-   **VIDEO\\\_OUTSTREAM** - Outstream video ads.
-   **VIDEO\\\_RESPONSIVE** - Video responsive AdGroups.
-   **VIDEO\\\_TRUE\\\_VIEW\\\_IN\\\_DISPLAY** - TrueView in-display video ads.
-   **VIDEO\\\_TRUE\\\_VIEW\\\_IN\\\_STREAM** - TrueView (skippable) in-stream video ads.

### Configuration

After importing a Google Ads Experience you can configure it for activation. All tactics for Google Ads Experiences have the same three configuration steps within the [Experience Editor](/docs/lytics/experiences#experience-editor):

1.  **Target** - select the target audience for your Experience.
2.  **Configure Google Ads** - set up how the audience for your Experience will be exported. This step will match the configuration instructions of the [Export Audiences (Customer Match)](#export-audiences-customer-match) and will generally function the same, but without the **Audience** selection, as that is configured by the Target step in the Experience editor.
3.  **Configure Delivery** - choose to turn the Delivery Optimization feature on or off.

Once you've finished configuring the Experience you can save and activate it.

### Activation

Activation for Google Ads Experience entails an Export to Customer Match List on Google. You can export your Lytics audiences to Google Ads Customer Match to reach and re-engage with your customers across Google Search, Google Shopping, Gmail, and Youtube.

### Metrics

Experience Metrics are collected for Google Ads Experiences by launching an Experience Metrics collection workflow. This workflow runs hourly and uses the [Google Ads Search](https://developers.google.com/google-ads/api/rest/common/search) and [Query Language](https://developers.google.com/google-ads/api/docs/query/overview) to query for [clicks](https://developers.google.com/google-ads/api/fields/v8/metrics#metrics.clicks), [impressions](https://developers.google.com/google-ads/api/fields/v8/metrics#metrics.impressions), [conversions](https://developers.google.com/google-ads/api/fields/v8/metrics#metrics.conversions), and [cost micros](https://developers.google.com/google-ads/api/fields/v8/metrics#metrics.cost_micros). This workflow will run in the background and will pull in the previous 7 days of metrics upon starting.

![Google Experience Metrics](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am21f9cbe925b880e6/07a5642b70c7bfa2da378675/google_ads_experience_metrics.png)

Metrics from the Google Ads are mapped to Lytics user fields as follows:

-   **Reach** - Impressions on Google Ads. Count of how often your ad has appeared on a search results page or website on the Google Network.
-   **Converted** - Clicks on Google Ads. This is the number of clicks that have been recorded on this AdGroup.
-   **Conversion Rate** - This is calculated as the ratio Clicks / Impressions
