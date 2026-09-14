---
title: "Insider"
description: "This integration facilitates the enrichment of Lytics user profiles with valuable information, including identifiers, activity data, and more from Insider."
url: /lytics/insider
---

# Insider

## Insider

This integration facilitates the enrichment of Lytics user profiles with valuable information, including identifiers, activity data, and more from Insider.

## Overview

Enabling the Insider and Lytics integration allows customers to share segment membership and user attributes with Insider seamlessly. This integration enables real-time segmentation triggers that ensure user profiles are always current and pertinent. As a result, it enables more personalized and precisely targeted marketing strategies, leading to enhanced customer engagement and improved business results.

## Authorization

If you haven't already done so, you will need to setup an Insider account before you begin the process described below.

To authorize an Insider workflow, you must provide an Insider API key so Lytics can communicate with Insider's APIs to send and receive data from your account. For instructions on how to create an API key, refer to Insider's [API key documentation](https://developers.useinsider.com/#authentication-requirements).

1.  Select Insider from the list of providers.
2.  Select the **API Key** method for authorization.
3.  Enter a Label to identify your authorization.
4.  (Optional) Enter a Description for further context on your authorization.
5.  Enter the Insider API Key that you generated.
6.  Click Save Authorization.

![e91c1fd-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame6c47af7ccef474a/8e4424e6b6e7d7c9b24a1656/e91c1fd-image.png)

To successfully send requests to the Insider APIs via Lytics webhook workflow, we must create an authorization using the key and secret outlined below.

###

## Export Audiences

Exporting Lytics audiences to Insider allows you to enhance your Insider user base with new users or update existing users with cross-channel data from Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration - Audience Trigger Integration
-   **Frequency**: Real-time Integration with an optional one-time Backfill of the audience after job setup.
-   **Resulting data**: Lytics users that are members of the selected audiences are exported to Insider.

This integration utilizes the [Insider API](https://developers.useinsider.com/#intro) to send users to Insider. Once the export is started, the job will:

1.  Scans the Lytics audience. Adds user's identifier data and other data per configuration in a queue.
2.  Based on user entering/exiting the selected audience(s), the job will add segment information. For each user entering the audience, the job will add lytics\_{audience\_slug} as true as custom attribute. Likewise, for each user exiting the audience, the job will add lytics\_{audience\_slug} as false as custom attribute.
3.  The job will run continuously. As users enter or exit the Lytics audiences, they will be added to the queue. The queue will be sent to Insider every minute or until the queue reaches 1000 users, whichever happens first.

### Fields

You can send Lytics user fields to Insider. The job constructs the payload according to the configuration. Below is a sample of the payload that the job sends, for more information on payload format required for Insider api, please look into this Insider api [documentation](https://developers.useinsider.com/#453ca8fb-cd71-4900-9973-cc452416f820).

```
{
    "users":
    [
        {
            "attributes":
            {
                "birthday": "1984-08-29T14:50:22-07:00",
                "custom":
                {
                    "lytics_{audience_slug_1}": true,
                    "lytics_{audience_slug_2}": false,
                    "attr1": "some-value",
                    "number_attr2": 111
                },
                "name": "firstname",
                "surname": "lastname"
            },
            "identifiers":
            {
                "custom":
                {
                    "some_id": "some-id-value"
                },
                "email": "someemail@lytics.com",
                "uuid": "some_uuid",
              	"phone_number": "+9876543210"
            }
        }
    ]
}
```

### Configuration

Follow these steps to set up and configure an export job for Insider in the Lytics platform. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Insider** from the list of providers.
2.  Select the **Export Audiences** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.

![fcbb2d1-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf16277b5a7700ad9/dd6e53bea4a36bf45afc95f9/fcbb2d1-image.png)

1.  Select the **Lytics Audiences** to export.
2.  From the **Identifiers Mappings** input, map the fields from Lytics to Insider identifiers by selecting the Lytics field on the left, and its Insider destination on the right. Atleast one identifier must be mapped.
3.  (Optional) From the **Custom Identifiers** input, select any Lytics field that are user identifiers that you would like to send to Insider as custom identifier.
4.  (Optional) From the **Attribute Mappings** input, map Lytics user fields to Insider user attributes by selecting the Lytics field on the left, and its Identifier destination on the right.
5.  (Optional) From the **Custom User Attributes** input, select any Lytics field that you would like to send to Insider as custom attribute.
6.  (Optional) Check the **Existing Users** to immediately send users who currently exist in the selected Lytics audience. Deselecting will only push users as they enter or leave the audience.
7.  Click **Start Export**.
