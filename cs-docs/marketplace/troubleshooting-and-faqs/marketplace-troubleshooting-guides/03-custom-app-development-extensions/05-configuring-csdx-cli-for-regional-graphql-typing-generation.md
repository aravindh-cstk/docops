---
title: "Configuring csdx CLI for regional GraphQL typing generation"
description: "Configuring csdx CLI for regional GraphQL typing generation"
url: /marketplace/troubleshooting-and-faqs/marketplace-troubleshooting-guides/03-custom-app-development-extensions/05-configuring-csdx-cli-for-regional-graphql-typing-generation
doc_type: faq
_cms_section_uid: cs6031da6351f15c02
_cms_faq_uid: cs141ef106245c3ef9
---

# Configuring csdx CLI for regional GraphQL typing generation

Using the ts-gen plugin with the GraphQL flag may return an "API not available" error in specific regions like Azure EU. This prevents the generation of TypeScript typings for regional stacks.

**Root Cause**

The Contentstack CLI (csdx) defaults to the North American region unless explicitly configured, causing plugins to fail when communicating with regional endpoints.

**Resolution**

1.  Open a terminal or command prompt where the Contentstack CLI is installed.
2.  Execute the configuration command to set the region to your specific environment: csdx config:set:region AZURE-EU.
3.  Re-run the ts-gen command with the --api-type graphql flag.

After setting the CLI region, execute the ts-gen command again for the regional stack.

If the TypeScript typings are generated without the region availability error, the CLI configuration is correct.
