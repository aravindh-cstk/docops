---
title: "SSO Access Denied Due to an Incorrect SAML Group or Role Attribute"
description: "SSO Access Denied Due to an Incorrect SAML Group or Role Attribute"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/15-sso-access-denied-due-to-an-incorrect-saml-group-or-role-attribute
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cs46e82c6be8e0cca5
---

# SSO Access Denied Due to an Incorrect SAML Group or Role Attribute

Users may receive an “Access denied! You are not part of Contentstack” error during SSO login, or find that only some Okta/IdP groups can log in while others, especially newly created ones, cannot, even though all groups appear correctly provisioned.

**Root Cause**

In the confirmed cases, this was traced to the SAML attribute carrying group information: either the attribute was not named roles, as Contentstack requires, or the group values sent by the identity provider did not exactly match the IdP Role Identifier strings configured in the Contentstack IDP panel, including spacing and punctuation. Affected users were denied access even though they appeared correctly provisioned.

**Resolution**

1.  In the identity provider's SAML application, open the Attribute Statements / Group Attribute Statements configuration.
2.  Ensure the attribute that sends the user's groups is named roles.
3.  Confirm the group values being sent exactly match the IdP Role Identifier strings configured in the Contentstack IDP panel, including spacing and punctuation.
4.  Capture a fresh SAML response (for example, using a SAML tracer) to confirm it includes the expected group/role attribute.
5.  If mismatches remain for specific users, remove and re-add them to the group on the IdP side to trigger a fresh sync cycle.

After correcting the attribute name and group values, confirm the previously denied users or groups can authenticate successfully via SSO.
