---
title: "JSON Import Fails Because Connectors/Tokens Do Not Exist in Target Org"
description: "JSON Import Fails Because Connectors/Tokens Do Not Exist in Target Org"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/01-workspaces-access-administration/03-json-import-fails-because-connectors-tokens-do-not-exist-in-target-org
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: csa7d664061c85cfa5
---

# JSON Import Fails Because Connectors/Tokens Do Not Exist in Target Org

When importing automation JSON into another organization, the import may fail or result in incomplete configuration because referenced connectors/tokens are missing.

**Root Cause** JSON imports do not resolve dependencies (connectors, auth tokens) across orgs.

**Resolution**

1.  Confirm which connectors and tokens are referenced in the JSON.
2.  Recreate required connectors in target org (if permitted).
3.  Prefer recipe-link import for cross-org migration when available.
4.  After import, rebind connections and validate action authentication.

Automation imports with all steps configured and actions authenticate successfully in the target org.
