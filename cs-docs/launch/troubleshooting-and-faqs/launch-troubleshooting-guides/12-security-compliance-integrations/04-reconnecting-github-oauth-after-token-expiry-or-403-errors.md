---
title: "Reconnecting GitHub OAuth After Token Expiry or 403 Errors"
description: "Reconnecting GitHub OAuth After Token Expiry or 403 Errors"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/12-security-compliance-integrations/04-reconnecting-github-oauth-after-token-expiry-or-403-errors
doc_type: faq
_cms_section_uid: cs1f3cd549d8c00204
_cms_faq_uid: cs2fbf50efbff15aa0
---

# Reconnecting GitHub OAuth After Token Expiry or 403 Errors

Deployments from a GitHub-connected Launch project begin failing with 403 Forbidden errors. The GitHub integration status may show as disconnected or the deployment logs indicate an OAuth authentication failure.

**Root Cause**

GitHub OAuth tokens used by the Launch GitHub integration can expire or become invalidated—for example, when a GitHub organization admin revokes the token, the GitHub App permissions change, or the token exceeds its validity period. An expired or revoked token causes all deployment triggers from the affected repository to fail with authentication errors.

**Resolution**

1.  Navigate to the Launch project settings and initiate a GitHub reconnection by selecting the option to disconnect and reconnect the Git provider.
2.  As a GitHub Admin for the repository or organization, reinstall the Contentstack GitHub App by navigating to GitHub Settings > Applications > Installed GitHub Apps and reinstalling the Contentstack app.
3.  Complete the OAuth authorization flow in the Launch UI to generate a fresh token.
4.  Trigger a test deployment after reconnection to confirm the new OAuth token is accepted and deployments succeed.

The issue is resolved when the GitHub integration shows as connected, deployments trigger successfully from the repository, and 403 errors no longer appear in deployment logs.
