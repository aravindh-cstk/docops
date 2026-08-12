---
title: "CLI Stack Export Fails with \"No Management Token Found on Given Alias\""
description: "CLI Stack Export Fails with \"No Management Token Found on Given Alias\""
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/01-authentication-network-node-js-environments/12-cli-stack-export-fails-with-no-management-token-found-on-given-alias
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: cs0a4445b1df37c5c5
---

# CLI Stack Export Fails with "No Management Token Found on Given Alias"

CLI stack export failed with "No management token found on given alias" even though the token existed on the stack.

**Root Cause**

The token existed on the stack but was not registered in the CLI's local token store under that alias, so the CLI could not resolve it during export. This also occurs if the alias was later overwritten by a second auth:tokens:add call using the same alias with a different token, or if the alias was registered under a different CLI profile or user account than the one running the export. The token store is local to the machine and user profile, not read from the stack itself.

**Resolution**

1.  Register the token under the correct alias: csdx auth:tokens:add --management --alias <alias> --stack-api-key <stack\_api\_key> --token <management\_token>.
2.  Confirm registration: csdx auth:tokens.
3.  Re-run the export: csdx cm:stacks:export --stack-api-key <stack-api-key> --data-dir "<path>" --alias <alias>.
