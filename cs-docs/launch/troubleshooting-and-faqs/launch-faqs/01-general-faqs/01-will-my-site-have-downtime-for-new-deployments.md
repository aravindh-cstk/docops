---
title: "Will my site have downtime for new deployments?"
description: "Will my site have downtime for new deployments?"
url: /launch/troubleshooting-and-faqs/launch-faqs/01-general-faqs/01-will-my-site-have-downtime-for-new-deployments
doc_type: faq
_cms_section_uid: cs0eb4f5c1316e0518
_cms_faq_uid: cs57eca4b623bee1b6
---

# Will my site have downtime for new deployments?

No. Your last successful deployment will remain active until it is replaced by a subsequent successful deployment. However, redeploying your site will clear the CDN cache for your site, so previously cached pages will be served as uncached requests the first time they are accessed.
