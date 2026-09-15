---
title: "Webhook Templates"
description: "Lytics Webhook Templates enable the configuration of customized workflows for any destination. The setup process may vary based on the downstream…"
url: /lytics/webhook-templates
uid: blt18cd4bdda501f0f2
---

# Webhook Templates

## Webhook Templates

## Overview

Lytics Webhook Templates enable the configuration of customized workflows for any destination. The setup process may vary based on the downstream provider. Below is a step-by-step guide for configuring a robust workflow with Insider.

### Template Types

Lytics supports two template languages for webhook templates:

| Type | API Value | Description |
| --- | --- | --- |
| **Jsonnet** | jsonnet | A data templating language well-suited for generating JSON payloads. Profile data is accessed via the event.get() helper from the lytemplates.libsonnet library. |
| **JavaScript** | js1 | Standard JavaScript with access to profile data as a plain object. Offers familiar syntax and the full flexibility of JavaScript for complex transformations. |

Both template types can be used for audience entrance and exit triggers. Choose the one that best fits your team's familiarity and the complexity of the transformation needed.

#### JavaScript Templates

JavaScript templates must define a template function that accepts a single data parameter (a JSON object containing the profile/entity data) and returns a JSON-serializable value. The returned value becomes the outbound webhook request body.

```
function template(data) {
  // data contains the Lytics profile fields
  // Return the object to send as the webhook payload
  return {
    email: data.email || "",
    name: data.first_name || ""
  };
}
```

##### Accessing Profile Data

Profile fields are accessed as properties on the data object using standard JavaScript syntax:

```
function template(data) {
  const segments = data._segments || [];
  const email = data.email || "";
  return {
    user_email: email,
    segment_count: segments.length
  };
}
```

##### Built-in Helper Functions

The JavaScript runtime provides the following helper functions:

-   **hmacSha256(message, key)** (also available as hmacSHA256) — Returns a hex-encoded HMAC-SHA256 hash of the message using the provided key. Useful for generating authentication signatures required by some destination APIs.

```
function template(data) {
  const auth = JSON.parse(ly_auth_config || "{}");
  const signature = hmacSha256(JSON.stringify(data), auth.api_key || "");
  return {
    payload: data,
    signature: signature
  };
}
```

##### Environment Variables

JavaScript templates have access to the following environment variables as global variables:

-   **ly\_auth\_config** — Authorization configuration (JSON string).
-   **ly\_job\_config** — Job-specific configuration (JSON string).

##### Creating a JavaScript Template via the API

