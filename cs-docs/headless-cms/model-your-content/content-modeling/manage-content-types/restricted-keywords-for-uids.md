---
title: "Restricted Keywords for UIDs"
description: "Learn which keywords are restricted for UIDs in Contentstack content types and fields to avoid errors and ensure smooth functionality."
url: /headless-cms/restricted-keywords-for-uids
uid: blt1f23ce6fb4cee8c3
---

# Restricted Keywords for UIDs

## Restricted Keywords for UIDs

When providing user-defined unique IDs (UIDs) for [content type](/docs/headless-cms/about-content-types), [fields](/docs/headless-cms/about-fields/), and [taxonomies](/docs/headless-cms/about-taxonomy), avoid using certain reserved keywords.

**Warning:** Avoid using these keywords as their usage may lead to code failure.

## Restricted keywords for UIDs for Content Type

The following set of keywords cannot be used as the UID of a content type:

-   api\_key
-   built\_io\_application\_user
-   built\_io\_application\_user\_role
-   built\_io\_audit\_log
-   built\_io\_environment
-   built\_io\_extensions
-   built\_io\_installation\_data
-   built\_io\_label
-   built\_io\_language
-   built\_io\_publish\_queue
-   built\_io\_release
-   built\_io\_upload
-   cs\_branches
-   org\_uid
-   sys\_asset
-   sys\_metadata

**Note:** Avoid using hyphens (-) in UIDs for content types.

## Restricted keywords for UIDs for Fields

The following set of keywords cannot be used as the UID of a field:

-   \_exists
-   \_regex
-   \*\_ids - Fields cannot have UID ending with “\_ids.”
-   \_\_indexes
-   \_\_loc
-   \_\_meta
-   \_\_v
-   \_id
-   \_owner
-   \_publish\_locales
-   \_shouldFilter
-   \_shouldLean
-   \_version
-   ACL
-   api\_key
-   app\_user\_object\_uid
-   applikation\_id
-   built\_io\_upload
-   contentstackFilters
-   created\_at
-   created\_by
-   DEFAULT\_ACL
-   deleted\_at
-   dimension
-   domain
-   embedded\_items
-   hook
-   id
-   inbuilt\_class
-   isApplicationUser
-   isNew
-   isSystemUser
-   klass\_id
-   locale
-   options
-   org\_uid
-   publish\_details
-   save
-   shard\_account
-   shard\_app
-   shard\_random
-   SYS\_ACL
-   sys\_assets
-   sys\_metadata
-   tags
-   tags\_array
-   taxonomies
-   tenant\_id
-   toJSON
-   uid
-   update
-   updated\_at
-   updated\_by

## Restricted Keywords for UIDs for Taxonomies

When creating taxonomies, the following restrictions apply:

-   Do **not** use entries as the UID for a taxonomy.
-   Do **not** use a UID that starts with an underscore (\_).
