---
title: "Do I need to redeploy after enabling Event Tracking?"
description: "Do I need to redeploy after enabling Event Tracking?"
url: /launch/support-troubleshooting/launch-faqs/03-event-tracking-lytics-faqs/02-do-i-need-to-redeploy-after-enabling-event-tracking
doc_type: faq
_cms_section_uid: cs840236b368c4a868
_cms_faq_uid: cse55e12e03c7d7eb0
---

# Do I need to redeploy after enabling Event Tracking?

Yes. If your application uses [ETag-based](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag) browser-side caching, you must redeploy your site. This ensures that the Event Tracking script is correctly delivered to users.
