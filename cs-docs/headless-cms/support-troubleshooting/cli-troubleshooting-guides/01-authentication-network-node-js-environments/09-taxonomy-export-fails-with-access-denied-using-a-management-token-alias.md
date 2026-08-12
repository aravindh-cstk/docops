---
title: "Taxonomy Export Fails with \"Access Denied\" Using a Management Token Alias"
description: "Taxonomy Export Fails with \"Access Denied\" Using a Management Token Alias"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/01-authentication-network-node-js-environments/09-taxonomy-export-fails-with-access-denied-using-a-management-token-alias
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cse29efd0f7d907879
---

# Taxonomy Export Fails with "Access Denied" Using a Management Token Alias

A taxonomy export command using a management-token alias failed with "Access denied. Please check your permissions."

**Root Cause**

This message is the Management API's generic response for any HTTP 403, not a taxonomy- or version-specific error. Management-token aliases are a supported authentication method for taxonomy export. A 403 here is more often caused by the token lacking taxonomy read access or scope, the organization's plan not including taxonomies, the token predating taxonomy permissions on its role, or the alias pointing to a branch without taxonomy access, than by a CLI defect.

**Resolution**

1.  Confirm the management token's role includes taxonomy read access and that the token is scoped to the correct stack.
2.  Re-check the alias configuration with csdx auth:tokens to confirm it points at the intended stack and token.
3.  If permissions check out and a previous CLI version worked with no other change, downgrading (for example npm install -g @contentstack/cli@1.51.0) is a reasonable temporary workaround, not a confirmed fix.
4.  If the permissions check doesn't explain the failure, escalate to Contentstack support with the exact CLI version (csdx version), the full error response body, and the token's role and permissions.