```
echo 'function template(data) {
  return {
    "users": [
      {
        "identifiers": {
          "email": data.email || ""
        },
        "attributes": {
          "name": data.first_name || "",
          "surname": data.last_name || ""
        }
      }
    ]
  };
}' | http -v POST https://api.lytics.io/v2/template name==my_js_template type==js1 account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

#### Jsonnet Templates

Jsonnet templates use the [jsonnet](https://jsonnet.org/) data templating language. Profile data is accessed through the event.get() method provided by the lytemplates.libsonnet library. Jsonnet is the original template type and is used in the Insider examples throughout the rest of this document.

## Insider Custom Webhook Templates

![a057355-Group_3081.svg](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2b08dbcced3266d9/250d576e13638df3cdee4b19/a057355-Group_3081.svg)

### Authorization

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

#### Select Provider

This integration leverages our Webhook integration to connect with and retrieve data from Ansira's endpoints. Begin by selecting the **Webhooks** provider tile.

![9c6ef6f-Screenshot_2023-09-14_at_11.21.21_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am39a9c5484019dcd2/72f915473794b0baf8e2012c/9c6ef6f-Screenshot_2023-09-14_at_11.21.21_AM.png)

#### Select Method

Next, select an authorization method. If this is your first time creating an authorization for Insider, select **Provide authorization as request header or parameter**.

![5fc3c4a-Screenshot_2023-09-14_at_11.22.25_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amba078c82845bcfa3/da505ef9d4af4aecc7bceb2d/5fc3c4a-Screenshot_2023-09-14_at_11.22.25_AM.png)

#### Configure Authorization

Next, we'll configure the authorization to use a request header and request parameter provided by Insider. Please configure all fields as outlined below and leave any additional fields blank unless you fully understand the implications.

##### Label

Create a label for your authorization. This will only surface in the Lytics UI for easy navigation when selecting the authorization in additional workflows or reviewing the details and logs.

![8de511c-Screenshot_2023-09-14_at_11.26.11_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5d23520d6e503f06/aeaea027806befe6a62bbe43/8de511c-Screenshot_2023-09-14_at_11.26.11_AM.png)

##### Description

Add an optional description to provide context for where the auth came from and how it will be used.

![b8c9fcd-Screenshot_2023-09-14_at_11.26.35_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am753ca4bb729d8d89/422583506dd2958fb3f07441/b8c9fcd-Screenshot_2023-09-14_at_11.26.35_AM.png)

##### Webhook Request Headers

Insider will provide both the **X-PARTNER-NAME** and the **X-REQUEST-TOKEN**.

![6475bd6-Screenshot_2023-09-14_at_11.29.27_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am270d69ca24806c93/58098abb2e2a02774e07a9ed/6475bd6-Screenshot_2023-09-14_at_11.29.27_AM.png)

```
X-PARTNER-NAME: XXXXXXX
X-REQUEST-TOKEN: XXXXXXX
```

##### Webhook Request Parameters

Leave this field blank.

### Audience Entrance Triggers

#### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integrations - Audience Trigger Integration - Webhook Integration
-   **Frequency**: Real-time Integration that continuously enriches users as they fall into a source audience.
-   **Resulting data**: Updated profile in Insider with the correct segment membership.

This integration utilizes the [Lytics' Audience Trigger Webhook](/docs/lytics/webhooks) to send a secure request to Insider when a user enters the source audience. This request is sent to the POST api/user/v1/upsert endpoint and contains user data configured within the template described below to send a Lytics profile with extended information about that user to Insider. The Insider [upsert API docs](https://academy.useinsider.com/docs/upsert-user-data-api) will inform on the type of information that can be sent. We'll outline the following steps to enable this enrichment workflow:

1.  Create an **Authorization** to Insider
2.  Create a **source audience** to determine which profiles need to be sent.
3.  Create a **webhook template** to format the outbound request to send new segment membership to Insider APIs correctly.
4.  Create the real-time **webhook** syncs between Lytics & Insider using the corresponding templates.
5.  **Validate** that the webhook flow is working as expected.

#### Authorization

Select or configure a new authorization as outlined [above](#authorization).

#### Create Webhook Template

Webhook templates can be created using either [Jsonnet](https://jsonnet.org/) or [JavaScript](#javascript-templates). These templates provide a flexible way to reformat the outbound payload of a webhook request to meet the recipient's requirements. In this case, we'll create a template that provides the proper formatting of identifiers, attributes, and event data for the Insider user API. This step may appear to be technical. As such, if you need assistance, please contact your technical account manager or primary point of contact.

The examples below show how to structure the template in order to send segment entrances, segment metadata, and profile attributes to Insider. The Insider upsert [API docs](https://academy.useinsider.com/docs/upsert-user-data-api) has more information on how the data should be structured if there are additional questions.

##### Jsonnet Example

```
echo 'local event = (import "lytemplates.libsonnet");
local eventDetails = event.get("segment_events", "")[0];
{
  "users": [
    {
      "insider_id": event.get("insider_id", ""),
      "identifiers": {
        "email": event.get("email", ""),
        "custom": {
          "lytics_id": event.get("_id", ""),
          "lytics_last_uid": event.get("_uid", "")
        }
      },
      "attributes": {
        "email": event.get("email", ""),
        "phone_number": event.get("phone", ""),
        "name": event.get("first_name", ""),
        "surname": event.get("last_name", ""),
        "gender": event.get("gender", ""),
        "age": event.get("age", ""),
        "language": event.get("user_language", ""),
        "country": event.get("visit_country", ""),
        "city": event.get("visit_city", ""),
        "email_optin": event.get("consent_email_status", ""),
        "gdpr_optin": event.get("consent_gdpr_status", ""),
        "sms_optin": event.get("consent_sms_status", ""),
        "whatsapp_optin": event.get("consent_whatsapp_status", ""),
        "custom": {
          "status":  event.get("status", ""),
          "lytics_computed_attr": event.get("_segments", [""]),
          "score_consistency": event.get("score_consistency", ""),
          "score_frequency": event.get("score_frequency", ""),
          "score_intensity": event.get("score_intensity", ""),
          "score_maturity": event.get("score_maturity", ""),
          "score_momentum": event.get("score_momentum", ""),
          "score_propensity": event.get("score_propensity", ""),
          "score_quantity": event.get("score_quantity", ""),
          "score_recency": event.get("score_recency", ""),
          "score_volatility": event.get("score_volatility", ""),
          "lytics_content": event.get("lytics_content", ""),
          "lytics_content_inferred": event.get("lytics_content_inferred", ""),
          "lytics_rollup": event.get("lytics_rollup", ""),
          "segment_prediction_percentile": event.get("segment_prediction_percentile", "")
        }
      },
      "not_append": true,
      "events": [
        {
          "event_name": "lytics_trigger",
          "timestamp": eventDetails["enter"],
          "event_params": {
            "custom": {
              "id": eventDetails["id"],
              "audience": eventDetails["slug"],
              "trigger": eventDetails["event"],
              "origin": "Lytics"
            }
          }
        }
      ]
    }
  ]
}' | http -v POST https://api.lytics.io/v2/template name==insider_temp type==jsonnet account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

