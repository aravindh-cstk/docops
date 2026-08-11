---
title: "Does Launch support read and write operations to the filesystem at the runtime?"
description: "Does Launch support read and write operations to the filesystem at the runtime?"
url: /launch/troubleshooting-and-faqs/launch-faqs/01-general-faqs/08-does-launch-support-read-and-write-operations-to-the-filesystem-at-the-runtime
doc_type: faq
_cms_section_uid: cs0eb4f5c1316e0518
_cms_faq_uid: cs0b224a795b90cf1a
---

# Does Launch support read and write operations to the filesystem at the runtime?

Launch runtime operates in a read-only file system, except for the designated /tmp directory, which facilitates write operations. The /tmp directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note**: The data stored in /tmp is non-persistent and is automatically deleted upon request completion.
