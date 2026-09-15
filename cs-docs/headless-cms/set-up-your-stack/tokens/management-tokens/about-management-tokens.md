---
title: "About Management Tokens"
description: "Discover how Management Tokens provide secure, flexible access to manage your stack content seamlessly with Contentstack's Content Management API."
url: /headless-cms/about-management-tokens
uid: bltb6fbeaf5f84fe5cf
---

# About Management Tokens

## About Management Tokens

Management Tokens are secure credentials that grant read-write or read-only access to the content within your stack. When used in combination with the stack API key, they authorize requests made via the [Content Management API](/docs/developers/apis/content-management-api) (CMA), enabling you to programmatically manage the content of your [stack](/docs/headless-cms/about-stack/).

**Note:** A management token can be assigned to all or specific branches and aliases, giving you flexibility in how content access is controlled. For more information, refer to our [Global Modules](/docs/headless-cms/global-modules) document.

A management token with read-write permissions can perform all possible actions on the following modules:

-   [Entries](/docs/headless-cms/about-entries)
-   [Assets](/docs/headless-cms/about-assets)
-   [Content types](/docs/headless-cms/about-content-types)
-   [Labels](/docs/headless-cms/about-labels)
-   [Extensions](/docs/developer-hub/custom-field-location)
-   [Releases](/docs/headless-cms/about-releases)
-   [Environment](/docs/headless-cms/about-environments)
-   [Languages](/docs/headless-cms/about-languages)
-   [Webhooks](/docs/headless-cms/about-webhooks)
-   [Roles](/docs/headless-cms/types-of-roles)
-   [Users](/docs/administration/organization-users) (Except adding and removing users to/from a stack)
-   [Workflows](/docs/headless-cms/about-workflows) (Except for changing workflow stages)
-   [Publish Rules](/docs/headless-cms/about-publish-rules) (Except set up publishing rules that require the approval of users or roles)
-   [Audit Log](/docs/headless-cms/monitor-stack-activities-in-audit-log) (Read-only)
-   [Publish Queue](/docs/headless-cms/view-publish-status-of-entries-assets-in-publish-queue)

A management token with just read permissions can be used to make all GET requests for the modules mentioned above.

**Note:** Management tokens **cannot** be used for the following modules: [organization](/docs/administration/about-organizations/), stack, user session, and [tokens](/docs/headless-cms/overview-of-tokens/).
