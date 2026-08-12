---
title: "csdx tsgen GraphQL Type Generation Fails with Empty Logs"
description: "csdx tsgen GraphQL Type Generation Fails with Empty Logs"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/04-typescript-generation-tsgen-plugins/01-csdx-tsgen-graphql-type-generation-fails-with-empty-logs
doc_type: faq
_cms_section_uid: cs7d3ffb2153f29bfe
_cms_faq_uid: cs33980d82fdc8e8ca
---

# csdx tsgen GraphQL Type Generation Fails with Empty Logs

The csdx tsgen command failed to generate GraphQL types, returning a generic "unable to generate GQL types" response.

Executed Code:

csdx tsgen -a

"<delivery\_token\_alias>"

\-o

"contentstack/generated.d.ts"

\--api-type graphql -p

CTS

\--include-system-fields

Response:

unable to generate

GQL

types

Error logs were empty.

**Root Cause**

-   tsgen comes from the **contentstack-cli-tsgen** plugin—make sure it’s installed and up-to-date.
-   Common issues:
    -   Plugin or version mismatch
    -   Wrong alias or stack
    -   Problems with GraphQL/schema
-   For --api-type graphql, **you must use a delivery token** (management tokens don’t work).
-   The error “unable to generate GQL types” usually comes from **@contentstack/types-generator**, which may not provide detailed error logs—empty log files don’t mean a single root cause.
-   Always check these areas if logs are empty:
    -   plugin status
    -   token type
    -   Authentication
    -   Region
    -   Schema setup

**Resolution**

1.  Confirm contentstack-cli-tsgen is installed and current: csdx plugins:install contentstack-cli-tsgen (or update plugins per docs).
2.  Verify the token alias with csdx auth:tokens: for GraphQL generation, use a **delivery** token alias, and ensure **environment** (and **branch**, if applicable) match the stack.
3.  Review GraphQL-related schema and stack configuration.
4.  Retry csdx tsgen after corrections.

After addressing plugin/config/schema issues in the case, tsgen successfully generated the .d.ts file without error.
