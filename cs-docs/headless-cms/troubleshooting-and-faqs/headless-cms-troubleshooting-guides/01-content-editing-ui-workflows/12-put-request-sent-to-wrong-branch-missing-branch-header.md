---
title: "PUT Request Sent to Wrong Branch - Missing Branch Header"
description: "PUT Request Sent to Wrong Branch - Missing Branch Header"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/12-put-request-sent-to-wrong-branch-missing-branch-header
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs38561938a68288df
---

# PUT Request Sent to Wrong Branch - Missing Branch Header

A CMA PUT request intended for a specific branch is applied to the main branch instead. The entry update appears on main rather than the intended target branch.

**Root Cause**

The CMA defaults all requests to the main branch when no branch header is included. Without explicitly specifying the branch in the request header, every CMA operation targets main, regardless of any branch context in the UI or the calling application.

**Resolution**

1.  Add the branch header to all CMA requests that should target a specific branch: branch: <branch\_uid>
2.  Verify the branch UID by listing available branches: GET /v3/stacks/branches
3.  Re-run the PUT request with the branch header included and confirm the update is applied to the correct branch.

After adding the branch header, execute the PUT request and verify the entry is updated in the correct branch, not in main.
