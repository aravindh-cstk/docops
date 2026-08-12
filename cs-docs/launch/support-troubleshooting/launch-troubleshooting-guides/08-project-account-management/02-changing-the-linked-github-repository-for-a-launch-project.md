---
title: "Changing the Linked GitHub Repository for a Launch Project"
description: "Changing the Linked GitHub Repository for a Launch Project"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/08-project-account-management/02-changing-the-linked-github-repository-for-a-launch-project
doc_type: faq
_cms_section_uid: csdf5c487bad88febc
_cms_faq_uid: cs4159b8a3043d8ee2
---

# Changing the Linked GitHub Repository for a Launch Project

A Launch project needs to be relinked to a different GitHub repository - for example, when a codebase is moved to a new organization or repository. The Launch UI does not expose a direct option to change the linked repository on an existing project.

**Root Cause**

Launch does not currently provide a self-service option to change the linked GitHub repository from within the project settings UI. The repository link is established at project creation, and changing it requires manual intervention by the Support team in coordination with the Launch team.

**Resolution**

1.  Contact Contentstack Support and provide the project UID, the current repository URL, and the new repository URL you wish to link.
2.  Support will coordinate with the Launch team to disconnect the existing GitHub connection and re-establish it pointing to the new repository.
3.  Once the update is applied, verify that the new repository is correctly linked by triggering a test deployment from the new source.
4.  Alternatively, if a new project can be created, set up a fresh Launch project connected to the new repository, migrate environment variables and domain configurations, and decommission the old project.

The issue is resolved when deployments trigger from the new repository and all build outputs match the expected source code.
