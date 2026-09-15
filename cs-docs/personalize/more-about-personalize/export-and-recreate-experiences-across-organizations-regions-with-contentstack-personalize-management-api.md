---
title: "Export and Recreate Experiences Across Organizations or Regions with Contentstack Personalize Management API"
description: "Easily export, duplicate, and manage personalization experiences across environments using Contentstack’s Personalize Management API."
url: /personalize/export-and-recreate-experiences-across-organizations-regions-with-contentstack-personalize-management-api
uid: bltc2bb9d06de2a671b
---

# Export and Recreate Experiences Across Organizations or Regions with Contentstack Personalize Management API

## Export and Recreate Experiences Across Organizations or Regions with Contentstack Personalize Management API

This guide provides a technical overview and step-by-step instructions to programmatically duplicate a **Contentstack Personalize Project** from one Organization or Region to another.

## When to Use This Guide

-   Replicate a Personalize project setup between environments.
-   Copy or synchronize [attributes](/docs/personalize/about-attributes), [audiences](/docs/personalize/about-audiences), [events](/docs/personalize/about-events), and [experiences](/docs/personalize/about-experiences) across multiple Personalize projects.
-   Programmatically extract and rebuild experiences and variants using the Personalize Management API.

## What You Will Learn

-   Which project components you can recreate with the Personalize Management API.

-   How to extract attributes, audiences, events, and experiences from a source project.

-   How to recreate and activate them in a destination project.

-   How to verify and monitor the migration.


## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   A destination [Personalize project](/docs/personalize/create-personalize-project) to recreate exported components
-   [Personalize Management API](/docs/developers/apis/personalize-management-api) token with either **personalize:read/personalize:manage** scope for the source project and **personalize:manage** for the destination project
-   Project UIDs for both the source and destination projects
-   A scriptable environment such as Node.js, Python, or a shell script with curl for making API calls

## Components You Can Recreate with Personalize Management API

<table><tbody><tr><td><strong>Item</strong></td><td><strong>API Endpoint(s)</strong></td><td><strong>Description</strong></td></tr><tr><td>Attributes</td><td><a href="/docs/developers/apis/personalize-management-api/attributes#get-all-attributes" target="_self">GET /attributes</a>,<br><a href="/docs/developers/apis/personalize-management-api/attributes#create-an-attribute" target="_self">POST /attributes</a></td><td>Supports <strong>CRUD </strong>(Create, Read, Update, Delete) operations. Use <strong>GET</strong> to export all attribute definitions and <strong>POST</strong> to create them in the destination project.</td></tr><tr><td>Audiences</td><td><a href="/docs/developers/apis/personalize-management-api/audiences#get-all-audiences" target="_self">GET /audiences</a>,<br><a href="/docs/developers/apis/personalize-management-api/audiences#create-an-audience" target="_self">POST /audiences</a>&nbsp;</td><td>Supports <strong>CRUD </strong>operations. Use <strong>GET</strong> to export audience configurations and <strong>POST</strong> to create them in the destination project.</td></tr><tr><td>Events</td><td><a href="/docs/developers/apis/personalize-management-api/events#get-all-events" target="_self">GET /events</a>,<br><a href="/docs/developers/apis/personalize-management-api/events#create-an-event" target="_self">POST /events</a>&nbsp;</td><td>Supports <strong>CRUD </strong>operations. Use <strong>GET</strong> to export events and <strong>POST</strong> to create them in the destination project.</td></tr><tr><td>Experiences</td><td><a href="/docs/developers/apis/personalize-management-api/experiences#get-all-experiences" target="_self">GET /experiences</a>,<br><a href="/docs/developers/apis/personalize-management-api/experiences#create-an-experience" target="_self">POST /experiences</a>&nbsp;</td><td>Use <strong>GET</strong> to fetch a list of all experiences. Use the <strong>POST</strong> endpoints to create new experiences in the destination project.&nbsp;</td></tr><tr><td>Experience Versions</td><td><a href="/docs/developers/apis/personalize-management-api/experiences#get-all-experience-versions" target="_self">GET /experiences/{exp_uid}/versions</a><br><a href="/docs/developers/apis/personalize-management-api/experiences#create-an-experience-version" target="_self">POST /experiences/{exp_uid}/versions</a><br><a href="/docs/developers/apis/personalize-management-api/experiences#update-an-experience-version" target="_self">PUT /experiences/{exp_uid}/versions</a>&nbsp;</td><td>Use <strong>GET</strong> to retrieve detailed variant data. <strong>POST</strong> to create new versions, and <strong>PUT</strong> to activate (or pause) them.</td></tr></tbody></table>

