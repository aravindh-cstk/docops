---
title: "Restoring GIT Connectivity via Repair Connection"
description: "Restoring GIT Connectivity via Repair Connection"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/02-git-repository-integrations/02-restoring-git-connectivity-via-repair-connection
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: cse5e8dbf39ec4b79b
---

# Restoring GIT Connectivity via Repair Connection

Connectivity failures within the GIT integration disrupt automated deployment workflows, preventing the synchronization of repository updates with the Launch environment.

**Root Cause**

Generic integration issues between the platform and the GIT provider resulted in a loss of connectivity, though the specific underlying technical trigger was not identified in the logs.

**Resolution**

To restore the link between the source repository and Launch, follow these steps:

1.  **Initiate Reconnection**: Access the project's settings and initiate a reconnection with the GIT provider.
2.  **Repair Connection**: Utilize the "Repair Connection" tool to programmatically re-establish the integration and fix connectivity errors.
3.  **Confirm Status**: Verify that the integration is active and that the repository is once again communicating with the platform.

The issue is resolved when the GIT integration status returns to "Connected" and the user confirms that the case can be closed.
