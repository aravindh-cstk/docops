---
title: "Unexpected Session Logouts Can Occur Even When Authentication Is Working Normally"
description: "Unexpected Session Logouts Can Occur Even When Authentication Is Working Normally"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/05-organization-stack-invitations/09-unexpected-session-logouts-can-occur-even-when-authentication-is-working-normally
doc_type: faq
_cms_section_uid: cse79a80b55702a523
_cms_faq_uid: cs4c04b8762e69cc6a
---

# Unexpected Session Logouts Can Occur Even When Authentication Is Working Normally

A user may be logged out of Contentstack unexpectedly while editing, without any advance warning, even though nothing appears to be wrong with their account or credentials.

**Root Cause**

Contentstack manages authentication using access tokens and refresh tokens that work together to maintain the session in the background. Under normal conditions, the refresh token automatically renews the access token so the session continues without requiring the user to log in again. However, sessions can still be invalidated by factors such as browser security policies, network interruptions, extended inactivity, manual logout, or other security-related events, and both tokens expiring at the same time, while rare, remain possible.

**Resolution**

An occasional unexpected logout can happen even when authentication is otherwise functioning normally, due to browser- or network-level session invalidation rather than an account problem.

1.  As a best practice, save work periodically during long editing sessions, since a session is not guaranteed to persist indefinitely.
2.  If logouts become frequent under otherwise stable network and browser conditions, report the pattern, including browser, network conditions, and session duration, so it can be investigated further.

If logouts persist or increase in frequency, share these details so the behavior can be reviewed further.
