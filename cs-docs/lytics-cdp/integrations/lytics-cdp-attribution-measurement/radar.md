---
title: "Radar"
description: "Radar"
url: /lytics/radar
uid: bltc847f68928aa8ce8
---

# Radar

## Radar

## Overview

[Radar](https://radar.io/) is a location context platform for location-based targeted app experiences. Radar data can be used to serve personalized experiences in real-time based on a user's current surroundings.

Integrating Radar and Lytics enables you to access Radar's real-time location data in Lytics profiles and audience definitions. With Lytics Experiences powered by audiences using Radar data, you can deliver multi-channel experiences based on location in real-time such as email or mobile push.

The [Radar event integration](/documentation/product/integrations/radar/event-integration) sends user and activity data to Lytics.

## Event Integration

The Radar [event integration](https://radar.io/documentation/integrations#event-integrations) with Lytics imports Radar's location context data in real-time which surface as user profile fields which can be used in the Lytics audience builder. Lytics Audiences using Radar data can be used to activate location-based experiences in real-time.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Tactic**: Webhook Integration
-   **Frequency**: Real-time Integration
-   **Resulting Data**: Raw Event Data which is automatically mapped to User Fields on new or existing User Profiles.

The integration is an [event integration](https://radar.io/documentation/integrations#event-integrations) configured in the Radar application which sends Radar data to the Lytics streams `radar_events` and `radar_users`.

### Fields

See [Radar's Lytics documentation reference](https://radar.io/documentation/integrations/lytics) for details on how Radar data is received by Lytics streams. The tables below describe how that raw data the streams are mapped as user fields on the Lytics profile.

Unique identifiers are not included in the default mapping for these streams. As mentioned below in the [configuration](#configuration) step, during the integrations setup process please discuss which fields you would like to use as unique identifiers for your Radar data.

The following fields are included in the default mapping of the `radar_users` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| radarLocationLatitude | radar\\\_location\\\_latitude | Current Radar Location Latitude | string |
| radarLocationLongitude | radar\\\_location\\\_longitude | Current Radar Location Longitude | string |
| radarUpdatedAt | radar\\\_updated\\\_at | Current Radar Location Update | date |
| radarGeofenceIds | radar\\\_geofence\\\_ids | Current Radar Geofence Ids | \\\[\]string |
| radarGeofenceDescriptions | radar\\\_geofence\\\_descriptions | Current Radar Geofence Descriptions | \\\[\]string |
| radarGeofenceTags | radar\\\_geofence\\\_tags | Current Radar Geofence Tags | \\\[\]string |
| radarGeofenceExternalIds | radar\\\_geofence\\\_external\\\_ids | Current Radar Geofence External Ids | \\\[\]string |
| radarRegionCountryCode | radar\\\_region\\\_country\\\_code | Current Radar Region Country Code | string |
| radarRegionCountryName | radar\\\_region\\\_country\\\_name | Current Radar Region Country Name | string |
| radarRegionStateCode | radar\\\_region\\\_state\\\_code | Current Radar Region State Code | string |
| radarRegionStateName | radar\\\_region\\\_state\\\_name | Current Radar Region State Name | string |
| radarRegionPostalCode | radar\\\_region\\\_postal\\\_code | Current Radar Region Postal Code | string |
| radarRegionDMACode | radar\\\_region\\\_dma\\\_code | Current Radar Region DMA Code | string |
| radarRegionDMAName | radar\\\_region\\\_dma\\\_name | Current Radar Region DMA Name | string |
| radarPlaceId | radar\\\_place\\\_id | Current Radar Place Id | string |
| radarPlaceName | radar\\\_place\\\_name | Current Radar Place Name | string |
| radarPlaceFacebookId | radar\\\_place\\\_facebook\\\_id | Current Radar Place Facebook Id | string |
| radarPlaceCategories | radar\\\_place\\\_categories | Current Radar Place Categories | \\\[\]string |
| radarPlaceChainSlug | radar\\\_place\\\_chain\\\_slug | Current Radar Place Chain Slug | string |
| radarPlaceChainName | radar\\\_place\\\_chain\\\_name | Current Radar Place Chain Name | string |
| radarPlaceChainExternalId | radar\\\_place\\\_chain\\\_external\\\_id | Current Radar Place Chain External Id | string |
| radarInsightsStateHome | radar\\\_insights\\\_state\\\_home | Radar Insights State Home | string |
| radarInsightsStateOffice | radar\\\_insights\\\_state\\\_office | Radar Insights State Office | string |
| radarInsightsStateTraveling | radar\\\_insights\\\_state\\\_traveling | Radar Insights State Traveling | string |



The following fields are included in the default mapping of the `radar_events` stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| geofenceId  
 | last\\\_entered\\\_ts\\\_by\\\_geofenceId  
last\\\_exited\\\_ts\\\_by\\\_geofenceId | Last Entered Timestamp by Geofence Id  
 | map\\\[string\]date  
map\\\[string\]date |
| geofenceDescription | last\\\_entered\\\_ts\\\_by\\\_geofenceDescription  
last\\\_exited\\\_ts\\\_by\\\_geofenceDescription | Last Entered Timestamp by Geofence Description  
 | map\\\[string\]date  
map\\\[string\]date |
| geofenceExternalId | last\\\_entered\\\_ts\\\_by\\\_geofenceExtId  
last\\\_exited\\\_ts\\\_by\\\_geofenceExtId | Last Entered Timestamp by Geofence External ID  
Last Exited Timestamp by Geofence External ID | map\\\[string\]date  
map\\\[string\]date |
| geofenceTag | last\\\_geofence\\\_tags | Last Geofence Tags | \\\[\]string |
| placeId | last\\\_entered\\\_ts\\\_by\\\_placeId  
last\\\_exited\\\_ts\\\_by\\\_placeId | Last Entered Timestamp by Place ID  
Last Exited Timestamp by Place ID | map\\\[string\]date  
map\\\[string\]date |
| placeName | last\\\_entered\\\_ts\\\_by\\\_placeName  
last\\\_exited\\\_ts\\\_by\\\_placeName | Last Entered Timestamp by Place Name  
Last Exited Timestamp by Place Name | map\\\[string\]date  
map\\\[string\]date |
| placeCategories | last\\\_place\\\_categories | Last Place Categories | \\\[\]string |
| timestamp | last\\\_entered\\\_home  
last\\\_exited\\\_home  
last\\\_entered\\\_office  
last\\\_started\\\_traveling  
last\\\_stopped\\\_traveling | Last Entered Home  
Last Exited Home  
Last Entered Office  
Last Started Traveling  
Last Stopped Traveling | date  
date  
date  
date  
date |
| regionCode | last\\\_entered\\\_ts\\\_by\\\_regionCode  
last\\\_exited\\\_ts\\\_by\\\_regionCode | Last Entered Timestamp by Country Code  
Last Exited Timestamp by Country Code | map\\\[string\]date  
map\\\[string\]date |
| regionCode | last\\\_entered\\\_ts\\\_by\\\_regionCode  
last\\\_exited\\\_ts\\\_by\\\_regionCode | Last Entered Timestamp by State Code  
Last Exited Timestamp by State Code | map\\\[string\]date  
map\\\[string\]date |
| regionCode | last\\\_entered\\\_ts\\\_by\\\_regionCode  
last\\\_exited\\\_ts\\\_by\\\_regionCode | Last Entered Timestamp by Region DMA  
Last Exited Timestamp by Region DMA | map\\\[string\]date  
map\\\[string\]date |
| regionName | last\\\_entered\\\_ts\\\_by\\\_regionName  
last\\\_exited\\\_ts\\\_by\\\_regionName | Last Entered Timestamp by Country  
Last Exited Timestamp by Country | map\\\[string\]date  
map\\\[string\]date |
| regionName | last\\\_entered\\\_ts\\\_by\\\_regionName  
last\\\_exited\\\_ts\\\_by\\\_regionName | Last Entered Timestamp by State  
Last Exited Timestamp by State | map\\\[string\]date  
map\\\[string\]date |
| regionName | last\\\_entered\\\_ts\\\_by\\\_regionName  
last\\\_exited\\\_ts\\\_by\\\_regionName | Last Entered Timestamp by Region DMA  
Last Exited Timestamp by Region DMA | map\\\[string\]date  
map\\\[string\]date |

### Configuration

Listed below are instructions on how to setup and configure the Radar event integration.

1.  Contact your Lytics account manager to enable the Radar integration. Please include details regarding the fields you would like to use as [unique identifiers](/docs/lytics/identity-resolution) for this integration.
2.  [Generate an API token](/docs/lytics/account-settings) with the **Data Manager** role and no expiration date.
3.  In the Radar app, follow the configuration steps described in the [Radar documentation](https://radar.io/documentation/integrations#event-integrations-lytics) for this integration.

Once the integration is enabled, you should see data being received in the `radar_events` and the `radar_users` streams.

![radar\_events stream](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2561e27ecf5268dc/48e7cd98328c885bf9e09527/img-0253.png)
