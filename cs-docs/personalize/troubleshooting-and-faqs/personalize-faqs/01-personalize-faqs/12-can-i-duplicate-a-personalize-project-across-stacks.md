---
title: "Can I duplicate a Personalize project across stacks?"
description: "Can I duplicate a Personalize project across stacks?"
url: /personalize/troubleshooting-and-faqs/personalize-faqs/01-personalize-faqs/12-can-i-duplicate-a-personalize-project-across-stacks
doc_type: faq
_cms_section_uid: cscb528d10f8112334
_cms_faq_uid: csa74fc45ffc5670bf
---

# Can I duplicate a Personalize project across stacks?

You can use the [CLI](/docs/headless-cms/cli-supported-features-for-export-import-and-clone-operations#personalize-and-entry-variants) or [Personalize Management API](/docs/developers/apis/personalize-management-api) to duplicate key components of a project, such as attributes, audiences, and experience data across stacks. Full project duplication without CMS stacks can be achieved by combining available API endpoints and custom scripts.

**Attributes and Audiences** You can copy these programmatically using the Personalize Management API.

**Experiences and Variants**

-   Use the [Get All Experience Versions](/docs/developers/apis/personalize-management-api#get-all-experiences) endpoint to retrieve detailed experience and variant data.
-   Use the [Get a Single Experience](/docs/developers/apis/personalize-management-api#get-a-single-experience) endpoint to return metadata such as the name, description, and type.
-   Recreate experiences and variants in your target stack using the retrieved data.
