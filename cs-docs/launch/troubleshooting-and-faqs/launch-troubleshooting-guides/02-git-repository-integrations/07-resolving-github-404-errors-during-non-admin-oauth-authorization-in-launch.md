---
title: "Resolving GitHub 404 Errors During Non-Admin OAuth Authorization in Launch"
description: "Resolving GitHub 404 Errors During Non-Admin OAuth Authorization in Launch"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/02-git-repository-integrations/07-resolving-github-404-errors-during-non-admin-oauth-authorization-in-launch
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: cs2064ed954d5b6586
---

# Resolving GitHub 404 Errors During Non-Admin OAuth Authorization in Launch

When creating a new Launch project using “Import from Git repository” with a GitHub Enterprise account, a user who is not a GitHub organization admin completes the OAuth authorization request, but after the GitHub admin approves the app connection, refreshing the window shows a GitHub 404 page. The user cannot continue creating the Launch project, and restarting the flow leads to the same 404 error.

**Root Cause**

The Launch-to-GitHub connection flow for Enterprise GitHub accounts requires the user creating the Launch project to themselves hold GitHub organization admin permissions, or to be properly aligned with the OAuth and GitHub App installation flow’s permission requirements. A delegated approval flow (where a separate admin approves on behalf of a non-admin requester) can result in an incomplete connection state that surfaces as a 404 page.

**Resolution**

1.  Confirm whether the user attempting to create the Launch project holds GitHub organization admin permissions for the relevant GitHub Enterprise organization.
2.  If the user is not a GitHub organization admin, have a user who does hold that role create the Launch project and complete the GitHub OAuth and App installation flow directly.
3.  As an alternative that does not require GitHub organization admin permissions, use the file upload import method (via the Launch UI or the Contentstack CLI) instead of the Git repository import flow.
4.  If the Git-based import is required, retest in an incognito browser window to rule out session-related display issues, and provide a screen recording of the exact steps to Contentstack Support if the 404 persists.

The issue is resolved when the Launch project is successfully created, either by having a GitHub organization admin perform the Git-based import directly, or by using the file upload import method as a workaround.
