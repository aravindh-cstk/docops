---
title: "Mailgun"
description: "If you are new to creating authorizations in Lytics, see the Authorizations documentation for more information."
url: /lytics/mailgun
---

# Mailgun

## Mailgun

## Authentication

If you are new to creating authorizations in Lytics, see the [Authorizations](/docs/lytics/keys-authorizations) documentation for more information.

1.  Select **Mailgun** from the list of providers.
2.  Select the **Mailgun API Key** method for the authorization.
3.  Enter a **Label** to identify your authorization.
4.  (Optional) Enter a **Description** for further context on your authorization.
5.  Enter your **Domain** and **API Key**.
6.  Click **Save authorization** to save your newly-created authorization.

## Import Data from Mailgun into Lytics

1.  [Authorize Lytics with Mailgun](#authentication), if you have not previously done so.
2.  Select **Setup webhooks** from the list of workflows.
3.  This workflow doesn't require any additional configuration. Click **Start setup** and Lytics will begin collecting data in realtime as users open and click through emails sent from Mailgun.

![Start Mailgun setup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb8264dee3fcaa446/97686c6bf857c56768b81cfd/Screen_Shot_2018-11-28_at_14.42.13_.png)

### Fields

The following fields are included in the default mapping of the mg\_events stream:

| Source Field | Conditional (IF) | Lytics User Field | Description | Type |
| --- | --- | --- | --- | --- |
| city |  | city |  | string |
| email(recipient) |  | email unique id | Email Address | string |
| emaildomain(recipient) |  | email\\\_domain | Email Domain | string |
| map("email", epochms()) |  | last\\\_channel\\\_activities | Last Activity By Channel | map\[string\]time |
| max(epochms()) |  | last\\\_active\\\_ts | Last Active | date |
| set("email") | event IN ("opened", "clicked") | channels | All Channels Used | \\\[\]string |
| set(url) |  | mg\\\_email\\\_urls | Mailgun URLs Clicked | \\\[\]string |
| valuect(event) |  | mg\\\_email\\\_event |  | map\[string\]intsum |
| valuect(hash(urlmain(url))) | event IN ("opened", "clicked") | hashedurls | Hashed Urls Visited | map\[string\]intsum |
