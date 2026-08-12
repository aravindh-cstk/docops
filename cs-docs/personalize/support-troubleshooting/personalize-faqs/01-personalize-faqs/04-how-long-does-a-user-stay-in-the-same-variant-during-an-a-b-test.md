---
title: "How long does a user stay in the same variant during an A/B test?"
description: "How long does a user stay in the same variant during an A/B test?"
url: /personalize/support-troubleshooting/personalize-faqs/01-personalize-faqs/04-how-long-does-a-user-stay-in-the-same-variant-during-an-a-b-test
doc_type: faq
_cms_section_uid: cscb528d10f8112334
_cms_faq_uid: cs788122d3321d18f9
---

# How long does a user stay in the same variant during an A/B test?

A user’s variant assignment remains consistent for the entire duration of the test. Each user is assigned to a variant based on their unique identifier (UID), stored as a cookie by the Personalize Edge SDK. This ensures that every user sees the same variant each time they visit, keeping test data accurate and results reliable. The assignment remains fixed unless the cookie is deleted, reset, or expires. If the cookie is cleared or expires, the user may be re-assigned to a variant during their next session. This design prevents re-bucketing and ensures precise conversion tracking throughout the A/B test.
