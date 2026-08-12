---
title: "How do I fetch data of singleton content types without passing the entry UID?"
description: "How do I fetch data of singleton content types without passing the entry UID?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/18-graphql-faqs/03-how-do-i-fetch-data-of-singleton-content-types-without-passing-the-entry-uid
doc_type: faq
_cms_section_uid: csc612b9bb46be2d6d
_cms_faq_uid: cs8e5978eb8ae61dde
---

# How do I fetch data of singleton content types without passing the entry UID?

To avoid the hassles of passing specific entry UIDs while fetching an entry from a [singleton](/docs/headless-cms/single-vs-multiple-content-types) content type, you can prefix the content type UID with all\_, e.g., all\_header. You can query singleton content types in the same way as you query content types with [multiple entries](/docs/developers/apis/graphql-content-delivery-api#get-a-list-of-entries).

Consider the following query that attempts to fetch an entry of the **Header** singleton content type, which stores website header content:

```
query {
  all_header { # Where the header content type is of type singleton.
   total
   items {
    title
   }
  }
}
```

**Note**: All the filters and ordering functions will be available to the user. They would work the same as how you query a content type with multiple entries.
