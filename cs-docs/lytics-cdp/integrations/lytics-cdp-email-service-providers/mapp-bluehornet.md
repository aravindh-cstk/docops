---
title: "Mapp: BlueHornet"
description: "Mapp: BlueHornet"
url: /lytics/mapp-bluehornet
uid: blt5d9a2a178b9b21bc
---

# Mapp: BlueHornet

## Mapp: BlueHornet

## BlueHornet

Connect with BlueHornet to import and export your subscribers and activity.

## Authentication

1.  Navigate to the BlueHornet app in the integrations section of Lytics. ![bluehornet](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am983806b0d1bf2bc9/d5fcbb9f05b0aaed769631c7/img-0198.png)

1.  Navigate to the **Authorizations** section. ![Authorizations section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4c51fbfd14d78ec6/a06749e7ee154a8c02572028/img-0183.png)

1.  Click the **New authorization** button. ![New authorization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfd18e6dee98674b1/61fe9b43571b5296c279e6af/img-0184.png)

1.  Create a new API user in BlueHornet if you have not already done so. ![create API user](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am69c38ee8576fd811/e693d635de4cbecb293a55e4/img-0199.png)
2.  To manage (and create) BlueHornet API Users, log in to [eMS Enterprise](https://echo.bluehornet.com/ems/auth/login) as an administrator and then navigate to **Administration > API Settings > Manage API Users**.
3.  Click on the **Create API User** button.
4.  Enter API user details. Lytics requires full API access.
5.  Add Lytics IP addresses to the list of allowed IPs. Contact your Account Manager for the current list of Lytics' IP addresses.
6.  Click **Save**
7.  Take note of your API key and secret. You'll need them later.

1.  Authorize BlueHornet by configuring your API key and secret. If you do not know your API key or secret, you can retrieve them from BlueHornet. ![BlueHornet authorization setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd37da9cad877ec29/c95fd91876fb210d3bcd0e85/img-0200.png)
2.  Your BlueHornet API key and shared secret can be found under **Administration > API Settings > Manage API Users** of the BlueHornet administrators' interface.
3.  Select the user you want and click the API Keys button to display the user's API Key and API Secret.

## Importing data to Lytics

| Summary |  |
| --- | --- |
| Frequency | One-time only /Activities Hourly; Subscribers Daily |
| Streams | bluehornet\\\_subscribers, bluehornet\\\_activity |
| User fields | email, first\\\_name, last\\\_name, location, home phone, work phone, custom fields |
| Provider fields | groups subscribed |
| User activity | sends, opens, clicks, unsubs, bounces |
| Campaign content | no |

1.  [Authorize Lytics with BlueHornet](#authentication), if you have not previously done so.
2.  Select **Import List** from the list of workflows available.
3.  Select the authorization you want to use for this import.
4.  From the **Segments** multi-select, select the segments you want to import subscribers and activity from. If no segments are selected all subscribers and activity will be imported. **Note**: Activity for all messages that were sent to the selected segment will be imported. This will include activity for users in segments other than the selected one that the message was sent to.
5.  Under the **Advanced** tab, select the **One time subscribers/unsubscriber sync** checkbox to import your subscribers/unsubscribers only once, and skip importing activities. ![import configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambcf898bb9a4484d2/b0eaa54434a653d4f63f7ac3/img-0201.png)
6.  Click on the **Start import** button to begin the work.

## Export an audience to a BlueHornet list

| Summary |  |
| --- | --- |
| Frequency | One-time only / Real-time |
| Exports to | Group |
| Name | Lytics + segment name |
| Identifiers | email |
| Mapped Fields | no |
| Segment Exports | none; audience is selected during work configuration |
| Type | add & remove |

1.  [Authorize Lytics with BlueHornet](#authentication), if you have not previously done so.
2.  Select **Export List**.
3.  Select the authorization you want to use for this export.
4.  Configure the integration options: ![export configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc1b62b25c88a3dc6/149728f4046cea9328d3836b/img-0202.png)
5.  **Audience**: Select the Lytics segment to export to BlueHornet. A group will be created for the exported subscribers.
6.  **Email Field**: Select the Lytics field that contains the subscriber's email.
7.  Click **Show Advanced Options** for the following setup options:
8.  **Keep Updated**: Select this to keep the BlueHornet group up to date with the Lytics segment. Subscribers will be added and removed based as they enter and leave the lytics segment.
9.  **Existing Users**: Add users who already exist in the segment. If this is unselected users in the segment will only be added to the BlueHornet group if they experience an event in Lytics.
10.  Click on the **Start Export** button to begin the work. Users should start appearing in BlueHornet after a few minutes. ![Lytics in BlueHornet](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0cd8e224748a1df5/a6aeeb4d221b973987e95452/img-0203.png)
