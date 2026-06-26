---
title: "[JavaScript Delivery] - JavaScript SDK Changelog"
description: JavaScript Delivery SDK Changelog for the JavaScript browser SDK, including version history, release dates, and feature updates.
url: https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/javascript-browser/javascript-sdk-changelog
product: Contentstack
doc_type: changelog
audience:
  - developers
  - integrators
version: "3.x"
last_updated: 2023-02-09
---

# [JavaScript Delivery] - JavaScript SDK Changelog

This page lists the version history for the JavaScript Delivery SDK (JavaScript browser SDK), including release dates and the changes introduced in each release. It is intended for developers maintaining or upgrading applications that use the SDK and should be used when planning updates, troubleshooting regressions, or validating feature availability by version.

## JavaScript Delivery SDK Changelog

## Version: 3.16.0 - Release Date: 09-Feb-2023

##### New Features:
- The plugin support is added where users can create their own plugins and attach them to the stack instance.

## Version: 3.15.3 - Release Date: 26-Jul-2022

##### New Features:
- Resolved Live Preview with reference entry issue on SSR web app.

## Version: 3.15.2 - Release Date: 03-May-2022

##### New Features:
- Resolved Live Preview with reference entry issue.

## Version: 3.15.1 - Release Date: 21-Apr-2022

##### New Features:
- Azure Na region and package updates.

## Version: 3.15.0 - Release Date: 29-Oct-2021

##### New Features:
- Support added for content branching feature.

## Version: 3.14.0 - Release Date: 19-Oct-2021

##### New Features:
- Support added for Live Preview feature support.

## Version: 3.13.2 - Release Date: 26-May-2021

##### Dependency:
- Update Utils SDK dependency version.

## Version: 3.13.1 - Release Date: 16-Apr-2021

##### Bug fix:
- Resolved IE 11 request method issue.

## Version: 3.13.0 - Release Date: 05-Apr-2021

##### Update API:
- Query
- Added support for method includeEmbeddedItems.
- Entry
- Added support for method includeEmbeddedItems.

## Version: 3.12.2 - Release Date: 19-Feb-2021

##### API timeout:
- Updated timeout to min 30-sec.

##### Enhancement Typescript:
- Support added Boolean value:
- [Query] - where, equalTo, notEqualTo.

## Version: 3.12.1 - Release Date: 22-Jan-2021

##### Bug fix:
- Fixed Unhandled promise rejection on HTML response body.

## Version: 3.12.0 - Release Date: 05-Dec-2020

##### New Features:
- Entry
- Publish fallback method added.
- Query
- Publish fallback method added.
- Asset
- Publish fallback method added.
- Assets
- Publish fallback method added.

## Version: 3.11.0 - Release Date: 25-Sep-2020

##### Update API:
- Retry limit for fetch request.
- Retry delay option for fetch request.
- Retry on error occurs for fetch request.
- Typescript definition added.

##### Enhancement Documentation
- Documentation update for Only and Except.

## Version: 3.10.1 - Release Date: 29-Jun-2020

##### Update API:
- Included Content-Type in Entry.

## Version: 3.10.0 - Release Date: 19-Jun-2020

##### API timeout:
- Removed default timeout for request.

## Version: 3.9.0 - Release Date: 17-Jun-2020

##### Update API:
- Allowed support to add a timeout for requests.
- Fetch option added for request.

## Version: 3.8.1 - Release Date: 19-Nov-2019

##### Update API:
- Entry
- Updated in entry module.

## Version: 3.8.0 - Release Date: 15-Nov-2019

##### New Features:
- Stack
- Added support for method getContentType().

##### Update API:
- ContentType:
- Updated method fetch().

## Version: 3.7.1 - Release Date: 05-Nov-2019

##### New Features:
- Stack
- Added support for Region.

## Version: 3.7.0 - Release Date: 29-Jul-2019

##### New Features:
- Query:
- Support added for the method includeReferenceContentTypeUID.
- Entry:
- Support added for the method includeReferenceContentTypeUID.

## Version: 3.6.0 - Release Date: 12-Apr-2019

##### New Features:
- Stack:
- Support added for the method getContentTypes.
- ContentType:
- Support added for the method fetch.

## Version: 3.5.2 - Release Date: 20-Mar-2019

##### Hotfix:
- Resolved locale storage issue.

## Version: 3.5.1 - Release Date: 18-Feb-2019

##### Hotfix:
- Resolved cache policy issue.
- JS reference doc updated.

## Version: 3.5.0 - Release Date: 26-Oct-2018

##### Sync API:
- Stack
- Added support for sync API.

## Version: 3.4.0 - Release Date: 10-Jan-2018

##### Update API:
- New addParam() method added.
- Added support for NativeScript.

## Version: 3.3.0 - Release Date: 06-Nov-2017

##### New API:
- [Stack] Imagetransform API added.
- Added support for NativeScript.

##### Deprecate API:
- [Query]:
- findOne
- includeSchema

## Version: 3.2.0 - Release Date: 14-Oct-2017

##### New API:
- [Asset] Image delivery support
- find
- fetch

## Version: 3.1.1 - Release Date: 13-Oct-2017

##### Hotfix:
- Boolean value not working in the “where” query
- only() and includeReference() query not working in react-native ios

## Version: 3.1.0 - Release Date: 28-Apr-2017

##### Update API:
- Code Revamp: ECMA6.
- Support added for React Native.
- Webpack upgraded.

##### Bug fix:
- Fixed unwanted authtoken appending in embedded assets URL in RTE field.

## Version: 3.0.1 - Release Date: 10-Feb-2017

##### Update API:
- Multiple stacks can be configured rather than a singleton Stack Object.

##### Bug fix:
- Fixed the issue with the support for import attribute on the client side.

## More resources
- [View and Download JavaScript Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-javascript)

## Common questions

### Which version introduced plugin support?
Plugin support is added in **Version: 3.16.0 - Release Date: 09-Feb-2023**.

### Which versions mention Live Preview fixes?
Live Preview with reference entry issue is listed in **Version: 3.15.2 - Release Date: 03-May-2022** and **Version: 3.15.3 - Release Date: 26-Jul-2022**.

### Where can I find the JavaScript Delivery SDK repository?
See **More resources**: [View and Download JavaScript Delivery SDK repository on GitHub](https://github.com/contentstack/contentstack-javascript).

### Which version added support for content branching?
Support added for content branching feature is listed in **Version: 3.15.0 - Release Date: 29-Oct-2021**.