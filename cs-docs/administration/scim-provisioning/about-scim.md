---
title: "About SCIM"
description: "About SCIM"
url: /administration/about-scim
uid: blt470f1424beb96b10
---

# About SCIM

## About SCIM

**SCIM (System for Cross-domain Identity Management)** is a secure protocol that enables automatic user provisioning. It eases the process of managing user identity data between an identity provider (such as OneLogin) and service providers (such as Contentstack).

Contentstack’s SCIM integration allows you to manage users of your Contentstack organization via your IdP (Identity Provider) such as OneLogin. So, whenever new users are added or removed from your IdP, they are automatically added or removed from the Contentstack organization, respectively.

**Note:** Only the users with [Owner, Admin, or Security Manager](/docs/administration/about-administration-roles) roles can set up SCIM.

Setting up SCIM requires configuring it under **Administration** in your Contentstack organization. Here are the detailed guides that outline how you can set up SCIM with [OneLogin](/docs/administration/set-up-scim-provisioning-with-onelogin), [Microsoft Azure AD](/docs/administration/set-up-scim-provisioning-with-microsoft-azure-ad), and [Okta](/docs/administration/set-up-scim-provisioning-with-okta-native-app).

**Note:** SCIM is a plan-based feature. If you cannot see these settings, contact [Contentstack support](mailto:support@contentstack.com) to enable this feature for your organization.

We also provide APIs so you can manage user provisioning with custom IdP clients or manage provisioning programmatically.

## Related Resource

-   [SCIM API](/docs/developers/apis/scim-api)
