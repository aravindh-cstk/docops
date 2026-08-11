---
title: "Does Launch support a data cache like Next.js App Router?"
description: "Does Launch support a data cache like Next.js App Router?"
url: /launch/troubleshooting-and-faqs/launch-faqs/02-caching-faqs/12-does-launch-support-a-data-cache-like-next-js-app-router
doc_type: faq
_cms_section_uid: cs3af4c9c7caaf8607
_cms_faq_uid: cse53bfb8ff4b32eac
---

# Does Launch support a data cache like Next.js App Router?

No. Launch does not support the native data cache feature of the Next.js App Router (e.g., fetchCache, revalidatePath, revalidateTag) due to its serverless and [read-only file system architecture](/docs/launch/nextjs-on-launch#file-system).
