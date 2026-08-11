---
title: "SSO Login Fails With “Access Denied” Due to Corrupted IdP/Profile Mapping"
description: "SSO Login Fails With “Access Denied” Due to Corrupted IdP/Profile Mapping"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/11-sso-login-fails-with-access-denied-due-to-corrupted-idp-profile-mapping
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: csf74bced37476341e
---

# SSO Login Fails With “Access Denied” Due to Corrupted IdP/Profile Mapping

A user may be unable to log in at all via SSO, receiving an “access denied” error, even though they belong to the correct Active Directory or identity provider groups and other users in the same group can log in without issue.

**Root Cause**

A corrupted user profile or a misconfigured IdP role mapping can block authentication for a specific user, even when their group membership is correct on the identity provider side.

**Resolution**

1.  Validate the affected user's identity provider group membership to confirm it is correct.
2.  Verify the IdP role mapping configuration for signs of misconfiguration.
3.  Clear browser cache or attempt login in an incognito window to rule out a client-side cause.
4.  If the error persists, remove the user from both the Contentstack groups and the identity provider, purge their profile and cache data, and re-add them to the appropriate groups to generate a fresh IdP mapping.

After re-provisioning the account, confirm the user can log in, authenticate via SSO, and access their assigned stacks.
