---
title: "Infobip"
description: "Infobip"
url: /lytics/infobip
uid: bltcea8f3fb7779f27f
---

# Infobip

## Infobip

## Overview

[Infobip](https://www.infobip.com/) is an omnichannel communications platform that brands use to reach customers across SMS, email, WhatsApp, and other channels.

Integrating Lytics with Infobip allows you to export Lytics audiences to Infobip's People platform and import Infobip contacts back into Lytics. On export, members of an exported audience are flagged in Infobip with a **tag**, and any profile data you map is synced to the person's standard fields and custom attributes. This lets you build Infobip segments and trigger cross-channel messaging off of Lytics audience membership and the cross-channel behavior, data science scores, and content affinities that power it. On import, Infobip People are pulled into Lytics — including their Infobip tags — so you can build Lytics audiences from Infobip contact data and audience membership.

## Authorization

If you haven't already done so, you will need to set up an Infobip account before you begin the process described below. If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

To connect Lytics and Infobip you will need an Infobip **API key** and your account's **Base URL**. Both are available in the Infobip web interface under **API Key Management**; the Base URL is account-specific (for example, `xyz123.api.infobip.com`). See [Infobip's API key documentation](https://www.infobip.com/docs/essentials/api-essentials/api-authentication) for instructions on generating an API key. Lytics validates the credentials against Infobip when the authorization is saved.

Follow the steps below to add this authorization in Lytics:

1.  Select **Infobip** from the list of providers.
2.  Select the **Infobip API Key** method for authorization.
3.  In the **Label** text box, enter a name for the authorization.
4.  (Optional) In the **Description** text box, enter a description for this authorization.
5.  In the **API Key** password box, enter your Infobip API key.
6.  In the **Base URL** text box, enter your account's Infobip base URL (for example, `xyz123.api.infobip.com`).
7.  Click **Save Authorization**.

## Export Audiences

Export your Lytics audiences to Infobip so you can target and message users based on their audience membership in Lytics.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration.
-   **Frequency**: Real-time Integration with a one-time Backfill of the audience when the export starts.
-   **Resulting Data**: User Profiles that are members of the selected audience(s) are exported to Infobip. Each audience is represented in Infobip by a **tag** applied to the person while they are a member and removed once they exit. For every entering user, the person is created or updated (upsert) in Infobip, and any mapped Lytics fields are synced to the person's standard fields and custom attributes.

This integration uses Infobip's [People API](https://www.infobip.com/docs/people) to sync Lytics users to Infobip. Once the export is started, the job will:

1.  Run a one-time backfill of the current members of the selected audience(s).
2.  Receive real-time updates when a user enters or exits the selected audience(s).
3.  For each user entering an audience, create or update (upsert) the person in Infobip — matched by email or phone — set the person type, sync any mapped fields, and add the audience tag. Because every entering user is upserted, a tag-only export (with no mapped fields) still creates the person that the tag attaches to.
4.  For each user exiting an audience, remove the audience tag. The person is not deleted from Infobip.

Users are synced to Infobip in batches. A batch is flushed when it reaches **1,000 buffered events** or **every minute**, whichever comes first, with a final flush when the export stops. Within each flush, person upserts are applied before tag additions, and tag additions before tag removals, so the person always exists before its tag is attached.

Each exported user must have a valid email address or, when no email is present, a phone number. Users with an invalid email and no phone number are dropped and the export continues. If Infobip rate limits the integration, the job automatically backs off and retries.

### Fields

You map Lytics user fields to Infobip identifiers and attributes through the job configuration:

-   **Email Field** / **Phone Number Field** — at least one is required. Infobip matches each Lytics user to a person using the email address, falling back to the phone number when no email is present.
-   **Person Type** — optional. The Infobip person type assigned to exported profiles, sent as the person's `type`. Choose **Customer** or **Lead**; defaults to Customer.
-   **Map Fields** — optional. Map Lytics user fields to Infobip Person fields. Targets include Infobip's standard Person fields (such as `firstName` and `lastName`) and your account's custom attributes. Standard fields are written to the person's top-level attributes; everything else is written to `customAttributes`.
-   **Tag** — optional. Select an existing Infobip tag to apply when a user enters the audience, or type a new tag name to create one (up to 256 characters). If you leave this empty, Lytics generates a tag from the workflow name.

### Configuration

Follow these steps to set up and configure an audience export to Infobip from Lytics. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Infobip** from the list of providers.
2.  Select the **Export Audience** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** input, select the Lytics audience(s) to sync to Infobip.
7.  From the **Email Field** dropdown, select the Lytics user field that contains the email address. Defaults to `email`.
8.  (Optional) From the **Phone Number Field** dropdown, select the Lytics user field that contains the phone number, used when no email is present. At least one of email or phone must be available for each user.
9.  (Optional) From the **Person Type** dropdown, select the Infobip person type to assign to exported profiles. Defaults to **Customer**.
10.  (Optional) From the **Map Fields** input, map Lytics user fields to Infobip Person fields and custom attributes by selecting the Lytics field on the left and its Infobip target on the right.
11.  (Optional) From the **Tag** input, select an existing Infobip tag or type a new tag name (up to 256 characters) to apply to members of the audience. If left empty, Lytics generates a tag from the workflow name.
12.  Click **Start Export**.

Users will begin appearing in Infobip within one flush interval of starting the export. You can confirm the export in Infobip by checking the audience tag on a test user's person profile in the People platform.

## Import Contacts

Import contacts (People) from Infobip into Lytics so you can build Lytics audiences from Infobip contact data and audience membership.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration.
-   **Frequency**: Batch Integration. The first run imports all matching contacts; with **Keep Updated** enabled, the job runs every hour and imports only contacts changed since the previous run (incremental sync). With **Keep Updated** disabled, the import runs once.
-   **Resulting Data**: Infobip People are imported as Lytics User Profiles on the `infobip_contacts` stream, matched to existing users by email or phone. Each contact's Infobip tags are imported as a set so Lytics audiences can target Infobip audience membership.

This integration uses Infobip's [People API](https://www.infobip.com/docs/people) to read contacts. Each run of the job will:

1.  Page through Infobip People, optionally filtered to the selected tag(s).
2.  On incremental runs, request only contacts modified since the last run, tracked by a `modifiedAt` cursor.
3.  For each contact, flatten its standard person attributes, custom attributes, and tags onto a record and write it to the `infobip_contacts` stream.

The import is incremental and idempotent: contacts are matched and upserted by email or phone, so re-importing a contact updates the existing Lytics user rather than creating a duplicate.

### Fields

Imported contacts are mapped onto the Lytics user schema as follows. All of a contact's custom attributes are imported as well, each on a field of the same name.

| Infobip Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| email | email | Primary email address | string |
| phone | phone | Primary phone number (E.164) | string |
| id | infobip\\\_person\\\_id | Infobip-assigned person identifier | string |
| externalId | infobip\\\_external\\\_id | Customer-assigned external identifier | string |
| firstName | first\\\_name | First name | string |
| lastName | last\\\_name | Last name | string |
| middleName | middle\\\_name | Middle name | string |
| gender | gender | Gender | string |
| birthDate | birthday | Birthday | string |
| address | address1 | Address | string |
| city | city | City | string |
| country | country | Country | string |
| preferredLanguage | preferred\\\_language | Preferred language | string |
| tags | infobip\\\_tags | Tags applied to the contact in Infobip | \\\[\]string |
| type | infobip\\\_person\\\_type | Infobip person type (Customer or Lead) | string |

### Configuration

Follow these steps to set up and configure a contact import from Infobip into Lytics. If you are new to creating jobs in Lytics, see the [Data Sources](/docs/lytics/data-sources) documentation for more information.

1.  Select **Infobip** from the list of providers.
2.  Select the **Import Contacts** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  (Optional) From the **Infobip Tags** input, select one or more Infobip tags to import contacts from. Leave blank to import all contacts.
7.  Select **Keep Updated** to import updated contacts continuously. The import will run every hour and pull only contacts changed since the previous run. Leave it off for a one-time import.
8.  Click **Start Import**.

Imported contacts will appear in Lytics on the `infobip_contacts` stream. You can confirm the import by reviewing the stream's incoming data or by checking a test contact's user profile in Lytics.

## Send SMS

Send a transactional SMS through Infobip when a user enters a Lytics audience. This is useful for triggered messages such as order confirmations, shipping updates, or welcome texts driven by Lytics audience membership.

### Integration Details

-   **Implementation Type**: Server-side Integration.
-   **Implementation Technique**: REST API Integration with Audience Trigger Integration.
-   **Frequency**: Real-time Integration. With **Existing Users** enabled, a one-time Backfill messages the current members of the audience when the export starts.
-   **Resulting Data**: An SMS is sent through Infobip to each user entering the selected audience(s). The message is personalized per recipient from the selected user fields, and the user's phone field supplies the destination number.

This integration uses Infobip's [SMS API](https://www.infobip.com/docs/api/channels/sms) to send messages. Once the export is started, the job will:

1.  (Optional) Message the current members of the selected audience(s) on the first run when **Existing Users** is enabled.
2.  Receive real-time updates when a user enters the selected audience(s).
3.  For each entering user, resolve the destination number from the **Phone Number Field**, render the message by substituting any `{{field}}` tokens with the user's values, and send the SMS from the configured **Sender**.

Only users entering the audience are messaged; exits do nothing. Users without a value in the **Phone Number Field** are skipped and the export continues.

### Fields

You configure the message and its personalization through the job configuration:

-   **Phone Number Field** — required. The Lytics user field that contains the destination phone number. E.164 format (for example, `+14155550123`) is preferred. Users without a value are skipped.
-   **Sender** — required. The Infobip sender ID or number shown to the recipient, such as a registered alphanumeric sender or number.
-   **Message** — required. The SMS text. To personalize per recipient, wrap a field name from **Message Fields** in double curly braces (handlebars style) — for example, `Hi {{first_name}}, your order {{order_id}} shipped.` Missing values render as empty text.
-   **Message Fields** — optional. The Lytics user fields that the message can reference as double-curly-brace tokens.

### Configuration

Follow these steps to set up and configure an SMS send through Infobip from Lytics. If you are new to creating jobs in Lytics, see the [Destinations](/docs/lytics/destinations) documentation for more information.

1.  Select **Infobip** from the list of providers.
2.  Select the **Send SMS** job type from the list.
3.  Select the Authorization you would like to use or [create a new one](#authorization).
4.  Enter a **Label** to identify this job you are creating in Lytics.
5.  (Optional) Enter a **Description** for further context on your job.
6.  From the **Audiences** input, select the Lytics audience(s) whose entering users receive the SMS.
7.  From the **Phone Number Field** dropdown, select the Lytics user field that contains the destination phone number.
8.  In the **Sender** text box, enter the Infobip sender ID or number shown to the recipient.
9.  In the **Message** text box, enter the SMS text. Wrap any field name from **Message Fields** in double curly braces to personalize it per recipient.
10.  (Optional) From the **Message Fields** input, select the user fields that the message can reference as double-curly-brace tokens.
11.  (Optional) Select **Existing Users** to immediately message users who already exist in the selected audience(s). Otherwise only entering users are messaged.
12.  Click **Start Export**.

Entering users will begin receiving messages within moments of starting the export. You can confirm delivery in Infobip's SMS logs.

## Triggered Email & WhatsApp

Lytics does not ship dedicated Infobip **email** or **WhatsApp** workflows, because both channels require a message **template that you author and (for WhatsApp) register inside Infobip**. WhatsApp templates must be approved by Meta before use, and Infobip email is sent from Broadcast templates built in the Infobip portal. Once that template exists, you can trigger it from Lytics audience membership using either approach below.

### Approach A (recommended): sync the audience, trigger in Infobip

1.  Use the [Export Audiences](#export-audiences) workflow above to sync the Lytics audience to Infobip People with a **tag**, mapping any user fields the template needs into Infobip standard fields and custom attributes.
2.  In Infobip, build a **Flow** (or Broadcast) that triggers when a contact enters that tag or segment and sends your email or WhatsApp template, pulling personalization from the People attributes you exported.

This approach lets Infobip own template rendering, throttling, opt-outs, and delivery reporting — there are no hand-built payloads to maintain in Lytics.

### Approach B (advanced): Audience Triggers Webhook

Use the generic [Audience Triggers Webhook](/docs/lytics/webhooks) export (provider **Webhook**) to POST directly to Infobip's send endpoints when a user enters an audience. The outbound request body is generated by a [Webhook Template](/docs/lytics/webhook-templates) — a [Jsonnet template](/docs/lytics/webhook-templates) (or [JavaScript template](/docs/lytics/webhook-templates)) that reads each Lytics profile and emits the JSON Infobip expects. Configure the export with:

-   **Authorization** — create a Webhook authorization using **Provide authorization as request header or parameter**, and set the **Webhook Request Headers** to your Infobip credentials:

```
Authorization: App <your-api-key>
  Content-Type: application/json
```

-   **Webhook URL** — the Infobip send endpoint for the channel, where is your account's Base URL:
-   Email: `https:///email/4/messages`
-   WhatsApp: `https:///whatsapp/1/message/template`
-   **Webhook Template** — one of the Jsonnet starters below. Each pulls personalization from the profile with `event.get("", "")`, so replace the field names with your own schema fields.
-   **Audience trigger events** — set to **Entrance**.
-   **Export Fields** — leave empty so the entire profile is available to the template.

This approach is fully Lytics-driven, but you maintain the template and Lytics does not record per-message delivery the way the native SMS workflow does.

The SMS workflow exists as a first-class integration because its payload is simple and needs no pre-registered template. Email and WhatsApp always require a template authored in Infobip, so they are documented here rather than wrapped in a dedicated workflow.

### Template starters

Each starter is a [Jsonnet webhook template](/docs/lytics/webhook-templates). Create it in Lytics (Webhook Templates) or via the [`/v2/template` API](/docs/lytics/webhook-templates), then select it on the Audience Triggers Webhook job. See [Webhook Templates](/docs/lytics/webhook-templates) for the full template reference and the `event.get()` helper.

#### Email

**Build in Infobip.** Create a Broadcast email template (Infobip portal → **Email** → **Templates**). Use handlebars placeholders in the subject and HTML body, named to match the Lytics fields you will send:

```
Subject: Your order {{order_id}} has shipped

<p>Hi {{first_name}},</p>
<p>Good news — order <strong>{{order_id}}</strong> is on its way.</p>
<p>Track it anytime from your account.</p>
```

**Webhook template (Jsonnet)** — emits the body for `POST https:///email/4/messages`:

```
local event = (import 'lytemplates.libsonnet');
{
  messages: [
    {
      sender: 'Acme <hello@acme.com>',
      destinations: [
        {
          to: [
            {
              destination: event.get('email', ''),
              // Infobip expects placeholders as a JSON *string*; manifestJsonEx
              // serializes the object and escapes it for us.
              placeholders: std.manifestJsonEx({
                first_name: event.get('first_name', ''),
                order_id: event.get('order_id', ''),
              }, ''),
            },
          ],
        },
      ],
      content: { templateId: '<your-broadcast-template-id>' },
    },
  ],
}
```

`placeholders` must be a JSON **string**, not a nested object — `std.manifestJsonEx(..., '')` produces that string. When `content.templateId` is set, Infobip renders the template and substitutes these placeholders, ignoring any inline `html` or `text`.

#### WhatsApp

**Build in Infobip.** Register a WhatsApp message template (requires Meta approval). The body uses positional placeholders `{{1}}`, `{{2}}`:

```
Template name: order_update
Body: Hi {{1}}, your order {{2}} has shipped.
```

**Webhook template (Jsonnet)** — emits the body for `POST https:///whatsapp/1/message/template`:

```
local event = (import 'lytemplates.libsonnet');
{
  messages: [
    {
      from: '<your-whatsapp-sender-number>',
      to: event.get('phone', ''),
      content: {
        templateName: 'order_update',
        templateData: {
          body: { placeholders: [event.get('first_name', ''), event.get('order_id', '')] },
        },
        language: 'en',
      },
    },
  ],
}
```

#### SMS

For most cases use the native [Send SMS](#send-sms) workflow above. If you need SMS through Approach B for parity, point the **Webhook URL** at `https:///sms/2/text/advanced` and use this template:

```
local event = (import 'lytemplates.libsonnet');
{
  messages: [
    {
      from: 'Acme',
      destinations: [{ to: event.get('phone', '') }],
      text: 'Hi ' + event.get('first_name', '') + ', your order shipped.',
    },
  ],
}
```
