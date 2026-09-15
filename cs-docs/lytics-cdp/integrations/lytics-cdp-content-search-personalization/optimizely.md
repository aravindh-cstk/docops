---
title: "Optimizely"
description: "Lytics offers two ways to bring your audiences into Optimizely, depending on which Optimizely product you use:"
url: /lytics/optimizely
uid: blta7aa50ef29d1fbee
---

# Optimizely

## Optimizely

## Overview

Lytics offers two ways to bring your audiences into Optimizely, depending on which Optimizely product you use:

-   **[Optimizely X Experimentation](#optimizely-x-experimentation)** — Lytics defines a matching audience in Optimizely X for each Lytics audience, resolved client-side from the ly\_segs cookie. Use this to run classic Optimizely X Web/Full Stack experiments against your Lytics audiences.
-   **[Optimizely Data Platform (ODP)](#optimizely-data-platform-odp-audience-export)** — Lytics writes audience membership as a boolean attribute on each ODP customer profile, which you then use to build Real-Time Segments in Feature Experimentation. This is the path Optimizely recommends for powering Feature Experimentation with CDP audiences.

Each path is self-contained below — with its own authorization and job — and the two can be used independently or together.

## Optimizely X Experimentation

Get the most out of Optimizely X by running experiments against any of your Lytics audiences.

**Note:** Because Optimizely uses a synchronous tag that blocks page load and Lytics uses an asynchronous tag that will never affect page load, natively running experiments on the first page view for first time visitors is not recommended.

### Authorization

1.  Select Account -> Security -> Authorizations from the left side menu.
2.  Click \+ Create New at the top of the list.
3.  Select Optimizely.
4.  Select Optimizely X Oauth
5.  Log in to Optimizely when prompted.
6.  Complete the authorization by adding a description.

**Warning:** This integration no longer supports "Optimizely Classic."

### How it Works

1.  When someone visits a web property with the Lytics tag installed, Lytics will identify who they are and return a list of audiences they are currently a member of in real-time. This process happens very quickly but is asynchronous, meaning it is designed to never negatively impact performance.
2.  Once those profiles have been received, the audiences are stored in a cookie called ly\_segs. This cookie is then updated, asynchronously, on every subsequent page view.
3.  You will then set up a sync job between Optimizely X and Lytics from the Lytics interface. This ensures a set of audiences are automatically defined within Optimizely X which look for a membership map to the audiences stored in this cookie.
4.  Optimizely experiments are then configured to target your Lytics powered audiences.

### Create Audiences

Running this workflow will create an audience in Optimizely for each Lytics audience that has been [API enabled](/docs/lytics/audiences#building-audiences-configuration-options).

#### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration .
-   **Frequency**: Batch Integration every hour.
-   **Resulting data**: Optimizely Audience.

This integration utilizes [Optimizely APIs](https://docs.developers.optimizely.com/full-stack-experimentation/reference/create_audience) to create audiences. On each run of the job, it will:

1.  For each Lytics audience marked as API enabled an audience will be created in Optimizely with the name "Lytics" + audience name, and with the condition of a substring match of the keyly\_segs and value of the corresponding audience slug.
2.  The work will run continousouly. As new public audiences are created in Lytics, audiences will be created in Optimizely every hour.

#### Configuration

Follow these steps to set up and configure the export audience job for Optimizely in the Lytics platform. If you are new to creating jobs in Lytics, see the Jobs Dashboard documentation for more information.

1.  Click Data Pipeline -> Jobs from the left side menu.
2.  Click \+ Create New at the top of the list.
3.  Select Optimizely.
4.  Select Create Audiences.
5.  Select the authorization created above.
6.  Add a Label and Description and then click Complete at the bottom right.

After a few minutes visit the Audiences section of your Optimizely account to verify that the Lytics audiences are configured correctly.

### Configure ly\\\_segs Cookie Storage

As of version 3 of the Lytics JavaScript tag, audience membership is no longer actively stored as a cookie by default. This means that in order to facilitate the communication between Optimizely and Lytics you will need to install this additional code snippet on your website. Be sure to load this tag after the core Lytics JavaScript tag.

```
jstag.call('entityReady',function(p){var segments=[];if(p&&p.data&&p.data.user){segments=p.data.user.segments;}else if(p&&p.data&&p.data.segments){segments=p.data.segments;}if(segments.length>0){var t=JSON.stringify(segments);console.log(t);jstag.setCookie("ly_segs",t,604800);}else{console.warn("Unable to locate customer profile data or segment membership for personalization.");}});
```

### Configuring Experiments

Once you have configured your audience following the steps above all that is left is to configure and test your experiment. Refer to the [Optimizely documentation](https://help.optimizely.com/Target_Your_Visitors/Audiences%3A_Choose_which_visitors_to_include) for associating an audience with an experiment.

## Optimizely Data Platform (ODP) Audience Export

Export your Lytics audiences to the [Optimizely Data Platform (ODP)](https://www.optimizely.com/products/data-platform/) to power [Real-Time Segments in Feature Experimentation](https://docs.developers.optimizely.com/feature-experimentation/docs/configure-real-time-segments) with CDP audiences. Lytics writes audience membership onto each ODP customer profile, you build an ODP Real-Time Segment from that attribute, and the Feature Experimentation SDK evaluates the segment at runtime.

When a user enters a synced Lytics audience, Lytics sets a boolean attribute on their ODP profile to true; when they exit, it sets the attribute to false. Each audience maps to its own attribute, so multiple audiences can be exported independently without interfering with one another.

### Authorization

To connect Lytics and ODP you will need an ODP API key. Generate a [private API key](https://docs.developers.optimizely.com/optimizely-data-platform/docs/api-overview) from your ODP account. Lytics validates the key when the authorization is saved, and the ODP region is determined automatically from the key, so no region setting is required.

Follow the steps below to add this authorization in Lytics:

1.  Select **Optimizely** from the list of providers.
2.  Select the **Optimizely Data Platform API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization.
4.  (Optional) In the **Description** text box, enter a description for this authorization.
5.  In the **API Key** password box, enter your ODP API key.
6.  Click **Save Authorization**.

### Export Audiences

Export your Lytics audiences to ODP so you can build Real-Time Segments and target users in Feature Experimentation based on their Lytics audience membership.

#### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration.
-   **Frequency**: Real-time Integration with an optional one-time Backfill of the audience after job setup.
-   **Resulting Data**: User Profiles that are members of the selected audience are written to ODP. Each audience is represented on the ODP customer profile as a boolean attribute named after the Lytics audience slug (prefixed, lytics\_ by default), set to true while the user is a member and false once they exit.

This integration uses ODP's [/v3/profiles API](https://docs.developers.optimizely.com/optimizely-data-platform/reference/create_update_profile) to update customer profiles. Once the export is started, the job will:

1.  Provision the audience's boolean attribute (for example, lytics\_my\_segment) on the ODP customers object so the field exists before any profiles are sent. This runs once at job setup and is safe to repeat.
2.  Run a one-time backfill of the current members of the selected audience, if **Existing Users** is enabled.
3.  Receive real-time updates when a user enters or exits the selected audience.
4.  For each user entering the audience, send the user's identifiers and set the audience attribute to true.
5.  For each user exiting the audience, set the audience attribute to false.

Users are sent to ODP in batches of up to 100 profiles per request.

**Note:** Each Lytics audience is exported as its own boolean attribute rather than as a single multi-value list. ODP replaces (rather than merges) a list attribute on each write, so giving every audience an independent boolean ensures syncing one audience never clobbers another.

#### Fields

Every exported user must include at least one ODP identifier so ODP can match the user to a customer profile. You map Lytics user fields to ODP identifiers in the job configuration. ODP accepts the following canonical identifiers:

-   **Email** (email)
-   **Customer ID** (customer\_id)
-   **Visitor ID / VUID** (vuid)

At least one identifier must resolve for a given profile, or that user is skipped.

#### Configuration

Follow these steps to set up and configure an audience export to ODP from Lytics. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Optimizely** from the list of providers.
2.  Select the **Optimizely: Data Platform Audience Export** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization-1).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audience** input, select the Lytics audience to sync to ODP.
7.  From the **Identifier Mapping** input, map Lytics user fields to ODP identifiers by selecting the Lytics field on the left and its ODP identifier on the right. At least one identifier mapping is required.
8.  (Optional) In the **Attribute Prefix** text box, change the prefix added to the audience slug to form the ODP attribute name. Defaults to lytics\_, so audience my\_segment becomes the attribute lytics\_my\_segment.
9.  (Optional) From the **Audience Trigger Events** input, select which transitions to send: **Enters and Exits** (default), **Enters Only**, or **Exits Only**.
10.  (Optional) Select the **Existing Users** checkbox to enable a one-time backfill of the current members of the selected audience to ODP immediately. This is enabled by default.
11.  Click **Start Export**.

Users will begin appearing in ODP within a few minutes of starting the export. To use the audience in Feature Experimentation, build a [Real-Time Segment](https://docs.developers.optimizely.com/feature-experimentation/docs/configure-real-time-segments) in ODP that matches profiles where the audience attribute (for example, lytics\_my\_segment) equals true, then target that segment in your experiment or flag.
