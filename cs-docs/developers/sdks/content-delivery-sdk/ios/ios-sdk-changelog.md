---
title: "[iOS] - iOS SDK Changelog"
description: iOS SDK Changelog
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/ios/ios-sdk-changelog
product: Contentstack
doc_type: changelog
audience:
  - developers
  - ios-developers
version: iOS SDK
last_updated: 2023-05-26
---

# [iOS] - iOS SDK Changelog

This page lists the iOS SDK changelog for Contentstack’s Content Delivery SDK, and is intended for developers who need to track version-by-version changes (features, enhancements, bug fixes, and hotfixes) when upgrading or troubleshooting.

## iOS SDK Changelog

## Version 3.12.0 - May 26, 2023
**Enhancement**
- Added Deployment Target Platform for X-Code 14.3

## Version 3.11.0 - Mar 30, 2023
**Feature:**
- Added support for Azure EU region
- Added support for includeMetadata function

**Bug Fix:**
- Image Transform initialization

## Version 3.10.1 - Nov 11, 2022
**Hotfix:**
- Fixed crash on NSInvalidArgumentException

## Version 3.10.0 - Aug 19, 2022
**Feature:**
- Added configuration for Azure North America

## Version 3.9.1 - Sep 02, 2021
**Hotfix:**
- Fixed crash on NSInvalidArgumentException

## Version 3.9.0 - Apr 05, 2021
**Feature:**
- Entry - Added support for includeEmeddedItems function
- Query - Added support for includeEmbeddedItems function

## Version 3.8.2 - Mar 05, 2021
**Bug Fix:**
- X User agent updates for API calls.

