---
title: "Ansira"
description: "Learn how to configure the Ansira integration in Lytics, including setting up an OAuth authorization, creating a source audience and webhook template, mapping schema fields, and configuring the enrichment webhook to enrich Lytics user profiles with Ansira data."
url: /lytics/ansira
---

# Ansira

## Ansira

This integration facilitates the enrichment of Lytics user profiles with valuable information, including identifiers, activity data, and more from Ansira.

## Overview

Enabling the Ansira and Lytics integration empowers customers to enhance Lytics user profiles by incorporating user-level data from the Ansira platform. This integration facilitates the enrichment of Lytics user profiles with valuable information, including identifiers, activity data, and more. By seamlessly connecting Ansira's extensive data resources with the Lytics user profiling capabilities, customers gain a comprehensive understanding of their users' preferences, behaviors, and interactions. This enables more personalized and targeted marketing strategies, fostering deeper customer engagement and driving better business outcomes.

![img-0011.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amabac225d364250bf/8b52c8a89294845d5301a341/img-0011.png)

## Authorization

To successfully send and receive requests to the Ansira APIs, we must create an OAuth-based authorization using the key and secret outlined below.

### Select Provider

This integration leverages our Webhook integration to connect with and retrieve data from Ansira's endpoints. Begin by selecting the **Webhooks** provider tile.

![img-0012.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am839eed7d20567fd7/4cd101d30ec6f38d035e25a4/img-0012.png)

### Select Method

Next, select an authorization method. If this is your first time creating an authorization for Ansira, select **OAuth 2.0 Client Credentials Grant**.

![img-0013.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc7c0c80603424efb/ffeb15f668c84faa28a19a87/img-0013.png)

### Configure Authorization

Next, we'll configure the authorization to use a key and secret provided by Ansira. Please configure all fields as outlined below and leave any additional fields blank unless you fully understand the implications.

#### Label

Create a label for your authorization. This will only be surfaced in the Lytics UI for easy navigation when selecting the authorization in additional workflows or reviewing the details and logs.

![img-0014.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaac232fb16e67680/1f407c520146f01e505a43cd/img-0014.png)

#### Description

Add an optional description to provide context for where the auth came from and how it will be used.

![img-0015.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am88115b1f36cbecd2/b73d66bfc09718a84d0cbb06/img-0015.png)

#### Token URL

Ansira will provide the token URL. This is the endpoint used to get a token. In most cases, your specific instance information will replace the XXXX in the example.

![img-0016.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5a6d62561981e652/0f753399099cde7c74b55c7c/img-0016.png)

#### Client ID

Enter the provided Client ID from Ansira.

![img-0017.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am285038956a9612bb/a848cc134b77340f85d6805a/img-0017.png)

#### Client Secret

Enter the provided Client Secret from Ansira.

![img-0018.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am11398874ce593209/ac6daec16d6eefb6fcdcd17d/img-0018.png)

#### Additional Request Parameters

Lastly, since the Ansira API expects an access token as part of the request, we must configure the additional parameters to include the token generated via OAuth, as described below.

![img-0019.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0e532b4e5f40507c/7efe5c035fa74d8169f2a765/img-0019.png)

```
access_token={token}
```

## Enrichment

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integrations - Audience Trigger Integration - Webhook Integration
-   **Frequency**: Real-time Integration that continuously enriches users as they fall into a source audience.
-   **Resulting data**: A data stream populated with response data from Ansira containing critical information such as UUID and more that can then be mapped back into the profile.

