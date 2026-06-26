---
title: "[Java] - Java SDK Changelog"
description: Java SDK Changelog for the Contentstack Content Delivery SDK (Java), including versions, release dates, features, enhancements, bug fixes, and changes.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/java/java-sdk-changelog
product: Contentstack
doc_type: changelog
audience:
  - developers
  - java-developers
version: java-sdk
last_updated: 2023-04-18
---

# [Java] - Java SDK Changelog

This page lists the Java Content Delivery SDK changelog, including version history, release dates, and details about new features, enhancements, bug fixes, and breaking changes. Java developers should use this page when upgrading the SDK or troubleshooting behavior differences between versions.

## Java SDK Changelog

## Version 1.12.0 - Release Date: 18-Apr-2023

##### Feature:
- Added support for Azure EU region
- Added support for Include Metadata to the Asset, Entry, and Query classes

##### Enhancement:
- General code Improvement and bug fixes

##### Bug Fix:
- SyncLocale Bug Fix

## Version: 1.11.0 - Release Date: 09-Feb-2023

##### New Features:
- Added the plugin support

##### Bug Fix:
- [#67](https://github.com/contentstack/contentstack-java/issues/67) error handling infinite loop issue

##### Changes:
- Breaking changes:

Enums PublishType changed from snake-case to CAPITAL
- General Improvements

## Version: 1.10.1 - Release Date: 17-Jun-2022

##### Bug Fix:
- [#57](https://github.com/contentstack/contentstack-java/issues/57) CompileJava issue in Gradle build ecosystem (contentstack-utils)
- [#58](https://github.com/contentstack/contentstack-java/issues/58) content_type : Invalid warning for contentTypeUid

## Version: 1.10.0 - Release Date: 03-Jun-2022

##### New Features:
- High increase in memory consumption & thread count when updated to the 1.9.0 version
- Setting Proxy in config[#52](https://github.com/contentstack/contentstack-java/issues/52)
- Adding query parameter for the Live Preview
- Enhancement in logger for the different class (Suggested through a pull request)[#51](https://github.com/contentstack/contentstack-java/pull/51)

## Version: 1.9.0 - Release Date: 16-Mar-2022

##### Bug Fix:
- Entry uid bug fixed [#45](https://github.com/contentstack/contentstack-java/issues/45)
- Static logger implemented [#43](https://github.com/contentstack/contentstack-java/issues/43)
- Scope-based dependencies

## Version: 1.8.1 - Release Date: 27-Jan-2022

##### Bug Fix:
- Entry uid bug fixed [#45](https://github.com/contentstack/contentstack-java/issues/45)
- Static logger implemented [#43](https://github.com/contentstack/contentstack-java/issues/43)
- Scope-based dependencies

## Version: 1.8.0 - Release Date: 01-Nov-2021

##### New Features:
- Added support for Live Preview
- Added support for Branching

##### Changes:
- Removed the old version of jsoup dependency
- Code improved as per sonar vulnerability guidelines
- Removed deprecated code/non-working code marked deprecated
- A few breaking changes were added

## Version: 1.7.0 - Release Date: 12-Jul-2021

##### New Features:
- Added support for utils function gql.jsonToHtml()

##### Bug Fix:
- Resolved bug [#32](https://github.com/contentstack/contentstack-java/issues/32) issue, removed e.printStackTrace()
- Instead stacktrace used logger.error()

## Version: 1.6.0 - Release Date: 05-Apr-2021

##### New Features:
- Query :

query.includeEmbeddedItems() method support added
- Entry :

entry.includeEmbeddedItems() method support added

## Version: 1.5.7 - Release Date: 20-Feb-2021

##### Changes:
- Document updated

## Version: 1.5.6 - Release Date: 27-Jan-2021

##### Changes:
- Document updated

##### New Features:
- None

## Version: 1.5.5 - Release Date: 22-Jan-2021

##### Bug fix:
Error contains information like
- Error message
- Error code
- Error Details

##### Language Enum:
- GERMEN changed to GERMAN
- Deprecated Language Enum
- Deprecated LanguageCode Enum

##### New Features:
None

## Version: 1.5.4 - Release Date: 08-Dec-2020

##### New Features:
- Entry

Publish fallback method added
- Query

Publish fallback method added
- Asset

Publish fallback method added
- includeDimension method added
- Assets

Publish fallback method added

## Version: 1.5.3 - Release Date: 28-Jul-2020

##### Bug Fix:
- Fixed the following issues:

Build Issue and
- Build update.

## Version: 1.5.2 - Release Date: 23-Jul-2020

##### Bug Fix:
- Bump Issue :

Bump Issue: log4j-core from 2.5 to 2.13.2.

##### Changes:
- Query :

Query.locale() documentation

##### New Features:
- CSHttpConnection :

StandardCharsets.UTF_8 Support Added

## Version: 1.5.1 - Release Date: 13-Jan-2020

##### Bug Fix:
- Dependency vulnerability Java GitHub reported vulnerable issue on dependency Log4j

## Version: 1.5.0 - Release Date: 15-Nov-2019

##### New Features:
- Stack:

Added support for function getContentType().
- ContentType:

Updated function fetch().
- Query:

Updated support of whereIn(String KEY, Query queryObject).
- Query:

Updated support of whereNotIn(String KEY, Query queryObject).

## Version: 1.4.2 - Release Date: 03-Sep-2019

##### New Features:
- Config

Added support for Region in Config.

## Version: 1.4.1 - Release Date: 21-Aug-2019

##### New Features
- Query

Added support for whereIn(String key) and whereNotIn(String key) methods.
- CSAppConstants

Removed Google internet connection check from CSAppConstants.

## Version: 1.4.0 - Release Date: 26-Jul-2019

##### New Features:
- Entry:

Added support for includeReferenceContentTypeUid support in Entry.
- Query:

Added support for includeReferenceContentTypeUid support in Query.
- Entry:

setLanguage and getLanguage Deprecated in Entry.
- Query:

language deprecated in Query.
- Entry:

Added method for getLocale and setLocale(String locale) in Entry.
- Query:

Added method for locale in Query.

##### Changes:
- Query:

Removed deprecated method for includeSchema in Query.

## Version: 1.3.3 - Release Date: 21-Jun-2019

##### HOTFIX:
- Override response hot-fix.

## Version: 1.3.2 - Release Date: 13-May-2019

##### Changes:
- Code Improvement:

Removed println.
- Code Improvement:

Added support for Logger.

## Version: 1.3.1 - Release Date: 02-May-2019

##### Bug Fix:
- Bug fixed for include reference.
- Added testcase report for v1.3.1.

## Version: 1.3.0 - Release Date: 12-Apr-2019

##### New Features:
- Added support of below methods in SDK:

getContentTypes() in Stack class
- fetch in ContentType class
- Below two support from the Config class has been removed permanently:

public void setSSL(boolean isSSL)setSSL()
- public boolean isSSL()

## Version: 1.2.1 - Release Date: 14-Mar-2019

##### Bug Fix:
- Bug fixes and code cleanups.

## Release Date: 20-Feb-2019

##### Changes:
- Maven integration

Folder structure.

## Version: 1.2.0 - Release Date: 15-Dec-2017

##### New Features:
- Entry

Added method ‘addParam’.
- Query

Added method ‘addParam’.
- Asset

Added method ‘addParam’.

## Version: 1.1.0 - Release Date: 10-Nov-2017

##### New Features:
- Stack:

Added method ‘ImageTransform’.
- Query:

Added method ‘includeContentType’.
- QueryResult:

Added method ‘contentType’.

##### API deprecation:
- Query:

Deprecated method ‘includeSchema’.

## More resources
- [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)

## Common questions

**Q: Where can I find the Java Delivery SDK source code?**  
A: In the “More resources” section: [View and Download Java Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-java)

**Q: Which version added support for Azure EU region?**  
A: Version 1.12.0 - Release Date: 18-Apr-2023

**Q: Which version introduced plugin support?**  
A: Version: 1.11.0 - Release Date: 09-Feb-2023

**Q: Are there breaking changes listed in this changelog?**  
A: Yes, Version: 1.11.0 includes “Breaking changes: Enums PublishType changed from snake-case to CAPITAL”.