---
title: "React Native"
description: "The Lytics SDK for React Native makes it easy for developers to identify, manage consent, and collect user activity data from their native mobile apps…"
url: /lytics/react-native-sdk
uid: blt9cde15591bf6b2ce
---

# React Native

## React Native

## React Native Quick Start

### Overview

The Lytics SDK for [React Native](https://reactnative.dev/) makes it easy for developers to identify, manage consent, and collect user activity data from their native mobile apps. This ensures all critical channel data can be associated with fully resolved user profiles. This section explains how to integrate Lytics into your React Native apps.

Here, we will cover how the Lytics React Native SDK enables the following:

-   Create a persistent identifier for a user across multiple app engagements.
-   Collect user attributes & identifiers.
-   Manage user consent.
-   Collect user activity (events) as they engage with your app.
-   Tailor collection destination and settings based on your particular needs.

### About the Lytics SDK for React Native

-   **iOS**
    -   **Version Support:** 14.0+ (deployment target > 14.0)
    -   **Xcode Version Required:** 15.0+
-   **Android**
    -   **Version Required**: 8+

### Installation

#### Before You Begin

Before you begin implementing the Lytics SDK for React Native, please make sure you have the following:

-   Access to a Lytics account capable of collecting streaming data.
-   The latest version of Xcode and/or Android Studio
-   A React Native app that you can use to implement the Lytics SDK for React Native

#### Step 1. Install the Lytics SDK & OS Specific Dependencies:

Install the core React Native Library

```
yarn add react-native-lytics
```

#### Step 2a. Install for Android (only if targeting Android devices)

Add the following permissions to your AndroidManifest.xml file:

```
<uses-permission android:name="android.permission.INTERNET" />
```

This permission is required to send events to the Lytics API:

```
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

This permission is technically optional but highly recommended to allow the library to determine the best time to send events to the API.

#### Step 2b. Install for iOS (only if targeting iOS devices)

Install native iOS modules:

```
npx pod-install
```

#### Step 3. Initialize the SDK

There are several configuration options outlined below. At a minimum, however, you must initialize the SDK with a valid [API token](/docs/lytics/access-tokens#deleting-an-existing-api-token) with data access to your Lytics account.

```
import { start } from 'react-native-lytics';

start({
  apiToken: 'xxxxxx',
  ...
});
```

#### Step 4. Identifying a User

Once we have initialized the SDK, it is a best practice to [identify](#identifying-users) the user anywhere they provide additional strong identifiers, such as a username or email, upon login. This ensures your profiles have the highest potential for properly unifying across your various data sources as soon as they identify themselves.

Do note that this step is optional. By default, the Lytics SDK will create an anonymous identifier for all users and leverage that to merge disparate sources as we do with our traditional web-based JavaScript SDK.

```
import { identify } from 'react-native-lytics';

identify({
  identifiers: {
    email: 'jdoe@email.com'
  } 
});
```

#### Step 5. Tracking Activity

Once the user has been identified (optional), we can begin [tracking](#tracking-events) various activities throughout their visit. Typical activities include screen views, clicks, purchases, etc. A full scope of event tracking flexibility can be found in the technical documentation section below.

```
import { track } from 'react-native-lytics';

track({ 
  name: 'purchase',
  properties: {
    total: 19.99,
    item: "Slingshot"
  }
});
```

## Technical Documentation

The following outlines the full definition of capabilities supported by the Lytics SDK for React Native.

### Configuration

When initializing the Lytics SDK with start(), a variety of top-level configuration options are available to ensure the SDK can be tailored to the needs of your particular application:

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| apiToken | Your Lytics account API token. | String | -- |
| defaultStream | The default stream name event data will be sent. _Note: This can be overridden globally or at the event level._ | String | react\\\_native\\\_sdk |
| primaryIdentityKey | The key that represents the strongest identifier for users. _Note: Used primarily to retrieve a full profile for personalization._ | String | \\\_uid |
| anonymousIdentityKey | The key that should be used to create and store the anonymous identifier. | String | \\\_uid |
| trackApplicationLifecycleEvents | (iOS Only) A value that indicates whether application lifecycle events should be tracked automatically. | Bool | false |
| uploadInterval | The max interval in seconds at which the event queue is flushed and uploaded to the Lytics API. | Number | 10 |
| maxQueueSize | The max event queue size that can be stored before all queued events are flushed and sent to the Lytics API. _Note: To disable a max queue size, set the value to 0._ | Number | 10 |
| maxLoadRetryAttempts | The maximum number of times to retry failed load requests before throwing an error. | Number | 1 |
| maxUploadRetryAttempts | The maximum number of times to try and resend an event on failure. | Number | 3 |
| sessionDuration | The number of seconds a session should persist. Sessions expire if the app has been either closed or in the background for the number of seconds defined here. | Number | 1200 |
| requireConsent | A Boolean value indicating whether a user must explicitly opt-in to event tracking. | Bool | false |
| defaultTable | The table used when fetching user profiles. | String | user |
| collectionEndpoint | The data upload endpoint. | URL |  |
| entityEndpoint | The entity (personalization or profile) endpoint. | URL |  |
| enableSandbox | A Boolean value indicating if events should be sent in "sandbox" mode. When in "sandbox" mode, any emitted events will not be processed by Lytics, but all logs will be available as are with live events. | Bool | false |
| logLevel | Set the logging level of the SDK. | LogLevel (.error, .debug, .info) | .error |
| autoTrackActivityScreens | (Android Only) Automatically track basic activity class details when an activity is resumed. | Bool | false |
| autoTrackAppOpens | (Android Only) Automatically track basic details when the app is opened. | Bool | false |
| autoTrackFragmentScreens | (Android Only) Automatically track basic fragment class details when a fragment is resumed. | Bool | false |

Each of the above configuration options can be added to the initial start() instantiation of the Lytics SDK as outlined here:

```
import { start } from 'react-native-lytics';

start({
  apiToken: 'xxxxxx',
  defaultStream: 'custom-stream',
  logLevel: LogLevel.debug,
  maxQueueSize: 10,
});
```

### Identifying Users

identify() is used to emit strong identifiers and attributes associated with your app user. This method provides a means to store the primary identifiers on the device itself so that all future event tracking from that device automatically is appended with information necessary to maximize the effectiveness of your identity resolution strategy. For each identify() call, you have the option to only store that data to the device or emit it to a Lytics event stream for mapping to profiles. Emitting all event types to a Lytics event stream is always our recommendation.

| Parameter | Description | Type |
| --- | --- | --- |
| stream | An optional definition of the Lytics event stream to send this particular event to. If left undefined (recommended), it will use the global default stream as assigned in the top-level config. | String |
| name | An optional name for the event. This may aid in validation, resolution, and mapping based on particular event types, such as "login." | String |
| identifiers | A required set of key/value pairs representing strong identifiers and their values. For instance, an email address, user id, or any other information can be resolved to a single user. | JSONMap |
| attributes | An optional set of key/value pairs that represent user attributes that are not to be used for data merging. These generally are things such as first name, last name, address, status, etc. | JSONMap |
| shouldSend | An optional boolean value to determine if the identify event should only be stored on the device or also emitted to a Lytics event stream (recommended). | Bool |

Example identify call where we set pass a custom stream, set of identifiers, and attributes:

```
import { identify } from 'react-native-lytics';

identify({
	stream: 'sample-custom-stream,
  identifiers: {
  	email: 'kevin@homealone.com'
  },
  attributes: {
  	first_name: 'Kevin',
    last_name: 'McCalister'
  }
})
```

### Tracking Events

track()emits activity data for a particular app user to a Lytics even stream. Each track call will automatically be appended with the strong identifiers stored on the device to ensure the highest potential resolution against Lytics user profiles. track() calls can include a variety of optional parameters and data associated with the interaction as defined below:

| Parameter | Description | Type |
| --- | --- | --- |
| stream | An optional definition of the Lytics event stream to send this particular event to. If left undefined (recommended), it will use the global default stream as assigned in the top-level config. | String |
| name | An optional name for the event. This may aid in validation, resolution, and mapping based on particular event types, such as "login." | String |
| identifiers | An optional set of key/value pairs representing strong identifiers and their values. For instance, an email address, user id, or any other information can be resolved to a single user. By default, all known identifiers will be automatically associated with the event. The best practice would be first to make an identify call unless the data would only be associated with a single event. | JSONMap |
| properties | An optional set of key/value pairs that represent event properties that are not to be used for data merging. These generally are things such as total cost, content consumed, item clicked, etc. | JSONMap |

Example track call where we track a purchase event and its associated properties:

```
import { track } from 'react-native-lytics';

track({
	name: 'purchase',
  properties: {
  	total: 19.99,
    item: 'Slingshot'
  }
})
```

##### Screen Tracking

screen() is an additional method for appending device information to the traditional track call. This is an extension of the above definition and results in including the following information with all events:

-   iOS
    -   Operating System Version UIDevice.current.systemVersion
    -   Device Model Name UIDevice.current.name
    -   identifierForVendor UIDevice.current.identifierForVendor
    -   orientation UIDevice.current.orientation
    -   userInterfaceIdiom UIDevice.current.userInterfaceIdiom
-   Android
    -   An attribute of \_e is set to the value of sc but no other device parameters are automatically captured.

```
import { screen } from 'react-native-lytics';

screen({
	name: 'navigation',
  properties: {
  	path: 'test/page'
  }
})
```

### Data Privacy Controls

Depending on your application's needs, various data privacy controls are available by default. Below are the optional methods and examples of scenarios where some or all may be most applicable.

#### Consent

consent() is a specific event type for collecting critical information related to consent, such as location, document, etc. As a best practice, a consent() event should always be leveraged alongside the optIn() event to ensure proper documentation of consent:

| Parameter | Description | Type |
| --- | --- | --- |
| stream | An optional definition of the Lytics event stream to send this particular event to. If left undefined (recommended), it will use the global default stream as assigned in the top-level config. | String |
| name | An optional name for the event. This may aid in validation, resolution, and mapping based on particular event types, such as "login." | String |
| identifiers | An optional set of key/value pairs representing strong identifiers and their values. For instance, an email address, user id, or any other information can be resolved to a single user. By default, all known identifiers will be automatically associated with the event. The best practice would be first to make an identify call unless the data would only be associated with a single event. | Map |
| consent | An required set of key/value pairs that represent specific consent event properties that are not to be used for data merging. These generally are things such as type of consent, document reference, location, etc. | Map |

```
import { consent } from 'react-native-lytics';

consent({
  name: 'consent-1',
  identifiers: {
    userid: 'my-fake-userid-1234'
  },
  attributes: {
    firstName: 'Kevin',
    lastName: 'McCalister'
  },
  consent: {
    documents: {
      'terms_jan_2023',
      'sharing_policy_jan_2023'
    },
    location: 'Chicago, IL',
    consented: true
  }
})
```

#### Opt In

optIn() sets the state of a user's activity tracking preference. By default, all users are opted in. This default setting is fully configurable at the top-level SDK configuration. In either case, an explicit call to optIn() will result in activities being tracked and sent to a Lytics stream.

```
import { optIn } from 'react-native-lytics';

optIn();
```

#### Opt Out

optOut() is the opposite of the above optIn method and will prevent activity data from being emitted to Lytics after it has been called until an additional.optIn() call has been made.

```
import { optOut } from 'react-native-lytics';

optOut();
```

#### General

The Lytics SDK for React Native streamlines tracking authorization with unified calls for both iOS and Android platforms. However, it's important to note that each platform may still necessitate specific configurations to prompt for and gather device identifiers effectively.

Requesting authorization, be it for IDFA or GAID, is invoked through a requestTrackingAuthorization() call:

```
import { requestTrackingAuthorization } from 'react-native-lytics';

requestTrackingAuthorization();
```

In addition, if at any point the user chooses to revoke access, that can be initiated via the disableTracking() call:

```
import { disableTracking } from 'react-native-lytics';

disableTracking();
```

#### IDFA (Identifier for Advertisers) _iOS_

[IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager/1614151-advertisingidentifier) or advertisingIdentifier is an alphanumeric string that is unique to each device. Collection of this identifier requires explicit confirmation from the app user, which the Lytics SDK for iOS can trigger. In addition, upon confirmation, the IDFA will be treated as a strong identifier and included with all outbound events emitted to Lytics streams for improved resolution.

To access the IDFA from iOS devices you must add the the NSUserTrackingUsageDescription dependency to your apps Info.plist file.

1.  Open your Info.plist file in Xcode.
2.  Right-click on a blank line and select Add Row from the context menu.
3.  In the newly added row, start typing NSUserTrackingUsageDescription to select it from the auto-complete list. This will be the key.
4.  In the Value column of the same row, enter a string that describes why your app needs to track the user. The description should be clear and user-friendly, as it will be displayed in the system prompt to the user.

```
<key>NSUserTrackingUsageDescription</key>
<string>Our app uses your data to deliver personalized ads, improving your app experience. We ensure your data is handled securely.</string>
```

#### GAID (Identifier for Advertisers) _Android_

[GAID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) the Google Advertising ID (GAID) is a unique identifier assigned to each user's device by Google for Android devices. It's used for tracking and targeting purposes in advertising and analytics applications. GAID allows advertisers and developers to collect data on user behavior and preferences in a way that respects their privacy preferences. Users have control over their GAID, with the ability to reset it or opt out of personalized advertising, ensuring user privacy. This system is analogous to Apple's IDFA (Identifier for Advertisers) on iOS devices.

To access the GAID from Android devices you must add the Google Play Services dependency as follows to your build.gradle file:

```
dependencies {
    implementation 'com.google.android.gms:play-services-ads-identifier:17.0.0'
}
```

### Utility

Several utility-type methods are available for flushing queues, resetting stored data, and performing general maintenance or debugging.

#### Event Queue Flushing

Occasionally, it may be desired to force a flush of the event queue. This is common after a series of events, before sign-out, etc. This method will bypass any queue caps or timers and result in all queued events being emitted:

```
import { dispatch } from 'react-native-lytics';

dispatch();
```

#### Stored Property Flushing

Strong identifiers and attributes are stored locally on the device. In general, there are not likely to be many use cases where it is necessary to delete all stored data and reset the SDK. By doing so, the resolution will become much more complex, and all identifiers, even anonymous, will no longer be accessible. That said, in the case of a shared device where a user is logging in and out or in the more common case of a test device, the following method is available to delete all data stored by the Lytics SDK for React Native:

```
import { reset } from 'react-native-lytics';

reset();
```

#### Access Stored Identifiers & Attributes

Accessing the current user's profile for personalization is a key aspect of the Lytics SDK for React Native. To access the user profile, we've provided the getProfile()as outlined below:

```
import { getProfile } from 'react-native-lytics';

export function Example() {
	const loadProfile = async () => {
    try {
        const profile = await getProfile();
        console.log('Profile:', profile);
      } catch (error) {
        console.error(error);
      }
    };
}
```

**Note:** Note: If for any reason the getProfile() call fails on iOS no profile will be returned whereas in the Android version any known information that is stored on the device will be returned.

### API Reference

The Lytics SDK for React Native is optimized to leverage the fewest number of APIs possible. As such, all event collection is managed by leveraging the core [Lytics event collection API](#).

## Troubleshooting

When enabled, the .debug log level will result in additional logs to aid troubleshooting and issue resolution. Don't hesitate to contact customer support if you have trouble implementing the Lytics SDK for React Native.

## FAQ

Please visit our [community section](https://docs.lytics.com/discuss?tag=ios-sdk) for FAQs and SDK-related discussions.
