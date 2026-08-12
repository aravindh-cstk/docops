---
title: "Live Preview Edit Button Uses Branch Alias Instead of Actual Branch"
description: "Live Preview Edit Button Uses Branch Alias Instead of Actual Branch"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/20-live-preview-edit-button-uses-branch-alias-instead-of-actual-branch
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csfbc4b3160b24f4cd
---

# Live Preview Edit Button Uses Branch Alias Instead of Actual Branch

When clicking the Edit button in Live Preview, the generated URL references a branch alias (for example, prod\_alias) instead of the actual branch name (for example, main). This causes a ‘branch not found’ error when the link is opened.

**Root Cause**

The Live Preview SDK constructs Edit URLs using the stack\_details value provided during initialization. If prod\_alias is passed as the branch identifier in stack\_details, the SDK uses it verbatim in Edit URLs. Branch alias resolution is not supported in Live Preview Edit URLs - only actual branch UIDs are valid.

**Resolution**

1.  Update the Live Preview SDK initialization to pass the actual branch UID (for example, main) in the stack\_details object instead of the branch alias.
2.  Remove any alias references from the branch configuration in the Live Preview init call.

After updating the branch reference, click the Edit button in Live Preview and confirm the generated URL correctly references the actual branch and opens the entry in the editor.
