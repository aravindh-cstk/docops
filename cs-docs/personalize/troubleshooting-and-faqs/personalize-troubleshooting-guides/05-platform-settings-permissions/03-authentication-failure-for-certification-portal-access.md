---
title: "Authentication Failure for Certification Portal Access"
description: "Authentication Failure for Certification Portal Access"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/05-platform-settings-permissions/03-authentication-failure-for-certification-portal-access
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: cs306afefad99b3bde
---

# Authentication Failure for Certification Portal Access

Accessing the Data & Insights Practitioner Certification portal may fail if the user's account is not correctly associated with an active Contentstack Organization. This prevents practitioners from completing certification milestones despite having valid Partner Hub credentials.

**Root Cause**

The issue is caused by a missing Organization (ORG) association. Even with access to external partner tools, the certification portal requires the user to be a member of a registered Organization within the Contentstack ecosystem to validate identity and permissions.

**Resolution**

1.  Check if the user is attempting to use Partner Hub credentials on the certification portal without being linked to an ORG.
2.  Verify the user's account status in the internal system to see if they are a member of any active Organization.
3.  If no Organization is found, advise the user to contact their internal Organization administrator to be added as a member.
4.  If the user is the primary contact for a new organization, initiate the standard onboarding or invitation process to establish the Organization link.
