---
title: "[PHP] - PHP SDK Changelog"
description: Changelog for the Contentstack PHP Content Delivery SDK, listing versions and changes.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/php/php-sdk-changelog
product: Contentstack
doc_type: changelog
audience:
  - developers
  - php-developers
version: unknown
last_updated: 2021-03-17
---

# [PHP] - PHP SDK Changelog

This page lists the version history for the Contentstack PHP Content Delivery SDK, including bug fixes, new features, enhancements, and deprecations. PHP developers should use it to understand what changed between SDK releases and to assess upgrade impact.

## PHP SDK Changelog

## Version 1.8.1 - Mar 17, 2021
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#bug-fix)**Bug Fixes:**
- Updated `addQuery` method to pass non encoded JSON to Query object
- Removed parameter check on functions that pass default values

## Version 1.8.0 - Dec 5, 2020
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#new-feature)**New Features:**
- `Entry` - added support for function `includeFallback`
- `Query` - added support for function `includeFallback`

## Version 1.7.0 - Oct 27, 2020
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#new-feature-1)**New Feature: **
- `Packagist` support added

## Version 1.6.1 - May 8, 2020
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#bug)**Bug: **
- Stack API key and access token moved to header

## Version 1.6.0 - Mar 4, 2020
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#bug-1)**Bug:**
- The issue in Asset for conflict in name of Query function has been resolved, updated `BaseQuery` function name to `addQuery`.

## Version 1.5.1 - Feb 17, 2020
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#bug-2)**Bug: **
- Query array passing issue resolved

## Version 1.5.0 - Nov 21, 2019
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#new-feature-2)**New Feature:**
- Region support added

## Version 1.4.0 - Nov 18, 2019
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#enhancement)**Enhancements:**
- Stack - Added support for function `'getContentType'`
- ContentType - updated function `'fetch'`
- Query - Added support for function `'includeContentType'`

## Version 1.3.0 - Aug 2, 2019
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#enhancement-1)**Enhancement:**
- Query and Entry `'includeReferenceContentTypeUID'` method includes the content type UIDs of the referenced entries returned in the response.

## Version 1.2.1 - May 25, 2019
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#bug-3)**Bug: **
- Made changes in helper file for fetching proper data on language query

## Version 1.2.1 - Sept 19, 2018
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#bug-4)**Bug:**
- Replaced the `createError` method with New method `contentstackcreateError`.

## Version 1.2.0 - Dec 21, 2017
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#enhancement-2)**Enhancements:**
- Entry - `'addparam'` method added
- Query - `'addparam'` method added
- Asset - `'addparam'` method added

## Version 1.1.0 - Nov 9, 2017
[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#enhancement-3)**Enhancement: **
- Image Optimisation support added

[**
**](https://github.com/contentstack/contentstack-php/blob/master/CHANGELOG.md#deprecated)**Deprecated:**
- Deprecated `includeSchema` and added `includeContentType` in query

## Version 0.1.0

**Bug Fixes:**
- Stack tokens moved to headers

## Version: 0.0.4

**Enhancements:**
- Added support for regions

## Version: 0.0.3

**Enhancement:**
- Query - Added function for passing locale

## Version: 1.0.0 - 14 Oct 2017
Initial Release

## More resources
- [View and Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php)

## Common questions

### Where can I find the PHP SDK repository?
In the “More resources” section: [View and Download PHP SDK repository on GitHub](https://github.com/contentstack/contentstack-php).

### What is the latest version listed on this page?
## Version 1.8.1 - Mar 17, 2021

### Does this changelog include deprecations?
Yes, it includes a **Deprecated:** section under “## Version 1.1.0 - Nov 9, 2017”.

### What kinds of changes are tracked here?
Bug Fixes, New Features, Enhancements, Enhancement, Bug, and Deprecated entries are listed across versions.

<!-- filename: php-php-sdk-changelog.md -->