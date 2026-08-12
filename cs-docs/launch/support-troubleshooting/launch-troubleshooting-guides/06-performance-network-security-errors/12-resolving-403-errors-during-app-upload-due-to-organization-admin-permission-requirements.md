---
title: "Resolving 403 Errors During App Upload Due to Organization Admin Permission Requirements"
description: "Resolving 403 Errors During App Upload Due to Organization Admin Permission Requirements"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/06-performance-network-security-errors/12-resolving-403-errors-during-app-upload-due-to-organization-admin-permission-requirements
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: cs832a2f1438c48c02
---

# Resolving 403 Errors During App Upload Due to Organization Admin Permission Requirements

A user with Stack Admin access attempts to upload a zip file to set up an app in Launch and encounters a “File upload failed” error. Closer inspection shows the underlying GraphQL request (createSignedUploadUrl) is returning a 403 Forbidden response.

**Root Cause**

App launch and upload functionality requires Organization Admin access, not just Stack Admin access. A user who is a Stack Admin but not an Organization Admin will be blocked at the createSignedUploadUrl step, since this operation is gated at the organization permission level.

**Resolution**

1.  Confirm the affected user’s role at both the Stack level and the Organization level within Contentstack.
2.  If the user holds Stack Admin access but not Organization Admin access, have an existing Organization Admin either grant the required role or perform the app upload on the user’s behalf.
3.  Once the user has Organization Admin access, retry the zip file upload and confirm the createSignedUploadUrl request succeeds.
4.  Document the permission requirement internally so future app upload requests from Stack-level users are routed to an Organization Admin without delay.

The issue is resolved when the user (or an Organization Admin acting on their behalf) can successfully upload the zip file and complete the app setup without encountering the 403 error.
