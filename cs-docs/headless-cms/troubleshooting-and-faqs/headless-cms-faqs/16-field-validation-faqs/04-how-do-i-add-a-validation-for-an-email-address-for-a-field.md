---
title: "How do I add a validation for an email address for a field?"
description: "How do I add a validation for an email address for a field?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/16-field-validation-faqs/04-how-do-i-add-a-validation-for-an-email-address-for-a-field
doc_type: faq
_cms_section_uid: cs60aa3bee3d7cfa1e
_cms_faq_uid: cs5f17b89d4e0e8ef7
---

# How do I add a validation for an email address for a field?

Validations can be added to “[Single Line Textbox](/docs/headless-cms/single-line-textbox)” and “[Multi Line textbox](/docs/headless-cms/multi-line-textbox)” fields using regex (regular expressions). When [creating a content type](/docs/headless-cms/create-a-content-type), perform the following steps to add regex validation to a field in order to check for email addresses:

1.  Edit the required content type. Click on the “Email” field. This opens the **Edit Properties** window of the field.
2.  Now, enter the following regex value in the “[Validation (Regex)](/docs/headless-cms/validation-regex)” property. This will validate email addresses: \[a-z0-9!#$%&'\*+=?^\_\`{|}~-\]+(?:\\.\[a-z0-9!#$%&'\*+=?^\_\`{|}~-\]+)\*@(?:\[a-z0-9\](?:\[a-z0-9-\]\*\[a-z0-9\])?\\.)+\[a-z0-9\](?:\[a-z0-9-\]\*\[a-z0-9\])?
