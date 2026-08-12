---
title: "CDA Timeout Behavior - No Single Published Timeout Value"
description: "CDA Timeout Behavior - No Single Published Timeout Value"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/14-cda-timeout-behavior-no-single-published-timeout-value
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs0dbd6714cec30571
---

# CDA Timeout Behavior - No Single Published Timeout Value

An application needs to configure client-side timeouts and fallbacks for CDA requests. The question is: what is the standard timeout for Contentstack CDA calls?

**Root Cause**

Contentstack does not publish a single fixed timeout value for all CDA calls. The effective timeout varies based on the endpoint type (REST vs GraphQL vs Images API), query complexity (reference depth, result set size), CDN region, and current infrastructure load. A simple entry fetch may respond in under 100ms; a deeply nested reference query under load may take several seconds.

**Resolution**

Configure client-side timeouts based on the specific endpoint and use case:

1.  For simple GET entry or asset calls: set a timeout of 5–8 seconds. These calls should respond quickly and a longer timeout indicates a problem worth surfacing.
2.  For complex reference-heavy queries: set a timeout of 10–15 seconds to allow for origin processing under normal load.
3.  For GraphQL queries with large result sets: set a timeout of 15–30 seconds for complex queries.
4.  Always pair timeouts with retry logic and fallback behavior (for example, serve cached content or a graceful degraded state) so a single timed-out request does not cause a page load failure.
5.  Monitor p99 response times for each endpoint type over time and adjust timeouts based on observed baseline performance in the specific region.

After configuring endpoint-appropriate timeouts and fallback behavior, confirm that requests exceeding the timeout fail gracefully and trigger the fallback rather than hanging indefinitely.
