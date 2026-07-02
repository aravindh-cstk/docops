---
title: "PublishUnpublishDetails"
description: "Publish rule details for publish or un-publish entry or asset"
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/publishunpublishdetails"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# PublishUnpublishDetails

## PublishUnpublishDetails

Publish rule details for publish or un-publish entry or asset

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Environments | List<string> | Yes | — | List of environment for publishing/un-publishing entry/asset. |
| Locales | List<string> | Yes | — | List of locales for the publish details. |
| ScheduledAt | string | No | — | Set date time for scheduling the publish/un-publish. |
| Version | string | No | — | Set specific version for publish/un-publish. |
