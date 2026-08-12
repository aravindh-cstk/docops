---
title: "Taxonomy Must Be Published to Environments for CDA Taxonomy Queries"
description: "Taxonomy Must Be Published to Environments for CDA Taxonomy Queries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/19-taxonomy-must-be-published-to-environments-for-cda-taxonomy-queries
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs57397ee074de6ece
---

# Taxonomy Must Be Published to Environments for CDA Taxonomy Queries

After the Taxonomy Publishing feature rollout, taxonomy-based delivery queries return no results or fail to filter correctly, even though taxonomy terms are correctly assigned to entries.

**Root Cause**

The Taxonomy Publishing feature makes taxonomy data environment-specific in the CDA. After the rollout, taxonomy terms and their hierarchies must be explicitly published to each environment for taxonomy-based CDA queries to function. Previously, taxonomies were available in the CDA without environment-specific publishing.

**Resolution**

1.  Navigate to the Taxonomies section in the Contentstack dashboard.
2.  Publish each taxonomy and its terms to the target environments where they need to be accessible via the CDA.
3.  After publishing, re-run taxonomy-based CDA queries and confirm results are returned correctly.
4.  Include taxonomy publishing in the content operations workflow - whenever a new taxonomy or term is created, publish it to all relevant environments.

After publishing taxonomies to the target environments, confirm that CDA taxonomy queries return the expected filtered results.