## Workflow Overview

Duplicating a personalization experience across organizations/regions follows the **Extract, Transform, Load (ETL)** pattern:

1.  **Extract:** Export all configurations (Attributes, Audiences, Events, and Experiences) from the **source Personalize project**.
2.  **Transform:** Map and adjust UIDs so that resources correctly reference equivalents in the destination project.
3.  **Load:** Use the transformed data to recreate identical resources in the destination project.

The key endpoint for this process is **GET /experiences/{exp\_uid}/versions,** which provides the detailed variant data required for a complete duplication.

## Steps for Execution

1.  [Export Attributes, Audiences, and Events from the source project](#export-attributes-audiences-and-events-from-the-source-project)
2.  [Recreate Attributes, Audiences, and Events in the destination project](#recreate-attributes-audiences-and-events-in-the-destination-project)
3.  [Export Experience from the Source Project](#export-experience-metadata-from-the-source-project)
4.  [Create Experience in the Destination Project](#create-experiences-in-the-destination-project)
5.  [Export Detailed Experience Versions (with Variants) from the Source Project](#export-detailed-experience-versions-with-variants-from-the-source-project)
6.  [Create Experience Versions (with Variants) in the Destination Project](#create-experience-versions-with-variants-in-the-destination-project)
7.  [Activate the New Experience Versions](#activate-the-new-experience-versions)
8.  [Verify and Monitor the Migration](#verify-and-monitor-the-migration)

### Export Attributes, Audiences, and Events from the Source Project

1.  Send the following API requests to export attributes, audiences, and events:  
    **Request:**

    ```
    GET /personalize/projects/{source_project_uid}/attributes
    GET /personalize/projects/{source_project_uid}/audiences
    GET /personalize/projects/{source_project_uid}/events
    ```

    **Response Example (Attributes):**

    ```
    [
      { 
     "uid": "attr_01",
     "key": "region", 
     "__type": "CUSTOM" 
     },
      { 
     "uid": "attr_02",
     "key": "user_type", 
     "__type": "CUSTOM" 
    }
    ]
    ```

    **Response Example (Audiences):**

    ```
    [
      { 
     "uid": "aud_01", 
     "name": "US Visitors" 
     },
      { 
     "uid": "aud_02", 
     "name": "Returning Customers" 
    }
    ]
    ```

    **Response Example (Events):**

    ```
    [
      { 
     "uid": "evt_01",
     "key": "cta_click", 
     "name": "CTA Click"
     },
      { 
     "uid": "evt_02", 
     "key": "form_submit", 
     "name": "Form Submit" 
    }
    ]
    ```

    **Note:** These examples do not show the complete API responses. To view detailed response structures, refer to the [Personalize Management API documentation](https://www.contentstack.com/docs/developers/apis/personalize-management-api).

2.  Save all three responses as **JSON files** for reuse when recreating these components in the destination project.

### Recreate Attributes, Audiences, and Events in the Destination Project

1.  Use the following endpoints:
    -   POST /attributes
    -   POST /audiences
    -   POST /events

Ensure that all attribute keys and audience rules **exactly match** the source project to maintain targeting accuracy.

**Note:** Recreating an event copies only the event definition, including its metadata such as name, key, description, and type. Historical event data like clicks, impressions, or conversions are not copied. The recreated events receive new UIDs in the destination project, but you can reuse the same event keys to maintain tracking consistency. Preset **attributes** automatically get populated in a project.

**Example (Attributes):**

```
POST /personalize/projects/{destination_project_uid}/attributes
{
  "key": "region",
  "display_name": "Region",
  "__type": "CUSTOM"
}
```

**Example (Audiences):**

```
POST /personalize/projects/{destination_project_uid}/audiences
{
  "name": "US Visitors",
  "rules": { "region": "United States" 
}
}
```

**Example (Events):**

```
POST /personalize/projects/{destination_project_uid}/events
{
  "key": "cta_click",
  "name": "CTA Click",
  "description": "Tracks button click events on the homepage"
}
```

### Export Experience Metadata from the Source Project

1.  Use the following end point to retrieve all experiences:

    -   GET /experiences

    **Request Example:**

    ```
    GET /personalize/projects/{source_project_uid}/experiences
    ```

    **Response Example:**

    ```
    [
      { "uid": "exp_01", "name": "Homepage Banner Test", "type": "AB_TEST" }
    ]
    ```

2.  Record each experience’s uid, name, type, and description for rebuilding in the destination project.

### Create Experiences in the Destination Project

1.  Use one of the following endpoints based on experience type:
    -   POST /experiences

**Request Example:**

**A/B Test Experience**

```
POST /personalize/projects/{destination_project_uid}/experiences
{
  "name": "Homepage Banner Test",
  "__type": "AB_TEST",
  "description": "Cloned from Staging"
}
```

**Segmented Experience**

```
POST /personalize/projects/{destination_project_uid}/experiences
{
  "name": "Homepage Banner Test",
  "__type": "SEGMENTED",
  "description": "Cloned from Staging"
}
```

**Response Example:**

```
{ "uid": "exp_new01", "status": "DRAFT" }
```

**Note:** These examples do not show the complete API responses. To view detailed response structures, refer to the [Personalize Management API Documentation](https://www.contentstack.com/docs/developers/apis/personalize-management-api/experiences#create-an-experience).

### Export Detailed Experience Versions (with Variants) from the Source Project

1.  Send the following request for each experience UID:
    -   GET /personalize/projects/{source\_project\_uid}/experiences/{experience\_uid}/versions

**Response Example:**

```
{
 "data": [
  {
   "version": 2,
    "variants": [
     { 
 "alias": "Banner_A",
 "fields": { "title": "Summer Sale" } 
},
     { 
 "alias": "Banner_B",
 "fields": { "title": "Winter Sale" } 
 }
    ]
  }
 ]
}
```

Capture all variant definitions, audience mappings, and targeting conditions for reuse in the destination experience.

### Create Experience Versions (with Variants) in the Destination Project

1.  Use the following endpoint to create Experience versions:

    -   POST /experiences/{experience\_uid}/versions

    Map all **audience UIDs**, **content UIDs**, and **asset references** from the source project to the corresponding resources in the destination project.

    **Note:** Variant and audience IDs **differ** between projects. Verify **all mappings** to prevent broken references.

    **Request Example:**

    ```
    POST {BASE_URL}/experiences/{experience_uid}/versions
    {
     "status": "DRAFT",
      "variants": [
        {
          "__type": "ABTestVariant", 
          "name": "Control", 
          "shortUid": "0", 
          "trafficDistribution": 50
        },
        { 
          "__type": "ABTestVariant", 
          "name": "Bold", 
          "shortUid": "1",
          "trafficDistribution": 50
        }
      ]
    }
    ```


### Activate the New Experience Versions

1.  Once created, activate the new experience versions using the following endpoint:

    -   PUT /personalize/projects/{destination\_project\_uid}/experiences/{experience\_uid}/versions/{version\_uid}

    **Request Example:**

    ```
    PUT {BASE_URL}/experiences/{experience_uid}/versions/{version_uid}
    {
      "status": "ACTIVE"
    }
    ```

    **Additional Resource:** For more information, refer to [Update an Experience Version](https://www.contentstack.com/docs/developers/apis/personalize-management-api/experiences#update-an-experience-version) documentation.

2.  Confirm that all experiences and variants are active and visible in the destination project.

### Verify and Monitor the Migration

1.  Confirm that all attributes, audiences, variants, and experiences appear correctly in the destination project.
2.  Confirm that the project is connected to the desired stack and has entry variants configured correctly.
3.  Test each experience to verify correct variant delivery and targeting logic.
4.  Monitor Experience performance with [**Experience Analytics**](https://www.contentstack.com/docs/personalize/experience-analytics) to verify traffic distribution, audience exposure,and conversions.

## Related Resources

-   [Personalize Management API: Get All Experience Versions](/docs/developers/apis/personalize-management-api/experiences#get-all-experience-versions)
-   [Personalize Management API: Update an Experience Version](/docs/developers/apis/personalize-management-api/experiences#update-an-experience-version)
