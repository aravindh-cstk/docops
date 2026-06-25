---
title: Export and Recreate Experiences Across Organizations or Regions with Contentstack Personalize Management API
description: Step-by-step instructions to programmatically duplicate a Contentstack Personalize Project from one Organization or Region to another using the Personalize Management API.
url: https://www.contentstack.com/docs/personalize/export-and-recreate-experiences-across-organizations-regions-with-contentstack-personalize-management-api
product: Contentstack Personalize
doc_type: guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# Export and Recreate Experiences Across Organizations or Regions with Contentstack Personalize Management API

This page explains how to programmatically duplicate a Contentstack Personalize Project across Organizations or Regions using the Personalize Management API. It is intended for developers or admins who need to replicate or synchronize Personalize configurations and experiences between projects/environments.

This guide provides a technical overview and step-by-step instructions to programmatically duplicate a **Contentstack Personalize Project** from one Organization or Region to another.

## When to Use This Guide
- Replicate a Personalize project setup between environments.
- Copy or synchronize [attributes](./about-attributes.md), [audiences](./about-audiences.md), [events](./about-events.md), and [experiences](./about-experiences.md) across multiple Personalize projects.
- Programmatically extract and rebuild experiences and variants using the Personalize Management API.

## Prerequisites
- A [Contentstack account](https://www.contentstack.com/login/)
- A destination [Personalize project](./create-personalize-project.md) to recreate exported components.
- A [Personalize Management API](../../api-docs/api-detail/personalize-management-api.md) token with either **personalize:read/personalize:manage** scope for the source project and **personalize:manage **for the** **destination project.
- Project UIDs for both the source and destination projects.
- A scriptable environment such as Node.js, Python, or a shell script with curl for making API calls.

## Components You Can Recreate with Personalize Management API

| Item | API Endpoint(s) | Description |
|---|---|---|
| Attributes | [GET /attributes](../../api-docs/api-detail/personalize-management-api.md#get-all-attributes),<br>[POST /attributes](../../api-docs/api-detail/personalize-management-api.md#create-an-attribute) | Supports **CRUD **(Create, Read, Update, Delete) operations. Use **GET** to export all attribute definitions and **POST** to create them in the destination project. |
| Audiences | [GET /audiences](../../api-docs/api-detail/personalize-management-api.md#get-all-audiences),<br>[POST /audiences](../../api-docs/api-detail/personalize-management-api.md#create-an-audience) | Supports **CRUD **operations. Use **GET** to export audience configurations and **POST** to create them in the destination project. |
| Events | [GET /events](../../api-docs/api-detail/personalize-management-api.md#get-all-events),<br>[POST /events](../../api-docs/api-detail/personalize-management-api.md#create-an-event) | Supports **CRUD **operations. Use **GET** to export events and **POST** to create them in the destination project. |
| Experiences | [GET /experiences](../../api-docs/api-detail/personalize-management-api.md#get-all-experiences),<br>[POST /experiences](../../api-docs/api-detail/personalize-management-api.md#create-an-experience) | Use **GET** to fetch a list of all experiences. Use the **POST** endpoints to create new experiences in the destination project. |
| Experience Versions | [GET /experiences/{exp_uid}/versions](../../api-docs/api-detail/personalize-management-api.md#get-all-experience-versions)<br>[POST /experiences/{exp_uid}/versions](../../api-docs/api-detail/personalize-management-api.md#create-an-experience-version)<br>[PUT /experiences/{exp_uid}/versions](../../api-docs/api-detail/personalize-management-api.md#update-an-experience-version) | Use **GET** to retrieve detailed variant data. **POST** to create new versions, and **PUT** to activate (or pause) them. |

## Workflow Overview
Duplicating a personalization experience across organizations/regions follows the **Extract, Transform, Load (ETL)** pattern:
- **Extract:** Export all configurations (Attributes, Audiences, Events, and Experiences) from the **source Personalize project**.
- **Transform:** Map and adjust UIDs so that resources correctly reference equivalents in the destination project.
- **Load:** Use the transformed data to recreate identical resources in the destination project.

The key endpoint for this process is **GET /experiences/{exp_uid}/versions,** which provides the detailed variant data required for a complete duplication.

## Steps for Execution
- [Export Attributes, Audiences, and Events from the source project](#export-attributes-audiences-and-events-from-the-source-project)
- [Recreate Attributes, Audiences, and Events in the destination project](#recreate-attributes-audiences-and-events-in-the-destination-project)
- [Export Experience from the Source Project](#export-experience-metadata-from-the-source-project)
- [Create Experience in the Destination Project](#create-experiences-in-the-destination-project)
- [Export Detailed Experience Versions (with Variants) from the Source Project](#export-detailed-experience-versions-with-variants-from-the-source-project)
- [Create Experience Versions (with Variants) in the Destination Project](#create-experience-versions-with-variants-in-the-destination-project)
- [Activate the New Experience Versions](#activate-the-new-experience-versions)
- [Verify and Monitor the Migration](#verify-and-monitor-the-migration)

### Export Attributes, Audiences, and Events from the Source Project
- Send the following API requests to export attributes, audiences, and events:

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

**Note:** These examples do not show the complete API responses. To view detailed response structures, refer to the [Personalize Management API documentation](../../api-docs/api-detail/personalize-management-api.md).
- Save all three responses as **JSON files** for reuse when recreating these components in the destination project.

### Recreate Attributes, Audiences, and Events in the Destination Project
- Use the following endpoints:`POST /attributes`
- `POST /audiences`
- `POST /events`

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
- Use the following end point to retrieve all experiences:`GET /experiences`

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

- Record each experience’s uid, name, type, and description for rebuilding in the destination project.

### Create Experiences in the Destination Project
- Use one of the following endpoints based on experience type:`POST /experiences`

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

**Note:** These examples do not show the complete API responses. To view detailed response structures, refer to the [Personalize Management API Documentation](../../api-docs/api-detail/personalize-management-api.md#create-an-experience).

### Export Detailed Experience Versions (with Variants) from the Source Project
- Send the following request for each experience UID:`GET /personalize/projects/{source_project_uid}/experiences/{experience_uid}/versions`

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
- Use the following endpoint to create Experience versions:`POST /experiences/{experience_uid}/versions`

Map all **audience UIDs**, **content UIDs**, and **asset references** from the source project to the corresponding resources in the destination project.**Note:**Variant and audience IDs **differ** between projects. Verify **all mappings** to prevent broken references.

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
- Once created, activate the new experience versions using the following endpoint:`PUT /personalize/projects/{destination_project_uid}/experiences/{experience_uid}/versions/{version_uid}`

**Request Example:**
```
PUT {BASE_URL}/experiences/{experience_uid}/versions/{version_uid}
{
  "status": "ACTIVE"
}
```

**Additional Resource:** For more information, refer to [Update an Experience Version ](../../api-docs/api-detail/personalize-management-api.md#update-an-experience-version)documentation.
- Confirm that all experiences and variants are active and visible in the destination project.

### Verify and Monitor the Migration
- Confirm that all attributes, audiences, variants, and experiences appear correctly in the destination project.
- Confirm that the project is connected to the desired stack and has entry variants configured correctly.
- Test each experience to verify correct variant delivery and targeting logic.
- Monitor Experience performance with [**Experience Analytics** ](./experience-analytics.md)to verify traffic distribution, audience exposure,and conversions.

## Common questions

### Do I need to recreate components in a specific order?
Yes—export and recreate Attributes, Audiences, and Events first, then Experiences, then Experience Versions (with Variants), and finally activate the new versions.

### Will historical analytics or event data be migrated?
No. “Historical event data like clicks, impressions, or conversions are not copied.”

### Why do I need to map UIDs between projects?
Because “Variant and audience IDs **differ** between projects,” and references must be mapped to prevent broken targeting or asset/content links.

### Which endpoint is most important for duplicating variants?
**GET /experiences/{exp_uid}/versions** is the key endpoint because it provides the detailed variant data required for a complete duplication.