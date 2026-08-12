---
title: "Data & Insights (Lytics) Audience Unavailable"
description: "Data & Insights (Lytics) Audience Unavailable"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/03-lytics-cdp-integrations/11-data-insights-lytics-audience-unavailable
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs13f72f8c1d79a35b
---

# Data & Insights (Lytics) Audience Unavailable

When working in Personalize, you may encounter one of the following error messages:

-   Some Lytics audiences are unavailable. Active experiences may not behave as expected.
-   Linked audience(s) from Data & Insights (Lytics) are unavailable.

These errors indicate that one or more Lytics audiences referenced in your Personalize experiences can no longer be resolved.

**Root Cause**

This error occurs for one of two reasons:

-   **Missing DAL connection:** The Personalize project is no longer connected to an active Data Activation Layer (DAL), so audiences cannot sync from Lytics.
-   **Audience deleted in Lytics:** The audience referenced in the experience was removed from the Lytics dashboard.

**Resolution**

1.  Navigate to **Org Admin** settings, open the **Data Activation Layer** section, and click **Edit** on your DAL connection. Click **Test Connection** to verify it is active. If the connection is broken, reconnect your Personalize project to the correct DAL.
2.  Log in to your Lytics dashboard and navigate to **Using Profiles > Audiences**. Search for the audience referenced in the affected experience.
3.  If the audience is missing, either recreate it in Lytics and relink it in Personalize, or replace it with another active audience.
4.  Once the correct audience is in place, resolve the experience based on its current state:
    -   **Draft:** Edit the existing draft to point to the new or replacement audience.
    -   **Paused:** Create a new draft with the correct audience before reactivating the experience.
    -   **Active:** Pause the experience, create a new draft linked to the correct audience, then reactivate.
