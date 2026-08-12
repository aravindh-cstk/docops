---
title: "401 Errors Caused by Using a Preview Token Instead of a Delivery Token"
description: "401 Errors Caused by Using a Preview Token Instead of a Delivery Token"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/082-401-errors-caused-by-using-a-preview-token-instead-of-a-delivery-token
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs2e5ceb1574ee3972
---

# 401 Errors Caused by Using a Preview Token Instead of a Delivery Token

Intermittent 401 Unauthorized errors appear on CDA requests. The token appears valid because it works for some requests but fails on others.

**Root Cause**

The token being used is a preview token, not a delivery token. Preview tokens are valid for Preview API requests but are not authorized for the standard CDA (cdn.contentstack.io) endpoints. When a preview token is used on a delivery endpoint, the API returns a 401 error because the token type does not match the endpoint’s authorization requirements.

**Resolution**

1.  Review the token configured in the application or SDK and confirm its type in Settings > Tokens.
2.  If the token is a Preview Token, replace it with a Delivery Token scoped to the correct environment.
3.  Ensure that delivery tokens and preview tokens are never interchanged - use delivery tokens for CDA production requests and preview tokens only for Preview API requests.

After replacing the preview token with the correct delivery token, re-run the affected CDA requests and confirm that 401 errors no longer occur.
