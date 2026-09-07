---
title: "How SSO works with Contentstack"
description: "How SSO works with Contentstack"
url: /administration/how-sso-works-with-contentstack
uid: bltb81614d35dc5e246
---

# How SSO works with Contentstack

## How SSO works with Contentstack

If you have enabled **Single Sign-On (SSO)** for your [Organization](/docs/owners-and-admins/about-organizations), your IdP will handle your authentication to your SSO-enabled organization. This means that if any of your users want to sign in to Contentstack via SSO, they will be redirected to your IdP.

If users are not logged in to your IdP, they will be redirected to the IdP sign-in page, where they are required to authenticate themselves. However, if the users are already signed in to your IdP while signing into Contentstack via SSO, they will not be asked to log in again and will be redirected to the Contentstack dashboard or the requested page.

![how_sso_works_with_contentstack.jpeg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltba04e700e49b6bac/5d65138605de440b7b8429b8/how_sso_works_in_contenstack.jpeg)

**Note:** If you've already logged into your SSO IdP, the trigger\_sso\_flow=<sso\_name> query parameter automatically lets you log in to Contentstack via SSO, allowing you to skip the Contentstack login page.

However, in order to access and manage content in Contentstack, users need to be assigned specific roles in their respective IdPs and these roles need to be mapped to Contentstack roles. The [IdP Role Mapping](/docs/developers/single-sign-on/idp-role-mapping) section explains in detail how this works.