This integration utilizes the [Lytics' Enrichment Webhook](/docs/lytics/webhooks) to send a secure request to Ansira when a user enters a source audience. This request is sent to the `POST/service/api/v2/user` endpoint and contains user data configured within the template described below to enrich a Lytics profile with extended information about that user within Ansira. We'll outline the following steps to achieve enable this enrichment workflow:

1.  Create an **Authorization** to Ansira
2.  Create a **source audience** to determine which profiles need to be enriched.
3.  Create a **webhook template** to format the outbound request to Ansira's `v2/user` API correctly.
4.  Prepare your user **schema** to receive the response data from Ansira.
5.  Create a real-time **enrichment webhook** sync between Lytics & Ansira.
6.  **Validate** that the enrichment flow is working as expected.

### Authorization

Select or configure a new authorization as outlined [above](#authorization).

### Audience

This integration works by ensuring every member of an audience has been enriched with Ansira data. In most cases, the desired outcome is matching a UUID or Ansira-specific identifier with an email address. Though the source audience is ultimately up to each customer's discretion, we recommend keeping the following in mind:

-   Every user entering the audience will receive an API call to Ansira. This may impact limits and cost, so one general rule of thumb is to define your source audience by highlighting that the desired data is missing and should only be enriched when the prerequisites are met.\\  


**For example:** If I am collecting email addresses from a web form and I want to be sure that every known user with an email address also has an Ansira UUID, I would define my source audience as all users with an email address and no UUID. This ensures we only make calls for users with an email that has not been enriched. ![img-0020.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0a541ab1f1ecd25b/1e1a68cd00edd5bdb715d467/img-0020.png)

### Create Webhook Template

Webhook templates are created using [jsonnet](https://jsonnet.org/). These templates provide a flexible way to reformat the outbound payload of a webhook request to meet the recipient's requirements. In this case, we'll create a template that provides the proper formatting of email and source ids for the Ansira`user` API. This step may appear to be technical. As such, if you need assistance, please get in touch with your technical account manager or primary point of contact.

```
echo 'local event = (import "lytemplates.libsonnet");
{
	"email": event.get("email", ""),
  "sourceCode": {
  	"keyName": "XXXXXXXXXXXXX"
  }
}' | http -v POST https://api.lytics.io/v2/template name==ansira_temp type==jsonnet account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

Jsonnet is highly customizable. In the example above, we pull the **email** from the profile and hard code a **sourceCode** **keyName** If the desire is for the **keyName** to be dynamic, this could also leverage the.`event.get` method to pull the value from each profile. If you use the dynamic method, the field name in the event.get() function is the field name that has been defined in the Lytics schema, as seen in the example below:

```
echo 'local event = (import "lytemplates.libsonnet");
{
	"field_name_to_send_to_ansira": event.get("lytics_field_name", ""),

}' | http -v POST https://api.lytics.io/v2/template name==ansira_temp type==jsonnet account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

### Schema

To handle the response from the enrichment APIs, you'll need to add the necessary fields and mappings under **Building Profiles > Schema** to process the data correctly. In our example, we will only be mapping the email back as an identifier to ensure data is correctly stitched to the profile, along with a new field called "Ansira UUID," which will hold the UUID for each user.

When altering schema it is always best to consult with your internal technical resources or those available to you from Lytics to ensure everything is configured adequately.

#### Create the new Ansira UUID Field

![img-0021.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama19a45458983a94a/570dbf418ce38686197f76aa/img-0021.png)

#### Create New Mapping for the Ansira UUID Field

![img-0022.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am015509ddf4beaa35/cb63d7ffa1cb2b8beacc33b4/img-0022.png)

#### Create New Mapping for the Existing Email Field

![img-0023.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf4657bf66f8fe56c/ff28a358839f70b9eb9309f1/img-0023.png)

Remembering what stream you decide to use for the mappings is important, as it will be needed when configuring the enrichment workflow.

### Configure Enrichment Webhook

In the final step, we will bring it all together by configuring our webhook destination to use the auth, template, and audience to enrich a Lytics profile.

#### Select Provider

This integration leverages our Webhook integration to connect with and retrieve data from Ansira's endpoints. Begin by selecting the **Webhooks** provider tile.

![img-0012.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am839eed7d20567fd7/4cd101d30ec6f38d035e25a4/img-0012.png)

#### Select Job Type

Next, select the **Webhook User Enrichment** job type. This webhook job will pass the response of each request to the configured data stream to be mapped back to a user's profile.

![img-0024.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3bdec9684071ed89/f0adf76ff11cc6294dcc8c1c/img-0024.png)

#### Configuration

#### Select Source Audience(s)

Select one or more audiences to enrich with Ansira data. We highly recommend following the suggested approach in the [audience](#audience) of this doc to prevent invalid or unnecessary calls to the Ansira API.

![img-0025.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3397a35de83365c3/290db682721211ecffb2f3b7/img-0025.png)

#### Define Stream

Define the stream you'd like the response data passed to. This stream must align with your updated schema and mappings as outlined above.

![img-0026.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6ca4332577cf3904/2ae761f69d0d5351d1ccee15/img-0026.png)

#### Select Webhook Template

Select the template that was created in the previous step.

![shortcode-img-0003.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am449f4c10ef83bd69/a4afea2fd77b1881e653b5a7/shortcode-img-0003.png)

#### Set Webhook URL

Enter the full `v2/users` endpoint provided by Ansira.

![img-0027.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am13199111745d5302/bfb5759b6d1057db8aa800d6/img-0027.png)

#### Set Webhook URL

Select profile fields to export. At a minimum, you must select all fields necessary to fulfill your jsonnet template. In our example, this would only be `email`.

![img-0028.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am967b9be787e75e24/955dd8570242176e0eab059f/img-0028.png)

#### Existing Users

Finally, determine if you'd like to send all existing audience members to the enrichment endpoint. Selecting this box may send many API requests immediately upon saving your configuration.

![shortcode-img-0004.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am55c64f12f6e1c5d4/4882466a20e01b2eb7a5d72e/shortcode-img-0004.png)