Jsonnet is highly customizable. In the example above, we pull the **email** from the profile and hard code a **language**. If the desire is for the **language** to be dynamic, this could also leverage the event.get method to pull the value from each profile. If you use the dynamic method, the field name in the event.get() function is the field name that has been defined in the Lytics schema, as seen in the example below:

```
echo 'local event = (import "lytemplates.libsonnet");
{
	"field_name_to_send_to_insider": event.get("lytics_field_name", ""),

}' | http -v POST https://api.lytics.io/v2/template name==insider_temp type==jsonnet account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

##### JavaScript Example

The equivalent audience entrance template written in JavaScript uses the data parameter to access profile fields directly:

```
echo 'function template(data) {
  var eventDetails = (data.segment_events || [{}])[0];
  return {
    "users": [
      {
        "insider_id": data.insider_id || "",
        "identifiers": {
          "email": data.email || "",
          "custom": {
            "lytics_id": data._id || "",
            "lytics_last_uid": data._uid || ""
          }
        },
        "attributes": {
          "email": data.email || "",
          "phone_number": data.phone || "",
          "name": data.first_name || "",
          "surname": data.last_name || "",
          "gender": data.gender || "",
          "age": data.age || "",
          "language": data.user_language || "",
          "country": data.visit_country || "",
          "city": data.visit_city || "",
          "email_optin": data.consent_email_status || "",
          "gdpr_optin": data.consent_gdpr_status || "",
          "sms_optin": data.consent_sms_status || "",
          "whatsapp_optin": data.consent_whatsapp_status || "",
          "custom": {
            "status": data.status || "",
            "lytics_computed_attr": data._segments || [""],
            "score_consistency": data.score_consistency || "",
            "score_frequency": data.score_frequency || "",
            "score_intensity": data.score_intensity || "",
            "score_maturity": data.score_maturity || "",
            "score_momentum": data.score_momentum || "",
            "score_propensity": data.score_propensity || "",
            "score_quantity": data.score_quantity || "",
            "score_recency": data.score_recency || "",
            "score_volatility": data.score_volatility || "",
            "lytics_content": data.lytics_content || "",
            "lytics_content_inferred": data.lytics_content_inferred || "",
            "lytics_rollup": data.lytics_rollup || "",
            "segment_prediction_percentile": data.segment_prediction_percentile || ""
          }
        },
        "not_append": true,
        "events": [
          {
            "event_name": "lytics_trigger",
            "timestamp": eventDetails.enter,
            "event_params": {
              "custom": {
                "id": eventDetails.id,
                "audience": eventDetails.slug,
                "trigger": eventDetails.event,
                "origin": "Lytics"
              }
            }
          }
        ]
      }
    ]
  };
}' | http -v POST https://api.lytics.io/v2/template name==insider_temp type==js1 account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

