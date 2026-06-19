---
title: Personalize Troubleshooting Guide
description: Solutions for common issues encountered while working with Contentstack Personalize, including Data & Insights (Lytics) audience availability errors and resolution steps.
url: https://www.contentstack.com/docs/personalize/troubleshooting-guide
product: Contentstack Personalize
doc_type: troubleshooting-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# Personalize Troubleshooting Guide

This page provides troubleshooting guidance for Contentstack Personalize users who encounter common errors, especially around Data & Insights (Lytics) audience availability, and should be used when experiences are not behaving as expected due to missing or unavailable audiences.

This guide provides solutions for the common issues you may encounter while working with **Contentstack Personalize**. Each entry lists the error message, description, possible causes, and steps to resolve the problem.

## Data & Insights (Lytics) Audience Unavailable

When working in Personalize, you may see one of the following error messages:
- **Some Lytics audiences are unavailable. Active experiences may not behave as expected.**
- **Linked audience(s) from Data & Insights (Lytics) are unavailable.**

These errors indicate that one or more audiences connected from **Data & Insights (Lytics)** used in your Personalize project are unavailable. As a result, experiences that target these audiences may not deliver content as intended.

### Why does this happen?

Data & Insights (Lytics) audiences in Personalize are visible only when a **Personalize project** is linked to an active [Data Activation Layer (DAL)](/docs/data-and-insights/integrating-data-and-insights-lytics) connection. This connection lets you reference audiences from Data & Insights (Lytics) directly in your experiences.

**Impacts by Experience State:**
- **Draft:** Errors do not affect production since the experience is not yet active. You can safely edit the audience.
- **Paused:** The missing audience will not impact users until the experience is reactivated. You should create a new draft with the correct audience before resuming.
- **Active:** Active experiences that reference a missing audience will break. This directly affects delivery to your users.

**The error may occur for one of the following reasons:**
- **Missing DAL connection:** The Personalize project is no longer connected to the DAL, so audiences cannot sync.
- **Audience deleted in Lytics:** The audience referenced in your experience was removed from Data & Insights (Lytics).

## Resolution Steps

### Check the DAL connection
- Enable the **Try the New Navigation **toggle located within the profile dropdown.
- From the App switcher, click the **Administration** icon.
- Click **Data Activation Layer **from the top navigation panel.
- Verify that your **Personalize project** is connected to the correct DAL. Click the **Edit** button for the DAL connection under **Actions**, then click the **Test Connection** button.
- If the connection is missing, reconnect your project to the appropriate DAL as shown in step 4.

### Verify audience availability in Lytics
- Log in to your [**Lytics**](https://docs.lytics.com/)** dashboard**.
- Navigate to **Using Profiles > **[**Audiences**](https://docs.lytics.com/docs/audiences).
- [Search](https://docs.lytics.com/docs/audiences#finding-audiences) for the audiences linked to your experiences in Personalize.
- If an Audience is missing:  
  Recreate it in Data & Insights (Lytics) and update the experience in Personalize, OR
- Replace it with another active audience.

### Resolving by Experience State
- **Draft:** Edit the existing draft to point to the new audience.
- **Paused:** Create a new draft with the intended audiences.
- **Active:** Pause the current experience (optional), create a new draft, and link the correct audience before reactivating.

## Common questions

### What does it mean when a Lytics audience is unavailable in Personalize?
It means one or more audiences connected from **Data & Insights (Lytics)** used in your Personalize project are unavailable, and experiences targeting those audiences may not deliver content as intended.

### Can active experiences break if they reference a missing audience?
Yes. **Active** experiences that reference a missing audience will break, which directly affects delivery to your users.

### What should I check first when I see the audience unavailable error?
Check whether your **Personalize project** is linked to an active **Data Activation Layer (DAL)** connection and use **Test Connection** to verify it.

### What should I do if the audience was deleted in Lytics?
Recreate it in Data & Insights (Lytics) and update the experience in Personalize, or replace it with another active audience.

<!-- filename: personalize-troubleshooting-guide.md -->