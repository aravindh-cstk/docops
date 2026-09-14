---
title: "Brevo"
description: "Lytics Customer Data Platform allows you to use real-time customer activity across various channels to trigger Brevo workflows. Instead of a static…"
url: /lytics/brevo
---

# Brevo

## Brevo

## Overview

Lytics Customer Data Platform allows you to use real-time customer activity across various channels to trigger Brevo workflows. Instead of a static, list-based approach to automation workflows, Lytics allows you to create dynamic audience segments that sync with Brevo and update in real-time as customers flow in and out of them. For example, a segment of known visitors with an affinity for a certain topic could trigger an email workflow with targeted messaging.

## Authorization

To set up and authorize the Lytics Brevo integration, log into your Lytics account and click on the Data menu tab. Then, click on the Jobs tab. Here, you will see existing jobs and have the option to create a new one.

If you choose to create a new job, you’ll see a list of available integrations organized alphabetically in tiles. Scroll down and click on the Brevo tile.

![brevo\_tile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4aff326d3394c961/2b980537843d5c2d7dcb782f/ea1dd08-Screenshot_2023-05-23_at_9.12.32_AM.png)

You will always have two options, to _Export Users_ from Lytics into Brevo or to _Import Users & Activity_ from Brevo. Either option will prompt you to setup the integration if it’s your first time. You should see this setup screen after clicking one of the options:

![authorization](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am62641001ad3702a6/a353c6575731104f0ac8c839/fc8b2e2-Screenshot_2023-05-23_at_9.13.24_AM.png)

Click on “Create New Authorization” and you’ll be prompted to enter your a label, an API key, and a short description. You can describe your authorization in any way you like. This can be a useful way to tell multiple integrations apart.

![authorization\_config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am299cad0e48bf8c26/242a87ed83cccc809cc97a7f/c5f024e-Screenshot_2023-05-23_at_9.14.08_AM.png)

The initial account authorization only needs to be performed one time.

### Configure Your Sync:

Now that the account is authorized, you can begin exporting or importing your users.

## Exporting Users

![export\_users](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama117355bae8e9d10/da4cbd803ae2cde2f13f94e3/4679dfc-Screenshot_2023-05-23_at_9.27.30_AM.png)

In the export scenario, you’ll click on the “Export Audience” button. From there, select the Brevo List that you want to import and the Lytics audience segment that you want to sync them into from the dropdowns. You should also select the Email field. Finally, you'll want to map each Lytics field to a Brevo field.

![setup\_export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb8cb9940e6ead18b/ff16264afa524fd5d47ede04/c15877e-Screenshot_2023-05-23_at_9.16.38_AM.png)

By default, the advanced options are set to continuously import and to add users who already exist in the selected Lytics segment.

![export\_advanced](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am493e43443f8aaedb/333080a1a7e14dd8138fdf99/69e0a8b-Screenshot_2023-05-23_at_9.16.48_AM.png)

Finally, click on the “Complete” button located below the advanced options section.

![start\_export](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am034d2fb0e32d8927/63c68bb18040206b3f93bbdc/9b52694-Screenshot_2023-05-23_at_9.17.10_AM.png)

Note: You can export segments by clicking on the Brevo tile within the Integration section of the Data menu tab (as demonstrated above). Alternatively, if you are within the Audience tab, you can also click on a specific segment and then click on the export button in the upper righthand corner to begin the export workflow.

## Import Users & Activity

![import\_users\_and\_activity](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am803c82f57fca13e0/05bd07159e8a2d7eaaf408cf/21ec242-Screenshot_2023-05-23_at_9.27.25_AM.png)

In the Import scenario, you’ll click on the “Import Audiences and Activity Data” button. Next, you’ll select the individual Brevo List(s) that you want to import by clicking on them. As you click on a list it moves from the left column to the right column. You can also click on the blue + and - buttons to do this.

![setup\_import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfb315fe069cacc9a/04fbdb6402f4407f51784e73/0716a88-Screenshot_2023-05-23_at_9.17.58_AM.png)

By default, campaign activity data and transactional data will be synced.

In the advanced options tab, you can also specify a certain time of day and timezone for the sync.

![advanced\_options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd79d2f296dc443fa/731221c4117176d33c797a2e/1c077e4-Screenshot_2023-05-23_at_9.18.06_AM.png)

Finally, click on the “Complete” button located below the advanced options section

![start\_import](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9549ba08c1d86962/0c3d4e46286dd09e907d0081/e6526b1-Screenshot_2023-05-23_at_9.17.10_AM.png)

Once import has started a new data stream will be created called brevo\_users

### Fields

The following fields are included in the default mapping of the brevo\_users stream:

| Source Field | Lytics User Field | Description | Type |
| --- | --- | --- | --- |
| FIRSTNAME | first\\\_name | First Name | string |
| NAME | name | Full Name | string |
| SMS | mobile\\\_phone unique id | Mobile Phone Number | string |
| blacklist | bv\\\_blacklist | Brevo Email Blacklist | string |
| email(EMAIL) | email unique id | Email Address | string |
| emaildomain(EMAIL) | email\\\_domain | Email Domain | string |
| set(list\\\_id) | bv\\\_lists | Brevo lists the email belongs to | \\\[\]string |
| sms\\\_blacklist | bv\\\_sms\\\_blacklist | Brevo SMS Blacklist | string |

