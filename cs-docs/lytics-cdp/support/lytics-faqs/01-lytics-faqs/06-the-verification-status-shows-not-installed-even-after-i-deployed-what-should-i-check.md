---
title: "The verification status shows \"Not installed\" even after I deployed. What should I check?"
description: "The verification status shows \"Not installed\" even after I deployed. What should I check?"
url: /lytics-cdp/support/lytics-faqs/01-lytics-faqs/06-the-verification-status-shows-not-installed-even-after-i-deployed-what-should-i-check
doc_type: faq
_cms_section_uid: cs8da2949fc1ed2318
_cms_faq_uid: csdd6e8bf4a25dafc9
---

# The verification status shows "Not installed" even after I deployed. What should I check?

Confirm the snippet is in <head> and not <body>, the page is live and loading in a normal browser session (not incognito), and your front end is not using a non-default Lytics stream. If it is using a non-default stream, the verification check will keep reporting Not installed even when data is flowing correctly.