## Version: 3.8.1 - Jan 22, 2021
[**
**](https://github.com/contentstack/contentstack-ios/blob/master/CHANGELOG.md#bug-fix)**Bug Fixes:**
- Resolved the content type fetch URL issue

## Version 3.8.0 - Dec 05, 2020
**Enhancements**:
- `Asset` - Added support for the `includeFallback` function
- `AssetLibrary` - Added support for the `includeFallback` function
- `Entry` - Added support for the `includeFallback` function
- `Query` - Added support for the `includeFallback` function

## Version 3.7.1 - Nov 15, 2019
**Enhancements:**
- Added support for the EU region

**
****Bug Fixes:**
- Resolved the URL issue

## Version 3.7.0 - Nov 15, 2019
**Enhancements: **
- `Stack` - Updated the `getContentType:` function
- `ContentType` - Updated the `fetch:` function

## Version 3.6.4 - Oct 25, 2019
**New Features:**
- Added a new class: `CSError`
- Implemented Contentstack Networking library: `CSNetworking`

## Version 3.6.1 - Sept 03, 2019
**New Features: **
- `Config` - Added the property attribute `region`
- `Query`Added the `whereKey:in:` method
- Added the `whereKey:notIn:` method

## Version 3.6.0 - Jul 29, 2019
**New Features**
- Queryadded the 'includeReferenceContentTypeUid' method
- added the 'locale' method
- Entryadded the 'includeReferenceContentTypeUid' method
- added the 'includeContentType' method
- added the 'locale' method

**Enhancements: **

Deprecated the following:
- Query - deprecated the 'language' method
- Entry - deprecated the 'language' method

Removed the following from the API:
- Configremoved property attribute 'ssl'
- removed method 'includeSchema'
- `Stack`removed property attribute `SSL`

## Version 3.5.0 - Apr 12, 2019
**New Features:****
**
- `Stack`added the `getContentTypes:` method
- `ContentType`added the `fetch:` method

**Enhancements: **
- Deprecated the following:`Config` - removed property https://app.contentstack.com/#attribute 'ssl'
- `Stack` - removed the `SSL` property attribute

## Version 3.4.0 - Oct 22, 2018
**New Features: **
- `Stack`added the `sync:` method
- added the `syncToken:completion:` method
- added the `syncPaginationToken:completion:` method
- added the `syncFrom:completion:` method
- added the method `syncOnly:completion:`
- added the `syncOnly:from:completion: method`
- added the `syncLocale:completion: method`
- added the `syncLocale:from:completion: method`
- added the `syncPublishType:completion: method`
- added the `syncOnly:locale:from:completion: method`
- added the `syncOnly:locale:from:publishType:completion: method`
- SyncStackAdded New Class

## Version 3.3.1 - Jun 08, 2018
**Enhancements: **
- Added string 'BUILT_NULLABLE_P' in Entry.h
- **Updated Code** - (void)fetch:(void(^)(ResponseType type, NSError * BUILT_NULLABLE_P error))callback;
- **Old Code (NOT TO BE USED)** - (void)fetch:(void(^)(ResponseType type, NSError *error))callback;

## Version 3.3.0 - Dec 15, 2017
**New Features: **
- Entryadded method ‘addParamKey:andValue:’
- Queryadded method 'addParamKey:andValue:'
- Assetadded method ‘addParamKey:andValue:’

## Version 3.2.0 - Nov 10, 2017
**New Features:**
- Stackadded method ‘imageTransformWithUrl:andParams:’
- Queryadded method 'includeContentType:'
- QueryResultadded property ‘content_type’

**Enhancements: **
- Deprecated the following: Query - Deprecated property 'includeSchema'

## Version 3.1.1 - Jun 24, 2017
**Enhancements:**

Deprecated the following:
- Entry - removed property 'publishDetails'
- Asset - removed property 'publishDetails:'

## Version 3.1.0 - Dec 19, 2016
**New Features: **
- GroupAdded New Class
- Entryadded method 'groupForKey:'
- added method 'groupsForKey:'
- added method ‘entriesForKey:withContentType:'
- AssetLibraryadded method ‘sortWithKey:orderBy:’
- added method ‘objectsCount’
- added method ‘includeCount’
- added method ‘includeRelativeUrls’
- added method ‘setHeader:forKey:’
- added method ‘addHeadersWithDictionary:’
- added method ‘removeHeaderForKey:’
- Assetadded method ‘setHeader:forKey:’
- added method ‘addHeadersWithDictionary:’
- added method ‘removeHeaderForKey:’

**Enhancements: **
- AssetClass name modified from ‘Assets’ to ‘Asset’
- renamed property ’assetType’ to ‘fileType’

## Version 3.0.0 - Oct 19, 2016
**New Features: **
- ConfigAdded New Class
- AssetsAdded New Class
- AssetLibraryAdded New Class
- Contentstackadded method 'stackWithAPIKey:accessToken:environmentName:config:'
- Entryadded property 'publishDetails'
- Stackadded readonly property 'config'
- added method 'asset'
- added method 'assetWithUID:'
- added method 'assetLibrary'
- added method 'fetchLastActivity:'

**Enhancements: **

Deprecated the following:
- Contentstackremoved method 'stackWithAPIKey:accessToken:environmentUID:'
- Entryremoved property 'metadata'
- Stackremoved property 'isEnvironmentUID'
- removed method 'setEnvironment:isEnvironmentUID:'
- Queryremoved method 'afterUID:'
- removed method 'beforeUID:'

## Version 1.0.1 - Sept 22, 2016
**Bug Fixes: **
- EntryFixed fetch method which now return response as per environment.
- QueryFixed search method issue causing an improper result.

## Version 1.0.0 - Feb 11, 2016
- Introduced Contentstack iOS SDK

## More resources
- [View and Download iOS SDK repository on GitHub](https://github.com/contentstack/contentstack-ios)

## Common questions

### Where can I find the iOS SDK source code?
In the “More resources” section: [View and Download iOS SDK repository on GitHub](https://github.com/contentstack/contentstack-ios).

### What is the latest version listed on this page?
The latest version listed is Version 3.12.0 - May 26, 2023.

### Does this changelog include bug fixes and hotfixes?
Yes, entries include **Bug Fix:** and **Hotfix:** sections where applicable.

### How do I know if a change is a feature vs an enhancement?
Each version groups changes under labels such as **Feature:**, **Enhancement**, **Enhancements:**, **Bug Fix:**, **Bug Fixes:**, or **Hotfix:**.