---
title: "Live Edit Tags Not Working with GraphQL - addEditableTags on Connection Structure"
description: "Live Edit Tags Not Working with GraphQL - addEditableTags on Connection Structure"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/39-live-edit-tags-not-working-with-graphql-addeditabletags-on-connection-structure
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs3fa47eaf2724e043
---

# Live Edit Tags Not Working with GraphQL - addEditableTags on Connection Structure

addEditableTags() does not work when entry data comes from a GraphQL response. Edit icons do not appear on the frontend.

**Root Cause**

GraphQL responses use a connection structure: connection > edges > node. When this structure is passed directly into addEditableTags(), the function cannot traverse the nested layers to generate CSLP tag paths.

**Resolution**

1.  Before calling addEditableTags(), extract the entry node from the GraphQL response: const entry = response.data.allContentType.edges\[0\].node
2.  Pass the extracted node (the flat entry object) to addEditableTags() rather than the full GraphQL response.
3.  Ensure addEditableTags() receives the raw, unmodified entry node object.

After extracting the node before calling addEditableTags(), reload in Live Preview mode and confirm edit icons appear correctly on all editable fields.
