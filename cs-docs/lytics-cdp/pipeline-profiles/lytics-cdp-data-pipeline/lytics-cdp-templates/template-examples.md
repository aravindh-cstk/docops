---
title: "Template Examples"
description: "One of the primary use-cases for templates is for shaping the request payload for outgoing Webhook Exports from Lytics. For example, say you are exporting…"
url: /lytics/template-examples
uid: blte08b0b1ae2fc8cb1
---

# Template Examples

## Template Examples

### Simple webhook payloads

One of the primary use-cases for templates is for shaping the request payload for outgoing Webhook Exports from Lytics. For example, say you are exporting a Lytics audience called frequent\_visitors to a service that expects the following JSON in the request body:

```
{
  "first_name": "Bob",
  "last_name": "Smith",
  "email_address": "bob.smith@lytics.com",
  "marketing_list": "frequent_visitors"
}
```

We could create the following template in Lytics, and select it in our Webhook Export job configuration to send the correct request, using the first\_name, last\_name, and email fields on your Lytics profiles (see [here](https://docs.lytics.com/edit/using-the-jsonnet-library) for details on using the lytemplates.libsonnet library):

```
local event = (import 'lytemplates.libsonnet');
{
  first_name: event.get("first_name", "")
  last_name:  event.get("last_name", ""),
  email_address: event.get("email", ""),
  marketing_list: event.segSlug()
}
```

Once created, this template can be selected from the **Lytics Template** dropdown menu in the [webhook job configuration](/docs/lytics/webhooks#configuration).

### Using assert to skip events that have empty required fields

Many times when sending webhook events, certain fields _must_ be set or the webhook endpoint will respond with an HTTP error, causing the webhook job to fail.

This simple template uses the jsonnet assert function to signal that email must be set before sending. These events will be omitted from sending and will be logged with the included assertion message email must be set.

```
local event = (import "lytemplates.libsonnet");

local email() =  
  local email = event.get("email", "");  
  assert email != "" : 'email must be set';  
  email;

{  
  "email": email()  
}
```

### Using templates for dynamic URLs

You can also use a template to dynamically generate URLs for webhook requests instead of hard-coding one in your job [configuration](/docs/lytics/webhooks#configuration). Say you are exporting Lytics profiles to a service that expects requests to the following endpoint where {email} is the user's email address:

```
https://test.com/users/{email}/subscribe
```

We could create the following template, which extracts the email from each Lytics profile and includes it in the URL:

```
local event = (import 'lytemplates.libsonnet');
'https://www.test.com/users/' + event.get("email", "") + '/subscribe'
```

Once created, this template can be selected from the **Webhook URL** dropdown menu in the [webhook job configuration](/docs/lytics/webhooks#configuration).
