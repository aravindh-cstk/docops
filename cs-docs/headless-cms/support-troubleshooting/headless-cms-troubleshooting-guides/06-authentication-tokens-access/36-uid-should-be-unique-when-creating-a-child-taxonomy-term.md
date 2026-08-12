---
title: "‘UID Should Be Unique’ When Creating a Child Taxonomy Term"
description: "‘UID Should Be Unique’ When Creating a Child Taxonomy Term"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/36-uid-should-be-unique-when-creating-a-child-taxonomy-term
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csb670c20afbb5aa8a
---

# ‘UID Should Be Unique’ When Creating a Child Taxonomy Term

Creating a child taxonomy term returns a ‘UID should be unique’ error even though there are no visible child terms with that UID under the parent.

**Root Cause**

Taxonomy term UIDs must be unique across the entire taxonomy - not just within the same parent level. If a term with the same UID exists anywhere else in the taxonomy tree, a new term cannot be created with that UID.

**Resolution**

1.  Search the entire taxonomy for any existing term with the same UID: GET /v3/taxonomies/{taxonomy\_uid}/terms via the CMA.
2.  If the conflicting term is unnecessary, delete it before creating the new term.
3.  If both terms need to exist, choose a different UID for the new term (for example, append the parent path to make it unique).

After resolving the UID conflict, retry creating the child term and confirm it is created successfully under the intended parent.
