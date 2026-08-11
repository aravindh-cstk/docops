---
title: "Lytics Login Failure for Users With Member Role"
description: "Lytics Login Failure for Users With Member Role"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/03-lytics-cdp-integrations/01-lytics-login-failure-for-users-with-member-role
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs09837f78c95649c5
---

# Lytics Login Failure for Users With Member Role

Accessing Lytics may fail for users who are assigned a Member role at the organization level within Contentstack. This prevents successful login to the Lytics platform despite the user being added to the Data Activation Layer (DAL).

**Root Cause**

The issue is caused by a permission restriction where the "Member" organization role does not provide sufficient privileges for standard Lytics authentication.

**Resolution**

1.  Check the user's organization-level role to determine if it is set to "Member".
2.  Coordinate with the Lytics engineering team to generate a manual OAuth login link for the affected user.
3.  Use the generated OAuth link to facilitate the initial login process.

After providing the OAuth link, attempt to log in to the Lytics platform. If the user successfully accesses the dashboard, the issue is resolved.
