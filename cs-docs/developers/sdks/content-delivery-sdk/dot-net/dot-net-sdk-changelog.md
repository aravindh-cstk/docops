---
title: "[.NET] - .NET SDK Changelog"
description: ".NET SDK Changelog for the Content Delivery SDK, listing versions, dates, enhancements, bug fixes, and resources."
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/dot-net/dot-net-sdk-changelog
product: Contentstack
doc_type: changelog
audience:
  - developers
version: .NET SDK
last_updated: 2020-12-05
---

# [.NET] - .NET SDK Changelog

This page lists the .NET SDK changelog for Contentstack’s Content Delivery SDK, including version history, release dates, enhancements, bug fixes, and links to additional resources. It is intended for developers who need to track SDK changes across releases or verify when specific features and fixes were introduced.

## .NET SDK Changelog

## Version 2.5.0 - Dec 5, 2020
**Enhancements:**
- ****`AssetLibrary`added the `IncludeFallback` function
- added the `SetLocale` function
- `Asset`added the `IncludeFallback` function
- added the `SetLocale` function
- `Entry`added the `IncludeFallback` function
- `Query`added the `IncludeFallback` function

## Version 2.4.0 - Aug 12, 2020
**Enhancements:**
- `AssetLibrary`added the `Count` function
- added the `Limit` and `Skip` functionality
- added the `Only` and `Except` function
- `Query` - added the `Count` function
- `CSJsonConverter` - Added class CSJsonConverter to allow autoloading of converters
- `Stack` - added `Sync` function to allow multiple `SyncType`
- Deprecated the following:`Stack` - `AccessToken` deprecated with support to add `DeliveryToken`

**Bug Fixes**
- Entry - `GetContentType` exception resolved

## Version 2.3.0 - Jun 22, 2020
**Enhancements:**
- Updated API: `GetDeleted` at method `addedAssetLibrary`

**Bug Fixes: **
- `GetEnvironment` issue is resolved
- SyncType issue is resolved

## Version 2.2.1 - Feb 17, 2020
**Enhancements:**
- Query - updated `'IncludeOwner' function`
- Entry - updated `'IncludeOwner' function`

## Version 2.2.0 - Nov 15, 2019
**Enhancements: **
- Stack - updated `'GetContentType:' function`
- `ContentType` - updated `'Fetch:' function`

## Version 2.1.1 - Sept 03, 2019
**New Features:**
- Config - added 'region' property attribute
- Query - added `'ReferenceIn'` and  `'ReferenceNotIn' methods`

## Version 2.1.0 - Jul 29, 2019
**New Features:**
- Query - added `'includeReferenceContentTypeUid' method`
- Entry - added `'includeReferenceContentTypeUid' method`

## Version 2.0.0 - Jun 28, 2019
**New Features:**
- Query - added `'SetLocale' method`
- Entry - added `'SetLocale' method`

**Enhancements: **
- Query update `'Fetch' method`
- update `'FindOne' method`
- Entryupdated `'Find' method`
- Deprecated the following:Query - deprecated `'SetLanguage' method`
- Entry - deprecated `'SetLanguage' method`

## Version 1.1.0 - Apr 12, 2019
**New Features:**
- ContentstackClientadded method `'GetContentTypes'`
- added method `'SyncRecursive'`
- added method `'SyncPaginationToken'`
- added method `'SyncToken'`
- CotentTypeadded method 'Fetch'

## Version 1.0.6 - Aug 10, 2018
**New Features: **
- Added Localization support for Query and Entry

## Version 1.0.0 - Jun 1, 2018
Introduced Contentstack SDK for .NET.

## More resources
- [View and Download .NET SDK repository on GitHub](https://github.com/contentstack/contentstack-dotnet)

## Common questions

**Q: Where can I find the .NET SDK source code?**  
A: In the “More resources” section: [View and Download .NET SDK repository on GitHub](https://github.com/contentstack/contentstack-dotnet)

**Q: Which version introduced `SetLocale` for Query and Entry?**  
A: Version 2.0.0 - Jun 28, 2019.

**Q: Which version added `IncludeFallback` functions?**  
A: Version 2.5.0 - Dec 5, 2020.

**Q: Which version includes the `GetContentType` exception fix for Entry?**  
A: Version 2.4.0 - Aug 12, 2020.