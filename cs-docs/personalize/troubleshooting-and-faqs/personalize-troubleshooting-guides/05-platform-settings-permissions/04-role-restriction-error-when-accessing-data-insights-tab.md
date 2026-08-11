---
title: "Role Restriction Error When Accessing Data & Insights Tab"
description: "Role Restriction Error When Accessing Data & Insights Tab"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/05-platform-settings-permissions/04-role-restriction-error-when-accessing-data-insights-tab
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: cs4b37fa4796f87586
---

# Role Restriction Error When Accessing Data & Insights Tab

Users assigned to the "Member" role at the organization level may be blocked from accessing the Data & Insights (D&I) tab within Personalize. This results in a "role restriction" error, preventing users from viewing audience analytics.

**Root Cause**

The issue is caused by insufficient role privileges. The standard "Organization Member" role does not include the necessary permissions by default to authenticate into the integrated Lytics environment that powers Data & Insights.

**Resolution**

1.  Confirm the user is encountering a "role restriction" error when attempting to access the Data & Insights tab.
2.  Verify the user is assigned the "Member" role at the organization level.
3.  Coordinate with the Lytics engineering or support team to generate a manual OAuth login link specifically for the affected user.
4.  Provide the generated OAuth link to the user to bypass the standard UI authentication restriction.

Provide the user with the OAuth link and ask them to attempt access. If the user successfully reaches the Data & Insights dashboard, the issue is resolved.
