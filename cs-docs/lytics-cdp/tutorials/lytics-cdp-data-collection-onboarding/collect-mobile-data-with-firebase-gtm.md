---
title: "Collect Mobile Data with Firebase + GTM"
description: "A step-by-step tutorial for collecting real-time mobile app data in Lytics by pairing Firebase Analytics with Google Tag Manager, using the Lytics Image Pixel to forward user properties and events to a Lytics data stream."
url: /lytics/collect-mobile-data-with-firebase-gtm
uid: blt932e493d47fc3160
---

# Collect Mobile Data with Firebase + GTM

## Collect Mobile Data with Firebase + GTM

The following tutorial provides step-by-step guidance for setting up, configuring, and testing data collection from a mobile device in real-time using Firebase Analytics (FA) & Google Tag Manager (GTM). This is an excellent alternative for minimizing the number of SDKs that must be deployed from your mobile app by leveraging a robust and well-tested analytics solution in Firebase Analytics using GA4.

In this tutorial, we’ll cover the following steps:

-   Setting up Firebase and installing the SDK.
-   Setting up Google Tag Manager and installing the SDK.
-   Configuring the Lytics Image Pixel collection method.
-   Testing the implementation end-to-end.

## Benefits

-   Events are delivered to Lytics in real-time.
-   Reduces the number of SDKs installed.
-   Leverages Google-managed SDKs to streamline app approval.
-   Easy access to advanced testing and debugging tools.
-   Automatically passes events to Google Analytics or analysis or further delivery to BigQuery.

## Install Firebase SDK

