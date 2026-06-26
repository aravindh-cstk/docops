---
title: "[Personalize] - Lytics CDP & Integrations"
description: "Resolve common Lytics integration issues, including login failures for Member roles, cookie synchronization in SSR, and field mapping requirements."
url: "https://www.contentstack.com/docs/personalize/lytics-cdp-integration"
product: "Contentstack"
doc_type: "guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-04-08"
---

# [Personalize] - Lytics CDP & Integrations

## 1\. Lytics Login Failure for Users With Member Role

### Summary

Accessing Lytics may fail for users who are assigned a Member role at the organization level within Contentstack. This prevents successful login to the Lytics platform despite the user being added to the Data Activation Layer (DAL).

### Root Cause

The issue is caused by a permission restriction where the "Member" organization role does not provide sufficient privileges for standard Lytics authentication.

### Resolution

1.  Check the user's organization-level role to determine if it is set to "Member".
2.  Coordinate with the Lytics engineering team to generate a manual OAuth login link for the affected user.
3.  Use the generated OAuth link to facilitate the initial login process.

### Verification

After providing the OAuth link, attempt to log in to the Lytics platform. If the user successfully accesses the dashboard, the issue is resolved.

* * *

## 2\. Viewing Behavior and Interest Scores in Lytics Browser Extension

### Summary

Exposing behavior and interest scores in the Lytics browser extension may require manual field mapping within the Public API settings. This prevents the real-time validation of user interest data during development and testing.

### Root Cause

The issue is caused by the default Public API field configuration, which does not include behavioral and interest data points for external visibility in the Dev Tool extension.

### Resolution

1.  Navigate to the Lytics Public API field configuration settings.
2.  Add the specific fields for behavior and interest scores to the allowed Public API fields list.
3.  Refresh the Lytics browser extension to sync the updated field permissions.
4.  Check the Dev Tool interface to ensure the scores are now visible.

### Verification

After updating the Public API field configuration, open the Lytics browser extension on a tracked page. If the behavior and interest scores are displayed correctly within the extension interface, the issue is resolved.

* * *

## 3\. Field Mapping Requirements in Lytics CDP

### Summary

Determining whether specific fields require manual mapping in Lytics CDP may be unclear when transitioning between standard integrations and custom data sources. This prevents the confident configuration of data ingestion streams without knowing which fields are automated by default.

### Root Cause

Standardized integrations come with pre-configured default mappings to ensure immediate compatibility, whereas custom sources (like CSV uploads or custom APIs) do not have a predictable schema, making manual mapping necessary.

### Resolution

*   Check if the data is being ingested through a standard stream like salesforce\_accounts, which utilizes default mappings.
*   Verify if the data source is a custom import to determine if manual mapping is required.
*   Use **Schema Copilot** to automatically suggest and define field mappings for non-standard data sources.
*   Refer to official Lytics documentation for a complete list of default fields and mapping behaviors for built-in integrations.

* * *

## 4\. Lytics Audiences Not Reflecting in Cookies During SSR Implementation

### Summary

Implementing personalization in a Server-Side Rendering (SSR) environment may fail when Lytics audiences do not correctly appear in browser cookies. This prevents Personalize from identifying user segments, causing the site to display default content.

### Root Cause

The issue is caused by a failure in the Lytics segment assignment process, where the user profile is not successfully associated with the target audience at the CDP level. Because the segmentation data never reaches the browser cookies, the downstream Personalize engine cannot trigger variant rules.

### Resolution

1.  Check the Lytics dashboard to verify if the test user is successfully being added to the intended segment.
2.  Verify the Edge function and proxy configuration to ensure data is passing correctly between the server and the Lytics API.
3.  If the user does not appear in the Lytics segment, escalate the issue to the Lytics support team via a specialized Zendesk ticket.
4.  Provide the development domain and specific cookie screenshots to the Lytics team to facilitate troubleshooting.

* * *

## 5\. Retrieving Historical Event Data for Analytics Via Lytics

### Summary

Using the Stream Events API to perform historical data analysis may result in incomplete data sets, as the endpoint typically returns only a small number of the most recent events. This prevents users from identifying long-term trends.

### Root Cause

The issue is caused by a functional limitation of the Stream Events API, which is optimized for real-time validation and stream health monitoring rather than serving as a query engine for historical data.

### Resolution

1.  Identify if the requirement is for real-time debugging or long-term historical analytics.
2.  If historical analysis is required, do not rely on the GET /v2/stream/{name}/events endpoint.
3.  Configure a data export to a warehouse such as **Google BigQuery** using Lytics' built-in integrations.
4.  Utilize the data warehouse's native SQL or querying tools to run analytics on the stored event data.
5.  Refer to the Lytics BigQuery documentation to set up the automated event dump.