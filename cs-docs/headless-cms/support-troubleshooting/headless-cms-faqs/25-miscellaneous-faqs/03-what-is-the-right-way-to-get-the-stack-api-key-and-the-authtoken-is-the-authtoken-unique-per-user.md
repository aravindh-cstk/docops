---
title: "What is the right way to get the stack API Key and the Authtoken? Is the Authtoken unique per user?"
description: "What is the right way to get the stack API Key and the Authtoken? Is the Authtoken unique per user?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/25-miscellaneous-faqs/03-what-is-the-right-way-to-get-the-stack-api-key-and-the-authtoken-is-the-authtoken-unique-per-user
doc_type: faq
_cms_section_uid: cse84e6cb32ee70d81
_cms_faq_uid: cs14322ecda29256de
---

# What is the right way to get the stack API Key and the Authtoken? Is the Authtoken unique per user?

Yes, the Authtoken is unique per user. The authtoken is very important as it is required to perform the write API calls. 

To retrieve the API Key of your stack, perform the steps given below after logging into your [Contentstack account](https://www.contentstack.com/login):

1.  In your stack, click the **Settings** icon on the left navigation panel.
2.  By default, you will be on the **Stack** option. At the right-hand side of the page, you will find the **API Credentials** section under which you will get the **API Key** for your stack.

To retrieve the [Authtoken](/docs/headless-cms/types-of-tokens#authentication-tokens-authtokens), you need to log in to your Contentstack account via the login call of the [User Session](/docs/developers/apis/content-management-api#user-session) API Request. And, in the response body of the call, you will find your Authtoken.