With JavaScript, accessing profile fields is straightforward — use data.field\_name or data\["field\_name"\] with standard JavaScript defaults via ||:

```
echo 'function template(data) {
  return {
    "field_name_to_send_to_insider": data.lytics_field_name || ""
  };
}' | http -v POST https://api.lytics.io/v2/template name==insider_temp type==js1 account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

### Audience Exit triggers

#### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integrations - Audience Trigger Integration - Webhook Integration
-   **Frequency**: Real-time Integration that continuously enriches users as they fall into a source audience.
-   **Resulting data**: Updated profile in Insider with the correct segment membership.

This integration utilizes the [Lytics' Audience Trigger Webhook](/docs/lytics/webhooks) to send a secure request to Insider when a user exits the source audience. This request is sent to the POST auser/v1/attribute/delete endpoint and contains user data configured within the template described below to send a Lytics profile with extended information about that user to Insider. The Insider [delete API docs](https://academy.useinsider.com/docs/delete-user-attribute) will inform on the type of information that can be sent. We'll outline the following steps to enable this enrichment workflow:

1.  Create an **Authorization** to Insider
2.  Create a **source audience** to determine which profiles need to be sent.
3.  Create a **webhook template** to format the outbound request to send segment membership removals to the Insider APIs correctly.
4.  Create the real-time **webhook** syncs between Lytics & Insider using the corresponding templates.
5.  **Validate** that the webhook flow is working as expected.

#### Authorization

Select or configure a new authorization as outlined [above](#authorization).

#### Create Webhook Template

Webhook templates can be created using either [Jsonnet](https://jsonnet.org/) or [JavaScript](#javascript-templates). These templates provide a flexible way to reformat the outbound payload of a webhook request to meet the recipient's requirements. In this case, we'll create a template that provides the proper formatting of identifiers, attributes, and event data for the Insider user API. This step may appear to be technical. As such, if you need assistance, please contact your technical account manager or primary point of contact.

The examples below show how to structure the template to send segment exits and metadata to Insider. The Insider delete [API docs](https://academy.useinsider.com/docs/delete-user-attribute) has more information on how the data should be structured if there are additional questions.

##### Jsonnet Example

```
echo 'local event = (import "lytemplates.libsonnet");
local eventDetails = event.get("segment_events", "")[0];
{
   "users":\[
      {
         "identifiers":{
            "email": event.get("email", ""),
            "custom": {
                "lytics_id": event.get("\_uid", "")
            }
         },
         "attributes":{
            "custom":{
              partial:{
                "lytics_computed_attr": event.get("_segments", [""])
              }
            }
         },
         "events": [
            {
              "event_name": "lytics_trigger",
              "timestamp": eventDetails["exit"],
              "event_params": {
                "custom": {
                  "id": eventDetails["id"],
                  "audience": eventDetails["slug"],
                  "trigger": eventDetails["event"],
                  "origin": "Lytics"
                }
              }
            }
          ]
      ]
    }
   ]
}' | http -v POST <https://api.lytics.io/v2/template> name==insider_temp type==jsonnet account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

Jsonnet is highly customizable. In the example above, we pull the **email** from the profile and hard code a **language**. If the desire is for the **language** to be dynamic, this could also leverage the event.get method to pull the value from each profile. If you use the dynamic method, the field name in the event.get() function is the field name that has been defined in the Lytics schema, as seen in the example below:

