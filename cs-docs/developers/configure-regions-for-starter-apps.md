---
title: "[Contentstack Regions] - Configure Regions for Starter Apps"
description: Configure Regions for Starter Apps
url: https://www.contentstack.com/docs/developers/configure-regions-for-starter-apps
product: Contentstack
doc_type: configuration-guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Contentstack Regions] - Configure Regions for Starter Apps

This page explains how to configure region-specific environment variables for Contentstack starter apps. It is intended for developers setting up starter apps for NA/US or EU regions and should be used when you need to point your app to the correct CDN, app host, and API host for your region.

## Configure Regions for Starter Apps

```
CONTENTSTACK_CDN = https://eu-cdn.contentstack.com/v3
#Compulsory param for EU users. NA users need not add this param.
```

```
CONTENTSTACK_APP_HOST = app.contentstack.com
#CONTENTSTACK_APP_HOST- For NA/US region, set “CONTENTSTACK_APP_HOST= app.contentstack.com”. For the EU region, change it to “CONTENTSTACK_APP_HOST= eu-app.contentstack.com”.
```

```
CONTENTSTACK_API_HOST = api.contentstack.io
#CONTENTSTACK_API_HOST- For NA/US region, set "CONTENTSTACK_API_HOST = api.contentstack.io". For the EU region, change it to "CONTENTSTACK_API_HOST = eu-api.contentstack.com".
```

## Common questions

### Do NA/US users need to set `CONTENTSTACK_CDN`?
No. `CONTENTSTACK_CDN = https://eu-cdn.contentstack.com/v3` is marked as a compulsory param for EU users, and NA users need not add this param.

### What should `CONTENTSTACK_APP_HOST` be for the EU region?
For the EU region, change it to `CONTENTSTACK_APP_HOST= eu-app.contentstack.com`.

### What should `CONTENTSTACK_API_HOST` be for the EU region?
For the EU region, change it to `CONTENTSTACK_API_HOST = eu-api.contentstack.com`.

### What are the default NA/US values for `CONTENTSTACK_APP_HOST` and `CONTENTSTACK_API_HOST`?
For NA/US region, set `CONTENTSTACK_APP_HOST= app.contentstack.com` and `CONTENTSTACK_API_HOST = api.contentstack.io`.