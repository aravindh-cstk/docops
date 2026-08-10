---
title: "I am trying to create a new entry using the API and I am getting the following permissions error: { \"error_message\": \"Access denied. You have insufficient permissions to perform this operation.\", \"error_code\": 162 }. What could be the problem?"
description: "I am trying to create a new entry using the API and I am getting the following permissions error: { \"error_message\": \"Access denied. You have insufficient permissions to perform this operation.\", \"error_code\": 162 }. What could be the problem?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/12-entries-faqs/09-i-am-trying-to-create-a-new-entry-using-the-api-and-i-am-getting-the-following-p
doc_type: faq
_cms_section_uid: cs0516e493f7db68ed
_cms_faq_uid: csb31be9204f70a6c5
---

# I am trying to create a new entry using the API and I am getting the following permissions error: { "error_message": "Access denied. You have insufficient permissions to perform this operation.", "error_code": 162 }. What could be the problem?

To create entries in a stack, you need to be either the [owner of the stack](/docs/headless-cms/types-of-roles#owner) or you need to be assigned a role that contains write access to the stack. If you are not the owner of the stack, you need to acquire write access to your role from the owner of the stack.
