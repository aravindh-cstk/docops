---
title: "Attentive"
description: "Learn how to connect Lytics and Attentive to export Lytics audiences in real time, flagging members with a custom attribute so you can trigger Attentive SMS and email journeys off Lytics audience membership and behavioral data."
url: /lytics/attentive
uid: bltfeec8aa9c9d4d66b
---

# Attentive

## Attentive

## Overview

[Attentive](https://www.attentive.com/) is a conversational marketing platform that helps brands engage customers through personalized SMS and email messaging.

Integrating Lytics with Attentive allows you to export Lytics audiences to Attentive in real time. Members of an exported audience are flagged in Attentive with a custom attribute, so you can build Attentive segments and trigger SMS and email journeys off of Lytics audience membership and the cross-channel behavior, data science scores, and content affinities that power it.

## Authorization

If you haven't already done so, you will need to set up an Attentive account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

To connect Lytics and Attentive you will need an Attentive API key. Generate a private app API key from the Attentive platform with the `attributes:write` and `subscriptions:write` scopes. See [Attentive's authentication documentation](https://docs.attentive.com/docs/authentication) for instructions on creating an API key. Lytics validates the key when the authorization is saved.

> Lytics only updates user attributes in Attentive — it never modifies subscriptions. The `subscriptions:write` scope is required only because Attentive's [Bulk User Attributes endpoint](https://docs.attentive.com/reference/postbulkuserattributes), which lets Lytics send many users in a single call, requires it.

Follow the steps below to add this authorization in Lytics:

1.  Select **Attentive** from the list of providers.
2.  Select the **Attentive API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization.
4.  (Optional) In the **Description** text box, enter a description for this authorization.
5.  In the **Api Key** password box, enter your Attentive API key.
6.  Click **Save Authorization**.

## Export Audiences

Export your Lytics audiences to Attentive so you can target and message users based on their audience membership in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration.
-   **Frequency**: Real-time Integration with an optional one-time Backfill of the audience after job setup.
-   **Resulting Data**: User Profiles that are members of the selected audience(s) are exported to Attentive. Each audience is represented in Attentive as a boolean custom attribute named after the Lytics audience slug, set to `true` while the user is a member and `false` once they exit.

This integration uses Attentive's [Bulk User Attributes API](https://docs.attentive.com/reference/postbulkuserattributes) to send Lytics users to Attentive. Once the export is started, the job will:

1.  Run a one-time backfill of the current members of the selected audience(s), if **Existing Users** is enabled.
2.  Receive real-time updates when a user enters or exits the selected audience(s).
3.  For each user entering an audience, send the user's identifiers and mapped attributes to Attentive and set the audience attribute (`<audience slug> = true`).
4.  For each user exiting an audience, set the audience attribute to `false`.

Users are sent to Attentive in batches. A batch is flushed when it reaches **256 users** (the Attentive bulk endpoint's per-request maximum) or **every 30 seconds**, whichever comes first. If a user already has a pending change in the current batch and then triggers another (for example, exits an audience they just entered), the batch is flushed early so that enter and exit transitions are applied to Attentive in order.

> Attentive processes each bulk request asynchronously and returns a batch job ID, so users may take a few minutes to appear in Attentive after they are sent. Lytics tracks the status of each batch job until it completes. If Attentive rate limits the integration, the job automatically backs off and retries.

### Fields

Every exported user must include at least one Attentive identifier so Attentive can match the user to a subscriber profile. You map Lytics user fields to Attentive identifiers and attributes through four mappings in the job configuration:

-   **Identifier Mappings** — required. Map Lytics user fields to Attentive's standard identifiers: `phone`, `email`, `clientUserId`, `shopifyId`, and `klaviyoId`. At least one identifier mapping is required. Phone numbers must be in [E.164](https://docs.attentive.com/reference/postbulkuserattributes) format (for example, `+15551234567`).
-   **Extra Identifiers** — optional. Select Lytics fields to send as Attentive [custom identifiers](https://docs.attentive.com/openapi/reference/tag/Identity/). The Lytics field name is used as the identifier key in Attentive.
-   **Attribute Mappings** — optional. Map Lytics user fields to Attentive's well-known, typed attributes such as `firstName`, `lastName`, `city`, and `dateOfBirth`. Date attributes such as `dateOfBirth` must be in `YYYY-MM-DD` format.
-   **Custom Attributes** — optional. In addition to the well-known attributes above, select Lytics fields to send as Attentive [custom attributes](https://docs.attentive.com/openapi/reference/tag/Custom-Attributes/). The Lytics field name is used as the custom attribute name in Attentive. Array-valued fields are sent as comma-separated strings. These are sent alongside the audience-membership attributes, which Lytics also writes as custom attributes (one per audience slug, as described above).

### Configuration

Follow these steps to set up and configure an audience export to Attentive from Lytics. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Attentive** from the list of providers.
2.  Select the **Export Audience** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** input, select the Lytics audience(s) to sync to Attentive. ![Attentive Export Audience job configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1adfbe4394a6ae5f/c6474fc42bb3b162a40a0455/img-0029.png)
7.  From the **Identifier Mappings** input, map Lytics user fields to Attentive's standard identifiers by selecting the Lytics field on the left and its Attentive identifier on the right. At least one identifier mapping is required.
8.  (Optional) From the **Extra Identifiers** input, select Lytics fields to send as Attentive custom identifiers.
9.  (Optional) From the **Attribute Mappings** input, map Lytics user fields to Attentive's well-known attributes by selecting the Lytics field on the left and its Attentive attribute on the right.
10.  (Optional) From the **Custom Attributes** input, select Lytics fields to send as Attentive custom attributes.
11.  (Optional) Select the **Existing Users** checkbox to enable a one-time backfill of the current members of the selected audience(s) to Attentive immediately. This is enabled by default.
12.  Click **Start Export**.

Users will begin appearing in Attentive within a few minutes of starting the export. You can confirm the export in Attentive by checking the audience attribute on a test user's subscriber profile.
