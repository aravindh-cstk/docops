---
title: "Fetching Entries by Custom Slug - Limitations and Correct Approach"
description: "Fetching Entries by Custom Slug - Limitations and Correct Approach"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/21-fetching-entries-by-custom-slug-limitations-and-correct-approach
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs41a62f5596fb5c13
---

# Fetching Entries by Custom Slug - Limitations and Correct Approach

A customer wants to set up custom slugs for entries and fetch content using those slugs directly, without relying on query parameters. They want a URL-based lookup that returns a unique entry.

**Root Cause**

Fetching entries solely by a URL slug without query parameters is not directly supported because a single URL may correspond to an entry that references multiple other entries through reference fields, modular blocks, or other structures. It is not possible to deterministically derive a unique entry UID and content type UID from a URL alone in all cases.

**Resolution**

1.  Use the URL field in Contentstack entries to store the slug value. Each entry’s URL field serves as a unique path identifier.
2.  Query entries by their URL field value using the query JSON parameter: GET /v3/content\_types/{uid}/entries?query={“url”:“/my-slug”}&environment=production
3.  Ensure the URL field value is unique across entries within the content type to guarantee a single matching result.
4.  For multi-locale setups, include the locale parameter alongside the URL query to retrieve the correct locale version: &locale=fr-fr
5.  If slugs must be routable across multiple content types (for example, a catch-all routing pattern), query each relevant content type sequentially until a match is found, or build a routing table at build time.

After implementing URL field queries, confirm that fetching a known URL slug returns the expected single entry without requiring the entry UID.
