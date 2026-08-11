---
title: "Safely Removing Users From Contentstack After IdP Deprovisioning"
description: "Safely Removing Users From Contentstack After IdP Deprovisioning"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/12-safely-removing-users-from-contentstack-after-idp-deprovisioning
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cs773f2e6d186d3350
---

# Safely Removing Users From Contentstack After IdP Deprovisioning

Users removed or deactivated in an identity provider such as Okta may still appear in Contentstack's user list.

**Root Cause**

Contentstack does not automatically remove a user's account when that user is deprovisioned in the identity provider; removal must be performed manually within Contentstack.

**Resolution**

1.  Confirm the user no longer exists in the identity provider and does not require Contentstack access.
2.  If the user holds stack ownership, reassign ownership to another user before proceeding.
3.  Delete the user directly within Contentstack.

Deleting the user this way does not affect the SSO configuration for remaining users, provided the user no longer exists in the IdP. Once deleted, the user loses all access to Contentstack.
