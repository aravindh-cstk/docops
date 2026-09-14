---
title: "Segment.com"
description: "Segment.com"
url: /lytics/segmentcom
---

# Segment.com

## Segment.com

## Segment Overview

[Segment](https://segment.com/) is a platform that collects, stores, and routes customer data to various other tools. Segment's connections allow you to collect and standardize data, while their protocols can help you validate and cleanse data.

Combine Segment and Lytics to add predictions to your marketing data management. You can install the Lytics tag via Segment as a data destination, or export your Lytics behavior-based audiences to route to multiple tools or executions via Segment's integrations.

## Export

With this export you can send Lytics audiences to Segment as Identify or Track events. Using Segment you can send this data downstream to multiple other tools.

### Integration Details

-   **Implementation Type**: Server-side Integration
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration
-   **Frequency**: Real-time Integration, with an optional one-time Backfill of the audience after setup.
-   **Resulting Data**: Lytics users that are a member of the selected audience(s) are exported to Segment via Identify or Track events.

This integration utilizes the [Segment API](https://segment.com/docs/spec/) to send user data. Once the user initiates the job, it will run a backfill of users if configured to do so. Segment will then receive real-time updates when a user enters or exits the choosen audience. For each user the integration will:

1.  Create an [Identify](https://segment.com/docs/spec/identify/) or [Track](https://segment.com/docs/spec/track/) event payload with the Lytics user field data selected according to job configuration.
2.  Append the `audience_{audience_name}` as boolean (true or false) field if the event type selected at configuration is **Identify**. Here `true` specifies the Enter event and `false` specifies Exit event.
3.  If the **Track** event was selected at configuration, it will append the field `event` with a value of `"enter"` or `"exit"`.
4.  Send the Event to Segment.

### Fields

Segment supports various fields for Identify or Track payload. Please refer to Segment's [Identify](https://segment.com/docs/spec/identify/) and [Track](https://segment.com/docs/spec/track/) documentation for more information. As mentioned above, the `audience_{audience_name}` and `event` fields are added in addition to the default payload depending on the event type. Lytics allows you to send additional fields as part of [traits](https://segment.com/docs/spec/identify/#traits) for Identify events and [properties](https://segment.com/docs/spec/track/#properties) field for Track events.

### Configuration

Follow these steps to set up an export job for Segment. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

**Note:** Before running this job you will need to set up a Source in your Segment account, this may be a [Custom Source](https://segment.com/docs/sources/custom/) or a **Legacy Project Source** this will be the source where Lytics writes data in Segment. You will need to know your write key for your source. See [Segment's documentation](https://segment.com/docs/guides/setup/how-do-i-find-my-write-key/) for directions on how to obtain your write key.

1.  Select **Segment** from the list of providers.
2.  Select the **Export** job type from the list.
3.  This job does not require an authorization.
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  Select the audience to export.
7.  Enter your Segment write key in **Segment.com Write Key** for the target Segment source. [Finding your write key](https://segment.com/docs/connections/find-writekey/).
8.  Select the **User ID** field to match users in Segment. See [Segment's documentation](https://segment.com/docs/spec/identify/#user-id) for more information about user IDs.
9.  Select the **Anonymous ID** field to match users as anonymous in Segment. See Segment's documentation about [Anonymous IDs](https://segment.com/docs/spec/identify/#anonymous-id) for more information. **Note:** User ID or Anonymous ID must be set.
10.  Select the **Event type**.
11.  Select the user **Export Fields** to export. By default, all fields will be sent.
12.  Select **Existing Users** to add users who already exist in the selected Lytics audience.
13.  Click **Start Export**.

![segment-export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am837d9da92ad690eb/5ecaf54eac274d2cc139abdc/img-0279.png)