```
echo 'local event = (import "lytemplates.libsonnet");
{
	"field_name_to_send_to_insider": event.get("lytics_field_name", ""),

}' | http -v POST https://api.lytics.io/v2/template name==insider_temp type==jsonnet account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

##### JavaScript Example

The equivalent audience exit template written in JavaScript:

```
echo 'function template(data) {
  var eventDetails = (data.segment_events || [{}])[0];
  return {
    "users": [
      {
        "identifiers": {
          "email": data.email || "",
          "custom": {
            "lytics_id": data._uid || ""
          }
        },
        "attributes": {
          "custom": {
            "partial": {
              "lytics_computed_attr": data._segments || [""]
            }
          }
        },
        "events": [
          {
            "event_name": "lytics_trigger",
            "timestamp": eventDetails.exit,
            "event_params": {
              "custom": {
                "id": eventDetails.id,
                "audience": eventDetails.slug,
                "trigger": eventDetails.event,
                "origin": "Lytics"
              }
            }
          }
        ]
      }
    ]
  };
}' | http -v POST https://api.lytics.io/v2/template name==insider_temp type==js1 account_id=={YOUR-ACCOUNT-ID} key=={YOUR-API-TOKEN}
```

#### Configure Webhook

In the final step, we will combine it by configuring our webhook destination to use the auth, templates, and audience to enrich a Lytics profile. It is important to ensure the auth is selected for the corresponding webhook trigger for entrances and exits. Because they have different structures, the data will not be updated properly in insider if this step is not followed.

##### Select Provider

This integration leverages our Webhook integration to connect with and retrieve data from Ansira's endpoints. Begin by selecting the **Webhooks** provider tile.

![ed85307-Screenshot_2023-09-14_at_12.52.09_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am074e27d3c4235fdb/c7526697a463ad473cb4de89/ed85307-Screenshot_2023-09-14_at_12.52.09_PM.png)

##### Select Job Type

Next, select the **Audience Triggers Webhook** job type. This webhook job will pass the response of each request to the configured data stream to be mapped back to a user's profile.

![7bde3c4-Screenshot_2023-09-14_at_12.52.47_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame961c20e3d591735/71e5f19ecfafc89d4a7f5f20/7bde3c4-Screenshot_2023-09-14_at_12.52.47_PM.png)

##### Configuration

There is a list of fields available to configure for the Lytics webhook. The details for those configurable fields can be found in the webhook documentation. Below are the required fields specific to the Lytics and Insider workflow.

###### Select Source Audience(s)

Select one or more audiences to enrich with Ansira data. We highly recommend following the suggested approach in the [audience](#audience) of this doc to prevent invalid or unnecessary calls to the Ansira API.

![4151bab-Screenshot_2023-09-14_at_12.54.09_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am954d2e485ffbb521/03e1ba87dc4c911a033b9103/4151bab-Screenshot_2023-09-14_at_12.54.09_PM.png)

##### Select Webhook Template

Select the template that was created in the previous step.

![92d1866-Screenshot_2023-09-21_at_8.33.57_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am25953c087934186c/69fd69cb0d7b496a3983928f/92d1866-Screenshot_2023-09-21_at_8.33.57_AM.png)

###### Set Webhook URL

![1d4c4a3-Screenshot_2023-09-14_at_1.04.48_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amab967b0ed368dcfb/4aab25ce5694c6ca3e11852a/1d4c4a3-Screenshot_2023-09-14_at_1.04.48_PM.png)

```
// if doing an entry
https://unification.useinsider.com/api/user/v1/upsert

// if doing an exit
https://unification.useinsider.com/api/user/v1/delete
```

###### Set Audience trigger Events

This should be Exit or Entrance, depending on the template it is linked to.

![50b95bc-Screenshot_2023-09-14_at_1.07.39_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5911ce04d5519bcc/156cf3a36a8fdaa3ad8fa4ea/50b95bc-Screenshot_2023-09-14_at_1.07.39_PM.png)

###### Set Export Fields

Do not select any fields. This will default to syncing the entire profile based on the defined template.
