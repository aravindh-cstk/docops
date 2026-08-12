---
title: "Training Organization Missing After SSO Logi"
description: "Training Organization Missing After SSO Logi"
url: /administration/support-and-troubleshooting/administration-troubleshooting-guides/02-single-sign-on-sso-idp-configuration/02-training-organization-missing-after-sso-logi
doc_type: faq
_cms_section_uid: csb884e6cfbf4b3215
_cms_faq_uid: cs7c4669f6fcaaddc9
---

# Training Organization Missing After SSO Logi

Training organizations fail to appear in the organization dropdown after a successful SSO login.

**Root Cause**

A regional mismatch exists between the location of the training instance and the user's SSO login region, preventing the organization from being displayed.

**Resolution**

1.  Create a training instance in a region that aligns with the SSO login region.
2.  Use new email credentials to set up the instance.

After creating the instance in the correct region and logging in, check the organization list to verify if the training organization is visible.
