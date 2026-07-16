---
title: "Java Management Introduction"
description: "Contentstack - Java Management SDK"
url: ""
product: "Contentstack"
doc_type: "usage_guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
cms_uid: "blt6b5f09928f3c73ce"
---

# Java Management Introduction

## Java Management SDK for Contentstack

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. All you have to do is build your application frontend, and Contentstack will take care of the rest.

This SDK uses the Content Management API (CMA). The CMA is used to manage the content of your Contentstack account. This includes creating, updating, deleting, and fetching content of your account. To use the CMA, you will need to authenticate your users with a Management Token or an Authtoken. Read more about it in Authentication.

**Note:** By using CMA, you can execute GET requests for fetching content. However, we strongly recommend that you always use the Content Delivery API to deliver content to your web or mobile properties.

## Prerequisite

You need Java JDK 8 version or above installed on your machine to use the Contentstack Java CMS SDK.

## Setup and Installation

**Install it via maven:**

```
<dependency>
<groupId>com.contentstack.sdk<groupId>
<artifactId>cms<artifactId>
<version>{version}<version>
<dependency>
```

**Install it via Gradle:**

```
implementation 'com.contentstack.sdk:cms:{version}'
```

## Quickstart in 5 mins

### Initialising The SDK

To use the Java CMA SDK, you need to first initialize it. To do this, use the following code:

```
import com.contentstack.cms.Contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
```

### Authentication

To use this SDK, you need to authenticate your users using the Authtoken, credentials, or Management Token (stack-level token).

**Login**

To Login to Contentstack by using credentials, you can use the following lines of code:

```
import contentstack

Contentstack contentstack = new Contentstack.Builder().build();
contentstack.login("EMAIL","PASSWORD");
```

**Authtoken**

An Authtoken is a read-write token used to make authorized CMA requests and a user-specific token.

```
import contentstack
Contentstack contentstack = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build();
```

**Management Token**

Management Tokens are stack-level tokens, with no users attached to them.

```
import com.contentstack.cms.Contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack("API_KEY","MANAGEMENT_TOKEN");
```

### Fetch Stack Detail

Use the following lines of code to fetch your stack detail using this SDK:

```
import com.contentstack.cms.Contentstack;

Contentstack contentstack = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build();
Response&lt;ResponseBody&gt; response = contentstack.stack("API_KEY").fetch().execute();
```

### Create Entry

To create an entry in a specific content type of a stack, use the following lines of code:

```
package com.contentstack.cms.stack;

import com.contentstack.cms.Contentstack;

Contentstack contentstack = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build();
Stack stack = contentstack.stack("API_KEY");
// [Create JSONObject Request body to upload]
JSONObject jsonBody = new JSONObject()
jsonBody.put("key","value");

// [Add Query parameters to the entry]
entry.addParam("locale","en-us");
Response&lt;ResponseBody&gt; response = entry.create(jsonBody).execute();
if(response.isSuccessful()){
 System.out.println(response.body());}
else{
 System.out.println(response.errorBody());
}
```

### Create Asset

The following lines of code can be used to upload assets to your stack:

```
package com.contentstack.cms.stack;
import com.contentstack.cms.Contentstack;

Contentstack contentstack = new Contentstack.Builder().setAuthtoken("AUTHTOKEN").build();
Asset asset = contentstack.stack("API_KEY").asset();
Response ResponseBody response = asset.uploadAsset("file/path/from/local", "description").execute();
if(response.isSuccessful()){
  System.out.println(response.body());
}else{
  System.out.println(response.errorBody());
}
```
