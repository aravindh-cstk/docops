---
title: "What if my merge action fails?"
description: "What if my merge action fails?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/05-branches-faqs/19-what-if-my-merge-action-fails
doc_type: faq
_cms_section_uid: cs3dcdb31484ee5bae
_cms_faq_uid: cs2bfc4e8a31135621
---

# What if my merge action fails?

Before performing a merge, pre-checks are performed to make sure the merge can complete. If these pre-checks fail, the merge will not be attempted, and you’ll see that merge job as failed, with an explanation of why. If these checks pass, the merge will be performed. By default, a backup branch is created of the branch you are merging into before any merge action takes place. You can create and point an alias to this backup branch to get your production website back to it’s previous state. Please refer to our [Merging Branches](/docs/headless-cms/merging-branches) documentation for more information on how to select the best possible merge strategy.
