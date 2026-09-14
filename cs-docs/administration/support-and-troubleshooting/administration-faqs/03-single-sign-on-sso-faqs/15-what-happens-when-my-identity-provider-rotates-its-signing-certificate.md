---
title: "What happens when my identity provider rotates its signing certificate?"
description: "What happens when my identity provider rotates its signing certificate?"
url: /administration/support-and-troubleshooting/administration-faqs/03-single-sign-on-sso-faqs/15-what-happens-when-my-identity-provider-rotates-its-signing-certificate
doc_type: faq
_cms_section_uid: cs6ba0d79c683cd485
_cms_faq_uid: cs093529e13cff1d75
---

# What happens when my identity provider rotates its signing certificate?

A connection stores one signing certificate. Contentstack does not pick up a new certificate automatically, and does not track your IdP's metadata after you import it.

**Warning**: The moment your IdP switches to a new signing certificate, every SAML assertion arrives signed by a certificate Contentstack does not recognize, and sign-in through that connection fails until you upload the new certificate. Coordinate the change with your IdP team and update the connection at the same time the IdP switches, rather than waiting for the current certificate to expire.

The organization owner can always sign in with Contentstack credentials, which is the recovery path if a certificate change locks out SSO users.
