---
title: "Resolving Bitbucket Branch Retrieval Issues in Launch"
description: "Resolving Bitbucket Branch Retrieval Issues in Launch"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/02-git-repository-integrations/03-resolving-bitbucket-branch-retrieval-issues-in-launch
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: cs2a1ccda57ce4181b
---

# Resolving Bitbucket Branch Retrieval Issues in Launch

The branch selection menu in Launch fails to populate when connecting to a Bitbucket repository. This prevents the selection of source branches, stalling the deployment configuration process.

**Root Cause**

This issue is typically caused by expired OAuth tokens, insufficient repository permissions, or browser-side session conflicts that block the integration from fetching the repository metadata.

**Resolution**

1.  Re-authenticate the Bitbucket integration within the Launch settings to refresh the connection.
2.  Verify that the Bitbucket account has the necessary permissions to access the specific repository and its branches.
3.  Ensure the OAuth token used for the integration has been granted the required scopes for repository read access.
4.  Use an Incognito browser window or clear the browser cache to rule out session-related display issues.

Access the project deployment or environment setup screen. The issue is resolved when the "Branch" dropdown menu successfully populates with the list of branches retrieved from the connected Bitbucket repository.
