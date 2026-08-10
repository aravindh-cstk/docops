---
title: "I am trying to add an entry to a release, but I get a warning message about adding entries to an older release. What does this mean?"
description: "I am trying to add an entry to a release, but I get a warning message about adding entries to an older release. What does this mean?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/28-releases-faqs/03-i-am-trying-to-add-an-entry-to-a-release-but-i-get-a-warning-message-about-addin
doc_type: faq
_cms_section_uid: cs75e252aef29e0a03
_cms_faq_uid: csbef437b0a83e0237
---

# I am trying to add an entry to a release, but I get a warning message about adding entries to an older release. What does this mean?

This warning indicates you're trying to add an entry to a release that was created before the bulk add to release feature was enabled. To resolve this, [clone](/docs/headless-cms/clone-a-release) the older release into a new one that supports [nested references](/docs/headless-cms/about-nested-reference-publishing), and then add the entries to the cloned release.
