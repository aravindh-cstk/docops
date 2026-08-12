---
title: "Preserving Query Strings in Launch Edge URL Redirects"
description: "Preserving Query Strings in Launch Edge URL Redirects"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/07-redirects-routing/02-preserving-query-strings-in-launch-edge-url-redirects
doc_type: faq
_cms_section_uid: csa82453e7ca89b7fd
_cms_faq_uid: csa12a9cf45b5e689e
---

# Preserving Query Strings in Launch Edge URL Redirects

Query strings are not preserved when processing redirects configured in launch.json. This breaks analytics tracking parameters and campaign URLs that rely on query string values being forwarded to the destination.

**Root Cause**

The launch.json redirect configuration has limited support for query string handling. Using certain characters (such as ?) in the redirect definition can also cause deployment failures. Query string preservation requires logic that is beyond the capabilities of static launch.json rules.

**Resolution**

1.  Migrate the redirect logic from launch.json to a Launch Edge Function, which provides full programmatic control over request and response handling.
2.  Within the Edge Function, read the incoming request URL, extract the query string using the URL API, and append it to the destination URL before issuing the redirect response.
3.  Set the appropriate HTTP status code (e.g., 301 or 302) on the redirect response returned by the Edge Function.
4.  Deploy the project and test with URLs that include query parameters to confirm they are forwarded correctly to the destination.

The issue is resolved when redirected URLs correctly pass query strings to the destination, and no deployment failures occur from unsupported characters in the configuration.
