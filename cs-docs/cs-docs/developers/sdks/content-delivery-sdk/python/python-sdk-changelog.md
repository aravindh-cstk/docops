---
title: "[Python] - Python SDK Changelog"
description: Changelog for the Content Delivery Python SDK, listing versions, dates, features, enhancements, and bug fixes.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/python/python-sdk-changelog
product: Contentstack
doc_type: changelog
audience:
  - developers
  - sdk-users
version: python-sdk
last_updated: 2026-05-26
---

# [Python] - Python SDK Changelog

This page lists the version history for the Python SDK, including release dates and the features, enhancements, and bug fixes included in each release. It is intended for developers using the Content Delivery Python SDK who need to track changes across versions for upgrades, troubleshooting, or compatibility checks.

## Python SDK Changelog

## Version 1.8.0 - May 26, 2026

**Feature:**
- Added support for Azure-EU
- Implemented Include Metadata
- Updated Live Preview code

**Enhancements:**
- General code improvement and bug fixes

## Version 1.7.0 - Apr 8, 2022
**Feature:**
- Added support for AZURE_NA
- General code clean up

## Version 1.6.0 - Aug 11, 2021
**Feature:**
- Added support for Live Preview
- Added `Stack.live_preview_query` function in stack
- Added Live Preview functions in config

## Version 1.5.1 - Aug 1, 2021
**Bug Fixes:**
- Resolved issue #17 - Stack.sync_init uses wrong parameter names

## Version 1.5.0 - Jul 22, 2021
**Enhancement**
- Implemented Utils v1.1.0

## Version 1.4.0 - Apr 5, 2021
**Feature:**
- Entry - Added support for `include_embedded_objects`
- Query - Added support for `include_embedded_objects`

## Version 1.3.0 - Feb 26, 2021
- Included Retry policy and timeout support
- Default timeout is set for 30 seconds

## Version 1.2.0 - Dec 8, 2020
**Enhancements**:
- Added support for `Timeout`
- `Entry` - Added support for `include_fallback`.
- `Asset` - Added support for `include_fallback`.
- `AssetQueryable` - Added support for `include_fallback`.
- `Query` - Added support for `include_fallback`.

## Version 1.1.0 - Aug 10, 2020
**Enhancements: **
- Updated the `include_reference` function.**
**

**Bug Fixes**:
- `include_reference` issue is fixed

## Version 1.0.0 - Jun 17, 2020

**Enhancements:**
- `Stack`:Initialization of stack has been modified
- External config support moved to stack initialization optional parameters
- Added support for whereIn(String key) and whereNotIn(String key) methods in Query
- `Assets`:changes incorporated in `Asset` class.
- `Entry`changes incorporated in the `Entry` class.
- `Query`Changes incorporated in the `Query` class.

## Version 0.1.0 - Nov 18, 2019

**Enhancements:**
- Beta release for the contentstack-python SDK for Content Delivery API

## More resources
- [View and Download Python SDK repository on GitHub](https://github.com/contentstack/contentstack-python)

## Common questions

### Which version should I upgrade to?
Upgrade to the latest version listed (for example, Version 1.8.0 - May 26, 2026) unless you have compatibility constraints that require staying on an earlier version.

### Where can I find the Python SDK source code?
In the “More resources” section: [View and Download Python SDK repository on GitHub](https://github.com/contentstack/contentstack-python).

### Does the changelog include bug fixes as well as features?
Yes. Some versions list **Bug Fixes:** and **Enhancements:** in addition to **Feature:** items.

### How do I confirm when a feature was introduced?
Check the version sections and locate the feature under **Feature:** (or **Enhancements:** where applicable) for the corresponding release date.