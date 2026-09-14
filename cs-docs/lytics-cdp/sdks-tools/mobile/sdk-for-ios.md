---
title: "iOS"
description: "The Lytics SDK for iOS makes it easy for developers to identify, manage consent, and collect user activity data from their native mobile apps. This…"
url: /lytics/sdk-for-ios
---

# iOS

## iOS

## iOS Quick Start

### Overview

The Lytics SDK for iOS makes it easy for developers to identify, manage consent, and collect user activity data from their native mobile apps. This ensures all critical channels can be associated with fully resolved user profiles. This section explains how to integrate Lytics into your iOS apps. If you are looking for information on Android apps, see the Lytics [SDK for Android](/docs/lytics/sdk-for-android).

Here we will cover how the Lytics SDK for iOS enables the following:

-   Create a persistent identifier for a user across multiple app engagements.
-   Collect user attributes & identifiers.
-   Manage user consent.
-   Collect user activity (events) as they engage with your app.
-   Tailor collection destination and settings based on your particular needs.

### About the Lytics SDK for iOS

-   **Approximate Installation Size:** 3.2 MB (includes Swift Concurrency)
-   **iOS Version Support:** 14.0+
-   **Xcode Version Required:** v14.2 or Higher

### Installation

#### Before You Begin

Before you begin implementing the Lytics SDK for iOS, please make sure you have the following:

-   Access to a Lytics account capable of collecting streaming data.
-   The latest version of Xcode (v14.0+ or higher)
-   An iOS app that you can use to implement the Lytics SDK for iOS

#### Step 1. Add the Lytics SDK & Dependencies:

You can add the Lytics SDK to an Xcode project as a package dependency.

1.  From the File menu, select Add Packages...
2.  Enter into the package repository URL text field and click Add Package
3.  Add the Lytics package product to your application target

#### Step 2. Configure the SDK

