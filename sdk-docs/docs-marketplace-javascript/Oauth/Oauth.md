---
title: "Oauth"
description: "Contentstack OAuth allows users to share protected data from the Contentstack API without sharing the credentials. To do this, the Contentstack OAuth server issues access tokens (App and User tokens) that client applications can use to access restricted data on behalf of the user. Example: import \\* as contentstack from '@contentstack/marketplace-sdk' const client = contentstack.client({ authtoken: 'TOKEN'}); client.marketplace('organization\\_uid').app('manifest\\_uid').oauth();"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/javascript/reference/oauth"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Oauth

## Oauth

Contentstack OAuth allows users to share protected data from the Contentstack API without sharing the credentials. To do this, the Contentstack OAuth server issues access tokens (App and User tokens) that client applications can use to access restricted data on behalf of the user.

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').oauth();
```