This solution leverages [Firebase Analytics](https://firebase.google.com/docs/analytics) which Google Analytics powers under the hood. This means that in addition to getting data delivered to Lytics, you’ll also be able to leverage Google Analytics and its direct integrations to other Google products such as BigQuery as an automatic value add.

Google provides [thorough documentation](https://firebase.google.com/docs/analytics/get-started?platform=ios) for getting a Firebase project set up and installed in your platform of choice.

![firebase-1](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am11b89819d1aef5ca/650288caf9dccb1246545318/img-0046.png)

Once you have completed the setup and made it to the **Start logging events** section of the documentation, you are ready to move to the next step. Feel free to log some sample events per the documentation, either way, we’ll come back here further down in this tutorial.

## Install Google Tag Manager SDK

Next, we’ll leverage Google Tag Manager, which offers seamless integration with Firebase Analytics to forward events collected by Firebase to Lytics. Like Firebase, Google has [excellent documentation](https://developers.google.com/tag-platform/tag-manager/ios/v5) for getting a Google Tag Manager account set up and the iOS or Android SDKs configured.

![gtm-2](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0a282508a2b4594f/f439b7c96a1172a360ebaae6/img-0047.png)

## Sending User Properties & Events

Now that we have configured Firebase and Google Tag Manager, we are ready to start configuring and sending our events. Firebase makes both setting user properties as well as passing interaction-based events easy. For more details on the power of Firebase, you can revisit the [Start Logging Events](https://firebase.google.com/docs/analytics/get-started?platform=ios#start_logging_events_2) section of the getting started documentation.

```
Analytics.logEvent("did_something", parameters: [
  "_uid": UUID().uuidString,
  "lytics_test_key": "some value",
])
```

The above represents an example of a custom event named **did\_something**. For that event, we also include two parameters **\_uid** and **lytics\_test\_key**. These parameters are entirely up to you and should be in support of your use case. Keep a record of the parameters used, as you will need to explicitly define those in Google Tag Manager to pass them to Lytics.

That said, including an identifier of some for every event is essential to your identity resolution strategy. In the above example, we use **\_uid**, which is one of the default identifiers. Consult your account manager or solutions team for the optimal approach here. Regardless of the approach, it is essential that the ID(s) passed persist. There are various ways to generate and store a value on the device. For this step, it is best to consult your app development team.

One example would be to use Swift's [UUID](https://developer.apple.com/documentation/foundation/uuid) to generate a unique user identifier and store it using [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults). The method used to generate, store, and access this value has no impact on the results. It is only essential to include that value in all events and have it persist for as long as possible. On that note, whenever possible, it is a best practice to include multiple identifiers such as email, or IDFA, to maximize the match rate.

## Configuring Google Tag Manager for Event Forwarding

The final step in getting user details from your app to Lytics is configuring your Google Tag Manager Container. We’ll start by defining **Variables** for each of the parameters you pass in your events from your app. Based on our example, we’ll define two variables: \_uid and lytics\_test\_key.

### Step One

From the Google Tag Manager dashboard, navigate to **Variables** in the left-hand menu.

![step1-3](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am19ae5ad40d568bc9/eef5a886f0a3f1298e736a94/img-0048.png)

### Step Two

Create a new variable, one for each parameter, using the **New** button. In the new window that loads, click **Choose a variable** type and select **Event Parameter**. This is just an example, you can use any variable type based on your needs. **Event Name** may also prove helpful in adding more context to the event data delivered to Lytics.

![variable-4](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2406f851e92a5d4d/f004f44009ed479622eab004/img-0049.png)

### Step Three

Finish your variable configuration by selecting **Custom Parameter**, followed by inputting one of the parameter names we defined above. In our case, we’ll use **\_uid** with a default value of an empty string. Save your settings and move to the next parameter until you have created a variable for all parameters being passed to Lytics.

![variable2-5](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama44a8fc2aa0d0a45/cdf69b661d43303af55049f9/img-0050.png)

### Step Four

With your variables defined, we’ll move on to creating a new **Tag** within our container. Select **Tags** from the left-hand menu and **New** tag once the list of tags has loaded. On the following window, click **Choose a tag type** and select **Custom Image**.

![tag-6](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am56cf9cad526bdd34/bfb140eece6992d7e58fc456/img-0051.png)

### Step Five

With your tag type selected, we’ll configure the **Image URL** as well as the **Triggering** rules. The Image URL will leverage the [Lytics Image Pixel](/docs/lytics/onboarding-web-data) collection method. To configure, you’ll need to know your **Account ID**.

For simplicity, we’ll break the full URL into two parts that will be joined together in actual execution.

Focusing first on the path, everything from **https** up to the **?** you will need to replace the **YOUR-AID** portion of the path with your actual [account ID](/docs/lytics/glossary-terms#account-id) and the **STREAM** portion of the path to your desired ingest stream.

```
https://c.lytics.io/c/YOUR-AID/STREAM
```

The query parameters will contain the field name you’d like to pass to Lytics, as well as a value that is populated by referencing the GTM variables.

```
?_uid={{Lytics UID}}&lytics_test_key={{Lytics Test Key}}
```

Putting those two parts together results in the final value of the **Image URL** in our config.

```
https://c.lytics.io/c/myaccountid123/mobileevents?_uid={{Lytics UID}}&lytics_test_key={{Lytics Test Key}}
```

Last we’ll configure the event that triggers our forward by selecting **All Events**.

![tagconfig-7](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4de4ee221ce98247/412e8dbe2ea14b412babb731/img-0052.png)

### Step Six

With our tag defined, the final step is publishing the Google Tag Manager container and storing the config that is generated in the proper directory of our App. Once again, [Google provides instructions](https://developers.google.com/tag-platform/tag-manager/ios/v5#1_add_tag_manager_to_your_project) for doing so.

## Test & Debug Implementation

With our implementation all configured, the final step is to test and debug. Each of the steps defined above supports testing and debugging. We’ve added quick links to those resources below.

-   [Firebase Event Debugger](https://firebase.google.com/docs/analytics/debugview)
-   [Google Tag Manager Debugger](https://developers.google.com/tag-platform/tag-manager/ios/v5#debug_container)
-   Lytics Data Streams: Once successfully tested, you can do the final validation by reviewing your incoming data as part of the [streams](/docs/lytics/data-streams-1) UI within your Lytics account.
