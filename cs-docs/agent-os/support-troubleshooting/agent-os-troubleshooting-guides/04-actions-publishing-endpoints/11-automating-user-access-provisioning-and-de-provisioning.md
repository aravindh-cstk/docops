---
title: "Automating User Access Provisioning and De-Provisioning"
description: "Automating User Access Provisioning and De-Provisioning"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/11-automating-user-access-provisioning-and-de-provisioning
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cs7be57619b9fd6172
---

# Automating User Access Provisioning and De-Provisioning

There is a need for Agent OS granting and removing user access to stacks and roles in Contentstack based on an internal request workflow (for example, requests submitted through ServiceNow), and it is unclear whether Contentstack supports this natively.

**Root Cause**

Contentstack does not provide a native, built-in ServiceNow integration for Agent OS user provisioning or de-provisioning.

**Resolution**

1.  Use the Contentstack Management API to build the integration instead of looking for a native ServiceNow connector.
2.  Use the Management API’s user-invite endpoints to add or invite users programmatically when your internal workflow approves a request.
3.  Use the Management API to assign or update roles for a user based on the access level requested in your internal workflow.
4.  Use the Management API to remove a user’s access when your internal workflow triggers a de-provisioning request.
5.  Connect these Management API calls to your internal workflow (for example, via a script or middleware that ServiceNow can call) so provisioning and de-provisioning happen automatically end-to-end.

Access requests submitted through your internal workflow result in the corresponding user being added, role-assigned, or removed in Contentstack automatically, via the Management API.
