---
title: "Can I retrieve published content from the fallback language while using Contentstack’s Content Delivery API?"
description: "Can I retrieve published content from the fallback language while using Contentstack’s Content Delivery API?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/22-localization-faqs/05-can-i-retrieve-published-content-from-the-fallback-language-while-using-contents
doc_type: faq
_cms_section_uid: csaaf277afb9a16c48
_cms_faq_uid: csf906b3d86f261595
---

# Can I retrieve published content from the fallback language while using Contentstack’s Content Delivery API?

Yes, you can retrieve content from the fallback language version of an entry or asset if the current localized version hasn’t been published. Pass the include\_fallback=true query parameter to fetch the published version from the fallback language. Learn more about how the fallback logic works while [retrieving published content](/docs/headless-cms/about-fallback-languages#retrieve-fallback-language-content-for-published-entries).

You can also refer to our Content Delivery API documentation on [entries](/docs/developers/apis/content-delivery-api#entries) and [assets](/docs/developers/apis/content-delivery-api#assets) to understand how you can fetch fallback content for published entries.
