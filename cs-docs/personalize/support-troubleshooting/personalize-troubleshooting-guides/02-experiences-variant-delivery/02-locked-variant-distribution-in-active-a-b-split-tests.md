---
title: "Locked Variant Distribution in Active A/B Split Tests"
description: "Locked Variant Distribution in Active A/B Split Tests"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/02-experiences-variant-delivery/02-locked-variant-distribution-in-active-a-b-split-tests
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: csb2cc4fbb00e65295
---

# Locked Variant Distribution in Active A/B Split Tests

Ending an A/B split test to promote a winning variant can be difficult because the variant distribution sliders remain locked, even if the test is paused.

**Root Cause**

System locks on variant distribution are a deliberate safeguard once an experiment is live. This ensures test results remain statistically valid by preventing mid-test adjustments that would skew data.

**Resolution**

1.  Recognize that distribution sliders are non-functional while a test is running or paused.
2.  Identify the winning variant based on current analytics.
3.  Create a new draft of the personalized experience to override the locked settings.
4.  Direct 100% of the traffic to the winning variant within the new draft to "promote" the winner.
5.  Manually copy the winning content into the main baseline entry if it is intended to replace the original version permanently.

Publish the new draft with 100% traffic directed to the winner. If the winning content is consistently served to all users, the issue is resolved.