The following fields are included in the default mapping of the brevo\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(event) | IF eq(event, "click") | bv\\\_clickct | Brevo click count | int |
| count(event) | IF eq(event, "opened") | bv\\\_openct | Brevo Open count | int |
| count(event) | IF eq(event, "delivery") | bv\\\_sendct | Brevo Send Count | int |
| email(email) |  | email unique id | Email Address | string |
| emaildomain(email) |  | email\\\_domain | Email Domain | string |
| max(epochms()) | IF eq(event, "click") | bv\\\_lastclick\\\_ts | Brevo Last click | date |
| max(epochms()) | IF eq(event, "opened") | bv\\\_lastopen\\\_ts | Brevo Last Open | date |
| max(epochms()) | IF eq(event, "unsubscribed") OR eq(event, "unsubscribe") | bv\\\_unsub\\\_ts | Brevo Unsub date | number |
| max(epochms()) | IF eq(event, "opened") | last\\\_active\\\_ts | Last Active | date |
| min(epochms()) | IF eq(event, "click") | bv\\\_firstclick\\\_ts | Brevo First click | date |
| min(epochms()) | IF eq(event, "opened") | bv\\\_firstopen\\\_ts | Brevo First Open | date |
| reason | IF eq(event, "unsubscribed") OR eq(event, "unsubscribe") | bv\\\_unsubreason | Brevo Unsubscribe Reason | string |
| set(camp\\\_id) |  | bv\\\_campaigns | Brevo Campaign the send was a part of | \\\[\]string |
| set(custom) |  | bv\\\_custom\\\_tags | Brevo X-mailing custom | \\\[\]string |
| set(list\\\_id) |  | bv\\\_lists | Brevo lists the email belongs to | \\\[\]string |
| set(message\\\_id) |  | bv\\\_messages | Brevo Message Id | \\\[\]string |
| set(tag) |  | bv\\\_tags | Brevo Email Tag | \\\[\]string |
| url |  | bv\\\_email\\\_url | Brevo Url | string |
| valuect(event) |  | bv\\\_email\\\_event | Brevo Email Events | map\\\[string\]intsum |
| valuect(hash(urlmain(url))) | IF eq(event, "click") | hashedurls | Hashed Urls Visited | map\\\[string\]intsum |
| valuect(hourofday()) | IF eq(event, "opened") | bv\\\_hourlyopen | Brevo Hourly Events | map\\\[string\]intsum |
| valuect(hourofweek()) | IF eq(event, "opened") | bv\\\_hourofweek | Brevo Hour of Week Events | map\\\[string\]intsum |
| valuect(yymm()) | IF eq(event, "opened") | bv\\\_monthly | Brevo Opens By Month | map\\\[string\]intsum |

The following fields are included in the default mapping of the brevo\_sms\_activity stream:

| Source Field | Conditional | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| count(event) | IF eq(event, "blocked") | bv\\\_sms\\\_blockedct | Brevo Blocked Count | int |
| count(event) | IF event IN ("softBounces", "hardBounces", "bounces") | bv\\\_sms\\\_bouncedct | Brevo Bounced Count | int |
| count(event) | IF eq(event, "delivered") | bv\\\_sms\\\_deliveredct | Brevo Delivered Count | int |
| count(event) | IF eq(event, "replies") | bv\\\_sms\\\_replyct | Brevo Reply Count | int |
| count(event) | IF eq(event, "sent") | bv\\\_sms\\\_sentct | Brevo SMS Sent Count | int |
| count(event) | IF eq(event, "unsubscription") | bv\\\_sms\\\_unsubct | Brevo Unsub Count | int |
| event |  | bv\\\_sms\\\_last\\\_event | Brevo Last SMS Event | string |
| max(epochms()) | IF eq(event, "blocked") | bv\\\_sms\\\_lastblocked\\\_ts | Brevo Last SMS Blocked | date |
| max(epochms()) | IF event IN ("softBounces", "hardBounces", "bounces") | bv\\\_sms\\\_lastbounced\\\_ts | Brevo Last SMS Bounced | date |
| max(epochms()) | IF eq(event, "delivered") | bv\\\_sms\\\_lastdelivered\\\_ts | Brevo Last SMS Delivered | date |
| max(epochms()) | IF eq(event, "replies") | bv\\\_sms\\\_lastreply\\\_ts | Brevo Last SMS Reply | date |
| max(epochms()) | IF eq(event, "sent") | bv\\\_sms\\\_lastsent\\\_ts | Brevo Last SMS Sent | date |
| max(epochms()) | IF eq(event, "unsubscription") | bv\\\_sms\\\_lastunsub\\\_ts | Brevo Last SMS Unsub | date |
| min(epochms()) | IF eq(event, "blocked") | bv\\\_sms\\\_firstblocked\\\_ts | Brevo First SMS Blocked | date |
| min(epochms()) | IF event IN ("softBounces", "hardBounces", "bounces") | bv\\\_sms\\\_firstbounced\\\_ts | Brevo First SMS Bounced | date |
| min(epochms()) | IF eq(event, "delivered") | bv\\\_sms\\\_firstdelivered\\\_ts | Brevo First SMS Delivered | date |
| min(epochms()) | IF eq(event, "replies") | bv\\\_sms\\\_firstreply\\\_ts | Brevo First SMS Reply | date |
| min(epochms()) | IF eq(event, "sent") | bv\\\_sms\\\_firstsent\\\_ts | Brevo First SMS Sent | date |
| min(epochms()) | IF eq(event, "unsubscription") | bv\\\_sms\\\_firstunsub\\\_ts | Brevo First SMS Unsub | date |
| phoneNumber |  | bv\\\_mobile\\\_phone unique id | Brevo Mobile Phone Number | string |
| reason | IF event IN ("softBounces", "hardBounces", "bounces") | bv\\\_sms\\\_bounce\\\_reason | Brevo Bounce Reason | string |
| set(messageId) |  | bv\\\_messages | Brevo Message Id | \\\[\]string |
| valuect(event) |  | bv\\\_sms\\\_event | Brevo SMS Events | map\\\[string\]intsum |
