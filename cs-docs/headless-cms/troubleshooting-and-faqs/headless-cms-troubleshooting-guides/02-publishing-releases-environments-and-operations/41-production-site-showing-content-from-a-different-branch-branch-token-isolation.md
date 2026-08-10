---
title: "Production Site Showing Content from a Different Branch (Branch Token Isolation)"
description: "Production Site Showing Content from a Different Branch (Branch Token Isolation)"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/41-production-site-showing-content-from-a-different-branch-branch-token-isolation
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csb2d68482bf4c6e7b
---

# Production Site Showing Content from a Different Branch (Branch Token Isolation)

The production website intermittently displays content from a non-production branch (for example, an acceptance or staging branch). The issue occurs despite the production application always querying using branch: main.

**Root Cause**

Branch isolation in Contentstack CDN works as designed - CDN caching cannot mix branch data. The root cause in this scenario is that both production and acceptance environments are using the same delivery token, which is not restricted to a specific branch. Without branch-scoped tokens, a single token can return content from any branch, and CDN cache entries may be served across environments if the same token and URL structure is shared.

**Resolution**

1.  Create separate, branch-restricted delivery tokens for each environment: a Production token restricted to branch: main, and an Acceptance token restricted to branch: acceptance (or equivalent).
2.  Update the production application to use only the production-scoped delivery token.
3.  Update the acceptance application to use only the acceptance-scoped token.
4.  Ensure no shared tokens are used across production and non-production environments.

After implementing branch-restricted tokens, verify by querying the production endpoint - only content from the main branch should be returned, regardless of cache state.
