---
title: "Impact of renaming environments on API and tool configurations"
description: "Impact of renaming environments on API and tool configurations"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/04-impact-of-renaming-environments-on-api-and-tool-configurations
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs379869d094d0c841
---

# Impact of renaming environments on API and tool configurations

Renaming an environment in the CMS UI may cause connectivity issues in APIs, SDKs, and the CLI when the new name is not updated. This prevents external tools from accessing the renamed environment.

**Root Cause**

Environment name changes affect all code or tooling references to that environment, although API tokens remain valid.

**Resolution**

1.  Update the environment name in all API calls, SDK configurations, and CLI usage to reflect the new name.

After updating the environment name in the relevant code or tools, execute a test request. If the request connects successfully to the renamed environment, the updates are correct.
