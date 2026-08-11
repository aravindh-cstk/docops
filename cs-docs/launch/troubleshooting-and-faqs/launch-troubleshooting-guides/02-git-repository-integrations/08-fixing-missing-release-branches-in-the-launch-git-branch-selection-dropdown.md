---
title: "Fixing Missing Release Branches in the Launch Git Branch Selection Dropdown"
description: "Fixing Missing Release Branches in the Launch Git Branch Selection Dropdown"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/02-git-repository-integrations/08-fixing-missing-release-branches-in-the-launch-git-branch-selection-dropdown
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: cs53ef54288fce0bc5
---

# Fixing Missing Release Branches in the Launch Git Branch Selection Dropdown

Release branches (such as those using a release-\* naming prefix) exist in a connected GitHub repository but do not appear in the Launch UI’s branch selection dropdown when switching branches for an environment.

**Root Cause**

A synchronization gap between GitHub and the Launch UI’s branch selection logic caused certain branch naming patterns to be excluded from the dropdown, even though the branches existed in the repository and were otherwise accessible via the Launch API.

**Resolution**

1.  Confirm that the missing branches exist in the connected GitHub repository and follow the expected naming pattern (e.g., release-\*).
2.  As an interim workaround, use the Launch API directly to target the specific branch for deployment rather than relying on the UI dropdown.
3.  Report the issue to Contentstack Support with the organization UID, project name, and the specific branch names that are not appearing.
4.  Contentstack Engineering reviews the GitHub-to-Launch UI synchronization logic (including webhook and sync logs) and applies a fix for branch visibility.
5.  After the fix is deployed, verify in the Launch UI that the previously missing release branches now appear correctly in the branch selection dropdown.

The issue is resolved when all expected branches, including those with release-\* or similar naming patterns, appear correctly in the Launch UI’s branch selection dropdown, and the API-based workaround is no longer required.
