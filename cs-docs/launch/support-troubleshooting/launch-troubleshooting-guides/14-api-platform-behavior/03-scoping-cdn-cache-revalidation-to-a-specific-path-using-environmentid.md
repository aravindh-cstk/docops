---
title: "Scoping CDN Cache Revalidation to a Specific Path Using environmentId"
description: "Scoping CDN Cache Revalidation to a Specific Path Using environmentId"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/14-api-platform-behavior/03-scoping-cdn-cache-revalidation-to-a-specific-path-using-environmentid
doc_type: faq
_cms_section_uid: cs31ce385b0eaf3343
_cms_faq_uid: cs7709838ac61f061b
---

# Scoping CDN Cache Revalidation to a Specific Path Using environmentId

When calling the Launch revalidate-cdn-cache endpoint with both a hostname and a cachePath parameter combined in the same request, the platform purges the entire hostname’s cache instead of limiting the purge to the specified path.

**Root Cause**

The Launch API supports only one revalidation strategy per request: cachePath, hostnames, or cacheTags. Combining hostnames and cachePath in the same payload is not supported and results in the broader hostname-level purge rather than the intended scoped purge.

**Resolution**

1.  To achieve scoped revalidation limited to a specific deployment, target the specific environmentId together with the required cachePath in the request, rather than combining hostnames with cachePath.
2.  This environmentId and cachePath combination limits the purge to the deployment associated with that environment, achieving the scoped behavior that combining hostnames and cachePath does not provide.
3.  If multiple revalidation strategies are required (for example, purging by both cacheTags and a specific path), make separate API calls for each strategy rather than attempting to combine them in a single request.
4.  Update any existing automation or scripts that currently combine hostnames and cachePath to instead use the environmentId and cachePath pattern for predictable, scoped purges.

The issue is resolved when cache revalidation calls using environmentId and cachePath correctly limit the purge to the intended deployment, without unintentionally invalidating the entire hostname cache.