A variety of top-level [configuration](#configuration) options are available to ensure the SDK can be tailored to the needs of your particular application. To get started, however, we need only add your valid Lytics API token to the Lytics.shared.start initialization call as outlined below:

```
Lytics.shared.start(apiToken: "YOUR-VALID-LYTICS-API-TOKEN")
```

#### Step 3. Identifying a User

Once we have initialized the SDK, it is a best practice to [identify](#identifying-users) the user anywhere formally they provide additional strong identifiers, such as a username or email, upon login, for example. This ensures your profiles have the highest potential for properly unifying across your various data sources.

Do note, this step is optional. By default, the Lytics SDK will create an anonymous identifier for all users and leverage that to merge with disparate sources as we do with our traditional web-based JavaScript SDK.

```
Lytics.shared.identify(
  identifiers: AnyCodable([
      "email" : "kevin@homealone.com",
  ])
)
```

#### Step 4. Tracking Activity

Once the user has been identified (optional), we can begin [tracking](#tracking-events) various activities throughout their visit. Typical activities include screen views, clicks, purchases, etc. A full scope of event tracking flexibility can be found in the technical documentation section below.

```
Lytics.shared.track(
  name: "purchase",
  properties: AnyCodable([
    "total" : 19.99,
    "item" : "Slingshot"
  ])
)
```

## Technical Documentation

The following outlines the full definition of capabilities supported by the Lytics SDK for iOS.

### Configuration

When initializing the Lytics SDK with Lytics.shared.start, a variety of top-level configuration options are available to ensure the SDK can be tailored to the needs of your particular application:

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| apiKey | Your Lytics account API token. | String | -- |
| defaultStream | The default stream name event data will be sent. _Note: This can be overridden globally or at the event level._ | String | ios\\\_sdk |
| primaryIdentityKey | The key that represents the strongest identifier for users. _Note: Used primarily to retrieve a full profile for personalization._ | String | \\\_uid |
| anonymousIdentityKey | The key that should be used to create and store the anonymous identifier. | String | \\\_uid |
| trackApplicationLifecycleEvents | A value that indicates whether application lifecycle events should be tracked automatically. | Bool | false |
| uploadInterval | The max interval in seconds at which the event queue is flushed and uploaded to the Lytics API. | Double | 10 |
| maxQueueSize | The max event queue size that can be stored before all queued events are flushed and sent to the Lytics API. \\\_Note: To disable a max queue size, set the value to 0. | Int | 10 |
| maxLoadRetryAttempts | The maximum number of times to retry failed load requests before throwing an error. | Int | 1 |
| maxUploadRetryAttempts | The maximum number of times to try and resend an event on failure. | Int | 3 |
| maxRetryCount | The max number of times to try and resend an event on failure. | Int | 3 |
| sessionDuration | The number of seconds a session should persist. Sessions expire if the app has been either closed or in the background for the number of seconds defined here. | Double | 1200 |
| requireConsent | A Boolean value indicating whether a user must explicitly opt-in to event tracking. | Bool | false |
| defaultTable | The table used when fetching user profiles. | String | user |
| collectionEndpoint | The data upload endpoint. | URL |  |
| entityEndpoint | The entity (personalization or profile) endpoint. | URL |  |
| enableSandbox | A Boolean value indicating if events should be sent in "sandbox" mode. When in "sandbox" mode, any emitted events will not be processed by Lytics, but all logs will be available as are with live events. | Bool | false |
| logLevel | Set the logging level of the SDK. | LogLevel (.error, .debug, .info) | .error |

Each of the above configuration options can be added to the initial Lytics.shared.start instantiation of the Lytics SDK as outlined here:

```
Lytics.shared.start(apiToken: "YOUR-VALID-LYTICS-API-TOKEN") { configuration in 
    configuration.logLevel = .debug 
    configuration.defaultStream = "my_custom_ios_stream" 
    configuration.maxQueueSize = 15
}
```

### Identifying Users

Lytics.shared.identify is used to emit strong identifiers and attributes associated with your app user. This method provides a means to store the primary identifiers on the device itself so that all future event tracking from that device automatically is appended with information necessary to maximize the effectiveness of your identity resolution strategy. For each Lytics.shared.identify call, you have the option to only store that data to the device or emit it to a Lytics event stream for mapping to profiles. Emitting all event types to a Lytics event stream is always our recommendation.

| Parameter | Description | Type |
| --- | --- | --- |
| stream | An optional definition of the Lytics event stream to send this particular event to. If left undefined (recommended), it will use the global default stream as assigned in the top-level config. | String |
| name | An optional name for the event. This may aid in validation, resolution, and mapping based on particular event types, such as "login." | String |
| timestamp | An optional timestamp to associate with the submitted identified event. This will default to the time the event is recorded. It is left undefined. | Timestamp |
| identifiers | A required set of key/value pairs representing strong identifiers and their values. For instance, an email address, user id, or any other information can be resolved to a single user. | Map |
| attributes | An optional set of key/value pairs that represent user attributes that are not to be used for data merging. These generally are things such as first name, last name, address, status, etc. | Map |
| shouldSend | An optional boolean value to determine if the identify event should only be stored on the device or also emitted to a Lytics event stream (recommended). | Bool |

Example identify call where we set pass a custom stream, set of identifiers, and attributes:

```
Lytics.shared.identify(
  stream: "sample-custom-stream", // optional
  identifiers: AnyCodable([
      "email" : "kevin@homealone.com",
  ]),
  attributes: AnyCodable([
    "first_name" : "Kevin",
    "last_name" : "McCalister"
  ])
)
```

### Tracking Events

Lytics.shared.trackemits activity data for a particular app user to a Lytics even stream. Each track call will automatically be appended with the strong identifiers stored on the device to ensure the highest potential resolution against Lytics user profiles. Lytics.shared.track calls can include a variety of optional parameters and data associated with the interaction as defined below:

| Parameter | Description | Type |
| --- | --- | --- |
| stream | An optional definition of the Lytics event stream to send this particular event to. If left undefined (recommended), it will use the global default stream as assigned in the top-level config. | String |
| name | An optional name for the event. This may aid in validation, resolution, and mapping based on particular event types, such as "login." | String |
| timestamp | An optional timestamp to associate with the submitted identified event. This will default to the time the event is recorded. It is left undefined. | Timestamp |
| identifiers | An optional set of key/value pairs representing strong identifiers and their values. For instance, an email address, user id, or any other information can be resolved to a single user. By default, all known identifiers will be automatically associated with the event. The best practice would be first to make an identify call unless the data would only be associated with a single event. | Map |
| properties | An optional set of key/value pairs that represent event properties that are not to be used for data merging. These generally are things such as total cost, content consumed, item clicked, etc. | Map |

Example track call where we track a purchase event and its associated properties:

```
Lytics.shared.track(
  name: "purchase",
  properties: AnyCodable([
    "total" : 19.99,
    "item" : "Slingshot"
  ])
)
```

##### Screen Tracking

Lytics.shared.screen is an additional method for appending device information to the traditional track call. This is an extension of the above definition and results in including the following information with all events:

-   Operating System Version (UIDevice.current.systemVersion)
-   Device Model Name (UIDevice.current.name)
-   identifierForVendor (UIDevice.current.identifierForVendor)
-   orientation (UIDevice.current.orientation)
-   userInterfaceIdiom (UIDevice.current.userInterfaceIdiom)

### Data Privacy Controls

Depending on your application's particular needs, various data privacy controls are available by default. Below you'll find the optional methods and examples of scenarios where some or all may be most applicable.

#### Consent

Lytics.shared.consent is a specific event type for collecting critical information related to consent, such as location, document, etc. As a best practice, a Lytics.shared.consent event should always be leveraged alongside the Lytics.shared.optIn() event to ensure proper documentation of consent:

| Parameter | Description | Type |
| --- | --- | --- |
| stream | An optional definition of the Lytics event stream to send this particular event to. If left undefined (recommended), it will use the global default stream as assigned in the top-level config. | String |
| name | An optional name for the event. This may aid in validation, resolution, and mapping based on particular event types, such as "login." | String |
| timestamp | An optional timestamp to associate with the submitted identified event. This will default to the time the event is recorded. It is left undefined. | Timestamp |
| identifiers | An optional set of key/value pairs representing strong identifiers and their values. For instance, an email address, user id, or any other information can be resolved to a single user. By default, all known identifiers will be automatically associated with the event. The best practice would be first to make an identify call unless the data would only be associated with a single event. | Map |
| identifiers | A required set of key/value pairs representing strong identifiers and their values. For instance, an email address, user id, or any other information can be resolved to a single user. | Map |
| consent | An required set of key/value pairs that represent specific consent event properties that are not to be used for data merging. These generally are things such as type of consent, document reference, location, etc. | Map |

```
Lytics.shared.consent(
  name: "consent-1",
  identifiers: AnyCodable([
    "userid": "my-fake-userid-1234"
  ]),
  attributes: AnyCodable([
    "firstName": "Kevin",
    "lastName": "McCalister"
  ]),
  consent: AnyCodable([
    "documents": [
      "terms_jan_2023",
      "sharing_policy_jan_2023"
    ],
    "location": "Chicago, IL",
    "consented": true
  ])
)
```

#### Opt In

Lytics.shared.optIn() sets the state of a user's activity tracking preference. By default, all users are opted in. This default setting is fully configurable at the top-level SDK configuration. In either case, an explicit call to Lytics.shared.optIn() will result in activities being tracked and sent to a Lytics stream.

```
Lytics.shared.optIn()
```

#### Opt Out

Lytics.shared.optOut() is the opposite of the above Lytics.shared.optIn method and will prevent activity data from being emitted to Lytics after it has been called until an additional.Lytics.shared.optIn() call has been made.

```
Lytics.shared.optOut()
```

#### IDFA (Identifier for Advertisers)

[IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager/1614151-advertisingidentifier) or advertisingIdentifier is an alphanumeric string that is unique to each device. Collection of this identifier requires explicit confirmation from the app user, which the Lytics SDK for iOS can trigger. In addition, upon confirmation, the IDFA will be treated as a strong identifier and included with all outbound events emitted to Lytics streams for improved resolution.

The Lytics SDK for iOS offers two methods to collect IDFA and handle the opt-out of IDFA.

To present a required modal asking for tracking access and storage/inclusion of the device-specific IDFA upon confirmation, call the following method:

```
Lytics.shared.requestTrackingAuthorization()
```

To disable the storing and emitting of the user's device specific IDFA, call the following method:

```
Lytics.shared.disableTracking()
```

### Utility

Several utility-type methods are available for flushing queues, resetting stored data, and performing general maintenance or debugging.

#### Event Queue Flushing

Occasionally, it may be desired to force a flush of the event queue. This is common after a series of events, before sign-out, etc. This method will bypass any queue caps or timers and result in all queued events being emitted:

```
Lytics.shared.dispatch()
```

#### Stored Property Flushing

Strong identifiers and attributes are stored locally on the device. In general, there are not likely to be many use cases where it is necessary to delete all stored data and reset the SDK. By doing so, the resolution will become much more complex, and all identifiers, even anonymous, will no longer be accessible. That said, in the case of a shared device where a user is logging in and out or in the more common case of a test device, the following method is available to delete all data stored by the Lytics SDK for iOS:

```
Lytics.shared.reset()
```

#### Access Stored Identifiers & Attributes

Be it for testing or presenting a profile to the end user, the complete stored device-level profile is available with the following method. Do note, this is only the stored data as a result of Lytics.shared.identify calls and does not represent the complete user profile from the Lytics system and cross-channel sources.

```
let userModel = await Lytics.shared.user
```

### API Reference

The Lytics SDK for iOS is optimized to leverage the fewest number of APIs possible. As such, all event collection is managed by leveraging the core [Lytics event collection API](#).

## Troubleshooting

When enabled, the .debug log level will result in additional logs to aid troubleshooting and issue resolution. Don't hesitate to contact customer support if you have trouble implementing the Lytics SDK for iOS.

## FAQ

Please visit our [community section](https://docs.lytics.com/discuss?tag=ios-sdk) for FAQs and SDK-related discussions.
