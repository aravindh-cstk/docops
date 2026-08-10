---
title: "Attaching Custom Metadata to Assets for Right to Be Forgotten (RTBF) Workflows"
description: "Attaching Custom Metadata to Assets for Right to Be Forgotten (RTBF) Workflows"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/01-attaching-custom-metadata-to-assets-for-right-to-be-forgotten-rtbf-workflows
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs09de1a1e2432f3a9
---

# Attaching Custom Metadata to Assets for Right to Be Forgotten (RTBF) Workflows

An ingestion platform uploads influencer-created assets to Contentstack and needs to attach creator ID metadata to each asset. The goal is to later query assets by creator ID to support Right to Be Forgotten (RTBF) deletion requests.

**Root Cause**

Contentstack supports custom metadata on assets and entries, but the workflow requires three separate CMA calls to correctly attach and publish the metadata.

**Resolution**

1.  Call 1: Upload the asset: POST /v3/assets with the file data.
2.  Call 2: Create metadata: POST /v3/metadata with the asset UID, the metadata key (for example, creator\_id), and the value. Include the extension\_uid or app\_uid in the request.
3.  Call 3: Publish the asset: POST /v3/assets/{asset\_uid}/publish. Metadata is published along with the asset.
4.  To query assets by creator\_id for RTBF: use the CMA asset search with metadata filters to retrieve all assets matching the creator\_id, then delete them as required.

After completing the three-step workflow, retrieve an uploaded asset and confirm the metadata key (creator\_id) is present in the response and correctly reflects the uploaded value.
