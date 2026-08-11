---
title: "Resolving sync_token Undefined Errors in gatsby-source-contentstack"
description: "Resolving sync_token Undefined Errors in gatsby-source-contentstack"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/14-api-platform-behavior/05-resolving-sync-token-undefined-errors-in-gatsby-source-contentstack
doc_type: faq
_cms_section_uid: cs31ce385b0eaf3343
_cms_faq_uid: cs409a5d3ca5ea88d2
---

# Resolving sync_token Undefined Errors in gatsby-source-contentstack

A site using gatsby-source-contentstack to fetch content fails during the build with the error TypeError: Cannot read properties of undefined (reading 'start'), traced back to an undefined sync\_token value.

**Root Cause**

The error was tied to the version of gatsby-source-contentstack in use. Changing the package version resolved the issue, though the source ticket does not document the specific internal mechanism that was at fault.

**Resolution**

1.  Check the currently installed version of gatsby-source-contentstack in your package.json.
2.  Change the package to a different version (the customer’s case was resolved by a version change, though the specific target version was not documented in the source ticket, testing the latest stable release is a reasonable starting point).
3.  Rebuild the site and confirm the TypeError no longer occurs and content syncs correctly.
4.  If the error persists after the version change, gather the specific package versions tested and report them to Contentstack Support along with the full error stack trace for further investigation.

The issue is resolved when the build completes successfully and content fetched via gatsby-source-contentstack syncs without the sync\_token-related errors.
