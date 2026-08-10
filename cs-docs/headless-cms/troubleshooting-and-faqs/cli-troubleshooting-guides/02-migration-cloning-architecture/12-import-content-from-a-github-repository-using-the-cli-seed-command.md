---
title: "Import Content from a GitHub Repository Using the CLI Seed Command"
description: "Import Content from a GitHub Repository Using the CLI Seed Command"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/02-migration-cloning-architecture/12-import-content-from-a-github-repository-using-the-cli-seed-command
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csba3764910b1a80f2
---

# Import Content from a GitHub Repository Using the CLI Seed Command

Content needed to be imported directly from a GitHub repository into Contentstack.

**Root Cause**

The Seed command (csdx cm:stacks:seed) only imports content already in Contentstack's exported stack format, placed inside a folder named stack in the repository, with a GitHub Release created for it. The command downloads the latest release's tarball via the public GitHub API and runs it through the same import logic as cm:stacks:import. It reaches the GitHub REST API without an authentication header, so only public repositories work - no private repos or personal access tokens. It also fails if there's no stack folder or no published Release, even if the content itself is valid.

**Resolution**

1.  Export the source stack: csdx cm:stacks:export -A or csdx cm:stacks:export -a "management token".
2.  Create a public GitHub repository with a folder named stack inside it, and commit the exported content there.
3.  Create a GitHub Release on that repository - the Seed command downloads the latest release, not the latest commit.
4.  Run csdx cm:stacks:seed --repo "account/repository" to import. Use --stack-api-key for an existing stack, or --org and --stack-name to create a new one.
