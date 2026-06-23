---
title: "[Android] - Android SDK Changelog"
description: Android SDK Changelog
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/android/android-sdk-changelog
product: Contentstack
doc_type: changelog
audience:
  - developers
  - mobile-developers
  - android-developers
version: Android SDK
last_updated: 2023-05-10
---

# [Android] - Android SDK Changelog

This page lists version-by-version release notes for the Contentstack Android Content Delivery SDK, including features, enhancements, bug fixes, and breaking changes. Android developers should use it when upgrading the SDK to understand what changed between versions and any potential impact on their apps.

## Android SDK Changelog

## Version 3.12.0 - Release Date: 10-May-2023

##### Feature:
- Added support for Include Metadata in asset, entry, and query class
- Added support for Azure EU region

##### Enhancements:
- General code and API Documentation improvements
- Breaking changes - PublishType Enums are updated to all CAPS

##### Bug Fixes:
- Dependency version released in build type
- [#30](https://github.com/contentstack/contentstack-android/issues/30) Fixed EntryModel publish_details parsing issue

## Version: 3.11.0 - Release Date: 24-Feb-2023

##### New Features:
- String locale code support added for methods sync and syncLocale.

##### Bug Fixes:
- None

## Version: 3.10.2 - Release Date: 27-Jun-2022

##### Bug Fixes:
- [#23](https://github.com/contentstack/contentstack-java/issues/23) Implicit PendingIntent detected in Contentstack Android SDK.

##### New Features:
- New region support - Azure North America.

## Version: 3.10.1 - Release Date: 17-Jan-2022

##### Bug Fixes:
- Fixed compile issue with target version 31.

## Version 3.10.0 - Release Date: 12-Jul-2021

##### New Features:
- Support added for updated Utils package.

## Version: 3.9.0 - Release Date: 05-Apr-2021

##### New Features:
- Entry:

Support added for entry.includeEmbeddedItems()
- Query:

Support added for query.includeEmbeddedItems()

## Version: 3.8.2 - Release Date: 05-Mar-2021

##### Changes:
- Updated X-User-Agent to the header.

## Version: 3.8.1 - Release Date: 18-Feb-2020

##### Changes:
- Increased default timeout time to 30 sec.

## Version: 3.8.0 - Release Date: 08-Dec-2020

##### New Features:
- Asset

Support added for includeFallback
- Support added for includeDimension
- AssetQuery

Support added for includeFallback
- Entry:

Support added for includeFallback
- Query:

Support added for includeFallback

## Version: 3.7.0 - Release Date: 15-Nov-2019

##### New Features:
- Stack:

Support added for function getContentType()
- ContentType:

Updated function fetch()
- Query:

Updated support for whereIn(String KEY, Query queryObject)
- Query:

Updated support for whereNotIn(String KEY, Query queryObject)

## Version: 3.6.1 - Release Date: 23-Aug-2019

##### New Features:
- Query:

Support added for whereIn(String key) and whereNotIn(String key) methods in Query.
- Config:

Support added for setRegion(ContentstackRegion region) in Config class.

## Version: 3.6.0 - Release Date: 26-July-2019

##### New Features and Updates:
- Entry:

Support added for includeReferenceContentTypeUid
- Query:

Support added for includeReferenceContentTypeUid
- Entry:

Deprecated setLanguage and getLanguage
- Query:

Deprecated language
- Entry:

Method added - getLocale and setLocale(String locale)
- Query:

Method added - locale
- Query:

Removed deprecated method - includeSchema

## Version: 3.5.0 - Release Date: 12-Apr-2019

##### New Features:
- Support added for the below methods in SDK:

getContentTypes() in the Stack class
- fetch in the ContentType class.
- Support for the following Config classes has been removed permanently:

public void setSSL(boolean isSSL)setSSL()
- public boolean isSSL()

## Version: 3.4.1 - Release Date: 05-Apr-2019

##### Changes:
- Support removed for unsafe (HTTP) requests.
- Following breaking changes from Config class have been deprecated for:

public void setSSL(boolean isSSL)setSSL()
- public boolean isSSL()

## Version: 3.4.0 - Release Date: 22-Oct-2018

##### New Features:
Following function supports are added for sync in Stack class:
- sync
- syncPaginationToken
- syncToken
- syncFromDate
- syncContentType
- syncLocale
- syncPublishType
- sync(contentType, fromDate, locale, publishType, syncCallBack)
- New class - SyncStack.

## Version:3.3.0 - Release Date 15-Dec-2017

##### New Features:
- Entry

Method added - ‘addParam’
- Query

Method added - ‘addParam’
- Asset

Method added - ‘addParam’

## Version:3.2.0 - Release Date 10-Nov-2017

##### New Features:
- Stack

Method added - ‘ImageTransform’
- Query

Method added - ‘includeContentType’
- QueryResult

Method added - ‘content_type’

##### API Modifications:
- None

##### API Deprecation:
- Query

Deprecated method ‘includeSchema’

##### Bug Fixes:
- None

## Version: 3.1.3 - Release Date: 28-July-2017

##### New Features:
- None

##### API Modifications:
- None

##### API Deprecation:
- None

##### Bug Fixes:
- Fixed the bug in Cache Policy.
- Increased the timeout for Cache Policy.

## Version: 3.1.2 - Release Date: 24-June-2017

##### New Features:
- None

##### API Modifications:
- None

##### API Deprecations:
- Asset

Removed method - getPublishDetails()
- Entry

Removed method - getPublishDetails()

##### Bug Fixes:
- None

## Version: 3.1.1 - Release Date: 17-May-2017

##### New Features:
- None

##### API Modifications:
- None

##### API Deprecation:
- None

##### Bug Fixes:
- Support added for TLSv1.2 for older android versions.

## Version: 3.1.0 - Release Date: 19-Dec-2016

##### New Features:
- New class added - Group.
- Entry:

Method added - getAllEntries(String refKey, String refContentType)
- Method added - getGroups(String key)
- Method added - getGroup(String key)
- Asset:

Method added - setCachePolicy(CachePolicy policy)
- Method added - getTags()

##### AssetLibrary:
- Method added - setCachePolicy(CachePolicy policy)

##### API Modifications:
- Asset:

Renamed method getContentType() to getFileType()
- Renamed method getUploadUrl() to getUrl()

##### API Deprecation:
- None

##### Bug Fixes:
- None

## Version: 3.0.0 - Release Date 27-Oct-2016

##### New Features:
- New class added - Config.
- New class added - Asset.
- New class added - AssetLibrary.
- Contentstack:

Method added - stack(Context context, String stackApiKey, String accessToken, String environment, Config config)
- Stack:

Method added - asset()
- Method added - assetLibrary()
- Entry:

Method added - getPublishDetails()

##### API Modifications:
- None

##### API Deprecations:
- Contentstack:

Removed method - stack(Context context, String stackApiKey, String accessToken, String environment, boolean isEnvironmentUid)
- Stack:

Removed method - setVersion(String version)
- Removed method - setURL(String hostName, boolean isSSL)
- Removed method - setEnvironment(String environment, boolean isEnvironmentUid)
- Removed method - isEnvironmentUid()
- Removed method - getEnvironment()
- Removed method - getVersion()
- Removed method - getURL()
- Entry:

Removed method - getMetadata()
- Query:

Removed method - afterUid()
- Removed method - beforeUid()

##### Bug Fixes:
- None

## Version: 1.0.2 - Release Date: 28-Sep-2016

##### New Features:
- None

##### API Modifications:
- None

##### API Deprecation:
- None

##### Bug Fixes:
- Fixed API calls issue for Android 7.0 Nougat.

## Version: 1.0.1 - Release Date: 22-Sep-2016

##### New Features:
- None

##### API Modifications:
- None

##### API Deprecation:
- None

##### Bug Fixes:
- Query:

Fixed search method issue causing improper results.
- Entry:

Fixed includeReference method issue causing improper results.
- Fixed fetch method - now it returns responses as per the environment.

## Version: 1.0.0 - Release Date: 05-Aug-2015

##### Initial release:
- Introduced Content Delivery API SDK for Android.
- Points to Contentstack.

## More resources
- [View and Download Android SDK repository on GitHub](https://github.com/contentstack/contentstack-android)

## Common questions

**Q: Where can I find the Android SDK source code?**  
A: [View and Download Android SDK repository on GitHub](https://github.com/contentstack/contentstack-android)

**Q: Which version includes breaking changes to PublishType enums?**  
A: Version 3.12.0.

**Q: Which versions added Azure region support?**  
A: Version 3.10.2 added Azure North America, and Version 3.12.0 added Azure EU region.

**Q: What should I check before upgrading to a newer SDK version?**  
A: Review the entries for “Breaking changes”, “Enhancements”, and “Bug Fixes” for the target version and any intermediate versions.