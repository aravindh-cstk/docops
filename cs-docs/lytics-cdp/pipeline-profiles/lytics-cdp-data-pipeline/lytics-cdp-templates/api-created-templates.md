---
title: "Creating Templates using Lytics API"
description: "Templates can be created, tested, and managed using the Lytics Template APIs. Full API documentation can be found here . To create a template, simply…"
url: /lytics/api-created-templates
uid: bltf706bf9015b06ea4
---

# Creating Templates using Lytics API

## Creating Templates using Lytics API

## Creating Templates

Templates can be created, tested, and managed using the Lytics Template APIs. Full API documentation can be found [here](https://docs.lytics.com/reference/get_template). To create a template, simply submit a JavaScript, Jsonnet or Handlebars file to the /v2/template endpoint like this (see [below](#the-lytemplateslibsonnet-library) for more information on using the lytemplates.libsonnet library in Jsonnet templates):

```
$ echo "local event = (import 'lytemplates.libsonnet');
local emailField = event.jobConfGet('email_field', 'email');
local userEmail = event.get(emailField);
local errorMsg = if userEmail == '' then 'Profile missing email';

{
    email_address: userEmail,
    email_address_sha256: event.sha256(userEmail),
    [if event.isEnter() then 'lytics_audience']: event.segSlug(),
    [if event.has('first_name') then 'first_name']: event.get('first_name'),
}" > test.jsonnet
```

```
$ http POST $LIOAPI/v2/template name==test-template type==jsonnet \
  description=="A test template for demos" Authorization:$LIOTOKEN \
  account_id==$LIOACCTID < test.jsonnet
```

```
HTTP/1.1 200 OK
Content-Encoding: gzip
Content-Length: 228
Content-Type: application/json
Date: Wed, 20 Sep 2023 21:10:45 GMT
Request-Id: 2a42314b-57fa-11ee-bc0f-0242ac110039
Server: lytics.io

{
    "data": {
        "created": "2023-09-20T20:38:24.579029236Z",
        "description": "A test template for demos",
        "id": "83d1439ff457ab94377e697180e8f8f1",
        "name": "test-template",
        "type": "jsonnet",
        "updated": "2023-09-20T20:38:24.579029236Z"
    },
    "request_id": "2a42314b-57fa-11ee-bc0f-0242ac110039",
    "status": 200
}
```

The endpoint requires name and type query parameters. An optional description can also be included.

## Testing Templates

Once templates have been created, the /v2/template/:id/test endpoint makes it easy to test the template's behavior given a particular job configuration and outgoing user profile. A configuration can be included in your request, as well as a custom entity profile. If no entity is included in the request, the API will auto-generate one from your Lytics user table schema:

```
$ echo '{
    "job_config": {
        "email_field": "email"
    },
    "entity": {
        "email": "test@lytics.com",
        "first_name": "Tester",
        "segment_events": [
            {
                "id": "e4c8ef6712fc40d76d8202394095f3a6",
                "slug": "test_audience",
                "event": "enter",
                "enter": "2017-10-15T19:12:00.661749884Z"
            }
        ]
    }
}' | http POST $LIOAPI/v2/template/83d1439ff457ab94377e697180e8f8f1/test Authorization:$LIOTOKEN
```

```
HTTP/1.1 200 OK
Content-Encoding: gzip
Content-Length: 222
Content-Type: application/json
Date: Wed, 20 Sep 2023 20:53:16 GMT
Request-Id: b8cd77f4-57f7-11ee-bc0f-0242ac110039
Server: lytics.io

{
    "data": "{\n   \"email_address\": \"test@lytics.com\",\n   \"email_address_sha256\": \"e43763399e5318f14cd7473c4902a6b319343d577ec8283898a5edf9dbc6d711\",\n   \"first_name\": \"Tester\",\n   \"lytics_audience\": \"test_audience\"\n}\n",
    "request_id": "b8cd77f4-57f7-11ee-bc0f-0242ac110039",
    "status": 200
}
```



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

This simple template uses the Jsonnet assert function to signal that email must be set before sending. These events will be omitted from sending and will be logged with the included assertion message email must be set.

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
