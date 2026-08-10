---
title: "TSGen Output Shows _version Instead of Types"
description: "TSGen Output Shows _version Instead of Types"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/04-typescript-generation-tsgen-plugins/02-tsgen-output-shows-version-instead-of-types
doc_type: faq
_cms_section_uid: cs7d3ffb2153f29bfe
_cms_faq_uid: csf54e9e856a9b3e98
---

# TSGen Output Shows _version Instead of Types

While generating TypeScript types, the user may observe incorrect output: the generated types showed the last \_version number (or otherwise looked sparse or wrong) instead of expected property type definitions.

**Root Cause**

**Verified case:** Reinstalling/updating the **contentstack-cli-tsgen** plugin resolved the symptom.

**Other common causes:** csdx tsgen resolves the stack only from the **delivery token alias** (-a / --token-alias); there is no separate stack flag. Generation is delegated to **@contentstack/types-generator** (REST content types by default, or GraphQL when --api-type graphql is used). Any of the following can produce odd, minimal, or metadata-heavy output:

-   **Wrong alias / stack / environment** - alias points at a different stack, environment, or token than intended.
-   **Token type** - REST generation expects a **delivery** token; GraphQL mode **requires** delivery (management tokens are rejected for GraphQL).
-   **Wrong branch** - content types differ per branch; omitting --branch uses the default branch schema.
-   **Region / host mismatch** - CLI login region or CDA host not aligned with where the stack lives.
-   **CLI / plugin / generator version skew** - outdated plugin or CLI vs current @contentstack/types-generator behavior.
-   **Schema / validation** - some content types skipped (partial generation); output can look incomplete.
-   **Invalid generated interface names** - content type UIDs that do not yield valid TypeScript identifiers (mitigate with -p prefix).
-   **REST vs GraphQL** - comparing expectations across modes; GraphQL output shape differs from REST.

**Resolution**

Apply the scenario that matches the customer setup (often more than one check is needed).

1.  **Wrong stack, alias, or environment**
    -   Run csdx auth:tokens and confirm alias, API key, **environment**, and **delivery** token for the intended stack.
    -   Re-add the token if needed, then re-run:csdx tsgen -a "<correct\_delivery\_alias>" -o ./types/generated.d.ts
2.  **Management token instead of delivery**
    
    -   Use a **delivery** token alias for the target stack and environment.
    -   For GraphQL typings:
    
    csdx tsgen -a "<alias>" -o ./types/graphql.d.ts --api-type graphql
    -   Optional namespace: add --namespace "YourNamespace".
3.  **Wrong branch**csdx tsgen -a "<alias>" -o ./types/generated.d.ts --branch "<branch\_uid>"
4.  **Region / stack mismatch**
    -   Confirm stack region in the Contentstack UI matches CLI login context (for example csdx config:get:region or csdx config:get:proxy when relevant; run csdx config --help for other get commands / auth docs for your CLI version).
    -   Re-authenticate for the correct region, then run TSGen again.
5.  **CLI vs plugin vs generator version skew**csdx --version csdx plugins csdx plugins:update contentstack-cli-tsgen
    -   If issues persist: csdx plugins:uninstall contentstack-cli-tsgen then csdx plugins:install contentstack-cli-tsgen.
6.  **Schema / content type issues (partial generation)**
    -   Read CLI output for skipped content types or “partial schema” messaging; fix content model / global field issues in the stack, then re-run.
7.  **Invalid interface / content type UID names**csdx tsgen -a "<alias>" -o ./types/generated.d.ts -p "I"
8.  **REST vs GraphQL**
    -   Default is **REST** (content-type interfaces). Use --api-type graphql only when GraphQL typings are required; do not expect the same file shape as REST.
9.  **Plugin install / corruption (verified fix)**csdx plugins:install contentstack-cli-tsgen
10.  **Re-run and validate**
     -   Re-run the customer’s exact csdx tsgen command (same flags as CI if applicable).
         -   Open the output file and confirm custom fields appear on interfaces.
         -   If \_version is **expected** as a modeled system field, use --include-system-fields (REST) so system fields are included explicitly.

**Verified case:** After installing or updating contentstack-cli-tsgen, the generated types showed correct property type definitions and the customer confirmed resolution.

**General:** After the matching fix above, generated output should reflect the intended stack, environment, and branch; interfaces should include expected custom fields, not only system metadata (unless --include-system-fields was intentionally used).
