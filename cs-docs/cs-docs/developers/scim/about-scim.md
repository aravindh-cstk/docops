---
title: "[Security Management] - About SCIM"
description: Overview of SCIM (System for Cross-domain Identity Management) and how Contentstack supports SCIM-based user provisioning.
url: https://www.contentstack.com/docs/developers/scim/about-scim
product: Contentstack
doc_type: concept
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Security Management] - About SCIM

This page explains what SCIM is and how Contentstack’s SCIM integration supports automatic user provisioning via an Identity Provider (IdP). It is intended for organization owners/admins and developers who need to set up or understand SCIM-based provisioning for a Contentstack organization.

## About SCIM

**SCIM (System for Cross-domain Identity Management)** is a secure protocol that enables automatic user provisioning. It eases the process of managing user identity data between an identity provider (such as OneLogin) and service providers (such as Contentstack).

Contentstack’s SCIM integration, allows you to manage users of your Contentstack organization via your IdP (Identity Provider) such as OneLogin. So, whenever new users are added or removed from your IdP, they are automatically added or removed from the Contentstack organization, respectively.

**Note**: Only the [Organization owner](/docs/owners-and-admins/organization-roles#organization-owner) and [Organization admin(s)](/docs/owners-and-admins/organization-roles#organization-admin) have the right to use set up SCIM.

Setting up SCIM requires configuring it from your Contentstack organization’s settings. Here are the detailed guides that outline how you can set up SCIM with [OneLogin](/docs/developers/scim/set-up-scim-provisioning-with-onelogin/), [Microsoft Azure AD](/docs/developers/scim/set-up-scim-provisioning-with-microsoft-azure-ad/), and [Okta](/docs/developers/scim/set-up-scim-provisioning-with-okta/).

**Note**: SCIM is a plan-based feature. If you cannot see these settings, please contact [Contentstack support](mailto:support@contentstack.com) to enable this feature for your organization.

We also provide [SCIM APIs](/docs/developers/apis/scim-api) so you can manage user provisioning with custom IdP clients or manage provisioning programmatically.

## Common questions

**Who can set up SCIM in Contentstack?**  
Only the Organization owner and Organization admin(s) have the right to use set up SCIM.

**Which IdPs are supported in the setup guides?**  
The page links to setup guides for OneLogin, Microsoft Azure AD, and Okta.

**What should I do if I can’t see SCIM settings in my organization?**  
SCIM is a plan-based feature; contact Contentstack support to enable this feature for your organization.

**Can I manage provisioning programmatically instead of using an IdP UI?**  
Yes, Contentstack provides SCIM APIs to manage user provisioning with custom IdP clients or programmatically.