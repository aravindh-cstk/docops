---
title: "Restricted Stack Access for IdP-Managed Users"
description: "Restricted Stack Access for IdP-Managed Users"
url: /administration/troubleshooting-and-faqs/administration-troubleshooting-guides/05-organization-stack-invitations/06-restricted-stack-access-for-idp-managed-users
doc_type: faq
_cms_section_uid: cse79a80b55702a523
_cms_faq_uid: cs4dbe378d9c357f53
---

# Restricted Stack Access for IdP-Managed Users

Stack access may be restricted and roles may be unassignable when SSO or Identity Provider management is enabled for an organization.

**Root Cause**

When SSO/IdP is enabled and managed externally, user roles and stack permissions must be synchronized through the Identity Provider rather than being manually updated within the Contentstack platform.

**Resolution**

1.  Verify the user is already part of the organization and has accepted the organization-level invitation.
2.  Coordinate with the internal IdP team to assign the appropriate roles and permissions via IdP groups for the required stack.
3.  Ensure the internal team creates and maps the necessary groups in the IdP for new stacks.
4.  Test stack access after the user has been assigned to the correct IdP groups.

After the IdP team updates the group assignments, attempt to access the specific stack in Contentstack. If the user can see the stack and perform actions aligned with their assigned role, the issue is resolved.
